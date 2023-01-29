import { createContext } from 'react';
import { SliderData } from '../models';

export const AppContext = createContext<{ sliderData: SliderData[] }>({
  sliderData: [],
});
