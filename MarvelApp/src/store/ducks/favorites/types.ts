/**
 * Action Types
 */
export enum FavoriteTypes {
  ADD_FAVORITES = '@favorites/ADD_FAVORITES',
  REMOVE_FAVORITES = '@favorites/REMOVE_FAVORITES',
}

/**
 * Data Types
 */

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Favorites {
  id: number;
  thumbnail: Thumbnail;
  description: string;
  name: string;
}

export interface FavoriteState {
  readonly data: Favorites[];
}
