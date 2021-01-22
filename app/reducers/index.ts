import { combineReducers } from 'redux';
import heroes from './heroes';

const rootReducer = combineReducers({
  heroes: heroes,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;