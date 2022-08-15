import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';
import { logIn } from '../../store/reducers/userSlice';
import { useFormWithValidation } from '../../hooks/hooks';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthorized, error } = useSelector((state) => state.users);
  const {
    values, handleChange, errors, isValid,
  } = useFormWithValidation();

  useEffect(() => {
    if (isAuthorized) {
      navigate('/movies');
    }
  }, [isAuthorized]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(logIn({ email: values.email, password: values.password }));
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
            className={classNames('login__input', { login__input_error: errors.email })}
            value={values.email}
            onChange={handleChange}
            required
          />
          <span className='login__error-input'>{errors.email}</span>
        </label>
        <label className='login__label'>
          <input
            name='password'
            type='password'
            className={classNames('login__input', { login__input_error: errors.password })}
            value={values.password}
            minLength={8}
            required
            onChange={handleChange}
          />
          <span className='login__error-input'>{errors.password}</span>
        </label>

        <button disabled={!isValid} className={classNames('login__button', { login__button_disabled: !isValid })} type='submit'>
          Войти
        </button>
      </form>
      <div className='login__link-container'>
        {error && <span className='login__error-general'>{error}</span>}
        <p className='login__link-text'>Еще не зарегестрированны?&nbsp;</p>
        <Link to='/sign-up' className='login__link'>
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
