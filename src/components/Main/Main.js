import React from 'react';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import './Main.css';

function Main() {
  return (
    <main className='content'>
      <Promo>
        <NavTab />
      </Promo>
    </main>
  );
}

export default Main;
