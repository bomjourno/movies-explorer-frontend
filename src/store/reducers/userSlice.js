import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import auth from '../../utils/Api/Auth';
import mainApi from '../../utils/Api/MainApi';
import { moviesApiUrl } from '../../utils/constants';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async function ({ name, email, password }, { rejectWithValue, dispatch }) {
    try {
      const response = await auth
        .registration({ name, email, password })
        .then(() => {
          dispatch(signUp());
        });

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const authorizeUser = createAsyncThunk(
  'user/authorizeUser',
  async function ({ email, password }, { rejectWithValue, dispatch }) {
    try {
      const response = await auth.login({ email, password }).then((user) => {
        dispatch(setUserInfo(user));
        dispatch(logOn());
      });

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addFavoriteMovie = createAsyncThunk(
  'user/addFavoriteMovie',
  async function (movie, { rejectWithValue }) {
    const body = {
      movieId: movie.id,
      country: movie.country || 'Неизвестно',
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: moviesApiUrl + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: moviesApiUrl + movie.image.formats.thumbnail.url,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN || movie.nameRU,
    };
    try {
      const response = await mainApi.saveMovie(body);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    savedMovies: [],
    storageMovies: [],
    favoriteMovieForSearch: '',
    isAuthorized: false,
    isRegistered: false,
    isLoading: false,
    error: '',
  },
  reducers: {
    logOn(state) {
      state.isAuthorized = true;
    },
    signUp(state) {
      state.isRegistered = true;
    },
    setUserInfo(state, action) {
      state.user = action.payload;
    },
    setUserMovies(state, action) {
      state.savedMovies = action.payload;
    },
    setStorageMovies(state, action) {
      state.storageMovies = action.payload;
    },
    searchSavedMovie(state, action) {
      state.favoriteMovieForSearch = action.payload;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state) => {
      state.isLoading = false;
      state.error = '';
    },
    [registerUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [authorizeUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  signUp,
  logOn,
  setUserInfo,
  setUserMovies,
  setStorageMovies,
  searchSavedMovie,
} = userSlice.actions;

export default userSlice.reducer;
