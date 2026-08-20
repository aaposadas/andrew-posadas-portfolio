"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

type RevealGroupProps = RevealProps & {
  as?: "div" | "dl" | "ol" | "ul";
};

type RevealItemProps = RevealProps & {
  as?: "div" | "li";
};

const revealTransition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function Reveal({ children, className }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      transition={revealTransition}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  as = "div",
}: RevealGroupProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionElement =
    as === "dl"
      ? motion.dl
      : as === "ol"
        ? motion.ol
        : as === "ul"
          ? motion.ul
          : motion.div;

  return (
    <MotionElement
      className={className}
      initial={prefersReducedMotion ? false : "hidden"}
      transition={{ staggerChildren: 0.08 }}
      viewport={{ once: true, amount: 0.15 }}
      whileInView="visible"
    >
      {children}
    </MotionElement>
  );
}

export function RevealItem({ children, className, as = "div" }: RevealItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionElement = as === "li" ? motion.li : motion.div;

  return (
    <MotionElement
      className={className}
      variants={
        prefersReducedMotion
          ? undefined
          : {
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: revealTransition },
            }
      }
    >
      {children}
    </MotionElement>
  );
}
