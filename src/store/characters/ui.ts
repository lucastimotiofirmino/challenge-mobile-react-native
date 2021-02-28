import { createSlice } from '@reduxjs/toolkit'

interface State {
  fetching: boolean
  error: boolean
  offset: number
  limit: number
}

const initialState: State = {
  fetching: false,
  error: false,
  offset: 0,
  limit: 20
}

const charactersUiSlice = createSlice({
  name: 'characters/ui',
  initialState,
  reducers: {
    request: (state) => {
      state.fetching = true
      state.error = false
    },
    error: (state) => {
      state.fetching = false
      state.error = true
    },
    success: (state) => {
      state.fetching = false
      state.error = false
      state.offset += state.limit
    }
  }
})

export default charactersUiSlice
