import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import auth from '../../utils/Api/Auth';
import mainApi from '../../utils/Api/MainApi';
import { infoMessages, moviesApiUrl } from '../../utils/constants';
import { handleMoviesError } from './movieSlice';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async function ({ name, email, password }, { rejectWithValue, dispatch }) {
    try {
      const response = await auth
        .registration({ name, email, password })
        .then(({ email }) => {
          auth.login({ email, password }).then(() => {
            dispatch(logOn(true));
          });
        });

      return response;
    } catch (error) {
      setTimeout(() => {
        dispatch(handleUserError(''));
      }, 3000);
      return rejectWithValue(error.message);
    }
  },
);

export const getUserData = createAsyncThunk(
  'user/getUserData',
  async function (_, { rejectWithValue, dispatch, getState }) {
    try {
      await mainApi
        .getCurrentUser()
        .then((res) => {
          dispatch(setUserInfo(res));
        })
        .catch(() => {
          if (getState().users.user) {
            dispatch(
              handleMoviesError(
                `Невозможно получить данные о пользователе, выход из системы через 5 секунд`,
              ),
            );
            setTimeout(() => {
              dispatch(logOn(false));
              dispatch(handleMoviesError(''));
            }, 5000);
          }
        });
      const user = getState().users.user;
      await mainApi
        .getSavedMovies()
        .then((res) => {
          dispatch(
            setUserMovies(res.filter((movie) => movie.owner === user._id)),
          );
        })
        .catch(() =>
          dispatch(handleUserError(infoMessages.requestMoviesFailed)),
        );
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  'user/logIn',
  async function ({ email, password }, { rejectWithValue, dispatch }) {
    try {
      await auth.login({ email, password }).then(() => {
        dispatch(logOn(true));
      });
    } catch (error) {
      setTimeout(() => {
        dispatch(handleUserError(''));
      }, 3000);
      return rejectWithValue(error.message);
    }
  },
);

export const updateUserInfo = createAsyncThunk(
  'user/updateUserInfo',
  async function ({ email, name }, { rejectWithValue, dispatch }) {
    try {
      await mainApi.updateUser({ email, name }).then((res) => {
        console.log(res);
        dispatch(setUserInfo(res));
        setTimeout(() => {
          dispatch(handleUserSuccess(''));
        }, 3000);
      });
    } catch (error) {
      setTimeout(() => {
        dispatch(handleUserError(''));
      }, 3000);
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
      await mainApi
        .saveMovie(body)
        .then((movie) => {
          dispatch(addUserMovie(movie));
        })
        .catch(() => {
          dispatch(handleMoviesError(infoMessages.requestMoviesFailed));
          setTimeout(() => {
            dispatch(handleMoviesError(''));
          }, 5000);
        });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeFavoriteMovie = createAsyncThunk(
  'user/removeFavoriteMovie',
  async function ({ id, location }, { rejectWithValue, dispatch, getState }) {
    const savedMovies = getState().users.savedMovies;
    try {
      await mainApi
        .deleteMovie(id)
        .then((res) => {
          dispatch(
            setUserMovies(savedMovies.filter((movie) => movie._id !== id)),
          );
        })
        .catch(() => {
          console.log(location);
          if (location === '/movies') {
            dispatch(handleMoviesError(infoMessages.requestMoviesFailed));
            setTimeout(() => {
              dispatch(handleMoviesError(''));
            }, 5000);
          } else {
            dispatch(handleUserError(infoMessages.requestMoviesFailed));
            setTimeout(() => {
              dispatch(handleUserError(''));
            }, 5000);
          }
        });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: '', password: '', email: '' },
    savedMovies: [],
    isAuthorized: false,
    isLoading: false,
    error: '',
    success: '',
  },
  reducers: {
    logOn(state, action) {
      state.isAuthorized = action.payload;
    },
    setUserInfo(state, action) {
      state.user = action.payload;
    },
    setUserMovies(state, action) {
      state.savedMovies = action.payload;
    },
    addUserMovie(state, action) {
      state.savedMovies.push(action.payload);
    },
    setStorageMovies(state, action) {
      state.storageMovies = action.payload;
    },
    deleteSavedMovies(state, action) {
      state.savedMovies = action.payload;
    },
    handleUserError(state, action) {
      state.error = action.payload;
    },
    handleUserSuccess(state, action) {
      state.success = action.payload;
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
    [updateUserInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUserInfo.fulfilled]: (state) => {
      state.success = infoMessages.successUpdateUserInfo;
      state.isLoading = false;
    },
    [updateUserInfo.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [logIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getUserData.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  logOn,
  setUserInfo,
  setUserMovies,
  setStorageMovies,
  addUserMovie,
  getUser,
  deleteSavedMovies,
  handleUserError,
  handleUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
