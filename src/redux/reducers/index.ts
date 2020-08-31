import { combineReducers } from 'redux';

import heroes from './heroes';
import favorites from './favorites';

export const rootReducer = combineReducers({
  heroes,
  favorites,
});

export type RootState = ReturnType<typeof rootReducer>;
