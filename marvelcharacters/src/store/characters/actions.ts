import {
  LOAD_CHARACTERS_FAILURE,
  LOAD_CHARACTERS_REQUEST,
  LOAD_CHARACTERS_SUCCESS,
  LOAD_MORE_CHARACTERS_SUCCESS,
} from './types';
import {Character, CharactersActionsType} from '../../interfaces';

function loadCharactersRequest(offset: number): CharactersActionsType {
  return {
    type: LOAD_CHARACTERS_REQUEST,
    payload: offset,
  };
}

function loadCharactersSuccess(
  characters: Array<Character>,
): CharactersActionsType {
  return {
    type: LOAD_CHARACTERS_SUCCESS,
    payload: characters,
  };
}

function loadMoreCharactersSuccess(
  characters: Array<Character>,
): CharactersActionsType {
  return {
    type: LOAD_MORE_CHARACTERS_SUCCESS,
    payload: characters,
  };
}

function loadCharactersFailure(error: string): CharactersActionsType {
  return {
    type: LOAD_CHARACTERS_FAILURE,
    payload: error,
  };
}

export {
  loadCharactersRequest,
  loadCharactersFailure,
  loadCharactersSuccess,
  loadMoreCharactersSuccess,
};
