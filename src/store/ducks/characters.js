import { reactotron } from '~/config/ReactotronConfig';

export const Types = {
  GET_CHARACTERS: 'GET_CHARACTERS',
  GET_CHARACTERS_ERROR: 'GET_CHARACTERS_ERROR',
  GET_CHARACTERS_SUCCESS: 'GET_CHARACTERS_SUCCESS',
};

const INITIAL_STATE = {
  list: [],
  length: 0,
  error: false,
  requesting: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  const { list, length } = state;

  switch (type) {
    case Types.GET_CHARACTERS:
      reactotron.log('estamos aqui', type);
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
