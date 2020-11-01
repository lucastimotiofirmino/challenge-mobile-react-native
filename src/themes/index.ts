export interface Theme {
  colors: {
    primary: string;
    headerBackground: string;
    contentBackground: string;
  };
}

export const LightTheme: Theme = {
  colors: {
    primary: '#EC1D24',
    headerBackground: '#EEEEEE',
    contentBackground: '#FFFFFF',
  },
};

export const DarkTheme: Theme = {
  colors: {
    primary: '#EC1D24',
    headerBackground: '#000000',
    contentBackground: '#202020',
  },
};
