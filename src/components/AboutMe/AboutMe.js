import React from 'react';
import photo from '../../images/Avatar.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about' id="student">
      <h2 className='about__header'>Студент</h2>
      <div className='about__info'>
        <div>
          <h3 className='about__info-title'>Матвей</h3>
          <p className='about__info-subtitle'>Фронтенд-разработчик, 26 лет</p>
          <p className='about__info-text'>
            Родился в степи, где-то за Байкалом. Переехал в Томск и узнал о
            существовании Интернета, но пошел почему-то не по пути алгоритмов и
            написания кода... свернул не туда и как итог - закончил строительный
            факультет ТГАСУ на досуге. У меня есть жена, правда она пока не
            знает. Люблю играть в настольные или пк игры (только в компании
            приятных мне людей), по настроению играю на гитаре, в планах
            возобновить занятия по вокалу. Не представляю себе жизнь без шуток и
            подколов, но в силу немного развитого чувства эмпатии приходится прекращать
            шутить либо вообще этого не делать. После трех скучных лет работы в
            сфере строительства начал заниматься тем, что нравится - кодить.
            После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className='about__links'>
            <li>
              <a
                className='about__link'
                href='https://vk.com/khamgushkeev'
                target='_blank'
                rel='noreferrer'
              >
                VK
              </a>
            </li>
            <li className='about__link'>
              <a
                className='about__link'
                href='https://github.com/bomjourno'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className='about__info-avatar' src={photo} alt='Фото студента' />
      </div>
    </section>
  );
}

export default AboutMe;
