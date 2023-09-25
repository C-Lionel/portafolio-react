import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';


export const Inicio = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [hasDataToLoad, setHasDataToLoad] = useState(false); // Cambia esto según tu lógica

  useEffect(() => {
    // Simula la obtención de datos (puedes reemplazar esto con tu lógica real)
  
      // Cambia setHasDataToLoad a true si tienes información para cargar
      setHasDataToLoad(true);
      // Establece isLoading en false después de cargar los datos (simulados)
      setIsLoading(false);
  }, []); // El segundo argumento [] asegura que este efecto se ejecute solo una vez
  

  return (


    <div className='home'>

    {isLoading && !hasDataToLoad ? <Loading /> : null}

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
