/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from 'styled-components';
import {LightTheme} from './themes';
import {SafeAreaView, StatusBar} from 'react-native';

const App = () => {
  const backgroundColor = LightTheme.colors.primary;
  return (
    <ThemeProvider theme={LightTheme}>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      <SafeAreaView />
    </ThemeProvider>
  );
};

export default App;
