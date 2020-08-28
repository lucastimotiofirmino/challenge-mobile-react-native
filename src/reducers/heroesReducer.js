import { FETCH_HEROES, FAVORITE_HERO, UNFAVORITE_HERO} from '../constants'

const initialState = {
    data: {
        favorites: [],
    },
}

export default function heroesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_HEROES.ACTION:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_HEROES.SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    characters: payload,
                },
                isFetching: false,
                isFiltering: false,
            }
        case FETCH_HEROES.FAILED:
            return {
                ...state,
                errorMessage: payload,
                isFetching: false,
                isFiltering: false,
            }
        case FAVORITE_HERO.ACTION:
            const { favorites } = state.data
            favorites.push(payload)
            favorites.sort((fA, fB) => fA.name.localeCompare(fB.name))
            return {
                ...state,
                data: {
                    ...state.data,
                    favorites
                }
            }
        case UNFAVORITE_HERO.ACTION:
            return {
                ...state,
                data: {
                    ...state.data,
                    favorites: state.data.favorites.filter(fav => fav.id !== payload.id)
                }
            }
        default:
            return state
    }
}
