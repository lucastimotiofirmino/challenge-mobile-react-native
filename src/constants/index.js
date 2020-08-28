//import {PUBLIC_KEY, PRIVATE_KEY} from 'react-native-dotenv'

import {prepareAction} from '../utils'
import md5 from 'md5'

const PUBLIC_KEY = 'ffb00cdd61520e838893e52f34976e39'
const PRIVATE_KEY = '7c6a820c7bfeb5f7eda51bb029605ad1f5346fc2'

const HOST = 'http://gateway.marvel.com'
const TS = 1
const HASH = md5(TS + PRIVATE_KEY + PUBLIC_KEY)

export const FETCH_HEROES = {
    URL: (offset = 0, filter = '', ) => `${HOST}/v1/public/characters?apikey=${PUBLIC_KEY}&ts=${TS}&hash=${HASH}&limit=40&offset=${offset}${filter ? '&nameStartsWith=' + filter : ''}`,
    ...prepareAction('FETCH_HEROES'),
}

export const FETCH_HERO_EVENTS = {
    URL: heroId => `${HOST}/v1/public/characters/${heroId}/events?apikey=${PUBLIC_KEY}&ts=${TS}&hash=${HASH}`,
    ...prepareAction('FETCH_HERO_EVENTS'),
}

export const FETCH_HERO_SERIES = {
    URL: heroId => `${HOST}/v1/public/characters/${heroId}/series?apikey=${PUBLIC_KEY}&ts=${TS}&hash=${HASH}`,
    ...prepareAction('FETCH_HERO_SERIES'),
}

export const FAVORITE_HERO = {
    ...prepareAction('FAVORITE_HERO'),
}

export const UNFAVORITE_HERO = {
    ...prepareAction('UNFAVORITE_HERO'),
}
