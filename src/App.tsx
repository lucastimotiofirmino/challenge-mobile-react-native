import React from 'react';
import { Platform, NativeModules, Alert } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { I18n } from '@aws-amplify/core';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import Router from './navigation';
import { store, persistor } from './store';

interface ErrorHandler {
  e: object;
  isFatal: boolean;
}

/* Import disctionaries */
import portuguese from './config/i18n/i18n_pt_BR';
I18n.putVocabularies(portuguese);

const setLanguage = () => {
  let lang;
  if (Platform.OS === 'ios') {
    /* Aquire language on ios devices */
    lang = NativeModules.SettingsManager.settings.AppleLocale;
  } else {
    /* Aquire language on Android devices */
    lang = NativeModules.I18nManager.localeIdentifier;
  }
  I18n.setLanguage(lang);
};

/* Crash handler */
const errorHandler = (e: any, isFatal: boolean): void => {
  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
      `
        Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}
        We have reported this to our team ! Please close the app and start again!
        `,
      [
        {
          text: 'Close',
        },
      ],
    );
  } else {
    //console.log(e);
  }
};

const App: React.FC = () => {
  setJSExceptionHandler(errorHandler, true);
  setNativeExceptionHandler((errorString) => {
    console.log('setNativeExceptionHandler');
    console.log(errorString);
  });
  setLanguage();
  //persistor.purge(); //Para limpar a store
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
