import { call, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'

import api from '../../services/api'

import { charactersActions } from '../../store/characters'

import { Characters } from '../../entities'

export function* fetchCharacters() {
   try {
      const response: AxiosResponse = yield call(
        () => api.get('/characters?ts=1&apikey=881c88e27f2ea86fac39d6ee4156fbd1&hash=f1b660c39d1bcd3047d0d241a5b86357&orderBy=name')
      )

      if (!response.data) {
        yield put(charactersActions.ui.error())
        return
      }

      const { results } = response.data.data

      // @ts-ignore
      const characters: Characters = results.reduce((items, item) => ({
         ...items,
         [item.id]: {
            id: item.id,
            name: item.name,
            description: item.description,
            thumbnail: item.thumbnail
         }
      }), {})

      yield put(charactersActions.entity.set(characters))
      yield put(charactersActions.ui.success())
   } catch (error) {
      yield put(charactersActions.ui.error())
   }
}

