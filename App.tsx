import 'react-native-gesture-handler'
import * as React from 'react'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import { createStore, applyMiddleware, Store } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'

import Router from './src/router'
import reducer from './src/redux/store/reducer'

const persistedReducer = persistReducer({
  key: 'root',
  storage: AsyncStorage
}, reducer)

const store: Store<FavoriteState, FavoriteAction> & {
  dispatch: DispatchType
} = createStore(persistedReducer, applyMiddleware(thunk))

const persistor = persistStore(store)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar style={'dark'} backgroundColor={'#141414'}/>
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App