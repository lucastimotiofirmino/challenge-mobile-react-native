import {createSlice} from '@reduxjs/toolkit';

const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    offset: 0,
    total: 0,
    count: 0,
    data: [],
  },
  reducers: {
    setCharacters: (state, action) => {
      return {...state, ...action.payload};
    },
  },
});

export const {setCharacters} = characterSlice.actions;
export default characterSlice.reducer;
