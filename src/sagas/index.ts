import { all, takeLatest } from 'redux-saga/effects'
import { charactersActions } from '../store/characters'

import { fetchCharacters } from './characters'

export default function* root() {
  yield all([
    takeLatest(charactersActions.ui.request, fetchCharacters)
  ])
}
