export const random = (max: number, min: number = 0): number => {
  return Math.floor(Math.random() * max + min);
};
