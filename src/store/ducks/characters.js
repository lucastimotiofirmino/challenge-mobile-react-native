const Types = {
  GET_CHARACTERS: 'GET_CHARACTERS',
};

const INITIAL_STATE = {
  list: [],
  length: 0,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  const { list, length } = state;

  switch (type) {
    case Types.GET_CHARACTERS:
      return {
        ...state,
        list: [...list, ...payload.characters],
        length: length + payload.characters.length,
      };
    default:
      return state;
  }
}

export const getCharacters = (characters) => ({
  type: Types.GET_CHARACTERS,
  payload: {
    characters,
  },
});
