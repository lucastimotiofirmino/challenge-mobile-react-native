import {combineReducers} from 'redux';
import favorites from './favorites';

export default combineReducers({
  data: favorites,
});
