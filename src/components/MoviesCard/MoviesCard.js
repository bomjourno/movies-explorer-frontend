import React, { useState } from 'react';
import './MoviesCard.css';
import classNames from 'classnames';
import cardImage from '../../images/card_image.png';

function MoviesCard() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className='card'>
      <div className='card__header'>
        <div>
          <h3 className='card__title'>33 слова о дизайне</h3>
          <p className='card__duration'>1ч 47м</p>
        </div>
        <button
          className={classNames('card__save-button', {
            'card__save-button_active': isSaved,
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
