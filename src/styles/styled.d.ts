import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;
      primary: string;
      secundary: string;
      green: string;
      red: string;
      black: string;
      turquoise_blue: string;

      background_line: string;

      background_primary: string;
      background_secundary: string;
      background_tertiary: string;
      background_icon: string;
      background_hover: string;
      text: string;
    };

    spacing: {
      small: string;
      small_medium: string;
      medium: string;
      medium_large: string;
      large: string;

      max_width: string;
      padding_container_default: string;
    };
  }
}
