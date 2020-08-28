import { FETCH_HEROES, FETCH_HERO_EVENTS, FETCH_HERO_SERIES } from '../constants'
import { handleRes } from '../utils'

export const getHeroes = (offset, filter) => fetch(FETCH_HEROES.URL(offset, filter)).then(handleRes)

export const getHeroEvents = (heroId) => fetch(FETCH_HERO_EVENTS.URL(heroId)).then(handleRes)

export const getHeroSeries = (heroId) => fetch(FETCH_HERO_SERIES.URL(heroId)).then(handleRes)
