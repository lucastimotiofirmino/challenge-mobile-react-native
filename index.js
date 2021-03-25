/**
 * @format
 */

import { AppRegistry } from 'react-native';

import './src/config/ReactotronConfig';
import App from './src';
import { name as appName } from './app.json';
import { startStore } from './src/store';

AppRegistry.registerComponent(appName, () => {
  startStore();
  return App;
});
