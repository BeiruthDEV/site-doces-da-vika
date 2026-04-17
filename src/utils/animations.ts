import type { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } 
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
    transition: { duration: 1.5, ease: 'easeOut' }
  }
};

export const textReveal: Variants = {
  hidden: { y: '120%', opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
  }
};

export const parallaxImage: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 1.2, 
      ease: [0.33, 1, 0.68, 1]
    }
  }
};

