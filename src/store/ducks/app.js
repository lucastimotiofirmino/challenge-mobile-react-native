const CHARACTERS_SECTION_ID = 0;

export const Types = {
  CHANGE_SECTIONS: 'CHANGE_SECTIONS',
  SEARCH_BY_NAME: 'SEARCH_BY_NAME',
  RESET_NAME: 'RESET_NAME',
};

const INITIAL_STATE = {
  section: CHARACTERS_SECTION_ID,
  nameForSearch: '',
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case Types.CHANGE_SECTIONS:
      return {
        section: payload.sectionId,
        nameForSearch: '',
      };
    case Types.SEARCH_BY_NAME:
      return {
        ...state,
        nameForSearch: payload.name,
      };
    case Types.RESET_NAME:
      return {
        ...state,
        nameForSearch: '',
      };
    default:
      return state;
  }
}

export const changeSection = (sectionId) => ({
  type: Types.CHANGE_SECTIONS,
  payload: {
    sectionId,
  },
});

export const searchByName = (name) => ({
  type: Types.SEARCH_BY_NAME,
  payload: {
    name,
  },
});

export const resetSearchedName = () => ({
  type: Types.RESET_NAME,
});
