import { combineReducers } from 'redux';

import character from './character';

const appReducer = combineReducers({
  character,
});

export default (state: any, action: any) => appReducer(state, action);
