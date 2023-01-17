import { createGlobalStyle } from 'styled-components';
import fonts from './fonts.module.css';

export const GlobalStyles = createGlobalStyle`
${fonts}
html {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text.darkGray};
}
body {
  background: ${(props) => props.theme.colors.background.page};
}
a {
  color: inherit;
  text-decoration: none;
}
`;

