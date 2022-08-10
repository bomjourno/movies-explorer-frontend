import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { searchSavedMovie } from '../../store/reducers/userSlice';
import { infoMessages } from '../../utils/constants';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies() {
  const [isShortMovie, setIsShortMovie] = useState(false);

  const { savedMovies, favoriteMovieForSearch } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const [cardsList, setCardsList] = useState(savedMovies);
  const isNotFound = cardsList.length === 0 ? <p className='cards__error'>{infoMessages.moviesNotFound}</p> : null;

  function findMovie(value) {
    dispatch(searchSavedMovie(value));
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
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
