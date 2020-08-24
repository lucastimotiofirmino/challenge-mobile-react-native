import {AUTH_CLEAR, AUTH_LOGOUT} from "../../constants/actionsType";

export default (state = {}, action) => {

    switch (action.type) {
        case AUTH_LOGOUT :
            return { ...state, error: {} };
        case AUTH_CLEAR :
            return {}
        default:
            return state;
    }
};
