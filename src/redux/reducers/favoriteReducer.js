import {FAVORITE_ADD, FAVORITE_CLEAR, FAVORITE_CREATE} from '../../constants/actionsType';

export default (state = [], action) => {

    switch (action.type) {
        case FAVORITE_CLEAR :
            return {};
        case FAVORITE_ADD :
            if(state.some(el => el === action.payload))
                return state;
            else
                return state.concat(action.payload);
        default:
            return state;
    }
};
