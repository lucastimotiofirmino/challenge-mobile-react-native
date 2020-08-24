import produce from 'immer';
import {
  LOAD_CHARACTERS_FAILURE,
  LOAD_CHARACTERS_REQUEST,
  LOAD_CHARACTERS_SUCCESS,
  LOAD_MORE_CHARACTERS_SUCCESS,
} from './types';
import {CharactersActionsType, CharactersStateType} from '../../interfaces';

const INITIAL_STATE: CharactersStateType = {
  characters: [],
  loading: false,
};

const characters = (state = INITIAL_STATE, action: CharactersActionsType) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_CHARACTERS_REQUEST:
        draft.loading = true;
        break;
      case LOAD_CHARACTERS_SUCCESS:
        draft.characters = action.payload as [];
        draft.loading = false;
        break;
      case LOAD_MORE_CHARACTERS_SUCCESS:
        draft.characters = [...draft.characters, ...(action.payload as [])];
        draft.loading = false;
        break;
      case LOAD_CHARACTERS_FAILURE:
        draft.loading = false;
        break;
      default:
    }
  });
};

export default characters;
