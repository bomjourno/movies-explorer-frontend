import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import './Main.css';

function Main() {
  return (
    <main className='content'>
      <Promo>
        <NavTab />
      </Promo>
      <AboutProject />
    </main>
  );
}

export default Main;
