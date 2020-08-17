import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './src/routes';

import store from './src/store';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor="#000" />
    <Routes />
  </Provider>
);

export default App;
