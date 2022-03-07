import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background_line: string;

      background_primary: string;
      background_secundary: string;
      background_tertiary: string;
      background_icon: string;
      background_hover: string;
      text: string;
    };
  }
}
