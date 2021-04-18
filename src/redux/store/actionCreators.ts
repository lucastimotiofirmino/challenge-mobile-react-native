import * as actionTypes from './actionTypes'

export function addFavorite(favorite: InterfaceFavorite) {
  const action: FavoriteAction = {
    type: actionTypes.ADD_FAVORITE,
    favorite
  }

  return actionFavorite(action)
}

export function removeFavorite(favorite: InterfaceFavorite) {
  const action: FavoriteAction = {
    type: actionTypes.REMOVE_FAVORITE,
    favorite
  }
  return actionFavorite(action)
}

export function actionFavorite(action: FavoriteAction) {
  return (dispatch: DispatchType) => {
    dispatch(action)
  }
}