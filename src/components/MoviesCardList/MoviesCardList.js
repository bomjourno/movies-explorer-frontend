import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <div className='cards'>
      <div className='cards__list'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <button className='cards__button'>Ещё</button>
    </div>
  );
}

export default MoviesCardList;
