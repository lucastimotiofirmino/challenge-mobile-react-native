import {action} from 'typesafe-actions';
import {Favorites, FavoriteTypes} from './types';

export const addFavorite = (data: Favorites) => {
  return action(FavoriteTypes.ADD_FAVORITES, {data});
};

export const removeFavorites = (index: number) =>
  action(FavoriteTypes.REMOVE_FAVORITES, {index});
