import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';
import { registerUser } from '../../store/reducers/userSlice';
import { useFormWithValidation } from '../../hooks/hooks';

function Register() {
  const {
    values, handleChange, errors, isValid,
  } = useFormWithValidation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    isAuthorized, error,
  } = useSelector(
    (state) => state.users,
  );

  useEffect(() => {
    if (isAuthorized) {
      navigate('/movies');
    }
  }, [isAuthorized]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      registerUser({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    );
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
            className={classNames('register__input', { register__input_error: errors.name })}
            value={values.name}
            minLength={2}
            maxLength={30}
            pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
            required
            onChange={handleChange}
          />
          <span className='register__error-input'>{errors.name}</span>
        </label>
        <label className='register__label'>
          <input
            name='email'
            type='email'
            className={classNames('register__input', { register__input_error: errors.email })}
            value={values.email}
            pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
            required
            onChange={handleChange}
          />
          <span className='register__error-input'>{errors.email}</span>
        </label>
        <label className='register__label'>
          <input
            name='password'
            type='password'
            className={classNames('register__input', { register__input_error: errors.password })}
            value={values.password}
            minLength={8}
            required
            onChange={handleChange}
          />
          <span className='register__error-input'>{errors.password}</span>
        </label>
        <button disabled={!isValid} className={classNames('register__button', { register__button_disabled: !isValid })} type='submit'>
          Зарегистрироваться
        </button>
      </form>
      <div className='register__link-container'>
        {error && <span className='register__error-general'>{error}</span>}
        <p className='register__link-text'>Уже зарегестрированны?&nbsp;</p>
        <Link to='/sign-in' className='register__link'>
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
