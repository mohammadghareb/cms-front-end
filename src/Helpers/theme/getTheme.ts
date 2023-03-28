import { colors } from "./colors";

export type Theme = ReturnType<typeof getTheme> & {
  colors: string;
};

export const getTheme = () => {
  const themeColors = colors;
  return {
    colors: {
      ...themeColors
    }
  };
};
