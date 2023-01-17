import { createGlobalStyle } from 'styled-components';
import fonts from './fonts.module.css';

const GlobalStyles = createGlobalStyle`
${fonts}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
}
`;

export default GlobalStyles;
