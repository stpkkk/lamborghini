import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: {
        black: string;
      };
      background: {
        page: string;
        green: string;
      };
    };
  }
}
