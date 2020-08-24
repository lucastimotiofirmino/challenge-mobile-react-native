import {FAVORITE_ADD} from "../../constants/actionsType";

export const postFavorite = (comic_id) => async dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(comic_id));
    }, 2000);
}

export const addFavorite = (comic_id, callback, fawBack) => ({
    type: FAVORITE_ADD,
    payload: comic_id
})
