export function addCharacterToFavorites(character: Marvel.Character) {
  return {
    type: 'ADD_CHARACTER_TO_FAVORITES',
    payload: {
      character,
    },
  };
}

export function removeCharacterFromFavorites(character: Marvel.Character) {
  return {
    type: 'REMOVE_CHARACTER_FROM_FAVORITES',
    payload: {
      character,
    },
  };
}
