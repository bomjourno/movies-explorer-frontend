import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';
import { registerUser } from '../../store/reducers/userSlice';

function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isRegistered, isAuthorized } = useSelector((state) => state.users);

  useEffect(() => {
    if (isRegistered && isAuthorized === false) {
      navigate('/sign-in');
    }
  }, [isRegistered]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      registerUser({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      }),
    );
  }

  function handleChangeName(e) {
    setUserData((prevVal) => ({ ...prevVal, name: e.target.value }));
  }

  function handleChangeEmail(e) {
    setUserData((prevVal) => ({ ...prevVal, email: e.target.value }));
  }

  function handleChangePassword(e) {
    setUserData((prevVal) => ({ ...prevVal, password: e.target.value }));
  }

  return (
    <section className='register'>
      <div className='register__header'>
        <img className='register__logo' src={logo} alt='Логотип' />
        <h2 className='register__title'>Добро пожаловать!</h2>
      </div>
      <form className='register__form' onSubmit={handleSubmit}>
        <label className='register__label'>
          <input
            name='name'
            type='text'
            className='register__input'
            value={userData.name}
            minLength={2}
            maxLength={30}
            onChange={handleChangeName}
          />
        </label>
        <label className='register__label'>
          <input
            name='email'
            type='email'
            className='register__input'
            value={userData.email}
            onChange={handleChangeEmail}
          />
        </label>
        <label className='register__label'>
          <input
            name='password'
            type='password'
            className='register__input'
            value={userData.password}
            minLength={8}
            onChange={handleChangePassword}
          />
        </label>
        <button className='register__button' type='submit'>
          Зарегистрироваться
        </button>
      </form>
      <div className='register__link-container'>
        <p className='register__link-text'>Уже зарегестрированны?&nbsp;</p>
        <Link to='/sign-in' className='register__link'>
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
