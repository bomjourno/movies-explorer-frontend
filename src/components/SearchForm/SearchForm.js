import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ children, movieForSearch, findMovie }) {
  const [inputValue, setInputValue] = useState(movieForSearch);

  function handleSubmit(e) {
    e.preventDefault();
    findMovie(inputValue);
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
