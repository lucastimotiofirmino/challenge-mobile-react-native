import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';

// eslint-disable-next-line import/no-mutable-exports
let reactotron;

if (__DEV__) {
  reactotron = Reactotron.configure({ host: Config.REACTOTRON_HOST })
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  reactotron.clear();

  console.tron = reactotron;
}

export { reactotron };
