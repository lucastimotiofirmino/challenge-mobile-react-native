import * as actionTypes from './actionTypes'

const initialState: FavoriteState = {
  favorites: []
}

const reducer = (
  state: FavoriteState = initialState,
  action: FavoriteAction
): FavoriteState => {
  switch (action.type) {

    case actionTypes.ADD_FAVORITE:
      const newFavorite: InterfaceFavorite = {
        id: action.favorite.id
      }
      return {
        ...state,
        favorites: state.favorites.concat(newFavorite)
      }

    case actionTypes.REMOVE_FAVORITE:
      const updatedFavorites: InterfaceFavorite[] = state.favorites.filter(
        favorite => favorite.id !== action.favorite.id
      )
      return {
        ...state,
        favorites: updatedFavorites
      }
  }

  return state
}

export default reducer