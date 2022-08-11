import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../store/reducers/userSlice';
import Header from '../Header/Header';
import './Profile.css';

function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  const [userInfo, setUserInfo] = useState(user);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChangeName(e) {
    setUserInfo((prevVal) => ({ ...prevVal, name: e.target.value }));
  }

  function handleChangeEmail(e) {
    setUserInfo((prevVal) => ({ ...prevVal, email: e.target.value }));
  }

  function handleLogOut() {
    dispatch(logOut());
    if (localStorage.getItem('moviesLocalState')) {
      localStorage.removeItem('moviesLocalState');
    }
  }

  return (
    <>
      <Header />
      <section className='profile'>
        <div className='profile__container'>
          <h2 className='profile__title'>Привет, {user.name}!</h2>
          <form className='profile__form' onSubmit={handleSubmit}>
            <label className='profile__label'>
              Имя
              <input
                name='name'
                type='text'
                className='profile__input'
                value={userInfo.name}
                minLength={2}
                maxLength={30}
                onChange={handleChangeName}
              />
            </label>
            <label className='profile__label'>
              E-mail
              <input
                name='email'
                type='email'
                className='profile__input'
                value={userInfo.email}
                onChange={handleChangeEmail}
              />
            </label>
            <button
              type='submit'
              className='profile__button profile__button_submit'
            >
              Редактировать
            </button>
          </form>
          <button
            type='button'
            className='profile__button profile__button_logout'
            onClick={handleLogOut}
          >
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </>
  );
}

export default Profile;
