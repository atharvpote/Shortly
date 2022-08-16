const baseSize = 18;
const scaleFactor = 1.25;

export const typeScale = {
  heading1: `${baseSize * scaleFactor ** 5}px`,
  heading2: `${baseSize * scaleFactor ** 4}px`,
  heading3: `${baseSize * scaleFactor ** 3}px`,
  heading4: `${baseSize * scaleFactor ** 2}px`,
  heading5: `${baseSize * scaleFactor}px`,
  paragraph: `${baseSize}px`,
  helperText: `${baseSize * scaleFactor ** -1}px`,
  copyright: `${baseSize * scaleFactor ** -2}px`,
  disclaimer: `${baseSize * scaleFactor ** -3}px`,
};

export const weightScale = {
  medium: 500,
  bold: 700,
};

export const fontFamily = `'Poppins', sans-serif`;
