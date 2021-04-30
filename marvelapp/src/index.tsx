import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar />
        <Routes />
      </View>
    </Provider>
  );
};

export default App;
