import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import fetchMovies from '../../store/reducers/actionCreators';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.movies);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className='cards'>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default MoviesCardList;
