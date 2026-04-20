import { motion } from "motion/react";

export const Effects = () => {
  return (
    <>
      <div className="grain-effect" />
      <div className="scanline-effect" />
      <div className="vignette" />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: ["-10%", "10%"],
            y: ["-5%", "5%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute -inset-[20%] opacity-20 blur-[100px]"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
          }}
        />
        <motion.div
          animate={{
            x: ["10%", "-10%"],
            y: ["5%", "-5%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute -inset-[20%] opacity-15 blur-[120px]"
          style={{
            background: "radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
          }}
        />
      </div>
    </>
  );
};
