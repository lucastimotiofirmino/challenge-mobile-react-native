export const ADD_FAVORITE = 'favorites/ADD_FAVORITE';
export const REMOVE_FAVORITE = 'favorites/REMOVE_FAVORITE';

export interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: Image;
}

export interface Image {
  path: string;
  extension: string;
}

export interface FavoriteStateType {
  savedFavorites: Array<Hero>;
  favorites?: Array<Hero>;
}

export interface AddFavorite {
  type: 'favorites/ADD_FAVORITE';
  payload: Array<Hero>;
}

export interface RemoveFavorite {
  type: 'favorites/REMOVE_FAVORITE';
  payload: Array<Hero>;
}

export type FavoritesActionsType = AddFavorite | RemoveFavorite;
