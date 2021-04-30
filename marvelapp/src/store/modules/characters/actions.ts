import { ICharactersType, ActionTypes, IInfoResult } from './types';

interface Action {
  type: string;
}

interface loading extends Action {
  payload: boolean;
}

export interface PayloadGetDetailCharacter extends Action {
  payload: {
    characterId: number;
  };
}

export interface PayloadSetFavoritePerson extends Action {
  payload: {
    character: ICharactersType;
  };
}

export interface PayloadSetFavoritePersonSuccess extends Action {
  payload: ICharactersType[];
}

export interface PayloadGetDetailCharacterSuccess extends Action {
  payload: ICharactersType;
}

export interface PayloadGetCharacter extends Action {
  payload: {
    name: string;
  };
}

export interface PayloadGetCharacterSucess extends Action {
  payload: ICharactersType;
}

export interface PayloadGetCharacterss extends Action {
  payload: ICharactersType[];
}

export interface PayloadGetInfoCharacters extends Action {
  payload: IInfoResult;
}

export interface PayloadGetCharactersRequest extends Action {
  payload: {
    limit: number;
    offset: number;
  };
}

export function getCharactersRequestAction(
  limit: number,
  offset: number,
): PayloadGetCharactersRequest {
  return {
    type: ActionTypes.getTypeCharactersRequest,
    payload: { limit, offset },
  };
}

export function getCharactersRequestSuccessAction(
  characters: ICharactersType[],
): PayloadGetCharacterss {
  return {
    type: ActionTypes.getTypeCharactersSuccess,
    payload: characters,
  };
}

export function getCharactersInfoSuccessAction(
  infoCharacters: IInfoResult,
): PayloadGetInfoCharacters {
  return {
    type: ActionTypes.getTypeCharactersInfoSuccess,
    payload: infoCharacters,
  };
}

export function getCharactersFailureAction(): Action {
  return {
    type: ActionTypes.getTypeCharactersFailure,
  };
}

export function getSearchCharacterRequestAction(
  name: string,
): PayloadGetCharacter {
  return {
    type: ActionTypes.getTypeCharacterSearchRequest,
    payload: { name },
  };
}

export function getSearchCharacterRequestSuccessAction(
  character: ICharactersType,
): PayloadGetCharacterSucess {
  return {
    type: ActionTypes.getTypeCharacterSearchSuccess,
    payload: character,
  };
}

export function getSearchCharacterRequestFailureAction(): Action {
  return {
    type: ActionTypes.getTypeCharacterSearchFailure,
  };
}

export function setShowModal(flag: boolean): loading {
  return {
    type: ActionTypes.getTypeOpenModalDetailCharacter,
    payload: flag,
  };
}

export function getDetailCharacterRequestAction(
  characterId: number,
): PayloadGetDetailCharacter {
  return {
    type: ActionTypes.getTypeDetailCharacterRequest,
    payload: { characterId },
  };
}

export function getDetailCharacterRequestSuccessAction(
  detailCharacter: ICharactersType,
): PayloadGetDetailCharacterSuccess {
  return {
    type: ActionTypes.getTypeDetailCharacterSuccess,
    payload: detailCharacter,
  };
}

export function getDetailCharacterRequestFailureAction(): Action {
  return {
    type: ActionTypes.getTypeDetailCharacterFailure,
  };
}

export function setFavoritePersonAction(
  character: ICharactersType,
): PayloadSetFavoritePerson {
  return {
    type: ActionTypes.getTypeFavoriteCharacter,
    payload: { character },
  };
}

export function setFavoritePersonSuccessAction(
  characters: ICharactersType[],
): PayloadSetFavoritePersonSuccess {
  return {
    type: ActionTypes.getTypeFavoriteCharacterSuccess,
    payload: characters,
  };
}

export function setFavoritePersonFailureAction(): Action {
  return {
    type: ActionTypes.getTypeFavoriteCharactersFailure,
  };
}
