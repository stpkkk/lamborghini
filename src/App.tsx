import { useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from './context/context';
import { MainPage } from './pages';
import { GlobalStyles, theme } from './styles';
import { Loader } from './components/Loader';
import { SliderData } from './models';

export const App = () => {
  const notify = () =>
    toast('🏁 Welcome', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
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
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('Error to fetch a data :(');
        throw error;
      } finally {
        setLoading(false);
        notify();
      }
    }
    fetchData();
  }, []);

  const value = useMemo(() => ({ sliderData }), [sliderData]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={value}>
          <GlobalStyles />
          <MainPage />
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
};
