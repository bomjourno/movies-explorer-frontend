import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css';

function Main() {
  return (
    <main className='content'>
      <Promo>
        <NavTab />
      </Promo>
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;
