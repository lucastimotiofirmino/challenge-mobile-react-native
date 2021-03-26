import { combineReducers } from 'redux';

import characters from './characters';
import theme from './theme';

const reducers = combineReducers({
  characters,
  theme,
});

export default reducers;
