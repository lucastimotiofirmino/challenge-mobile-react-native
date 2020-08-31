import { ThunkAction } from 'redux-thunk';
import * as types from './types';
import { LoadHeroesSuccess, HeroesStateType } from './types';
import * as heroService from '../../../services/heroes';

type ThunkResult<R> = ThunkAction<R, HeroesStateType, undefined, any>;

export const loadHeroesSuccess = (payload: []): LoadHeroesSuccess => ({
  type: types.LOAD_SUCCESS,
  payload,
});

export const loadHeroesRequest = (
  offset: number,
  filterByName: string,
): ThunkResult<any> => {
  return (dispatch) => {
    dispatch({ type: types.LOAD_REQUEST });
    heroService
      .loadHeroes(offset, filterByName)
      .then((result: any) => {
        const { data, error } = result;
        if (error) {
          dispatch({ type: types.LOAD_ERROR, payload: error });
        } else {
          if (offset === 0) {
            dispatch({ type: types.LOAD_SUCCESS, payload: data });
          } else {
            dispatch({ type: types.LOAD_MORE_SUCCESS, payload: data });
          }
        }
      })
      .catch((error) => {
        if (__DEV__) {
          console.log(error);
        }
        dispatch({ type: types.LOAD_ERROR, payload: error });
      });
  };
};
