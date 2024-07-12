import type { Transition, Variants } from "framer-motion";
// transitionz
const basicTransition: Transition = {
  delay: 0,
  type: "linear",
  ease: "anticipate",
  duration: 0.25,
};

// variantz
const fromBottom: Variants = {
  visible: {
    translateY: 0,
    opacity: [0, 0.5, 1],
  },
  hidden: {
    translateY: "100%",
    opacity: 0,
  },
};

const fromTransparent: Variants = {
  visible: {
    opacity: [0, 0, 0.25, 0.5, 1],
  },
  hidden: {
    opacity: 0,
  },
};

const fromUnscaled: Variants = {
  visible: {
    scale: 1,
    opacity: [0, 0.5, 1],
  },
  hidden: {
    scale: 0,
    opacity: 0,
  },
  hovered: {
    translateX: -6,
    translateY: -6,
    transition: basicTransition,
  },
};

export { fromBottom, fromTransparent, fromUnscaled };
