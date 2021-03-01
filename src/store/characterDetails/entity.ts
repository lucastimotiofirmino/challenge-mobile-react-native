import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SeriesList, Events } from '../../entities'

type State = {
  series: SeriesList
  events: Events
}

const initialState: State = {
  series: [],
  events: []
}

const characterDetailsEntitySlice = createSlice({
  name: 'characterDetails/entity',
  initialState,
  reducers: {
    setSeries: (state, action: PayloadAction<SeriesList>) => {
      state.series.push(...action.payload)
    },
    setEvents: (state, action: PayloadAction<Events>) => {
      state.events.push(...action.payload)
    }
  }
})

export default characterDetailsEntitySlice
