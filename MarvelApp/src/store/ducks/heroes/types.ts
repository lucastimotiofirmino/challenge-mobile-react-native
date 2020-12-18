
/**
 * Action Types
 */
export enum HeroesTypes {
  LOAD_REQUEST = '@favorites/LOAD_REQUEST',
  LOAD_SUCCESS = '@favorites/LOAD_SUCCESS',
  LOAD_FAILURE = '@favorites/LOAD_FAILURE',
}

/**
 * Data Types
 */
export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Heroes {
  id: number;
  thumbnail: Thumbnail;
}

export interface HeroesState {
  readonly data: Heroes[];
  readonly loading: boolean;
  readonly error: boolean;
}

export interface HeroesFavorites {
  readonly data: Heroes[];
}
