import { call, put, select } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'

import api from '../../services/api'

import { characterDetailsActions } from '../../store/characterDetails'

import { Series, SeriesList, Event, Events } from '../../entities'

export function* fetchCharacterSeries() {
   try {
      const { selectedCharacterId } = yield select(state => state.ui.characters)

      const response: AxiosResponse = yield call(
        () => api.get(`/characters/${selectedCharacterId}/series?ts=1&apikey=881c88e27f2ea86fac39d6ee4156fbd1&hash=f1b660c39d1bcd3047d0d241a5b86357`)
      )

      if (!response.data) {
        yield put(characterDetailsActions.ui.error())
        return
      }

      const series: SeriesList = response.data.data.results.map((item: Series) => ({
         id: item.id,
         title: item.title,
         description: item.description,
         startYear: item.startYear,
         endYear: item.endYear,
         thumbnail: item.thumbnail
      }))

      yield put(characterDetailsActions.entity.setSeries(series))
      yield put(characterDetailsActions.ui.success())
   } catch (error) {
      yield put(characterDetailsActions.ui.error())
   }
}

export function* fetchCharacterEvents() {
   try {
      const { selectedCharacterId } = yield select(state => state.ui.characters)

      const response: AxiosResponse = yield call(
        () => api.get(`/characters/${selectedCharacterId}/events?ts=1&apikey=881c88e27f2ea86fac39d6ee4156fbd1&hash=f1b660c39d1bcd3047d0d241a5b86357`)
      )

      if (!response.data) {
        yield put(characterDetailsActions.ui.error())
        return
      }

      const events: Events = response.data.data.results.map((item: Event) => ({
         id: item.id,
         title: item.title,
         description: item.description,
         start: item.start,
         end: item.end,
         thumbnail: item.thumbnail
      }))

      yield put(characterDetailsActions.entity.setEvents(events))
      yield put(characterDetailsActions.ui.success())
   } catch (error) {
      yield put(characterDetailsActions.ui.error())
   }
}
