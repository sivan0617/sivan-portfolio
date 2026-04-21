import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";

interface RevealBlockProps extends PropsWithChildren {
  className?: string;
  as?: "div" | "section" | "article";
  delay?: number;
  amount?: number;
  offset?: number;
  scale?: number;
}

export const RevealBlock = ({
  children,
  className = "",
  as = "div",
  delay = 0,
  amount = 0.2,
  offset = 22,
  scale = 1,
}: RevealBlockProps) => {
  const reduceMotion = useReducedMotion();
  const motionProps = {
    initial: reduceMotion ? undefined : { opacity: 0, y: offset, scale },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount },
    transition: { duration: 0.82, delay, ease: [0.22, 1, 0.36, 1] as const },
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
