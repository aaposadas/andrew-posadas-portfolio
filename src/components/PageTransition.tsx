"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type TransitionType = "fade" | "slide" | "scale" | "slideUp";

interface PageTransitionProps {
  children: ReactNode;
  type?: TransitionType;
}

const transitionVariants: Record<TransitionType, Variants> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  },
  scale: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.05, opacity: 0 },
  },
};

export default function PageTransition({
  children,
  type = "scale",
}: PageTransitionProps) {
  return (
    <motion.div
      variants={transitionVariants[type]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
