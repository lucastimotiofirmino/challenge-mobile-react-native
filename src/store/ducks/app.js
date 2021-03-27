const CHARACTERS_SECTION_ID = 0;

const Types = {
  CHANGE_SECTIONS: 'CHANGE_SECTIONS',
};

const INITIAL_STATE = {
  section: CHARACTERS_SECTION_ID,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case Types.CHANGE_SECTIONS:
      return {
        section: payload.sectionId,
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
