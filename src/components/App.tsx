import { ThemeProvider } from 'styled-components';
import { MainPage } from '../pages';
import { GlobalStyles, theme } from '../styles';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <MainPage />
  </ThemeProvider>
);
