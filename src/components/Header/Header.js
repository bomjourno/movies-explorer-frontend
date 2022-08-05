import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import account from '../../images/account.svg';
import './Header.css';

function Header() {
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
  const loggedIn = true; // временно Для показа состояний шапки

  return (
    <header className='header'>
      <Link to='/'>
        <img src={logo} alt='Логотип' className='header__logo' />
      </Link>

      {loggedIn ? (
        <div className='header__navigation-wrapper'>
          <nav className='header__navigation'>
            <ul className='header__list header__list_authorized'>
              <li className='header__list-item'>
                <Link to='/movies' className='header__link'>
                  Фильмы
                </Link>
              </li>

              <li className='header__list-item'>
                <Link to='/saved-movies' className='header__link'>
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
          </nav>
          <nav className='header__navigation'>
            <ul className='header__list header__list_authorized'>
              <li>
                <Link to='/profile' className='header__link'>
                  Аккаунт
                </Link>
              </li>

              <li>
                <Link to='/profile'>
                  <img
                    src={account}
                    alt='Аккаунт'
                    className='header__account-image'
                  />
                </Link>
              </li>
            </ul>
          </nav>
          <div
            className='header__burger'
            onClick={() => setBurgerMenuIsOpen((prevVal) => !prevVal)}
          >
            <div
              className={classNames('header__burger-line', {
                'header__burger-open': burgerMenuIsOpen,
              })}
            ></div>
            <div
              className={classNames('header__burger-line', {
                'header__burger-open': burgerMenuIsOpen,
              })}
            ></div>
            <div
              className={classNames('header__burger-line', {
                'header__burger-open': burgerMenuIsOpen,
              })}
            ></div>
          </div>

          <ul
            className={classNames(
              'header__list header__burger-menu header__list_burger',
              {
                'header__burger-menu_open': burgerMenuIsOpen,
              },
            )}
          >
            <li className='header__burger-text'>
              <Link to='/' className='header__link'>
                Главная
              </Link>
            </li>

            <li className='header__burger-text'>
              <Link to='/movies' className='header__link'>
                Фильмы
              </Link>
            </li>

            <li className='header__burger-text'>
              <Link to='/saved-movies' className='header__link'>
                Сохранённые фильмы
              </Link>
            </li>

            <li className='header__burger-text'>
              <Link to='/profile' className='header__link '>
                <span className=''>Аккаунт</span>
                <img
                  src={account}
                  alt='Аккаунт'
                  className='header__account-image'
                />
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <nav className='header__navigation header__navigation_unauthorized'>
          <ul className='header__list'>
            <li>
              <Link to='/sign-up' className='header__link'>
                Регистрация
              </Link>
            </li>

            <li className='header__link_primary'>
              <Link to='/sign-in' className='header__link'>
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
