import React, { useState, useEffect } from 'react';
import { Footer, RedesSociales } from './layout'
import Loading from './Loading';


export const About = () => {

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

      <h1 className='heading animate__animated animate__bounce'>SOBRE MÍ</h1>

      <h2 className='color-text-global'>
        Hola mi nombre es <strong className='color-strong'> Lionel Cancellieri </strong> , soy Técnico Superior en Desarrollo de Software y un apasionado de la <strong className='color-strong'> informatica </strong> así como también del mundo de la <strong className='color-strong'> programación </strong> . Tengo como objetivo ser un gran profesional y me capacito continuamente para poder lograrlo, me caracterizo por ser autodidacta, proactivo y sumamente responsable.
      </h2>

      {/* CARD CURRICULUM */}

      <section className='syles-cards'>

        <div className="card text-center animate__animated animate__bounceInLeft">
          <img src="../assets/imgs/curriculum.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <strong>  {'Curriculum Vitae'.toUpperCase()} </strong> </h5>
            <p className="card-text">Te invito a descargar mi Curriculum Vitae.</p>
            <a className="btn btn-a" download={`CV_Lionel_Cancellieri`} href="../assets/imgs/curriculum.pdf">Descargar</a>
          </div>
        </div>

        {/* CARD TITULO */}

        <div className="card text-center animate__animated animate__bounceInRight">
          <img src="../assets/imgs/titulo.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> <strong> {'Título Universitario'.toUpperCase()} </strong> </h5>
            <p className="card-text">Te invito a descargar mi Título Universitario.</p>
            <a className="btn btn-a" download={`Titulo_Desarrollo_de_Software`} href="../assets/imgs/titulo.pdf">Descargar</a>
          </div>
        </div>


      </section>

      <RedesSociales />


      <Footer />


      {/* <ListWork /> */}


    </div>


  )
}


