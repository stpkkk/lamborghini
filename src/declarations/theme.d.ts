import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
    };
    colors: {
      text: {
        darkGray: string;
        black: string;
        gold: string;
      };
      background: {
        page: string;
        darkGray: string;
      };
      line: {
        black: string;
      };
      gradient: {
        promo: string;
      };
      filter: {
        promoFilter: string;
      };
    };
  }
}
