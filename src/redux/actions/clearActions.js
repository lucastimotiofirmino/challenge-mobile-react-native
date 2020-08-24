import {AUTH_LOGOUT, AUTH_CLEAR, COMICS_CLEAR, CREATORS_CLEAR} from "../../constants/actionsType";
import {processRequestError} from "../../utils/_helpers";

export const authLogout = (callback, fawBack) => async dispatch => {
    try {
        dispatch({type: AUTH_LOGOUT})
        await removeItemValue(dispatch, callback, fawBack);
    } catch (reject) {
        fawBack && fawBack();
        processRequestError(reject, dispatch)
    }
}

async function removeItemValue(dispatch, callback, fawBack) {
    try {
        dispatch({type: AUTH_CLEAR});
        dispatch({type: COMICS_CLEAR });
        dispatch({type: CREATORS_CLEAR });

        callback && callback();
        return true;
    }
    catch(e) {
        fawBack && fawBack();
        console.log(e.message);
        return false;
    }
}
