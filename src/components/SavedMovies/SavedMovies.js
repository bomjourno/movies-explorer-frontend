import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { infoMessages } from '../../utils/constants';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies() {
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [favoriteMovieForSearch, setFavoriteMovieForSearch] = useState('');

  const { savedMovies, error } = useSelector((state) => state.users);

  const [cardsList, setCardsList] = useState(savedMovies);
  const isNotFound = favoriteMovieForSearch && cardsList.length === 0 ? <p className='cards__error'>{infoMessages.moviesNotFound}</p> : null;

  function findMovie(value) {
    setFavoriteMovieForSearch(value);
  }

  return (
    <>
      <Header />
      <main className='movies saved-movies'>
        <SearchForm findMovie={findMovie} movieForSearch={favoriteMovieForSearch} >
          <FilterCheckbox
            isShortMovie={isShortMovie}
            toggleShortMovies={setIsShortMovie}
          />
        </SearchForm>
        <MoviesCardList
          cardsList={cardsList}
          setCardsList={setCardsList}
          isShortMovie={isShortMovie}
          isNotFound={isNotFound}
          movies={savedMovies}
          movieForSearch={favoriteMovieForSearch}
          error={error}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
