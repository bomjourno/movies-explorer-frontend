import { backendApiUrl, resMessages } from '../constants';

class MainApi {
  constructor(address) {
    this._address = address;
    this._headers = {
      'Content-type': 'application/json',
    };
  }

  _handleResponse = (response) =>
    response.ok
      ? response.json()
      : Promise.reject(resMessages[response.status]);

  getCurrentUser() {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  getSavedMovies() {
    return fetch(`${this._address}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  saveMovie(body) {
    return fetch(`${this._address}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._handleResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._address}/movies/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

const mainApi = new MainApi(backendApiUrl);

export default mainApi;
