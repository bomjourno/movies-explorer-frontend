import moviesApi from '../../utils/Api/MoviesApi';
import { movieSlice } from './movieSlice';

export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch(movieSlice.actions.moviesFetching());
    const response = await moviesApi.getMovies();
    dispatch(movieSlice.actions.moviesFetchingSuccess(response));
  } catch (e) {
    throw new Error(e);
  }
};

