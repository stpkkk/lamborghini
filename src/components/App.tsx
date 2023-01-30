/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContext } from '../context/context';
import { MainPage } from '../pages';
import { GlobalStyles, theme } from '../styles';
import { Loader } from './Loader';
import { SliderData } from '../models';

export const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [sliderData, setSliderData] = useState<SliderData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(
          'https://my-json-server.typicode.com/stpkkk/mockjson/sliderDataBase'
        );
        const jsonData = await res.json();
        setSliderData(jsonData);
        setLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('Error to fetch a data :(');
        // eslint-disable-next-line no-console
        console.error(error);
        throw error;
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ sliderData }}>
        <GlobalStyles />
        <MainPage />
      </AppContext.Provider>
    </ThemeProvider>
  );
};
