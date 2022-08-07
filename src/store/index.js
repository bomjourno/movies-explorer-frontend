import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers/movieSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
