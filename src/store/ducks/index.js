import { combineReducers } from 'redux';

import characters from './characters';
import events from './events';
import series from './series';
import theme from './theme';
import app from './app';

const reducers = combineReducers({
  characters,
  events,
  series,
  theme,
  app,
});

export default reducers;
