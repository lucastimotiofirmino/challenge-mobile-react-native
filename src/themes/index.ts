export interface Theme {
  colors: {
    primary: string;
    background: string;
  };
}

export const LightTheme: Theme = {
  colors: {
    primary: '#EC1D24',
    background: '#FFFFFF',
  },
};

export const DarkTheme: Theme = {
  colors: {
    primary: '#EC1D24',
    background: '#000000',
  },
};
