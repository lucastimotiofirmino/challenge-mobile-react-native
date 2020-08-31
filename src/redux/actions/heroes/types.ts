import { Action } from 'redux';
import { RootState } from '../../reducers';

export const LOAD_REQUEST = 'heroes/LOAD_REQUEST';
export const LOAD_SUCCESS = 'heroes/LOAD_SUCCESS';
export const LOAD_MORE_SUCCESS = 'heroes/LOAD_MORE_SUCCESS';
export const LOAD_ERROR = 'heroes/LOAD_ERROR';

export interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: Image;
}

export interface HeroesState {
  state: RootState;
  heroes: Array<Hero>;
}

export interface Image {
  path: string;
  extension: string;
}

export interface LoadingState {
  heroes: boolean;
}

export interface HeroesStateType {
  loading: boolean;
  heroes: Array<Hero>;
  errorMessage: string;
}

export interface LoadHeroesRequest extends Action {
  type: 'heroes/LOAD_REQUEST';
  payload: number;
}

export interface LoadHeroesSuccess extends Action {
  type: 'heroes/LOAD_SUCCESS';
  payload: Array<Hero> | number | string;
}

export interface LoadMoreHeroesSuccess extends Action {
  type: 'heroes/LOAD_MORE_SUCCESS';
  payload: Array<Hero> | number | string;
}

export interface LoadHeroesResult {
  error: string | null;
  data: Array<Hero>;
  payload: Array<Hero> | number | string;
  type: Array<Hero> | string | null;
}

export interface LoadHeroesError extends Action {
  type: 'heroes/LOAD_ERROR';
  payload: Array<Hero> | number | string;
}

export type HeroesActionsType =
  | LoadHeroesRequest
  | LoadHeroesSuccess
  | LoadMoreHeroesSuccess
  | LoadHeroesResult
  | LoadHeroesError;
