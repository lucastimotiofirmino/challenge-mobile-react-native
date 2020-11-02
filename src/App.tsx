import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {LightTheme, DarkTheme} from './themes';
import {StatusBar} from 'react-native';
import TabNavigation from './components/TabNavigation';

function App() {
  const [theme] = useState(LightTheme);
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <TabNavigation />
    </ThemeProvider>
  );
}

export default App;
