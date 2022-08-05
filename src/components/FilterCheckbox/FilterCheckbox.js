import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='filter'>
      <label className='filter__label'>
        <input
          type='checkbox'
          className='filter__input'
        />
        <span className="filter__switch"></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
