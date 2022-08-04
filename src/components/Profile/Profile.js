import React, { useState } from 'react';
import Header from '../Header/Header';
import './Profile.css';

function Profile() {
  const [name, setName] = useState('Матвей');
  const [email, setEmail] = useState('test@mail.ru');

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <section className='profile'>
      <Header />
      <div className='profile__container'>
        <h2 className='profile__title'>Привет, Матвей!</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
          <label className='profile__label'>
            Имя
            <input
              name='name'
              type='text'
              className='profile__input'
              value={name}
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
              value={email}
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
          className='profile__button profile__button_logout'
        >
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
