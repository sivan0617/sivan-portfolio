import { motion, useScroll, useTransform, useSpring, useMotionValue, useReducedMotion } from "motion/react";
import { useRef, useEffect } from "react";
import type { SiteCopy } from "../content";

interface HeroProps {
  copy: SiteCopy["hero"];
}

export const Hero = ({ copy }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const heroVideo = `${import.meta.env.BASE_URL}hero/crt-computer-screen.mp4`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
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
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-14 md:pt-32 md:pb-20"
    >
      <motion.div
        style={{ y: y2, scale, rotateX, rotateY }}
        className="perspective-1000 absolute inset-0 z-0"
      >
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.03, y: 22 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <motion.div
            animate={reduceMotion ? undefined : {
              y: [0, -10, 0],
              rotateX: [-1.2, 1.2, -1.2],
              rotateY: [-1.6, 1.6, -1.6],
            }}
            transition={reduceMotion ? undefined : {
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hero-video-stage relative h-full w-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-accent-blue/10 blur-[120px] opacity-60" />
            <div className="relative h-full w-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-[70%] translate-x-[38%] overflow-hidden md:w-[70%] md:translate-x-[38%] lg:w-[70%] lg:translate-x-[38%] xl:w-[70%] xl:translate-x-[38%]">
                <video
                  src={heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="hero-crt-video absolute inset-0 h-full w-full object-cover object-[84%_center] md:object-[86%_center] lg:object-[88%_center] xl:object-[90%_center]"
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
        </motion.div>

        <div className="absolute top-1/2 right-[8%] h-[70vw] w-[70vw] -translate-y-1/2 rounded-full border border-white/[0.02] pointer-events-none md:right-[6%] md:h-[44rem] md:w-[44rem]" />
        <div className="absolute top-1/2 right-[8%] h-[52vw] w-[52vw] -translate-y-1/2 rounded-full border border-white/[0.04] pointer-events-none md:right-[6%] md:h-[32rem] md:w-[32rem]" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-7xl items-start px-5 md:px-6"
      >
        <motion.div style={{ y: y1, opacity }} className="z-10 pt-16 md:pt-20 lg:pt-0 lg:-mt-44 xl:-mt-48">
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

      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-bg-primary to-transparent z-20" />
    </section>
  );
};
