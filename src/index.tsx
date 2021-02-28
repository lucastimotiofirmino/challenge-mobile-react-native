import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import Characters from './views/Characters'

import './config/Reactotron'

const App = () => (
  <Provider store={store}>
    <Characters />
  </Provider>
)

export default App
