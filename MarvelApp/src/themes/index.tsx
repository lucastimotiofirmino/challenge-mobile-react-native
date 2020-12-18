import React, {createContext, useContext} from 'react';
import {useColorScheme} from 'react-native';
import {dark, light} from './colors';

const Context = createContext(light);

// Custom Hook to get colors
export function useColors(): HeroColors {
  return useContext(Context) as HeroColors;
}

// Using the context API do Replace Colors
function findTheme(): HeroColors {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useColorScheme();
  return theme === 'light' ? light : dark;
}

const ThemeProvider: React.FC = ({children}) => {
  return <Context.Provider value={findTheme()}>{children}</Context.Provider>;
};

export default ThemeProvider;
