import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import { Platform } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

declare global {
  interface Console {
    tron: any;
  }
}

// Se caso estiver usando o emulador, utilize o comando adb reverse tcp:9090 tcp:9090
// Se caso tiver usando o Device, não teria necessidade de usar.
const middleware = async (tron: any): void => {
  const ip = await NetInfo.fetch().then(state => {
    return state.details.ipAddress;
  });

  tron.configure(Platform.OS === 'ios' ? '' : { host: ip });
};

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
    .useReactNative()
    .use(middleware)
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear!();

  console.tron = tron;
}
