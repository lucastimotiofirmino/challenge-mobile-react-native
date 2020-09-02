/**
 * @format
 */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import App from './src/components/App'
// eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux'
if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../MSH/src/redux/reducer/ReducerFactory'
import createSagaMiddleware from 'redux-saga'
import dataSaga from '../MSH/src/redux/saga/SagaFactory'

const sagaMiddleware = createSagaMiddleware()

function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(dataSaga)
  return store
}

const store = configureStore()

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxApp)
