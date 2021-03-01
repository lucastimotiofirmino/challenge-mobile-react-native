// @ts-nocheck
import Reactotron, { asyncStorage } from 'reactotron-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

let reactotron

if (__DEV__) {
  reactotron = Reactotron
    .setAsyncStorageHandler(AsyncStorage)
    .configure({
      name: 'Marvel Characters'
    })
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .use(asyncStorage())
    .connect()

  reactotron.clear()

  console.tron = reactotron
}

export default reactotron
