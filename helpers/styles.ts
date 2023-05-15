export const addModifier = (base: string, modifier?: string): string => {
  if (!modifier) {
    return base;
  }
  return `${base} ${modifier.trim()}`;
};
