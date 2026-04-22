import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import type { SiteCopy } from "../content";

interface ArchiveTransitionProps {
  projects: SiteCopy["work"]["projects"];
}

interface PaperCardProps {
  project: SiteCopy["work"]["projects"][number];
  progress: MotionValue<number>;
  index: number;
  reduceMotion: boolean;
}

const folderScene = `${import.meta.env.BASE_URL}archive/folder-scene.jpeg`;
const heroPoster = `${import.meta.env.BASE_URL}hero/crt-computer-screen-poster.png`;

const paperSlots = [
  "top-[11%] left-[50%] w-[21%] rotate-[-11deg] md:top-[8%] md:left-[56%] md:w-[13.5%] md:rotate-[-10deg]",
  "top-[26%] left-[56%] w-[20%] rotate-[9deg] md:top-[22%] md:left-[60.5%] md:w-[13%] md:rotate-[10deg]",
  "top-[41%] left-[57%] w-[21%] rotate-[-7deg] md:top-[39%] md:left-[62%] md:w-[14.5%] md:rotate-[-7deg]",
  "top-[59%] left-[60%] w-[21%] rotate-[11deg] md:top-[57%] md:left-[66.3%] md:w-[14.5%] md:rotate-[10deg]",
] as const;

const PaperCard = ({ project, progress, index, reduceMotion }: PaperCardProps) => {
  const start = 0.42 + index * 0.06;
  const cardOpacity = useTransform(progress, [start, start + 0.12], [0, 1]);
  const cardY = useTransform(progress, [start, start + 0.12], [reduceMotion ? 0 : 42, 0]);
  const cardScale = useTransform(progress, [start, start + 0.12], [reduceMotion ? 1 : 0.88, 1]);

  return (
    <motion.div
      style={{ opacity: cardOpacity, y: cardY, scale: cardScale }}
      className={`absolute z-20 aspect-[3/4] ${paperSlots[index] ?? paperSlots[paperSlots.length - 1]}`}
    >
      <Link
        to={`/work/${project.slug}`}
        className="archive-paper-card group flex h-full w-full flex-col overflow-hidden rounded-[0.45rem] bg-white/92 p-[0.38rem] shadow-[0_24px_70px_-32px_rgba(0,0,0,0.9)] backdrop-blur-sm md:rounded-[0.55rem] md:p-[0.45rem]"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[0.22rem] bg-black">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-[var(--ease-archive)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.56))]" />
          <div className="absolute inset-x-0 bottom-0 space-y-1.5 p-2.5 md:p-3">
            <p className="font-mono text-[7px] uppercase tracking-[0.24em] text-white/55 md:text-[8px] md:tracking-[0.3em]">
              {project.year}
            </p>
            <p className="line-clamp-2 font-serif text-[0.7rem] leading-[1.02] text-white md:text-[0.82rem]">
              {project.title}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const ArchiveTransition = ({ projects }: ArchiveTransitionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const featuredProjects = projects.slice(0, 4);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.2 });

  const monitorScale = useTransform(progress, [0, 0.18], [1, reduceMotion ? 1.3 : 2.8]);
  const monitorX = useTransform(progress, [0, 0.18], ["0%", reduceMotion ? "-6%" : "-18%"]);
  const monitorY = useTransform(progress, [0, 0.18], ["0%", reduceMotion ? "-2%" : "-8%"]);
  const monitorOpacity = useTransform(progress, [0, 0.18, 0.28], [1, 1, 0]);

  const blackOpacity = useTransform(progress, [0.14, 0.22, 0.32], [0, 1, 0]);
  const folderOpacity = useTransform(progress, [0.24, 0.38], [0, 1]);
  const folderScale = useTransform(progress, [0.24, 0.6], [reduceMotion ? 1 : 1.08, 1]);
  const folderY = useTransform(progress, [0.24, 0.6], [reduceMotion ? 0 : 48, 0]);
  const labelOpacity = useTransform(progress, [0.38, 0.5], [0, 1]);

  return (
    <section
      ref={sectionRef}
      aria-label="Archive transition"
      className="relative h-[240svh] bg-black md:h-[300svh]"
    >
      <div className="sticky top-0 h-svh overflow-hidden bg-black">
        <motion.div
          style={{ opacity: monitorOpacity, scale: monitorScale, x: monitorX, y: monitorY }}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src={heroPoster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[80%_50%] md:object-[84%_48%]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_43%,transparent_0%,rgba(0,0,0,0.16)_28%,rgba(0,0,0,0.92)_76%,#000_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.6)_24%,rgba(0,0,0,0)_46%,rgba(0,0,0,0.88)_100%)]" />
        </motion.div>

        <motion.div
          style={{ opacity: blackOpacity }}
          className="absolute inset-0 bg-black"
        />

        <motion.div
          style={{ opacity: folderOpacity, scale: folderScale, y: folderY }}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src={folderScene}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[72%_45%] md:object-[50%_45%]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_63%_56%,transparent_0%,rgba(0,0,0,0.12)_34%,rgba(0,0,0,0.78)_88%,#000_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.58)_25%,rgba(0,0,0,0.08)_52%,rgba(0,0,0,0.78)_100%)]" />

          <motion.div
            style={{ opacity: labelOpacity }}
            className="absolute top-8 left-5 right-5 z-20 flex items-start justify-between md:top-12 md:left-10 md:right-10"
          >
            <div className="space-y-2">
              <p className="font-mono text-[9px] uppercase tracking-[0.36em] text-white/38 md:text-[10px] md:tracking-[0.48em]">
                ARCHIVE TRANSFER / SCREEN DIVE
              </p>
              <p className="font-serif text-lg text-white/78 md:text-2xl">
                影像穿过屏幕，作品进入纸面。
              </p>
            </div>
            <p className="hidden font-mono text-[9px] uppercase tracking-[0.3em] text-white/26 md:block">
              CASE FILES / 04
            </p>
          </motion.div>

          {featuredProjects.map((project, index) => (
            <PaperCard
              key={project.slug}
              project={project}
              progress={progress}
              index={index}
              reduceMotion={!!reduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
