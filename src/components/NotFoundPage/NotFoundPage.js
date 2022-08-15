import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const { isAuthorized } = useSelector((state) => state.users);

  function handleClickBack() {
    if (isAuthorized) {
      navigate(-2);
    } else {
      navigate('/');
    }
  }

  return (
    <section className='error'>
      <h1 className='error__title'>404</h1>
      <p className='error__message'>Страница не найдена</p>
      <button
        type='button'
        className='error__button link'
        onClick={handleClickBack}
      >
        Назад
      </button>
    </section>
  );
};

export default NotFoundPage;
