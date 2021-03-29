import { Types as AppTypes } from './app';

export const Types = {
  GET_CHARACTERS: 'GET_CHARACTERS',
  GET_CHARACTERS_ERROR: 'GET_CHARACTERS_ERROR',
  GET_CHARACTERS_SUCCESS: 'GET_CHARACTERS_SUCCESS',
  GET_CHARACTERS_BY_NAME: 'GET_CHARACTERS_BY_NAME',
  GET_CHARACTERS_BY_NAME_SUCCESS: 'GET_CHARACTERS_BY_NAME_SUCCESS',
  GET_CHARACTERS_BY_NAME_ERROR: 'GET_CHARACTERS_BY_NAME_ERROR',
  LIKE_A_CHARACTER: 'LIKE_A_CHARACTER',
  UNLIKE_A_CHARACTER: 'UNLIKE_A_CHARACTER',
};

const INITIAL_STATE = {
  list: [],
  listByName: [],
  length: 0,
  lengthByName: 0,
  error: false,
  requesting: false,
  likedCharactersIds: [],
};

const removeCharacterLike = (characterId, likedCharactersIds) =>
  likedCharactersIds.filter((id) => id !== characterId);

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  console.tron.log(type);
  const { list, length, lengthByName, listByName, likedCharactersIds } = state;

  switch (type) {
    case Types.GET_CHARACTERS:
      return {
        ...state,
        error: false,
        requesting: true,
      };
    case Types.GET_CHARACTERS_ERROR:
      return {
        ...state,
        error: true,
        requesting: false,
      };
    case Types.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        list: [...list, ...payload.characters],
        length: length + payload.characters.length,
        error: false,
        requesting: false,
      };
    case Types.GET_CHARACTERS_BY_NAME:
      return {
        ...state,
        error: false,
        requesting: true,
      };
    case Types.GET_CHARACTERS_BY_NAME_SUCCESS:
      return {
        ...state,
        listByName: [...listByName, ...payload.characters],
        lengthByName: lengthByName + payload.characters.length,
        error: false,
        requesting: false,
      };
    case Types.GET_CHARACTERS_BY_NAME_ERROR:
      return {
        ...state,
        listByName: [],
        error: true,
        requesting: false,
      };
    case AppTypes.SEARCH_BY_NAME:
      return {
        ...state,
        listByName: [],
        lengthByName: 0,
      };
    case Types.UNLIKE_A_CHARACTER:
      return {
        ...state,
        likedCharactersIds: removeCharacterLike(
          payload.characterId,
          likedCharactersIds,
        ),
      };
    case Types.LIKE_A_CHARACTER:
      return {
        ...state,
        likedCharactersIds: [...likedCharactersIds, payload.characterId],
      };
    case AppTypes.RESET_NAME:
    case AppTypes.CHANGE_SECTIONS:
      return {
        ...state,
        listByName: [],
      };
    default:
      return state;
  }
}

export const getCharacters = () => ({
  type: Types.GET_CHARACTERS,
});

export const getCharactersError = () => ({
  type: Types.GET_CHARACTERS_ERROR,
});

export const getCharactersSuccess = (characters) => ({
  type: Types.GET_CHARACTERS_SUCCESS,
  payload: {
    characters,
  },
});

export const getCharactersByName = () => ({
  type: Types.GET_CHARACTERS_BY_NAME,
});

export const getCharactersByNameError = () => ({
  type: Types.GET_CHARACTERS_BY_NAME_ERROR,
});

export const getCharactersByNameSuccess = (characters) => ({
  type: Types.GET_CHARACTERS_BY_NAME_SUCCESS,
  payload: {
    characters,
  },
});

export const likeACharacter = (characterId) => ({
  type: Types.LIKE_A_CHARACTER,
  payload: {
    characterId,
  },
});

export const unlikeACharacter = (characterId) => ({
  type: Types.UNLIKE_A_CHARACTER,
  payload: {
    characterId,
  },
});
