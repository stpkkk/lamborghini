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
}
body {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.text.black};
  background: ${(props) => props.theme.colors.background.page};
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
`;
