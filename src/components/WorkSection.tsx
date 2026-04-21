import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import type { SiteCopy } from "../content";

interface WorkSectionProps {
  copy: SiteCopy["work"];
}

export const WorkSection = ({ copy }: WorkSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
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
    <section
      ref={containerRef}
      id="work"
      className="relative bg-bg-primary"
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
          className="flex h-full"
        >
          {copy.projects.map((project, index) => (
            <div
              key={project.slug}
              className="h-full flex items-center justify-center p-8 md:p-20 relative"
              style={{ width: `${panelWidth}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif font-black text-white/[0.015] select-none pointer-events-none tracking-tighter italic">
                {index + 1}
              </div>

              <div className="max-w-[100rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">
                <MotionLink
                  to={`/work/${project.slug}`}
                  initial={{ opacity: 0, scale: 0.95, x: 100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
                  className="lg:col-span-8 relative aspect-[16/8] overflow-hidden rounded-[2px] os-panel-shadow group bg-black block"
                >
                  <div className="absolute inset-0 screen-glare opacity-20 z-10" />

                  <img
                    src={project.image}
                    alt={project.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className="w-full h-full object-cover brightness-[0.82] saturate-[1.08] contrast-[1.04] group-hover:scale-105 group-hover:brightness-[0.95] group-hover:saturate-[1.16] transition-all duration-[4s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/12 via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.14)]" />

                  <div className="absolute inset-4 border border-white/[0.03] pointer-events-none" />
                  <div className="absolute bottom-10 left-10 font-mono text-[6px] tracking-[0.5em] text-white/20 uppercase z-20">
                    {copy.sequenceFrame} // {project.year} // {copy.streamId}_{index + 44}
                  </div>
                </MotionLink>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  className="lg:col-span-4 space-y-12"
                >
                  <div className="space-y-6">
                    <span className="font-mono text-[9px] tracking-[0.6em] text-accent-blue/80 uppercase font-bold px-3 py-1 border border-accent-blue/20 rounded-full inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-6xl md:text-8xl font-serif italic leading-[0.85] tracking-tighter text-white/90">
                      {project.titleLines.map((line, i) => (
                        <React.Fragment key={line}>
                          {i > 0 && <br />}
                          {line}
                        </React.Fragment>
                      ))}
                    </h3>
                  </div>

                  <p className="text-lg text-text-primary/40 leading-relaxed font-light font-sans max-w-sm">
                    {project.description}
                  </p>

                  <Link to={`/work/${project.slug}`} className="flex items-center gap-8 group cursor-pointer">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent-blue transition-colors duration-500"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                    </motion.div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.4em] group-hover:text-accent-blue transition-colors">{copy.launch}</span>
                  </Link>
                </motion.div>
              </div>

              <div className="absolute left-10 bottom-10 font-mono text-[6px] text-white/10 uppercase tracking-[0.8em] flex items-center gap-4">
                <div className="w-8 h-[1px] bg-white/10" />
                {copy.sceneStage}_0{index + 1}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-bg-primary to-transparent z-20" />
    </section>
  );
};
