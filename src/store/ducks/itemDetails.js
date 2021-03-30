import { CHARACTERS } from '~/constants/sections';

export const Types = {
  SEE_ITEM_DETAILS: 'SEE_ITEM_DETAILS',
  RESET: 'RESET',
};

const INITIAL_STATE = {
  item: null,
  section: CHARACTERS,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case Types.SEE_ITEM_DETAILS:
      return {
        item: payload.item,
        section: payload.section,
      };
    case Types.RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export const seeItemDetails = (item, section) => ({
  type: Types.SEE_ITEM_DETAILS,
  payload: {
    item,
    section,
  },
});

export const reset = () => ({
  type: Types.RESET,
});
