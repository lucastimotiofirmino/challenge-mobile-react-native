import { FavoritesTypes } from './types'

export const storeFavorite = (data: any) => ({
    type: FavoritesTypes.STORE_FAVORITE,
    payload: data
});

export const removeFromFavorite = (data: any) => ({
    type: FavoritesTypes.REMOVE_FAVORITE,
    payload: data
});