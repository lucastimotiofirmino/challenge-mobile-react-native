import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'

import { Characters } from '../../entities'

type State = Characters | null

const initialState: State = null

const charactersEntitySlice = createSlice<State, SliceCaseReducers<State>>({
  name: 'characters/entity',
  initialState,
  reducers: {
    set: (_, action: PayloadAction<Characters>) => action.payload
  }
})

export default charactersEntitySlice
