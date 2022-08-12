import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import moviesApi from '../../utils/Api/MoviesApi';

export const fetchMovies = createAsyncThunk(
  'movie/fetchMovies',
  async function (_, { rejectWithValue }) {
    try {
      const response = await moviesApi.getMovies();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
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
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.movies = action.payload;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { searchMovie, toggleShortMovies, loadDataStorage, handleMoviesError } = movieSlice.actions;

export default movieSlice.reducer;
