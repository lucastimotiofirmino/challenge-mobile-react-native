import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {HeroesState} from './ducks/heroes/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  repositories: HeroesState;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
