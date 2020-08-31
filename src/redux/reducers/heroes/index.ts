import * as types from '../../actions/heroes/types';
import { HeroesStateType, HeroesActionsType } from '../../actions/heroes/types';

const initialState: HeroesStateType = {
  heroes: [],
  loading: false,
  errorMessage: '',
};

export default (state = initialState, action: HeroesActionsType) => {
  switch (action.type) {
    case types.LOAD_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };
    }
    case types.LOAD_SUCCESS: {
      return {
        ...state,
        heroes: action.payload as [],
        loading: false,
        errorMessage: '',
      };
    }
    case types.LOAD_MORE_SUCCESS: {
      return {
        ...state,
        heroes: [...state.heroes, ...(action.payload as [])],
        loading: false,
      };
    }
    case types.LOAD_ERROR: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
};
