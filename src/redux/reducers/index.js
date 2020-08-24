import {combineReducers} from "redux";

import ClearReducer from "./clearReducer";
import ComicsReducer from './comicsReducer';

export default combineReducers({
    clear: ClearReducer,
    comics: ComicsReducer
})
