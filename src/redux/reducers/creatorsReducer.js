import _ from 'lodash';
import {CREATORS_CLEAR, CREATORS_FETCH} from '../../constants/actionsType';

export default (state = {}, action) => {

    switch (action.type) {
        case CREATORS_CLEAR :
            return {};
        case CREATORS_FETCH :
            return _.mapKeys(action.payload, 'id');
        default:
            return state;
    }
};
