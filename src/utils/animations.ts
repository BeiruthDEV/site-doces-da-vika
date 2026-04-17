import type { Variants } from 'framer-motion';

// Física de Mola Padrão (Taste-Design premium feel)
const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 0.8
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: springTransition
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

export const slowZoom: Variants = {
  hidden: { scale: 1.1, filter: 'blur(5px)', opacity: 0 },
  visible: { 
    scale: 1, 
    filter: 'blur(0px)',
    opacity: 1,
    transition: { duration: 1.5, ease: [0.33, 1, 0.68, 1] }
  }
};

export const textReveal: Variants = {
  hidden: { y: '120%', opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { ...springTransition, damping: 25 }
  }
};

export const parallaxImage: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: springTransition
  }
};

// Perpetual Micro-Interactions (O site "respirando")
export const floatContinuous: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Tilt on Hover
export const imageTiltHover = {
  scale: 1.05,
  rotate: 1,
  transition: springTransition
};
