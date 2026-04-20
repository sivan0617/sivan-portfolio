import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { SiteCopy } from "../content";

interface BootScreenProps {
  copy: SiteCopy["boot"];
  onComplete: () => void;
}

export const BootScreen: React.FC<BootScreenProps> = ({ copy, onComplete }) => {
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
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-bg-primary flex items-center justify-center p-6"
      onClick={() => isReady && onComplete()}
    >
      <div className="w-full max-w-lg space-y-12 font-mono">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-[4/3] w-full rounded-[40px] border border-accent-blue/40 bg-accent-blue/10 os-panel-shadow flex flex-col items-center justify-center p-12 overflow-hidden group"
        >
          <div className="absolute inset-0 screen-glare opacity-50 group-hover:opacity-70 transition-opacity duration-1000" />
          <div className="absolute inset-8 rounded-[25px] border border-accent-blue/20" />

          <div className="relative z-10 space-y-2 text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-6xl md:text-8xl font-serif tracking-tighter chromatic-text italic"
            >
              {copy.mark}
            </motion.h1>
            <div className="text-[9px] tracking-[0.5em] text-accent-blue/60 uppercase">{copy.protocol}</div>
          </div>
        </motion.div>

        <div className="space-y-6 px-4">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <div className="text-[10px] text-accent-blue/60 uppercase tracking-widest">{copy.log}</div>
              <div className="text-sm tracking-tight text-text-primary/90">{status}</div>
            </div>
            <div className="text-xl font-bold text-accent-blue">{Math.floor(progress)}%</div>
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

          <div className="h-4 flex items-center justify-center pt-8">
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
                  className="text-[11px] tracking-[0.4em] text-accent-blue uppercase cursor-pointer flex items-center gap-4"
                >
                  <div className="w-10 h-[1px] bg-accent-blue/30" />
                  {copy.ready}
                  <div className="w-10 h-[1px] bg-accent-blue/30" />
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
