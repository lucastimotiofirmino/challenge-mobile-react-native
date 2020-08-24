import 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import { store, persistor } from './store';

import App from './App';

import { Container } from './global/styles';

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container>
          <StatusBar barStyle="light-content" backgroundColor="#312e38" />
          <App />
        </Container>
      </PersistGate>
    </Provider>
  );
};

export default Root;
