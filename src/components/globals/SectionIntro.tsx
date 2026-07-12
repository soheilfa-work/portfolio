import { motion } from "motion/react";
import {
  sectionIntroVariants,
  sectionIntroViewport,
} from "../../motions/sectionIntro";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export const SectionIntro = ({ children, className, id }: Props) => {
  return (
    <motion.div
      id={id}
      className={className}
      variants={sectionIntroVariants}
      initial="hidden"
      whileInView="visible"
      viewport={sectionIntroViewport}
    >
      {children}
    </motion.div>
  );
};
