/**
 * Calculates an interpolated value based on progress between start and end values
 * @param start Starting value
 * @param end Ending value
 * @param progress Progress value (0-1)
 * @returns Interpolated value
 */
export const getAnimationValue = (start: number, end: number, progress: number): number => {
  return start + (progress * (end - start));
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