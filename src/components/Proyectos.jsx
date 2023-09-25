import React, {useState, useEffect} from 'react';
import { works } from '../data/works';
import { Link } from 'react-router-dom';
import Loading from './Loading';


export const Proyectos = () => {

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

    <div className='page'>

      {isLoading && !hasDataToLoad ? <Loading /> : null}

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