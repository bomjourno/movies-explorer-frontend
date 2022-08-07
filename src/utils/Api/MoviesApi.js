import { moviesApiUrl } from '../constants';

class MoviesApi {
  constructor(address) {
    this._address = address;
    this._headers = { 'Content-type': 'application/json' };
  }

  _handleResponse = (response) =>
    response.ok
      ? response.json()
      : Promise.reject(`Error: ${response.message}`);

  getMovies() {
    return fetch(`${this._address}/beatfilm-movies`).then(this._handleResponse);
  }
}

const moviesApi = new MoviesApi(moviesApiUrl);

export default moviesApi;
