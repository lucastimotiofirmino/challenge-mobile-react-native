import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';
import persistReducers from './persistReducers';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistReducers(rootReducer),
  applyMiddleware(sagaMiddleware),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
