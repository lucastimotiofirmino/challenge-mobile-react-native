import React, {ReactNode} from 'react';
import {ThemeProvider} from 'styled-components';
import {useSelector} from 'react-redux';
import {StatusBar} from 'react-native';

function Theme({children}: {children: ReactNode}) {
  const theme = useSelector<Redux.State, Theme>((state) => state.theme);
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
