import React from 'react';
import { AppLoading } from 'expo';
import { Text, View, StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'

import { Provider } from "react-redux";
import { store, persistor } from './src/store/storeConfig';
import { PersistGate } from 'redux-persist/es/integration/react';

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <View style={{ flex: 1, backgroundColor: '#020018', marginTop: 24 }}>
          <StatusBar barStyle="light-content" backgroundColor="black" translucent />
          <Routes />
        </View>
      </PersistGate>
    </Provider>
  );
}


