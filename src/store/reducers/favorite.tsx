import { SET_FAVORITE, DELETE_FAVORITE } from '../actions/actionTypes';

interface Common {
    available: number;
    collectionURI: string;
    items: any;
    returned: number;
}

interface Data {
    id: number;
    name: string;
    empty: boolean;
    description: string;
    modified: string;
    thumbnail: { path: string; extension: string };
    resourceURI: string;
    comics: Common;
    series: Common;
    stories: Common;
    events: Common;
    urls: Array<[{ type: string; url: string }]>;
}

const initialState = {
    favorites: Array<Data>()
}

type Action = {
    type: string;
    payload: Data;
}

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case SET_FAVORITE:
            console.log("============add", action.payload)
            var newfavorite = state.favorites
            newfavorite.push(action.payload)
            console.log("============add new favorite", newfavorite)
            return {
                ...state,
                favorites: newfavorite
            }
        case DELETE_FAVORITE:
            var index = state.favorites.lastIndexOf(action.payload)
            console.log("============remove index", index)
           
            var newFavorites = state.favorites.splice(index, 1)
            console.log("============remove newFavorites", newFavorites)
            return {
                ...state,
                favorites: newFavorites
            }
        default:
            return state
    }
}

export default reducer
