import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMovies, searchMovie, toggleShortMovies,
} from '../../store/reducers/movieSlice';
import { infoMessages } from '../../utils/constants';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  const dispatch = useDispatch();

  const { isShortMovie, movies, movieForSearch } = useSelector((state) => state.movies);
  const data = useSelector((state) => state.movies);

  const [cardsList, setCardsList] = useState([]);
  const isNotFound = movieForSearch && cardsList.length === 0 ? <p className='cards__error'>{infoMessages.moviesNotFound}</p> : null;

  function findMovie(value) {
    dispatch(fetchMovies());
    dispatch(searchMovie(value));
  }

  useEffect(() => {
    localStorage.setItem('moviesLocalState', JSON.stringify({ ...data, movies: cardsList }));
  }, [data, cardsList]);

  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm movieForSearch={movieForSearch} findMovie={findMovie}>
          <FilterCheckbox
            isShortMovie={isShortMovie}
            toggleShortMovies={toggleShortMovies}
            dispatch={dispatch}
          />
        </SearchForm>
        <MoviesCardList
          cardsList={cardsList}
          setCardsList={setCardsList}
          isShortMovie={isShortMovie}
          isNotFound={isNotFound}
          movieForSearch={movieForSearch}
          movies={movies}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
