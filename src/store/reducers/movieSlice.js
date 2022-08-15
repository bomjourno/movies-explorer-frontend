import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import moviesApi from '../../utils/Api/MoviesApi';

export const fetchMovies = createAsyncThunk(
  'movie/fetchMovies',
  async function (_, { dispatch }) {
    await moviesApi
      .getMovies()
      .then((res) => dispatch(saveMovies(res)))
      .catch((err) => dispatch(handleMoviesError(err.message)));
  },
);

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    error: '',
    movieForSearch: '',
    isLoading: false,
    isShortMovie: false,
  },
  reducers: {
    searchMovie(state, action) {
      state.movieForSearch = action.payload;
    },
    toggleShortMovies(state, action) {
      state.isShortMovie = action.payload;
    },
    loadDataStorage(state, action) {
      state.movieForSearch = action.payload.movieForSearch;
      state.movies = action.payload.movies;
      state.isShortMovie = action.payload.isShortMovie;
    },
    handleMoviesError(state, action) {
      state.error = action.payload;
    },
    saveMovies(state, action) {
      state.movies = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMovies.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [fetchMovies.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  searchMovie,
  toggleShortMovies,
  loadDataStorage,
  handleMoviesError,
  saveMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
