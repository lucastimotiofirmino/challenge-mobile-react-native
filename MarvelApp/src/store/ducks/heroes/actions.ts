import {action} from 'typesafe-actions';
import {HeroesTypes, Heroes} from './types';

export const loadRequest = () => action(HeroesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Heroes[]) =>
  action(HeroesTypes.LOAD_SUCCESS, {data});

export const loadFailure = () => action(HeroesTypes.LOAD_FAILURE);
