import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { ICharactersTypeState } from './modules/characters/types';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';

export interface IState {
  characters: ICharactersTypeState;
}

const sagaMiddleware = createSagaMiddleware();
const storeEnhancer = applyMiddleware(sagaMiddleware);
const enhancedCreateStore = storeEnhancer(createStore);
const store = enhancedCreateStore(rootReducer);
sagaMiddleware.run(rootSaga);

export default store;
