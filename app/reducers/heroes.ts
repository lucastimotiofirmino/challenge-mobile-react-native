import {
  RESET_HEROES,
  FETCH_BATCH_HEROES,
  FETCH_HEROES_TOTAL,
  ADD_HERO_FAVORITE,
  REMOVE_HERO_FAVORITE,
  HeroState,
  HeroActionTypes,
} from '../types/heroes';

const initialState: HeroState = {
  favorites: [],
  heroes: [],
  total: 0,
  hasNext: true,
};

const heroes = (state = initialState, action: HeroActionTypes): HeroState => {
  switch (action.type) {
    case RESET_HEROES: {
      return {
        ...state,
        heroes: [],
        total: 0,
        hasNext: true,
      };
    }
    case FETCH_HEROES_TOTAL: {
      return {
        ...state,
        total: action.total,
        hasNext: action.hasNext,
      };
    }
    case FETCH_BATCH_HEROES: {
      const mergeOldWithNew = [...state.heroes, ...action.heroes];
      const hereoesWithoutDuplicates = mergeOldWithNew.filter(
        (item, index, array) =>
          array.findIndex((searchItem) => searchItem.id === item.id) === index,
      );

      return {
        ...state,
        heroes: hereoesWithoutDuplicates.map((hero) => {
          return {
            ...hero,
            // normalize the hero thumbnail
            avatar: `${hero.thumbnail?.path}.${hero.thumbnail?.extension}`,
            numEvents: hero.events?.available
              ? Number(hero.events.available)
              : 0,
            // recover and set favorite
            favorite: Boolean(
              state.favorites.find(
                (heroFavorite) => heroFavorite.id === hero.id,
              ),
            ),
          };
        }),
      };
    }

    case ADD_HERO_FAVORITE: {
      return {
        ...state,
        favorites: [...[action.hero], ...state.favorites],
        heroes: state.heroes.map((hero) => {
          return {
            ...hero,
            ...(hero.id === action.hero.id && { favorite: true }),
          };
        }),
      };
    }

    case REMOVE_HERO_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter((hero) => hero.id !== action.hero.id),
        heroes: state.heroes.map((hero) => {
          return {
            ...hero,
            ...(hero.id === action.hero.id && { favorite: false }),
          };
        }),
      };
    }
    default: {
      return state;
    }
  }
};
export default heroes;
