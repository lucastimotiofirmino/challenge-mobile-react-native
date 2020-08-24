import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
    thunk
];

export default store = createStore(
    rootReducers,
    composeEnhancer(applyMiddleware(...middlewares)),
);
