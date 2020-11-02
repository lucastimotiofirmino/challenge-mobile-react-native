export interface Theme {
  colors: {
    primary: string;
    background: string;
    characterBackground: string;
    text: string;
  };
}

export const LightTheme: Theme = {
  colors: {
    primary: '#EC1D24',
    background: '#DDDDDD',
    characterBackground: '#FAFAFA',
    text: '#999999',
  },
};

export const DarkTheme: Theme = {
  colors: {
    primary: '#EC1D24',
    background: '#202020',
    characterBackground: '#151515',
    text: '#505050',
  },
};
