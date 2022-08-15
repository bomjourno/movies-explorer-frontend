import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import logo from '../../images/logo.svg';
import account from '../../images/account.svg';
import './Header.css';

function Header() {
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
  const location = useLocation();
  const isActiveTab = location.pathname;

  const { isAuthorized } = useSelector((state) => state.users);

  return (
    <header className='header'>
      <Link to='/'>
        <img src={logo} alt='Логотип' className='header__logo' />
      </Link>

      {isAuthorized ? (
        <div className='header__navigation-wrapper'>
          <nav className='header__navigation'>
            <ul className='header__list header__list_authorized'>
              <li className='header__list-item'>
                <Link
                  to='/movies'
                  className={classNames('header__link header__tab', {
                    header__tab_active: isActiveTab === '/movies',
                  })}
                >
                  Фильмы
                </Link>
              </li>

              <li className='header__list-item'>
                <Link
                  to='/saved-movies'
                  className={classNames('header__link header__tab', {
                    header__tab_active: isActiveTab === '/saved-movies',
                  })}
                >
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

            <li>
              <Link to='/sign-in' className='header__link header__link_primary'>
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
