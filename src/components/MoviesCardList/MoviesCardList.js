import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList() {
  const location = useLocation();
  const loading = false;

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className='cards'>
      <div className='cards__list'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      {location.pathname === '/movies' ? (
        <button type='button' className='cards__button'>
          Ещё
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

export default MoviesCardList;
