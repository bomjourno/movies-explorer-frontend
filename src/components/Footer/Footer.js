import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__row'>
        <p className='footer__copyright'>&copy; {currentYear}</p>
        <nav>
          <ul className='footer__list'>
            <li>
              <a
                className='footer__link'
                href='https://practicum.yandex.ru/web/'
                target='_blank'
                rel='noreferrer'
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                className='footer__link'
                href='https://github.com/Yandex-Practicum'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
            <li>
              <a
                className='footer__link'
                href='https://vk.com/yandex.practicum'
                target='_blank'
                rel='noreferrer'
              >
                VK
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
