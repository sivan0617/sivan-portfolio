import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import type { SiteCopy } from "../content";

interface WorkSectionProps {
  copy: SiteCopy["work"];
}

export const WorkSection = ({ copy }: WorkSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const projectCount = copy.projects.length;
  const panelWidth = 100 / projectCount;
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${100 - panelWidth}%`]);
  const MotionLink = motion.create(Link);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.min(projectCount - 1, Math.floor(latest * projectCount));
    setActiveIndex(nextIndex);
  });

  return (
    <>
      <div id="work" className="px-5 pt-8 pb-20 lg:hidden">
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-[8px] uppercase tracking-[0.34em] text-white/38">{copy.indicator}</span>
          <div className="h-px flex-1 bg-white/8" />
        </div>

        <div className="space-y-8">
          {copy.projects.map((project, index) => (
            <article key={project.slug} className="space-y-4 border-b border-white/8 pb-8 last:border-b-0 last:pb-0">
              <Link to={`/work/${project.slug}`} className="archive-hover-frame group block overflow-hidden rounded-[2px] bg-black os-panel-shadow">
                <div className="relative aspect-[4/5]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className="h-full w-full object-cover transition-[transform,filter] duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035] group-hover:brightness-[1.04]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 font-mono text-[7px] uppercase tracking-[0.34em] text-white/38">
                    {copy.sequenceFrame} // {project.year}
                  </div>
                </div>
              </Link>

              <div className="space-y-4">
                <div className="flex items-center gap-3 font-mono text-[7px] uppercase tracking-[0.32em] text-white/30">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div className="h-px w-6 bg-white/10" />
                  <span>{project.category}</span>
                </div>
                <h3 className="text-[2.5rem] font-serif italic leading-[0.9] tracking-[-0.045em] text-white/92">
                  {project.titleLines.map((line, i) => (
                    <React.Fragment key={line}>
                      {i > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="max-w-[22rem] text-sm leading-[1.8] text-text-primary/52">{project.description}</p>
                <Link to={`/work/${project.slug}`} className="inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.28em] text-white/72 transition-[color,transform] duration-300 hover:translate-x-1 hover:text-accent-blue">
                  {copy.launch}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <section
        ref={containerRef}
        className="relative hidden bg-bg-primary lg:block"
        style={{ height: `${Math.max(projectCount + 1, 4) * 100}vh` }}
      >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="absolute top-12 left-12 z-40 flex items-center gap-6 mix-blend-difference">
          <span className="font-mono text-[8px] tracking-[0.5em] text-white/30 uppercase opacity-60">{copy.indicator}</span>
          <div className="flex gap-3">
            {copy.projects.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  width: activeIndex === i ? 32 : 6,
                  backgroundColor: activeIndex === i ? "var(--color-accent-blue)" : "rgba(255,255,255,0.1)",
                }}
                className="h-0.5 rounded-full transition-all duration-700"
              />
            ))}
          </div>
        </div>

        <motion.div
          style={{ x, width: `${projectCount * 100}%` }}
          ref={scrollRef}
          className="hidden h-full lg:flex"
        >
          {copy.projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={reduceMotion ? undefined : { opacity: 0, y: 26 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.78, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full items-center justify-center p-8 md:p-12 lg:p-20"
              style={{ width: `${panelWidth}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif font-black text-white/[0.015] select-none pointer-events-none tracking-tighter italic">
                {index + 1}
              </div>

              <div className="relative z-10 mx-auto grid w-full max-w-[100rem] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-20">
                <MotionLink
                  to={`/work/${project.slug}`}
                  initial={reduceMotion ? undefined : { opacity: 0, scale: 1.03, x: 72 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.98, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative block aspect-[16/8] overflow-hidden rounded-[2px] bg-black os-panel-shadow lg:col-span-8"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className="h-full w-full object-cover transition-[transform,filter] duration-[1.8s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045] group-hover:brightness-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/12 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.14)] transition-shadow duration-300 group-hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.28)]" />

                  <div className="pointer-events-none absolute inset-4 border border-white/[0.03] transition-all duration-300 group-hover:inset-5 group-hover:border-white/[0.08]" />
                  <div className="absolute bottom-8 left-8 z-20 font-mono text-[6px] uppercase tracking-[0.5em] text-white/24 transition-colors duration-300 group-hover:text-white/40 md:bottom-10 md:left-10">
                    {copy.sequenceFrame} // {project.year} // {copy.streamId}_{index + 44}
                  </div>
                </MotionLink>

                <motion.div
                  initial={reduceMotion ? undefined : { opacity: 0, y: 22 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.82, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-9 lg:col-span-4"
                >
                  <div className="space-y-5">
                    <span className="inline-block rounded-full border border-accent-blue/20 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.52em] text-accent-blue/80">
                      {project.category}
                    </span>
                    <h3 className="text-5xl font-serif italic leading-[0.86] tracking-[-0.045em] text-white/92 md:text-7xl xl:text-8xl">
                      {project.titleLines.map((line, i) => (
                        <React.Fragment key={line}>
                          {i > 0 && <br />}
                          {line}
                        </React.Fragment>
                      ))}
                    </h3>
                  </div>

                  <p className="max-w-sm text-base leading-[1.85] text-text-primary/46 md:text-lg">
                    {project.description}
                  </p>

                  <Link to={`/work/${project.slug}`} className="group flex items-center gap-6 cursor-pointer">
                    <motion.div
                      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition-[border-color,background-color,transform,box-shadow] duration-300 group-hover:border-accent-blue/50 group-hover:bg-accent-blue/6 group-hover:shadow-[0_0_24px_rgba(59,130,246,0.14)] md:h-16 md:w-16"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-accent-blue transition-transform duration-300 group-hover:scale-[1.7]" />
                    </motion.div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.38em] text-white/72 transition-[color,letter-spacing,transform] duration-300 group-hover:translate-x-1 group-hover:tracking-[0.42em] group-hover:text-accent-blue">{copy.launch}</span>
                  </Link>
                </motion.div>
              </div>

              <div className="absolute bottom-8 left-8 flex items-center gap-4 font-mono text-[6px] uppercase tracking-[0.7em] text-white/11 md:bottom-10 md:left-10">
                <div className="h-[1px] w-8 bg-white/10" />
                {copy.sceneStage}_0{index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-bg-primary to-transparent z-20" />
      </section>
    </>
  );
};
