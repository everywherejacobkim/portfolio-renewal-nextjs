export const transitionVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    transition: { duration: 0.5 },
    opacity: 0,
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.7, staggerChildren: 0.2 },
    opacity: 1,
  },
  exit: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    transition: { duration: 0.5 },
    opacity: 0,
  },
};
