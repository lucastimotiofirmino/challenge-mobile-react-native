import {configureStore} from '@reduxjs/toolkit';
import reduces from './slices';

const store = configureStore({
  reducer: reduces,
});

export default store;
