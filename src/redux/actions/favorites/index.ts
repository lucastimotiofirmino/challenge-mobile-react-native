import { ThunkAction } from 'redux-thunk';
import * as types from './types';
import { FavoriteStateType } from './types';

type ThunkResult<R> = ThunkAction<R, FavoriteStateType, undefined, any>;

export const addFavorite = (payload: any): ThunkResult<any> => {
  return (dispatch) => {
    dispatch({ type: types.ADD_FAVORITE, payload: payload });
  };
};

export const removeFavorite = (item: any): ThunkResult<any> => {
  return (dispatch, getState) => {
    const favorites = getState().favorites?.savedFavorites;
    const foundIndex = favorites.findIndex((x: any) => x.id === item.id);
    dispatch({ type: types.REMOVE_FAVORITE, payload: { foundIndex } });
    console.log(foundIndex);
  };
};
