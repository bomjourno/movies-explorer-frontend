import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ isShortMovie, toggleShortMovies, dispatch = null }) {
  function toggleCheckbox() {
    if (dispatch === null) {
      return toggleShortMovies(!isShortMovie);
    }
    return dispatch(toggleShortMovies(!isShortMovie));
  }

  return (
    <div className='filter'>
      <label className='filter__label'>
        <input
          type='checkbox'
          className='filter__input'
          onChange={toggleCheckbox}
          checked={isShortMovie}
        />
        <span className='filter__switch'></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
