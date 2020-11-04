export function loadFavoritesFromStorage(
  charactersFavorites: Marvel.Character[],
) {
  return {
    type: 'LOAD_FAVORITES_FROM_STORAGE',
    payload: {
      charactersFavorites,
    },
  };
}

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
