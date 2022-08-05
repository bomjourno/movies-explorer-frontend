import React from 'react';

function NavTab() {
  return (
    <nav>
      <ul className='promo__list'>
        <li className='promo__list-item'>
          <a className='promo__list-link' href='#project'>
            О проекте
          </a>
        </li>
        <li className='promo__list-item'>
          <a className='promo__list-link' href='#tech'>
            Технологии
          </a>
        </li>
        <li className='promo__list-item'>
          <a className='promo__list-link' href='#student'>
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
