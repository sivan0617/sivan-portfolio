import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { useRef, useEffect } from "react";
import type { SiteCopy } from "../content";

interface HeroProps {
  copy: SiteCopy["hero"];
}

export const Hero = ({ copy }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
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

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div style={{ y: y1, opacity }} className="z-10 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="font-mono text-[11px] tracking-[0.5em] text-accent-violet mb-8 block uppercase opacity-80">
              {copy.eyebrow}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.9] tracking-tighter mb-10 italic">
              {copy.titleStart}
              <br />
              <span className="text-accent-blue not-italic">{copy.titleAccent}</span>
              {copy.titleEnd}
              <br />
              {copy.titleLast}
            </h1>
            <div className="flex items-center gap-6">
              <div className="w-10 h-[1px] bg-white/20" />
              <p className="font-mono text-[9px] tracking-[0.4em] text-text-primary/30 uppercase">
                {copy.scrollHint}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: y2, scale, rotateX, rotateY }}
          className="relative lg:col-span-5 flex justify-center lg:justify-end perspective-1000"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-full"
          >
            <motion.div
              animate={{
                y: [0, -14, 0],
                rotateX: [-1.5, 1.5, -1.5],
                rotateY: [-2, 2, -2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hero-video-stage relative ml-auto aspect-[4/5] w-[min(35rem,90vw)] md:w-[min(40rem,84vw)] lg:w-[min(44rem,38vw)] overflow-hidden"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-accent-blue/8 blur-[90px] opacity-55" />
              <div className="relative h-full w-full overflow-hidden rounded-[1.25rem]">
                <video
                  src={heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="hero-crt-video absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-black via-black/60 to-transparent px-6 py-6">
                  <div className="space-y-2">
                    <div className="font-mono text-[8px] tracking-[0.48em] text-accent-blue/60 uppercase">{copy.stable}</div>
                    <div className="flex gap-1">
                      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-1 w-4 rounded-full bg-accent-blue/20" />
                      ))}
                    </div>
                    <div className="font-mono text-[7px] tracking-[0.34em] text-white/28 uppercase">{copy.hardwareId}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/[0.02] rounded-full pointer-events-none -z-20 scale-[1.2]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/[0.04] rounded-full pointer-events-none -z-20" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-bg-primary to-transparent z-20" />
    </section>
  );
};