import React from 'react';
import {ThemeProvider} from 'styled-components';
import {LightTheme} from './themes';
import {SafeAreaView, StatusBar} from 'react-native';
import Characters from './components/Characters';

const App = () => {
  const backgroundColor = LightTheme.colors.primary;
  return (
    <ThemeProvider theme={LightTheme}>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      <SafeAreaView>
        <Characters />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
