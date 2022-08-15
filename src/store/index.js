import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers/movieSlice';
import userReducer from './reducers/userSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    users: userReducer,
  },
});
