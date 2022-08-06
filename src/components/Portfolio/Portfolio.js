import React from 'react';
import './Portfolio.css';
import arrowLink from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__header'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-link'
            href='https://bomjourno.github.io/how-to-learn/'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__list-text'>Статичный сайт</p>
            <img
              className='portfolio__list-arrow'
              src={arrowLink}
              alt='Стрелка'
            />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-link'
            href='https://bomjourno.github.io/russian-travel/index.html'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__list-text'>Адаптивный сайт</p>
            <img
              className='portfolio__list-arrow'
              src={arrowLink}
              alt='Стрелка'
            />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-link'
            href='https://bomjourno.github.io/react-mesto-auth/'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__list-text'>Одностраничное приложение</p>
            <img
              className='portfolio__list-arrow'
              src={arrowLink}
              alt='Стрелка'
            />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-link'
            href='https://bomjourno.github.io/Air-Recipes/'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__list-text'>
              Рецепты вкусной еды
            </p>
            <img
              className='portfolio__list-arrow'
              src={arrowLink}
              alt='Стрелка'
            />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-link'
            href='https://bomjourno.github.io/memoryGame/'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__list-text'>Игра для тренировки памяти</p>
            <img
              className='portfolio__list-arrow'
              src={arrowLink}
              alt='Стрелка'
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
