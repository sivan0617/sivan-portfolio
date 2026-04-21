import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import type { SiteCopy } from "../content";

interface BootScreenProps {
  copy: SiteCopy["boot"];
  onComplete: () => void;
}

export const BootScreen: React.FC<BootScreenProps> = ({ copy, onComplete }) => {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<string>(copy.initialStatus);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setStatus(copy.initialStatus);
    setProgress(0);
    setIsReady(false);

    let currentFrame = 0;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }

        const frameIndex = Math.floor((prev / 100) * copy.frames.length);
        if (frameIndex !== currentFrame && copy.frames[frameIndex]) {
          currentFrame = frameIndex;
          setStatus(copy.frames[frameIndex]);
        }

        return prev + Math.random() * 8;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [copy.frames, copy.initialStatus]);

  const totalBlocks = 20;
  const filledBlocks = Math.floor((progress / 100) * totalBlocks);

  return (
    <motion.div
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02, filter: "blur(10px)" }}
      transition={{ duration: reduceMotion ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary p-5 md:p-6"
      onClick={() => isReady && onComplete()}
    >
      <div className="w-full max-w-lg space-y-8 font-mono md:space-y-12">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 18 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.78, ease: [0.22, 1, 0.36, 1] }}
          className="group relative flex aspect-[4/3] w-full flex-col items-center justify-center overflow-hidden rounded-[28px] border border-accent-blue/40 bg-accent-blue/10 p-8 os-panel-shadow md:rounded-[40px] md:p-12"
        >
          <div className="absolute inset-5 rounded-[18px] border border-accent-blue/20 md:inset-8 md:rounded-[25px]" />
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scaleX: 0.92 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent md:inset-x-10 md:top-10"
          />

          <div className="relative z-10 space-y-2 text-center">
            <motion.h1
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.64, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl font-serif italic tracking-[-0.05em] chromatic-text md:text-8xl"
            >
              {copy.mark}
            </motion.h1>
            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="text-[8px] tracking-[0.28em] text-accent-blue/60 uppercase md:text-[9px] md:tracking-[0.46em]"
            >
              {copy.protocol}
            </motion.div>
          </div>
        </motion.div>

        <div className="space-y-5 px-1 md:space-y-6 md:px-4">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <div className="text-[8px] uppercase tracking-[0.24em] text-accent-blue/60 md:text-[10px] md:tracking-[0.34em]">{copy.log}</div>
              <div className="text-[13px] tracking-tight text-text-primary/90 md:text-sm">{status}</div>
            </div>
            <div className="text-lg font-bold text-accent-blue md:text-xl">{Math.floor(progress)}%</div>
          </div>

          <div className="flex gap-1.5 h-3">
            {Array.from({ length: totalBlocks }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                animate={{
                  backgroundColor: i < filledBlocks ? "var(--color-accent-blue)" : "rgba(255,255,255,0.05)",
                  boxShadow: i < filledBlocks ? "0 0 10px var(--color-accent-blue)" : "none",
                }}
                className="flex-1 rounded-[1px]"
              />
            ))}
          </div>

          <div className="flex h-4 items-center justify-center pt-5 md:pt-8">
            <AnimatePresence>
              {isReady && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="flex cursor-pointer items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-accent-blue md:gap-4 md:text-[11px] md:tracking-[0.36em]"
                >
                  <div className="h-[1px] w-8 bg-accent-blue/30 md:w-10" />
                  {copy.ready}
                  <div className="h-[1px] w-8 bg-accent-blue/30 md:w-10" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute top-12 left-12 opacity-10 text-[7px] space-y-1 uppercase tracking-[0.2em] hidden md:block">
        <div>{copy.rootDirectory}: {copy.rootPath}</div>
        <div>{copy.user}: GUEST_ID_{Math.floor(Math.random() * 9000 + 1000)}</div>
        <div>{copy.module}: {copy.bootStage}</div>
      </div>
    </motion.div>
  );
};
