import React from 'react';
import { Promo, Header, Info, Track, Evo, Blog, Footer } from '../components';

export const MainPage: React.FC = () => (
  <>
    <Header />
    <main>
      <Promo />
      <Info />
      <Track />
      <Evo />
      <Blog />
    </main>
    <Footer />
  </>
);
