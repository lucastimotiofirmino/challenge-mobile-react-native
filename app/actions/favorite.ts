import { IHero } from '../common/interfaces';
import { ADD_HERO_FAVORITE, REMOVE_HERO_FAVORITE } from '../types/heroes';

export const addHeroFavorite = (hero: IHero) => {
  return { type: ADD_HERO_FAVORITE, hero: { ...hero, favorite: true } };
};

export const removeHeroFavorite = (hero: IHero) => {
  return { type: REMOVE_HERO_FAVORITE, hero };
};
