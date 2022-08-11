import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';
import { logIn } from '../../store/reducers/userSlice';

function Login() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthorized, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (isAuthorized) {
      navigate('/movies');
    }
  }, [isAuthorized]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      logIn({ email: userData.email, password: userData.password }),
    );
  }

  function handleChangeEmail(e) {
    setUserData((prevVal) => ({ ...prevVal, email: e.target.value }));
  }

  function handleChangePassword(e) {
    setUserData((prevVal) => ({ ...prevVal, password: e.target.value }));
  }

  return (
    <section className='login'>
      <div className='login__header'>
        <img className='login__logo' src={logo} alt='Логотип' />
        <h2 className='login__title'>Рады видеть!</h2>
      </div>
      <form className='login__form' onSubmit={handleSubmit}>
        <label className='login__label'>
          <input
            name='email'
            type='email'
            className='login__input'
            value={userData.email}
            onChange={handleChangeEmail}
          />
        </label>
        <label className='login__label'>
          <input
            name='password'
            type='password'
            className='login__input'
            value={userData.password}
            minLength={8}
            onChange={handleChangePassword}
          />
        </label>

        <button className='login__button' type='submit'>
          Войти
        </button>
      </form>
      <div className='login__link-container'>
        {error && <span className='login__error login__error_show'>{error}</span>}
        <p className='login__link-text'>Еще не зарегестрированны?&nbsp;</p>
        <Link to='/sign-up' className='login__link'>
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
