import { IHero } from '../common/interfaces';

export const RESET_HEROES = 'RESET_HEROES';
export const FETCH_BATCH_HEROES = 'FETCH_BATCH_HEROES';
export const FETCH_HEROES_TOTAL = 'FETCH_HEROES_TOTAL';

export const ADD_HERO_FAVORITE = 'ADD_HERO_FAVORITE';
export const REMOVE_HERO_FAVORITE = 'REMOVE_HERO_FAVORITE';

export interface HeroState {
  heroes: IHero[];
  favorites: IHero[];
  total: number;
  hasNext: boolean;
}

interface ResetHeroAction {
  type: typeof RESET_HEROES;
}

interface FetchHeroesAction {
  type: typeof FETCH_BATCH_HEROES;
  heroes: IHero[];
}

interface FetchTotalAction {
  type: typeof FETCH_HEROES_TOTAL;
  total: number;
  hasNext: boolean;
}

interface AddFavoriteAction {
  type: typeof ADD_HERO_FAVORITE;
  hero: IHero;
}

interface RemoveFavoriteAction {
  type: typeof REMOVE_HERO_FAVORITE;
  hero: IHero;
}

export type HeroActionTypes =
  | ResetHeroAction
  | FetchHeroesAction
  | FetchTotalAction
  | AddFavoriteAction
  | RemoveFavoriteAction;
