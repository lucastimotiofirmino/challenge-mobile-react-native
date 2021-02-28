import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Characters } from '../../entities'

const initialState: Characters = []

const charactersEntitySlice = createSlice({
  name: 'characters/entity',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Characters>) => {
      state.push(...action.payload)
    }
  }
})

export default charactersEntitySlice
