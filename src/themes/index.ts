export interface Theme {
  colors: {
    primary: string;
    background: string;
    characterBackground: string;
  };
}

export const LightTheme: Theme = {
  colors: {
    primary: '#EC1D24',
    background: '#FFFFFF',
    characterBackground: '#EEEEEE',
  },
};

export const DarkTheme: Theme = {
  colors: {
    primary: '#EC1D24',
    background: '#202020',
    characterBackground: '#151515',
  },
};
