import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  fetching: boolean
  error: boolean
  offset: number
  limit: number
  selectedCharacterId: string
  characterName: string
}

const initialState: State = {
  fetching: false,
  error: false,
  offset: 0,
  limit: 20,
  selectedCharacterId: '',
  characterName: ''
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
    },
    selectCharacter: (state, action: PayloadAction<string>) => {
      state.selectedCharacterId = action.payload
    },
    setCharacterName: (state, action: PayloadAction<string>) => {
      state.characterName = action.payload
    },
    requestByName: (state) => {
      state.fetching = true
      state.error = false
    },
  }
})

export default charactersUiSlice
