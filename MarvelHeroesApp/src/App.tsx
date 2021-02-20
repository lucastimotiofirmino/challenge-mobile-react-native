import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HeroesList from './screens/HeroesList';
import Header from './components/Header';

import Routes from '../src/routes'


declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>
        <Header />
        <Routes/>
    </NavigationContainer>
  );
};

export default App;
