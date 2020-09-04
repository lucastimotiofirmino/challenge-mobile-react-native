import { Dispatch } from 'redux';

import { SET_FAVORITE, DELETE_FAVORITE } from './actionTypes';

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

export const postFavorites = (favorite: Data) => {

    return (dispatch: Dispatch) => {
        dispatch({
            type: SET_FAVORITE,
            payload: favorite
        })
    }
}

export const deleteFavorites = (favorite: Data) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: DELETE_FAVORITE,
            payload: favorite
        })
    }
}

