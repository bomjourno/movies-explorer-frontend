import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';

function Login() {
  const [email, setEmail] = useState('test@mail.ru');
  const [password, setPassword] = useState('12345678');

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
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
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label className='login__label'>
          <input
            name='password'
            type='password'
            className='login__input'
            value={password}
            minLength={8}
            onChange={handleChangePassword}
          />
        </label>
        <button className='login__button' type='submit'>
          Войти
        </button>
      </form>
      <div className='login__link-container'>
        <p className='login__link-text'>Еще не зарегестрированны?&nbsp;</p>
        <Link to='/sign-up' className='login__link'>
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
