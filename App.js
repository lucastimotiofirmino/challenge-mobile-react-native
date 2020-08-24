import React, {Component} from 'react';
import FlashMessage from 'react-native-flash-message';
import {Platform} from 'react-native';
import { Provider } from 'react-redux';
import {AppLoading, Notifications} from 'expo';
import * as Font from 'expo-font';
import Router from "./src/routes";
import store from "./src/redux/store";

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

console.disableYellowBox = true;

export default class App extends Component{

  state = {
    isLoadingComplete: false,
    fontLoaded: false,
    notification: {},
  };

  componentDidMount() {

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'Default Channel',
        sound: true,
      }).then(null);
    }
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return (
          <AppLoading
              startAsync={this._loadResourcesAsync}
              onError={this._handleLoadingError}
              onFinish={this._handleFinishLoading}
          />
      );
    } else {
      return (
          <Provider store={store}>
            <Router/>
            <FlashMessage position="top" />
          </Provider>
      );
    }
  }

  _loadResourcesAsync = () => {

    return Promise.all([
      Font.loadAsync({
        'Montserrat-Light': require('./src/assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Italic': require('./src/assets/fonts/Montserrat-Italic.ttf'),
        'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),

      }).then(() => {
        this.setState({fontLoaded: true});
      }),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {

    if (this.state.fontLoaded) {
      this.setState({isLoadingComplete: true});
    }
  };
}

