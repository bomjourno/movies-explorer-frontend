import { infoMessages, moviesApiUrl } from '../constants';

class MoviesApi {
  constructor(address) {
    this._address = address;
    this._headers = { 'Content-type': 'application/json' };
  }

  _handleResponse = (response) =>
    response.ok
      ? response.json()
      : response.json().then(() => {
        throw new Error(infoMessages.requestMoviesFailed);
      });;

  getMovies() {
    return fetch(`${this._address}/beatfilm-movies`).then(this._handleResponse);
  }
}

const moviesApi = new MoviesApi(moviesApiUrl);

export default moviesApi;
