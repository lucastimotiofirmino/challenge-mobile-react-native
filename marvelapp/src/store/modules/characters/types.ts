/* eslint-disable no-shadow */

export enum ActionTypes {
  getTypeCharactersRequest = 'GET_TYPE_CHARACTERS_REQUEST',
  getTypeCharactersSuccess = 'GET_TYPE_CHARACTERS_SUCCESS',
  getTypeCharactersFailure = 'GET_TYPE_CHARACTERS_FAILURE',
  getTypeCharactersInfoSuccess = 'GET_TYPE_CHARACTERS_INFO_REQUEST',

  getTypeCharacterRequest = 'GET_TYPE_CHARACTER_REQUEST',
  getTypeCharacterSuccess = 'GET_TYPE_CHARACTER_SUCCESS',
  getTypeCharacterFailure = 'GET_TYPE_CHARACTER_FAILURE',

  getTypeCharacterSearchRequest = 'GET_TYPE_CHARACTER_SEARCH_REQUEST',
  getTypeCharacterSearchSuccess = 'GET_TYPE_CHARACTER_SEARCH_SUCCESS',
  getTypeCharacterSearchFailure = 'GET_TYPE_CHARACTER_SEARCH_FAILURE',

  getTypeOpenModalDetailCharacter = 'GET_TYPE_OPEN_MODAL_DETAIL_CHARACTER',
  getTypeDetailCharacterRequest = 'GET_TYPE_DETAIL_CHARACTER_REQUEST',
  getTypeDetailCharacterSuccess = 'GET_TYPE_DETAIL_CHARACTER_SUCCESS',
  getTypeDetailCharacterFailure = 'GET_TYPE_DETAIL_CHARACTER_FAILURE',

  getTypeFavoriteCharacter = 'GET_TYPE_FAVORITE_CHARACTER',
  getTypeFavoriteCharacterSuccess = 'GET_TYPE_FAVORITE_CHARACTER_SUCCESS',
  getTypeFavoriteCharactersFailure = 'GET_TYPE_FAVORITE_CHARACTER_FAILURE',
}

export interface IItems {
  resourceURI: string;
  name: string;
}

export interface IDetails {
  available: number;
  collectionURI: string;
  items: IItems[];
}

export interface ICharactersType {
  id: number;
  name: string;
  description: string;
  resourceURI: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: IDetails;
  series: IDetails;
  stories: IDetails;
  events: IDetails;
}

export interface ICharactersItem {
  characters: ICharactersType;
}

export interface IInfoResult {
  offset: number;
  limit: number;
  total: number;
  count: number;
}

export interface ICharactersTypeState {
  itemsCharacters: ICharactersType[];
  characterDetail: ICharactersType;
  infoResult: IInfoResult | null;
  loadingCharacters: boolean;
  openModalDetail: boolean;
  favoriteCharacters: ICharactersType[];
}
