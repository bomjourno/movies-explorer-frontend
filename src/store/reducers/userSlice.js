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

export const getUserMovies = createAsyncThunk(
  'user/getUserMovies',
  async function (_, { rejectWithValue, dispatch, getState }) {
    try {
      const user = getState().users.user;
      await mainApi.getSavedMovies().then((res) => {
        dispatch(
          setUserMovies(res.filter((movie) => movie.owner === user._id)),
        );
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getUserData = createAsyncThunk(
  'user/getUserData',
  async function (_, { rejectWithValue, dispatch, getState }) {
    try {
      await mainApi.getCurrentUser().then((res) => {
        dispatch(setUserInfo(res));
      });
      const user = getState().users.user;
      await mainApi.getSavedMovies().then((res) => {
        dispatch(
          setUserMovies(res.filter((movie) => movie.owner === user._id)),
        );
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  'user/logIn',
  async function ({ email, password }, { rejectWithValue, dispatch }) {
    try {
      await auth.login({ email, password });
      dispatch(logOn(true));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk(
  'user/addFavoriteMovie',
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await auth.logout();
      dispatch(logOn(false));

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addFavoriteMovie = createAsyncThunk(
  'user/addFavoriteMovie',
  async function (movie, { rejectWithValue, dispatch }) {
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
      await mainApi.saveMovie(body).then((movie) => {
        dispatch(addUserMovie(movie));
      });

    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeFavoriteMovie = createAsyncThunk(
  'user/removeFavoriteMovie',
  async function (id, { rejectWithValue, dispatch, getState }) {
    const savedMovies = getState().users.savedMovies;
    try {
      await mainApi.deleteMovie(id).then((res) => {
        dispatch(
          setUserMovies(savedMovies.filter((movie) => movie._id !== id)),
        );
      });
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
    isAuthorized: false,
    isRegistered: false,
    isLoading: false,
    error: '',
  },
  reducers: {
    logOn(state, action) {
      state.isAuthorized = action.payload;
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
    addUserMovie(state, action) {
      state.savedMovies.push(action.payload)
    },
    setStorageMovies(state, action) {
      state.storageMovies = action.payload;
    },
    deleteSavedMovies(state, action) {
      state.savedMovies = action.payload;
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
    [logIn.rejected]: (state, action) => {
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
  addUserMovie,
  getUser,
  deleteSavedMovies,
} = userSlice.actions;

export default userSlice.reducer;
