import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='project' id='project'>
      <h2 className='project__title'>О проекте</h2>
      <div className='project__columns-wrapper'>
        <div className='project__column'>
          <h3 className='project__column-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='project__column-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='project__column'>
          <h3 className='project__column-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='project__column-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='project__duration-wrapper'>
        <div className='project__duration'>
          <div className='project__duration-time project__duration-time_back'>1 неделя</div>
          <p className='project__duration-name'>Back-end</p>
        </div>
        <div className='project__duration'>
          <div className='project__duration-time project__duration-time_front'>4 недели</div>
          <p className='project__duration-name'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
