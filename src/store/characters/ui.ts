import { createSlice } from '@reduxjs/toolkit'

interface State {
  fetching: boolean
  error: boolean
}

const initialState: State = {
  fetching: false,
  error: false
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
    }
  }
})

export default charactersUiSlice
