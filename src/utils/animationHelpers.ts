/**
 * Calculates an interpolated value based on progress between start and end values
 * @param start Starting value
 * @param end Ending value
 * @param progress Progress value (0-1)
 * @returns Interpolated value
 */
export const getAnimationValue = (start: number, end: number, progress: number): number => {
  return start + progress * (end - start);
};

/**
 * Calculates an interpolated value and clamps it to not exceed the end value
 * @param start Starting value
 * @param end Ending value
 * @param progress Progress value (0-1)
 * @returns Interpolated value clamped to end value
 */
export const getClampedAnimationValue = (start: number, end: number, progress: number): number => {
  const value = getAnimationValue(start, end, progress);
  return Math.min(value, end);
};

export const revealText = {
  hidden: {
    opacity: 0,
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    filter: 'blur(4px)',
  },
  visible: (i: number) => {
    return {
      opacity: 0.7,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.25,
        duration: 1.8,
        ease: [0.19, 1, 0.22, 1], // Expo-like easing
      },
    };
  },
};

export const floatIn = {
  hidden: {
    opacity: 0,
    y: 40,
    rotate: -2,
    scale: 0.8,
    filter: 'blur(4px)',
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.25,
      duration: 1.4,
      ease: [0.215, 0.61, 0.355, 1], // Improved easing
    },
  }),
};

export const decorativeAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -10,
    filter: 'blur(10px)',
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.25,
      duration: 1.5,
      ease: [0.34, 1.56, 0.64, 1], // Spring-like motion
    },
  }),
};

export const lineDrawIn = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: i * 0.25,
        duration: 2,
        ease: [0.19, 1, 0.22, 1],
      },
      opacity: {
        delay: i * 0.25,
        duration: 0.8,
      },
    },
  }),
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 100,
    filter: 'blur(8px)',
    scale: 0.95,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      delay: i * 0.25,
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for a more elegant motion
    },
  }),
};

export const scaleWidth = {
  hidden: {
    opacity: 0,
    scale: 0,
    filter: 'blur(10px)',
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.25,
      duration: 1.5,
      ease: [0.34, 1.56, 0.64, 1], // Spring-like motion
    },
  }),
};
