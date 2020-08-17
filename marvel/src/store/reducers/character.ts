import Immutable from 'seamless-immutable';
import {
  ACTION_GET_CHARACTERS,
  ACTION_GET_FAVORITES,
} from '../actions/character';

const initialState = Immutable({
  characters: [],
  favorites: [],
});

export default function char(state = initialState, action: any) {
  switch (action.type) {
    case ACTION_GET_CHARACTERS:
      return state.merge({
        characters: action.payload,
      });
    case ACTION_GET_FAVORITES:
      return state.merge({
        favorites: action.payload,
      });
    default:
      return state;
  }
}

export const getCharactersData = (state: any) =>
  state.character && state.character.characters;

export const getMyFavorites = (state: any) =>
  state.character && state.character.favorites;
