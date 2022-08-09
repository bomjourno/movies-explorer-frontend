import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../store/reducers/actionCreators';
import { movieSlice } from '../../store/reducers/movieSlice';
import './SearchForm.css';

function SearchForm({ children }) {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();
  const { searchingMovie } = movieSlice.actions;

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchMovies());
    dispatch(searchingMovie(inputValue));
  }

  return (
    <div className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='search__form-input'
          placeholder='Фильм'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button className='search__form-submit' type='submit'></button>
      </form>
      {children}
    </div>
  );
}

export default SearchForm;
