import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';

function Register() {
  const [name, setName] = useState('Матвей');
  const [email, setEmail] = useState('test@mail.ru');
  const [password, setPassword] = useState('12345678');

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
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
            value={name}
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
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label className='register__label'>
          <input
            name='password'
            type='password'
            className='register__input'
            value={password}
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
