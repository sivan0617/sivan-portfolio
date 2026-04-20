import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";

interface RevealBlockProps extends PropsWithChildren {
  className?: string;
  as?: "div" | "section" | "article";
}

export const RevealBlock = ({ children, className = "", as = "div" }: RevealBlockProps) => {
  const reduceMotion = useReducedMotion();
  const motionProps = {
    initial: reduceMotion ? undefined : { opacity: 0, y: 28 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    className,
  };

  if (as === "section") {
    return <motion.section {...motionProps}>{children}</motion.section>;
  }

  if (as === "article") {
    return <motion.article {...motionProps}>{children}</motion.article>;
  }

  return <motion.div {...motionProps}>{children}</motion.div>;
};
