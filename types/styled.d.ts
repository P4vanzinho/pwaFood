import "styled-components";

export type ThemeColors = {
  WHITE: string;
  LIGHT: string;
  GRAY: string;
  SECUNDARY_DARK: string;
  DARK: string;
  SUCCESS: string;
  WARNING: string;
  PRIMARY: string;
  PRIMARY_LIGHT: string;
  PRIMARY_DARK: string;
  ERROR: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    COLORS: ThemeColors;
  }
}
