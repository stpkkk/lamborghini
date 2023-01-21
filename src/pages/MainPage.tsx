import React from 'react';
import { Promo, Header, Info, Track, Evo } from '../components';

export const MainPage: React.FC = () => (
  <>
    <Header />
    <main>
      <Promo />
      <Info />
      <Track />
      <Evo />
    </main>
  </>
);
