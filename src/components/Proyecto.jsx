import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { works } from '../data/works';

export const Proyecto = () => {

  const [proyecto, setProyecto] = useState({});
  const params = useParams();

  useEffect(() => {
    let proyecto = works.filter(work => work.id === params.id);
    setProyecto(proyecto[0])
  }, [])

  return (

    <div className='page page-work'>

      <Link to='/proyectos'>
        <section className='bi-section'>
          <svg xmlns="http://www.w3.org/2000/svg" height="25" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
          </svg>
        </section>
      </Link>

      <section>

        <h1 className='heading animate__animated animate__bounceInDown'> Proyecto: {proyecto.name} </h1>

        <div className='mask'>
          <a href={`https://${proyecto.url}`} target="_blank" >
            <img className='animate__animated animate__bounceInLeft' src={`../assets/imgs/${proyecto.id}.png`} alt="" />
          </a>
        </div>

        <br /> <br />
        <div className='proyect-info animate__animated animate__backInUp'>
          <h4> <strong> {proyecto.technologies} </strong> </h4>
          <p> {proyecto.description} </p>
        </div>

      </section>




    </div>

    
  )
}




