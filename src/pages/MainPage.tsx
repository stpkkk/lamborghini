import React from 'react';
import { Promo, Header, Info } from '../components';

export const MainPage: React.FC = () => (
  <>
    <Header />
    <main>
      <Promo />
	  <Info />
    </main>
  </>
);
