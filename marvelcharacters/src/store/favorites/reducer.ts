import produce from 'immer';
import {GET_FAVORITES_SUCCESS} from './types';
import {FavoritesActionsType, FavoritesStateType} from '../../interfaces';

const INITIAL_STATE: FavoritesStateType = {
  favorites: [],
  loading: false,
};

const characters = (state = INITIAL_STATE, action: FavoritesActionsType) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_FAVORITES_SUCCESS:
        draft.favorites = action.payload as number[];
        draft.loading = false;
        break;
      default:
        draft.loading = true;
        draft.favorites = action.payload ? (action.payload as number[]) : [];
    }
  });
};

export default characters;
