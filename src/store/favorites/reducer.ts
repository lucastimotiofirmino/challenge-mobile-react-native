import AsyncStorage from '@react-native-community/async-storage';

export default function favorites(
  state: Redux.State['favorites'] = [],
  action: Redux.Action,
): Marvel.Character[] {
  function getIndex(id: number) {
    return state.findIndex((item) => item.id === id);
  }

  async function saveFavorites(data: Marvel.Character[]) {
    try {
      await AsyncStorage.setItem('@MarvelApp:favorites', JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  switch (action.type) {
    case 'LOAD_FAVORITES_FROM_STORAGE': {
      const {charactersFavorites} = action.payload;
      return charactersFavorites;
    }
    case 'ADD_CHARACTER_TO_FAVORITES': {
      const {character} = action.payload;

      const index = getIndex(character.id);
      const isNotFavorite = index === -1;

      if (isNotFavorite) {
        saveFavorites([...state, character]);
        return [...state, character];
      }

      return state;
    }
    case 'REMOVE_CHARACTER_FROM_FAVORITES': {
      const {character} = action.payload;

      const index = getIndex(character.id);
      const isFavorite = index >= 0;

      if (isFavorite) {
        state.splice(index, 1);
        saveFavorites([...state]);
        return [...state];
      }

      return state;
    }
    default: {
      return state;
    }
  }
}
