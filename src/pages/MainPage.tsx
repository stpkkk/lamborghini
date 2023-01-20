import React from 'react';
import { Promo, Header, Info, Track } from '../components';

export const MainPage: React.FC = () => (
  <>
    <Header />
    <main>
      <Promo />
      <Info />
      <Track />
    </main>
  </>
);
