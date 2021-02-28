import React from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'

import store from './store'

import './config/Reactotron'

const App = () => (
  <Provider store={store}>
    <Text>Marvel Characters</Text>
  </Provider>
)

export default App
