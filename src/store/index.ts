import { createStore, Store } from 'redux'
import { FavoritesState } from './favorites/types'

import rootReducer from './rootReducer'

export interface RootState {
    favorites: FavoritesState
}

const store: Store<FavoritesState> = createStore(rootReducer)

export default store