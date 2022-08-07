import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    savedMovies: [],
    isLoading: false,
    error: '',
  },
  reducers: {
    moviesFetching(state) {
      state.isLoading = true;
    },
    moviesFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = '';
      state.movies = action.payload;
    },
    moviesFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default movieSlice.reducer;
