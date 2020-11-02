import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import TabNavigation from './components/TabNavigation';
import store from './store';

function App() {
  const {theme} = store.getState();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.primary}
        />
        <TabNavigation />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
