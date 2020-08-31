import * as types from '../../actions/favorites/types';
import {
  FavoriteStateType,
  FavoritesActionsType,
} from '../../actions/favorites/types';

const initialState: FavoriteStateType = {
  savedFavorites: [],
};

export default (state = initialState, action: FavoritesActionsType) => {
  switch (action.type) {
    case types.ADD_FAVORITE: {
      return {
        ...state,
        savedFavorites: [...state.savedFavorites, action.payload],
      };
    }
    case types.REMOVE_FAVORITE: {
      const { foundIndex } = action.payload;
      return {
        ...state,
        savedFavorites: [
          ...state.savedFavorites.slice(0, foundIndex),
          ...state.savedFavorites.slice(foundIndex + 1),
        ],
      };
    }
    default:
      return state;
  }
};
