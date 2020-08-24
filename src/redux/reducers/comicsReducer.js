import _ from 'lodash';
import {COMICS_FETCH, COMIC_FETCH, COMIC_CLEAR} from '../../constants/actionsType';

export default (state = {}, action) => {

    switch (action.type) {
        case COMIC_FETCH :
            return {...state, [action.payload.id]: action.payload};
        case COMIC_CLEAR :
            return {};
        case COMICS_FETCH :
            return _.mapKeys(action.payload, 'id');
        default:
            return state;
    }
};
