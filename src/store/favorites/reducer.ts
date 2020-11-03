export default function favorites(
  state: Redux.State['favorites'] = [],
  action: Redux.Action,
): Marvel.Character[] {
  switch (action.type) {
    case 'ADD_CHARACTER_TO_FAVORITES': {
      const {character} = action.payload;
      const index = state.findIndex((item) => item.id === character.id);
      return index >= 0 ? state : [...state, character];
    }
    case 'REMOVE_CHARACTER_FROM_FAVORITES': {
      const {character} = action.payload;
      const index = state.findIndex((item) => item.id === character.id);
      index >= 0 && state.splice(index, 1);
      return [...state];
    }
    default: {
      return state;
    }
  }
}
