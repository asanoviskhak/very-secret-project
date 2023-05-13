export const addModifier = (base: string, modifier?: string): string => {
  if (!modifier) {
    return base;
  }
  return `${base} ${base.trim()}--${modifier.trim()}`;
};
