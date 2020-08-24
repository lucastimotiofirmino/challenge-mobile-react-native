/* eslint-disable @typescript-eslint/ban-types */
import { CharacterTypes } from './types';
import IAction from '../interfaces/IActions';
import ICharacter from '../interfaces/ICharacter';

export function getCharacterListRequest(): IAction<object, void> {
  return {
    type: CharacterTypes.GET_CHARACTER_LIST_REQUEST,
  };
}

export function getCharacterListSuccess(
  data: ICharacter,
): IAction<object, void> {
  return {
    type: CharacterTypes.GET_CHARACTER_LIST_SUCCESS,
    payload: { data },
  };
}

export function getCharsPaginationRequest(
  offset: number,
): IAction<object, void> {
  return {
    type: CharacterTypes.GET_CHARS_PAGINATION_REQUEST,
    payload: { offset },
  };
}

export function getCharsPaginationSuccess(
  data: ICharacter,
): IAction<object, void> {
  return {
    type: CharacterTypes.GET_CHARS_PAGINATION_SUCCESS,
    payload: { data },
  };
}
