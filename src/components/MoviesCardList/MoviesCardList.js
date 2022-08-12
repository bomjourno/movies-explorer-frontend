import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';
import {
  INITIAL_COUNT_MOVIES_DESKTOP,
  INITIAL_COUNT_MOVIES_MOBILE,
  MAX_DURATION_SHORT_MOVIES,
  SCREEN_WIDTH_480, SCREEN_WIDTH_768,
  THREE_MOVIES_FOR_MORE_BUTTON,
  TWO_MOVIES_FOR_MORE_BUTTON,
} from '../../utils/constants';

function MoviesCardList({
  cardsList, setCardsList,
  isShortMovie, movies,
  isNotFound, movieForSearch,
  error,
}) {
  const {
    isLoading,
  } = useSelector((state) => state.movies);

  const [width, setWidth] = useState(window.innerWidth);
  const [optionalCards, setOptionalCards] = useState(THREE_MOVIES_FOR_MORE_BUTTON);
  const [showedMovies, setShowedMovies] = useState(0);

  const updateWidth = useCallback(() => {
    setWidth(window.innerWidth);
    if (width <= SCREEN_WIDTH_480) {
      setOptionalCards(TWO_MOVIES_FOR_MORE_BUTTON);
      setShowedMovies(5);
      return INITIAL_COUNT_MOVIES_MOBILE;
    }
    if (width <= SCREEN_WIDTH_768) {
      setOptionalCards(TWO_MOVIES_FOR_MORE_BUTTON);
      setShowedMovies(8);
      return INITIAL_COUNT_MOVIES_MOBILE;
    }
    setOptionalCards(THREE_MOVIES_FOR_MORE_BUTTON);
    setShowedMovies(12);
    return INITIAL_COUNT_MOVIES_DESKTOP;
  }, [width]);

  function handleAddCards() {
    setShowedMovies((prevVal) => prevVal + optionalCards);
  }

  function getMovies() {
    if (movies) {
      setCardsList(movies);
    }
    if (movieForSearch) {
      setCardsList(movies.filter((movie) => `${movie.nameRU} ${movie.nameEN}`.toLowerCase().includes(movieForSearch.toLowerCase())));
    } else {
      setCardsList(movies);
    }
  }

  useEffect(() => {
    getMovies();
    if (isShortMovie) {
      // eslint-disable-next-line max-len
      setCardsList((prevVal) => prevVal.filter((movie) => movie.duration <= MAX_DURATION_SHORT_MOVIES));
    }
  }, [isShortMovie, movieForSearch, movies, setCardsList]);

  useEffect(() => {
    setTimeout(() => {
      if (!showedMovies) {
        updateWidth();
      }
      window.addEventListener('resize', updateWidth);
    }, 100);
    return () => window.removeEventListener('resize', updateWidth);
  }, [showedMovies, updateWidth]);

  return (
    <div className='cards'>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div className='cards__list'>
            {error ? '' : cardsList.slice(0, showedMovies).map((movie) => (
              <MoviesCard movie={movie} key={movie.id || movie._id} />
            ))}
          </div>
          {error ? <p className='cards__error'>{error}</p> : isNotFound}
          {(showedMovies < cardsList.length && !error) && (
            <button className="cards__button" onClick={handleAddCards}>
              Ещё
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default MoviesCardList;
