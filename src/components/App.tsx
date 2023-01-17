import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '../styles';
import { MainPage } from '../pages';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <MainPage />
  </ThemeProvider>
);
