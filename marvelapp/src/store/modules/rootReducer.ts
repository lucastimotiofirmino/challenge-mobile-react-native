import { combineReducers } from 'redux';
import charactersReducer from './characters/reducer';
// import TypeSpecialistReducer from './listTypeSpecialist/reducer';

export default combineReducers({
  characters: charactersReducer,
  // typeSpecialist: TypeSpecialistReducer,
});
