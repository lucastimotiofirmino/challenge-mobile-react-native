import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import CharactersScreen from './views/CharactersScreen'

import './config/Reactotron'

const App = () => (
  <Provider store={store}>
    <CharactersScreen />
  </Provider>
)

export default App
