export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Image;
}

export interface Image {
  path: string;
  extension: string;
}

export interface GetCharacterResult {
  data: Array<Character>;
  error: string | null;
}

export interface CharactersActionsType {
  type: string;
  payload: Array<Character> | number | string;
}

export interface CharactersStateType {
  characters: Array<Character>;
  loading: boolean;
}

export interface FavoritesActionsType {
  type: string;
  payload: Array<number>;
}

export interface FavoritesStateType {
  favorites: Array<number>;
  loading: boolean;
}
