import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ children }) {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='search__form-input'
          placeholder='Фильм'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button className='search__form-submit' type='submit'></button>
      </form>
      {children}
    </div>
  );
}

export default SearchForm;
