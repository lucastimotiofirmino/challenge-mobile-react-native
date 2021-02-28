import { call, put, select } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'

import api from '../../services/api'

import { charactersActions } from '../../store/characters'

import { Character, Characters } from '../../entities'

export function* fetchCharacters() {
   try {
      const { offset, limit } = yield select(state => state.ui.characters)

      const response: AxiosResponse = yield call(
        () => api.get(`/characters?orderBy=name&offset=${offset}&limit=${limit}&ts=1&apikey=881c88e27f2ea86fac39d6ee4156fbd1&hash=f1b660c39d1bcd3047d0d241a5b86357`)
      )

      if (!response.data) {
        yield put(charactersActions.ui.error())
        return
      }

      const characters: Characters = response.data.data.results.map((item: Character) => ({
         id: item.id,
         name: item.name,
         description: item.description,
         thumbnail: item.thumbnail
      }))

      yield put(charactersActions.entity.set(characters))
      yield put(charactersActions.ui.success())
   } catch (error) {
      yield put(charactersActions.ui.error())
   }
}

