import {Reducer} from 'redux';
import {FavoriteState, Favorites, FavoriteTypes} from './types';

const INITIAL_STATE: FavoriteState = {
  data: [],
};

// @ts-ignore
const reducer: Reducer<FavoriteState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavoriteTypes.ADD_FAVORITES:
      console.log(action);
      console.log('PASSOU NO LOAD');
      const list: FavoriteState = {...state};

      return {...state, data: list.data.concat(action.payload.data)};
    case FavoriteTypes.REMOVE_FAVORITES:
      console.log('PASSOU NO SUCCESS');
      return {
        ...state.data.splice(action.payload.index, 1),
      };
    default:
      return state;
  }
};

export default reducer;
