import { createSlice } from '@reduxjs/toolkit';
import { MAX_DURATION_SHORT_MOVIES } from '../../utils/constants';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    savedMovies: [],
    error: '',
    movieForSearch: '',
    isLoading: false,
    isShortMovie: false,
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
    searchingMovie(state, action) {
      state.movieForSearch = action.payload;
    },
    toggleShortMovies(state, action) {
      state.isShortMovie = action.payload;
    },
    saveMovie(state, action) {
      state.savedMovies = action.payload;
    }
  },
});

export default movieSlice.reducer;
