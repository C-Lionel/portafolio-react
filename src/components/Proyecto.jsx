import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

      <h1 className='heading animate__animated animate__bounceInDown'> Proyecto: {proyecto.name} </h1>

      <div className='mask'>
        <a href={`https://${proyecto.url}`} target="_blank" >
          <img className='animate__animated animate__bounceInLeft' src={`../assets/imgs/${proyecto.id}.png`} alt="" />
        </a>
      </div>

      <br /> <br />
      <div className='proyect-info'>
        <h4> <strong> {proyecto.technologies} </strong> </h4>
        <p> {proyecto.description} </p>
      </div>


    </div>
  )
}




