import React from 'react';
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>

      <h1 className='animate__animated animate__pulse  animate__delay-1s animate__repeat-2'> BIENVENIDOS A MI PORTAFOLIO DIGITAL </h1>

      <h2 className='color-text-global'>
        Es un placer darles la más cordial bienvenida a mi portfolio digital, un medio para demostrar mi proceso de aprendizaje, información sobre mi formación académica, mi experiencia laboral y sobre los trabajos que he realizado de manera individual. A través del mismo los mantendré al tanto de mis actividades, mis proyectos a futuro y mis ideas, desde ya muchas gracias por su visita.
      </h2>
      <br /> <br />
      <h2 className='color-text-global'>Para más información.. <Link to='/about'> Click aquí </Link> </h2>
      {/* <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p className='color-text-global'>Estos son algunos de mis proyectos de desarrollo web</p>
        <div className='works'>

        </div>
      </section> */}
    </div>
  )
}
