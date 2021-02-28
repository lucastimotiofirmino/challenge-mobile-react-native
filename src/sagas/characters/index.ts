import { call, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'

import api from '../../services/api'

import { charactersActions } from '../../store/characters'

export function* fetchCharacters() {
   try {
      const response: AxiosResponse = yield call(
        () => api.get('/characters?ts=1&apikey=881c88e27f2ea86fac39d6ee4156fbd1&hash=f1b660c39d1bcd3047d0d241a5b86357&orderBy=name')
      )

      if (!response.data) {
        yield put(charactersActions.ui.error())
        return
      }

      const { data: characters } = response.data
      yield put(charactersActions.entity.set(characters))
      yield put(charactersActions.ui.success())
   } catch (error) {
      yield put(charactersActions.ui.error())
   }
}

