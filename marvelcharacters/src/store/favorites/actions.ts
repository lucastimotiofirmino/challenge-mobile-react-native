import {GET_FAVORITES_SUCCESS, GET_FAVORITES, SAVE_FAVORITES} from './types';
import {FavoritesActionsType} from '../../interfaces';

function getFavorites(): FavoritesActionsType {
  return {
    type: GET_FAVORITES,
    payload: [],
  };
}

function getFavoritesSuccess(favorites: Array<number>): FavoritesActionsType {
  return {
    type: GET_FAVORITES_SUCCESS,
    payload: favorites,
  };
}

function saveFavorites(favorites: Array<number>): FavoritesActionsType {
  return {
    type: SAVE_FAVORITES,
    payload: favorites,
  };
}

export {getFavoritesSuccess, getFavorites, saveFavorites};
