import React from 'react';
import { works } from '../data/works';
import { Link } from 'react-router-dom';

export const Proyectos = () => {
  return (
    <div className='page'>

      <h1 className='heading heading animate__animated animate__flipInX'>PROYECTOS</h1>

      <section className='works'>

      {
        works.map(work => {
          return (
            <article className='work-item' key={work.id}>
              <div className='mask animate__animated animate__fadeIn'>
                <img className='work-img' src={`../assets/imgs/${work.id}.png`} alt="" />
              </div>
              <span> {work.categories} </span>
              <Link to={`/proyecto/${work.id}`} > <h2> {work.name.toUpperCase()} </h2> </Link>
              <h3> {work.technologies} </h3>
            </article>
          );
        })
      }

      </section>





    </div>
  )
}