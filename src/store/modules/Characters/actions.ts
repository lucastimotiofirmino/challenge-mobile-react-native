/* eslint-disable @typescript-eslint/ban-types */
import { CharacterTypes } from './types';
import IAction from '../interfaces/IActions';
import ICharacter from '../interfaces/ICharacter';

export function getCharacterRequest(): IAction<object, void> {
  return {
    type: CharacterTypes.GET_CHARACTER_REQUEST,
  };
}

export function getCharacterSuccess(data: ICharacter): IAction<object, void> {
  return {
    type: CharacterTypes.GET_CHARACTER_SUCCESS,
    payload: { data },
  };
}
