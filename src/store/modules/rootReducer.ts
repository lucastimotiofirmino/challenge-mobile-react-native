import { combineReducers } from 'redux';

import characters from './Characters/reducer';

export const rootReducer = combineReducers({
  characters,
});

export type RootState = ReturnType<typeof rootReducer>;
