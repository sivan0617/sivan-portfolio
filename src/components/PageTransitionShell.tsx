import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";

interface PageTransitionShellProps extends PropsWithChildren {
  className?: string;
}

export const PageTransitionShell = ({ children, className = "" }: PageTransitionShellProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.main
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, filter: "blur(6px)" }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -20, filter: "blur(6px)" }}
      transition={{ duration: reduceMotion ? 0.18 : 0.44, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.main>
  );
};
