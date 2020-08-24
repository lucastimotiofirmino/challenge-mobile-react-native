import {COMICS_FETCH} from "../../constants/actionsType";
import api from "../../service/api";
import {processRequestError} from "../../utils/_helpers";

export const fetchComics = (callback, fawBack) => async (dispatch) => {
    await api.get("/comics?ts=1&apikey=17dd4b8faf0f00eeeb6633eaaf7774bc&hash=44d49ea637270c4b188070acb9d4abb8").then(response => {
      dispatch({type: COMICS_FETCH, payload: response.data.data.results});
      callback && callback(response.data.data.results);
    }).catch(reject => {
        fawBack && fawBack();
        processRequestError(reject, dispatch)
    });
};
