export const ADD_HERO_FAVORITE = 'ADD_HERO_FAVORITE';
export const REMOVE_HERO_FAVORITE = 'REMOVE_HERO_FAVORITE';

export const addHeroFavorite = ({ hero }) => {
  return { type: ADD_HERO_FAVORITE, hero: { ...hero, favorite: true } };
};

export const removeHeroFavorite = ({ hero }) => {
  return { type: REMOVE_HERO_FAVORITE, hero };
};
