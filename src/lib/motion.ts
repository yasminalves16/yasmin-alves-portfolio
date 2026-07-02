export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT = {
  once: true,
  amount: 'some' as const,
  margin: '0px 0px -100px 0px' as const
};

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 }
};

export const slideFromLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0 }
};

export const slideFromRight = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0 }
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06
    }
  }
};

export const transition = {
  duration: 0.7,
  ease: EASE_OUT
};

export const transitionFast = {
  duration: 0.45,
  ease: EASE_OUT
};

export const hoverLift = {
  y: -4,
  transition: transitionFast
};
