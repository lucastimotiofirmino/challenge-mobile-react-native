
import { apiMarvelLista } from '../util/util'

const prepareAction = str => {
    return {
        ACTION: str,
        SUCCESS: `SUCCESS_${str}`,
        FAILED: `FAILED_${str}`,
    }
}
const handleRes = res => {
    if (!res.ok) {
        console.log(`Error ${res.status}: ${res.statusText}`)
        throw new Error(res.statusText)
    }
    return res.json()
}
export const FETCH_HEROES = {
    URL: (offset = 0, filter = '',) => apiMarvelLista + `&offset=${offset}${filter ? '&nameStartsWith=' + filter : ''}`,
    ...prepareAction('FETCH_HEROES'),
}

export const getHeroes = (offset, filter) => fetch(FETCH_HEROES.URL(offset, filter)).then(handleRes)