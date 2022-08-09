import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import classNames from 'classnames';
import { moviesApiUrl } from '../../utils/constants';

function MoviesCard({ movie }) {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();
  const isSavedMovies = location.pathname === '/saved-movies';

  const filmName = movie.nameRU ? movie.nameRU : movie.nameEN;
  const imageUrl = moviesApiUrl + movie.image.url;
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  return (
    <div className='card'>
      <div className='card__header'>
        <div>
          <h3 className='card__title'>{filmName}</h3>
          <p className='card__duration'>{`${
            hours === 0 ? '' : `${hours}ч`} ${minutes}м`}</p>
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
        href={movie.trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img className='card__image' src={imageUrl} alt={filmName} />
      </a>
    </div>
  );
}

export default MoviesCard;
