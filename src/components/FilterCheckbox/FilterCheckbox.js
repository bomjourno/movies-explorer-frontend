import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { movieSlice } from '../../store/reducers/movieSlice';
import './FilterCheckbox.css';

function FilterCheckbox() {
  const dispatch = useDispatch();
  const { isShortMovie } = useSelector((state) => state.movies);
  const { toggleShortMovies } = movieSlice.actions;

  return (
    <div className='filter'>
      <label className='filter__label'>
        <input
          type='checkbox'
          className='filter__input'
          onChange={() => dispatch(toggleShortMovies(!isShortMovie))}
          checked={isShortMovie}
        />
        <span className='filter__switch'></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
