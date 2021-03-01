import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Characters } from '../../entities'

const initialState: Characters = []

const charactersEntitySlice = createSlice({
  name: 'characters/entity',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Characters>) => {
      state.push(...action.payload)
    },
    set: (state, action: PayloadAction<Characters>) => action.payload
  }
})

export default charactersEntitySlice
