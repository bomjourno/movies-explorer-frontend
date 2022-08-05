import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  return (
    <section className='movies'>
      <Header />
      <SearchForm>
        <FilterCheckbox />
      </SearchForm>
    </section>
  );
}

export default Movies;
