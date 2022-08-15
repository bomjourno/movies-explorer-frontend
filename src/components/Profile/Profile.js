import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useFormWithValidation } from '../../hooks/hooks';
import { logOut, updateUserInfo } from '../../store/reducers/userSlice';
import Header from '../Header/Header';
import './Profile.css';

function Profile() {
  const dispatch = useDispatch();
  const {
    values, handleChange, errors, isValid, setValues, setIsValid,
  } = useFormWithValidation();
  const {
    user, success, error, isLoading,
  } = useSelector((state) => state.users);

  useEffect(() => {
    setValues(user);
  }, [user]);

  useEffect(() => {
    if ((values.name === user.name && values.email === user.email) || isLoading) {
      setIsValid(false);
    }
  }, [values, isLoading]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateUserInfo({ name: values.name, email: values.email }));
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
                className={classNames('profile__input', {
                  profile__input_error: errors.name,
                })}
                value={values.name}
                minLength={2}
                maxLength={30}
                pattern='[а-яА-Яa-zA-ZёË\- ]{1,}'
                onChange={handleChange}
              />
              <span className='profile__error-input'>{errors.name}</span>
            </label>
            <label className='profile__label'>
              E-mail
              <input
                name='email'
                type='email'
                className={classNames('profile__input', {
                  profile__input_error: errors.email,
                })}
                value={values.email}
                onChange={handleChange}
              />
              <span className='profile__error-input'>{errors.email}</span>
            </label>
            <button
              disabled={!isValid}
              type='submit'
              className={classNames('profile__button profile__button_submit', {
                profile__button_disable: !isValid,
              })}
            >
              Редактировать
            </button>
          </form>
          <div className='profile__footer'>
            {(error || success) && <span className={classNames('register__general', { register__general_error: error, register__general_success: success })}>{error || success}</span>}
            <button
              type='button'
              className='profile__button profile__button_logout'
              onClick={handleLogOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
