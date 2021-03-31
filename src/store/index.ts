import { createStore } from '@reduxjs/toolkit'
import FavReducer from './reducers/'

const store = createStore(FavReducer);

export default store;