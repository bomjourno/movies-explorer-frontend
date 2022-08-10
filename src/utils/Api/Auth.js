import { backendApiUrl, resMessages } from '../constants';

class Auth {
  constructor(address) {
    this._address = address;
    this._headers = {
      'Content-type': 'application/json',
    };
  }

  _handleResponse = (response) =>
    response.ok
      ? response.json()
      : response.json().then(() => {
          throw new Error(resMessages[response.status]);
        });

  registration({ name, email, password }) {
    return fetch(`${this._address}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then(this._handleResponse);
  }

  login({ email, password }) {
    return fetch(`${this._address}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  }

  // authentication() {
  //   return fetch(`${this._address}/users/me`, {
  //     method: 'GET',
  //     credentials: 'include',
  //     headers: this._headers,
  //   }).then(this._handleResponse);
  // }

  logout() {
    return fetch(`${this._address}/signout`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

const auth = new Auth(backendApiUrl);

export default auth;
