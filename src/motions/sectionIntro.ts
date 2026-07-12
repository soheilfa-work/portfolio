import type { Transition, Variants } from "motion/react";

/**
 * Global section intro animation.
 * Edit these values to change the intro for every section.
 */
export const sectionIntroTransition: Transition = {
  duration: 0.7,
  ease: "easeOut",
  delay: 0.1,
};

export const sectionIntroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: sectionIntroTransition,
  },
};

/** Triggers when the section enters the viewport */
export const sectionIntroViewport = {
  // once: true,
  amount: 0.2,
} as const;
