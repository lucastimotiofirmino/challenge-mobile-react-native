import { Reducer } from 'redux'
import { FavoritesTypes } from './types'

const initial_state = {
    data: []
};

const reducer: Reducer<any> = (state = initial_state, action) => {
    switch (action.type) {

        case FavoritesTypes.STORE_FAVORITE: {
            return Object.assign({}, state, {
                data: state.data.concat(action.payload),
            })
        }
        
        case FavoritesTypes.REMOVE_FAVORITE:
            return Object.assign({}, state, {
                data: state.data.filter((item: any) => item !== action.payload),
            })
                
        default: {
            return state;
        }
    }
}

export default reducer;