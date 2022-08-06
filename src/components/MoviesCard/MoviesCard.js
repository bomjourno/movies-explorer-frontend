import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import classNames from 'classnames';
import cardImage from '../../images/card_image.png';

function MoviesCard() {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();
  const isSavedMovies = location.pathname === '/saved-movies';

  return (
    <div className='card'>
      <div className='card__header'>
        <div>
          <h3 className='card__title'>33 слова о дизайне</h3>
          <p className='card__duration'>1ч 47м</p>
        </div>
        <button
          type='button'
          className={classNames('card__button', {
            card__button_active: isSavedMovies ? false : isSaved,
            'card__button-delete': isSavedMovies,
          })}
          onClick={() => setIsSaved((prevVal) => !prevVal)}
        ></button>
      </div>
      <a
        className='card__trailer-link'
        href='https://www.youtube.com/watch?v=UXcqcdYABFw'
        target='_blank'
        rel='noreferrer'
      >
        <img className='card__image' src={cardImage} alt='Временная картинка' />
      </a>
    </div>
  );
}

export default MoviesCard;
