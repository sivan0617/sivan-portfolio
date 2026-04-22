import { motion, useScroll, useTransform, useSpring, useMotionValue, useReducedMotion, type MotionValue } from "motion/react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import type { SiteCopy } from "../content";

interface HeroProps {
  copy: SiteCopy["hero"];
  projects: SiteCopy["work"]["projects"];
}

interface PaperPrintProps {
  project: SiteCopy["work"]["projects"][number];
  progress: MotionValue<number>;
  index: number;
  reduceMotion: boolean;
}

const folderScene = `${import.meta.env.BASE_URL}archive/folder-scene.jpeg`;

const paperSlots = [
  "top-[13.5%] left-[44%] w-[18%] rotate-[-12deg] md:top-[9%] md:left-[54.7%] md:w-[12.4%] md:rotate-[-10deg]",
  "top-[29%] left-[50%] w-[17%] rotate-[10deg] md:top-[23.5%] md:left-[59.4%] md:w-[11.6%] md:rotate-[10deg]",
  "top-[42.5%] left-[50.5%] w-[18.6%] rotate-[-7deg] md:top-[39.8%] md:left-[61.4%] md:w-[13.2%] md:rotate-[-7deg]",
  "top-[63%] left-[54%] w-[18.4%] rotate-[12deg] md:top-[58.8%] md:left-[66%] md:w-[12.6%] md:rotate-[11deg]",
] as const;

const PaperPrint = ({ project, progress, index, reduceMotion }: PaperPrintProps) => {
  const start = 0.5 + index * 0.045;
  const printOpacity = useTransform(progress, [start, start + 0.12], [0, 0.96]);
  const printY = useTransform(progress, [start, start + 0.12], [reduceMotion ? 0 : 28, 0]);
  const printScale = useTransform(progress, [start, start + 0.12], [reduceMotion ? 1 : 0.92, 1]);

  return (
    <motion.div
      style={{ opacity: printOpacity, y: printY, scale: printScale }}
      className={`absolute z-20 aspect-[3/4] ${paperSlots[index] ?? paperSlots[paperSlots.length - 1]}`}
    >
      <Link to={`/work/${project.slug}`} className="archive-paper-link block h-full w-full">
        <div className="archive-paper-print absolute inset-[3.5%] overflow-hidden rounded-[0.08rem] md:inset-[3.2%]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.12))]" />
        </div>
      </Link>
    </motion.div>
  );
};

export const Hero = ({ copy, projects }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const featuredProjects = projects.slice(0, 4);
  const introStart = 0.08;
  const introEnd = 0.985;
  const heroVideo = `${import.meta.env.BASE_URL}hero/crt-computer-screen.mp4`;
  const heroPoster = `${import.meta.env.BASE_URL}hero/crt-computer-screen-poster.png`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const introProgress = useMotionValue(reduceMotion ? 1 : 0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncVideoToProgress = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;
      const normalizedProgress = introStart + Math.min(Math.max(introProgress.get(), 0), 1) * (introEnd - introStart);
      const targetTime = normalizedProgress * video.duration;

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        if (Math.abs(video.currentTime - targetTime) > 0.033) {
          video.currentTime = targetTime;
        }
      });
    };

    const handleLoadedMetadata = () => {
      video.pause();
      syncVideoToProgress();
    };

    video.pause();
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    const unsubscribe = introProgress.on("change", syncVideoToProgress);

    return () => {
      unsubscribe();
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [introProgress]);

  useEffect(() => {
    if (reduceMotion) return;

    let touchStartY = 0;

    const stepIntro = (delta: number) => {
      const current = introProgress.get();
      const next = Math.min(1, Math.max(0, current + delta / 1800));
      introProgress.set(next);
    };

    const shouldCaptureDelta = (delta: number) => {
      const atTop = window.scrollY <= 4;
      const current = introProgress.get();
      if (!atTop) return false;
      if (delta > 0 && current < 0.999) return true;
      if (delta < 0 && current > 0.001) return true;
      return false;
    };

    const handleWheel = (event: WheelEvent) => {
      const delta = Math.sign(event.deltaY) * Math.min(Math.abs(event.deltaY), 160);
      if (shouldCaptureDelta(delta)) {
        event.preventDefault();
        stepIntro(delta);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const forwardKeys = ["ArrowDown", "PageDown", " ", "Enter"];
      const backwardKeys = ["ArrowUp", "PageUp"];

      if (forwardKeys.includes(event.key)) {
        if (shouldCaptureDelta(140)) {
          event.preventDefault();
          stepIntro(140);
        }
      } else if (backwardKeys.includes(event.key)) {
        if (shouldCaptureDelta(-140)) {
          event.preventDefault();
          stepIntro(-140);
        }
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY ?? touchStartY;
      const delta = touchStartY - currentY;
      touchStartY = currentY;
      if (shouldCaptureDelta(delta)) {
        event.preventDefault();
        stepIntro(delta);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [introProgress, reduceMotion]);

  const heroFloatY = useTransform(scrollYProgress, [0, 0.18], [0, -24]);
  const contentY = useTransform(scrollYProgress, [0, 0.24], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.14, 0.24], [1, 1, 0]);
  const monitorScale = useTransform(scrollYProgress, [0.12, 0.26, 0.42], [1, 1.1, reduceMotion ? 1.45 : 3.55]);
  const monitorX = useTransform(scrollYProgress, [0.12, 0.42], ["0%", reduceMotion ? "-8%" : "-25%"]);
  const monitorY = useTransform(scrollYProgress, [0.12, 0.42], ["0%", reduceMotion ? "-2%" : "-12%"]);
  const monitorOpacity = useTransform(scrollYProgress, [0.12, 0.42, 0.5], [1, 1, 0]);
  const ringOpacity = useTransform(scrollYProgress, [0, 0.24], [1, 0]);
  const blackOpacity = useTransform(scrollYProgress, [0.34, 0.46, 0.56], [0, 1, 0]);
  const folderOpacity = useTransform(scrollYProgress, [0.48, 0.62], [0, 1]);
  const folderScale = useTransform(scrollYProgress, [0.48, 0.75], [reduceMotion ? 1.02 : 1.12, 1]);
  const folderY = useTransform(scrollYProgress, [0.48, 0.75], [reduceMotion ? 0 : 34, 0]);
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.14,
        delayChildren: reduceMotion ? 0 : 0.18,
      },
    },
  };
  const textReveal = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-[240svh] bg-black md:h-[280svh]"
    >
      <div className="sticky top-0 flex h-svh items-center overflow-hidden pt-24 pb-14 md:pt-32 md:pb-20">
        <motion.div
          style={{ y: heroFloatY, rotateX, rotateY }}
          className="perspective-1000 absolute inset-0 z-0"
        >
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.03, y: 22 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full"
          >
            <motion.div
              style={{ opacity: monitorOpacity, scale: monitorScale, x: monitorX, y: monitorY }}
              className="hero-video-stage relative h-full w-full overflow-hidden will-change-transform"
            >
              <div className="absolute inset-0 bg-accent-blue/10 blur-[120px] opacity-60" />
              <div className="relative h-full w-full overflow-hidden">
                <div className="absolute inset-y-0 right-[-6%] w-[74%] overflow-hidden md:right-[-8%] md:w-[74%] lg:right-[-10%] lg:w-[74%] xl:right-[-11%] xl:w-[74%]">
                  <video
                    ref={videoRef}
                    src={heroVideo}
                    poster={heroPoster}
                    muted
                    playsInline
                    preload="auto"
                    className="hero-crt-video absolute inset-0 h-full w-full object-cover object-[76%_center] md:object-[80%_center] lg:object-[83%_center] xl:object-[85%_center]"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(74,144,226,0.14),transparent_28%),linear-gradient(90deg,rgba(0,0,0,0.84)_0%,rgba(0,0,0,0.56)_32%,rgba(0,0,0,0.18)_57%,rgba(0,0,0,0.64)_100%)]" />
                </div>
                <div className="absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-black via-black/60 to-transparent px-4 py-4 md:px-7 md:py-7">
                  <div className="space-y-2 md:space-y-2.5">
                    <div className="font-mono text-[6px] tracking-[0.34em] text-accent-blue/65 uppercase md:text-[8px] md:tracking-[0.48em]">{copy.stable}</div>
                    <div className="flex gap-1">
                      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-1 w-4 rounded-full bg-accent-blue/20" />
                      ))}
                    </div>
                    <div className="font-mono text-[6px] tracking-[0.24em] text-white/32 uppercase md:text-[7px] md:tracking-[0.34em]">{copy.hardwareId}</div>
                  </div>
                </div>
              </div>
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
                className="absolute inset-0 h-full w-full object-cover object-[66%_50%] md:object-center"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_56%,transparent_0%,rgba(0,0,0,0.12)_35%,rgba(0,0,0,0.82)_92%,#000_100%)]" />
              {featuredProjects.map((project, index) => (
                <PaperPrint
                  key={project.slug}
                  project={project}
                  progress={scrollYProgress}
                  index={index}
                  reduceMotion={!!reduceMotion}
                />
              ))}
            </motion.div>

            <motion.div style={{ opacity: ringOpacity }} className="absolute inset-0">
              <div className="absolute top-1/2 right-[8%] h-[70vw] w-[70vw] -translate-y-1/2 rounded-full border border-white/[0.02] pointer-events-none md:right-[6%] md:h-[44rem] md:w-[44rem]" />
              <div className="absolute top-1/2 right-[8%] h-[52vw] w-[52vw] -translate-y-1/2 rounded-full border border-white/[0.04] pointer-events-none md:right-[6%] md:h-[32rem] md:w-[32rem]" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto flex w-full max-w-7xl items-start px-5 md:px-6"
        >
          <motion.div style={{ y: contentY, opacity: contentOpacity }} className="z-10 pt-16 md:pt-20 lg:pt-0 lg:-mt-44 xl:-mt-48">
            <motion.div
              variants={containerVariants}
              className="max-w-[40rem] space-y-5 md:space-y-8 lg:max-w-[42rem]"
            >
              <motion.span
                variants={textReveal}
                className="block font-mono text-[8px] uppercase tracking-[0.36em] text-accent-violet/80 md:text-[10px] md:tracking-[0.46em] lg:pl-2"
              >
                {copy.eyebrow}
              </motion.span>
              <motion.h1
                variants={textReveal}
                className="text-pretty max-w-[8.2ch] text-[3.1rem] font-serif font-light italic leading-[0.88] tracking-[-0.05em] sm:text-[3.7rem] md:max-w-none md:text-7xl lg:max-w-[8.8ch] lg:text-[6.2rem] xl:text-[6.7rem]"
              >
                {copy.titleStart}
                <br />
                <span className="text-accent-blue not-italic">{copy.titleAccent}</span>
                {copy.titleEnd}
                <br />
                {copy.titleLast}
              </motion.h1>
              <motion.div
                variants={textReveal}
                className="flex max-w-[18rem] items-start gap-4 pt-1 md:max-w-md md:gap-5"
              >
                <div className="mt-2 h-px w-8 shrink-0 bg-white/18 md:w-12" />
                <p className="text-pretty font-mono text-[8px] uppercase tracking-[0.24em] text-text-primary/38 md:text-[10px] md:tracking-[0.34em]">
                  {copy.scrollHint}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 z-20 h-1/4 w-full bg-gradient-to-t from-bg-primary to-transparent" />
      </div>
    </section>
  );
};
