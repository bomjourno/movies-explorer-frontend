import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  return (
    <section className='movies'>
      <Header />
      <SearchForm>
        <FilterCheckbox />
      </SearchForm>
      <MoviesCardList />
      <Footer />
    </section>
  );
}

export default Movies;
