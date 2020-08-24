import {combineReducers} from "redux";

import ClearReducer from "./clearReducer";
import ComicsReducer from './comicsReducer';
import FavoriteReducer from './favoriteReducer';
import CreatorsReducer from './creatorsReducer';

export default combineReducers({
    clear: ClearReducer,
    comics: ComicsReducer,
    favorite: FavoriteReducer,
    creators: CreatorsReducer
})
