import {createStore, combineReducers} from 'redux';
import favorites from './favorites/reducer';
import theme from './theme/reducer';

const reducers = combineReducers({
  favorites,
  theme,
});

const store = createStore(reducers);

export default store;
