import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: {
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
  }
}
