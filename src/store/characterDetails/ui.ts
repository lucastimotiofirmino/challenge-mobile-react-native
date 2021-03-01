import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  fetching: boolean
  error: boolean
}

const initialState: State = {
  fetching: false,
  error: false
}

const characterDetailsUiSlice = createSlice({
  name: 'characterDetails/ui',
  initialState,
  reducers: {
    requestSeries: (state) => {
      state.fetching = true
      state.error = false
    },
    requestEvents: (state) => {
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

export default characterDetailsUiSlice
