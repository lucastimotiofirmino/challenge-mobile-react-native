import { combineReducers } from 'redux';

import characters from './characters';
import theme from './theme';
import app from './app';

const reducers = combineReducers({
  characters,
  theme,
  app,
});

export default reducers;
