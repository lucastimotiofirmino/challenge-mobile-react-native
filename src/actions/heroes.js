import { FAVORITE_HERO, UNFAVORITE_HERO } from '../constants'

export const favoriteHero = hero => dispatch => {
    dispatch({
        type: FAVORITE_HERO.ACTION,
        payload: hero,
    })
}

export const unfavoriteHero = hero => dispatch => {
    dispatch({
        type: UNFAVORITE_HERO.ACTION,
        payload: hero,
    })
}
