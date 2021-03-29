import { combineReducers } from 'redux';

import characters from './characters';
import events from './events';
import series from './series';
import theme from './theme';
import likes from './likes';
import app from './app';

const reducers = combineReducers({
  characters,
  events,
  series,
  theme,
  likes,
  app,
});

export default reducers;
