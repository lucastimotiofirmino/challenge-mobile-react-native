import { configureStore } from '@reduxjs/toolkit'

// @ts-ignore
import Reactotron from '../config/Reactotron'

const store = configureStore({
  reducer: () => {},
  // @ts-ignore
  enhancers: [Reactotron.createEnhancer()]
})

export default store
