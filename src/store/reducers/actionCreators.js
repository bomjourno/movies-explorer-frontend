import moviesApi from '../../utils/Api/MoviesApi';
import { movieSlice } from './movieSlice';

const fetchMovies = () => async (dispatch) => {
  try {
    dispatch(movieSlice.actions.moviesFetching());
    const response = await moviesApi.getMovies();
    dispatch(movieSlice.actions.moviesFetchingSuccess(response));
  } catch (e) {
    console.log(e);
  }
};

export default fetchMovies;
