export const isNumericString = (value: string): value is `${number}` =>
  !isNaN(parseInt(value));
