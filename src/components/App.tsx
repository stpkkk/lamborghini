import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globalStyles';
import theme from '../styles/theme';
import MainPage from '../pages/MainPage';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <MainPage />
  </ThemeProvider>
);
