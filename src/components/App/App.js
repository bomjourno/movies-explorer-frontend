import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Route, Routes, useNavigate, useLocation,
} from 'react-router-dom';
import {
  logOn,
  setStorageMovies,
  setUserInfo,
  setUserMovies,
} from '../../store/reducers/userSlice';
import mainApi from '../../utils/Api/MainApi';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthorized } = useSelector((state) => state.users);

  // function checkDataInStorage() {
  //   const moviesLocalState = JSON.parse(
  //     localStorage.getItem('moviesLocalState'),
  //   );
  //   if (moviesLocalState) {
  //     dispatch(setStorageMovies(moviesLocalState));
  //   }
  // }

  useEffect(() => {
    if (!isAuthorized) {
      mainApi.getCurrentUser().then((res) => {
        dispatch(logOn());
        dispatch(setUserInfo(res));
        navigate(location.pathname);
      }).catch(() => console.log('Пользователь не авторизован'));
    }
  }, [isAuthorized]);

  useEffect(() => {
    if (isAuthorized) {
      mainApi.getSavedMovies().then((res) => {
        dispatch(setUserMovies(res));
      });
    }
  }, [isAuthorized]);

  return (
    <div className='page'>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/movies' element={<ProtectedRoute />}>
          <Route path='/movies' element={<Movies />} />
        </Route>
        <Route path='/saved-movies' element={<ProtectedRoute />}>
          <Route path='/saved-movies' element={<SavedMovies />} />
        </Route>
        <Route path='/profile' element={<ProtectedRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
