import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from '../../store/reducers/userSlice';
import './MoviesCard.css';
import { moviesApiUrl } from '../../utils/constants';

function MoviesCard({ movie }) {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const savedMoviesRoute = path === '/saved-movies';
  const { savedMovies } = useSelector((state) => state.users);
  // eslint-disable-next-line max-len
  const isSavedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === (movie.id || movie.movieId));

  useEffect(() => {
    if (savedMovies) {
      setIsSaved(isSavedMovie);
    }
  }, [savedMovies]);

  const dispatch = useDispatch();
  const buttonClassName = (isSaved && !savedMoviesRoute && 'card__button_active') || (savedMoviesRoute && 'card__button-delete');

  const filmName = movie.nameRU ? movie.nameRU : movie.nameEN;
  const imageUrl = movie.image.formats
    ? moviesApiUrl + movie.image.url
    : movie.image;
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  function handleClickCard() {
    if (savedMoviesRoute || isSavedMovie) {
      dispatch(removeFavoriteMovie(movie._id || isSavedMovie._id));
    } else {
      dispatch(addFavoriteMovie(movie));
    }
  }

  return (
    <div className='card'>
      <div className='card__header'>
        <div>
          <h3 className='card__title'>{filmName}</h3>
          <p className='card__duration'>{`${
            hours === 0 ? '' : `${hours}ч`
          } ${minutes}м`}</p>
        </div>
        <button
          type='button'
          className={`card__button ${buttonClassName}`}
          onClick={handleClickCard}
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
