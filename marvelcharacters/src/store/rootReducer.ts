import {combineReducers} from 'redux';

import characters from './characters/reducer';
import favorites from './favorites/reducer';

export default combineReducers({
  characters,
  favorites,
});
