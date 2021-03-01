import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { combineReducers } from 'redux'

import rootSaga from '../sagas'

// @ts-ignore
import Reactotron from '../config/Reactotron'

import charactersReducers from './characters'
import characterDetailsReducers from './characterDetails'

const uiReducers = combineReducers({
  characters: charactersReducers.ui,
  characterDetails: characterDetailsReducers.ui
})

const entityReducers = combineReducers({
  characters: charactersReducers.entity,
  characterDetails: characterDetailsReducers.entity
})

export const rootReducer = combineReducers({
  ui: uiReducers,
  entity: entityReducers
})

// @ts-ignore
const sagaMonitor = Reactotron.createSagaMonitor()

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const store = configureStore({
  reducer: rootReducer,
  // @ts-ignore
  enhancers: [Reactotron.createEnhancer()],
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store
