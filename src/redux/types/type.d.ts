interface InterfaceFavorite {
  id: string
}

type FavoriteState = {
  favorites: InterfaceFavorite[]
}

type FavoriteAction = {
  type: string
  favorite: InterfaceFavorite
}

type DispatchType = (args: FavoriteAction) => FavoriteAction