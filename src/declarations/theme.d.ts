import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: {
        darkGray: string;
        black: string;
      };
      background: {
        page: string;
        green: string;
      };
    };
  }
}
