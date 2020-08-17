import AsyncStorage from '@react-native-community/async-storage';

import { loadCharacters } from '../../services/character';

export const ACTION_GET_CHARACTERS = 'ACTION_GET_CHARACTERS:character';
export const ACTION_GET_FAVORITES = 'ACTION_GET_FAVORITES:character';

export const getCharacters = (offset: number) => {
  return async (dispatch: any, getState: any) => {
    const { data } = await loadCharacters(offset);
    const storedCharacter = getState().character;
    let mergeCharacters = data;

    if (storedCharacter && storedCharacter.length > 0) {
      mergeCharacters = [...getState().character, ...data];
    }

    dispatch({ type: ACTION_GET_CHARACTERS, payload: mergeCharacters });
  };
};

export const getFavorites = () => {
  return async (dispatch: any) => {
    const savedFavorites = await AsyncStorage.getItem('favorites');

    if (savedFavorites !== null) {
      dispatch({
        type: ACTION_GET_FAVORITES,
        payload: JSON.parse(savedFavorites),
      });
    }
  };
};
