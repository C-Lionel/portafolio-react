import React from 'react';

export const Skills = () => {
  return (

    <div className='page skills'>

      <h1 className='heading heading animate__animated animate__bounceIn'>SKILLS</h1>

      <section className='syles-cards-skills d-xl-none mt-4'>

        <div>
          <img src="../assets/imgs/html-5.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <br />
            <h5 className="card-title text-center"> <strong>  {'HTML 5'} </strong> </h5>
            <p className="card-text text-center">Lenguaje de etiquetas, utilizado para la estructuración y la presentación de contenido en los sitios web.</p>
          </div>
        </div>

        <br />

        <div>
          <img src="../assets/imgs/css.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <br />
            <h5 className="card-title text-center"> <strong>  {'CSS 3'} </strong> </h5>
            <p className="card-text text-center">lenguaje de marcado que se emplea para dar formato a un sitio web.</p>
          </div>
        </div>

        <br />

        <div>
          <img src="../assets/imgs/javascript.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <br />
            <h5 className="card-title text-center"> <strong>  {'JAVASCRIPT'} </strong> </h5>
            <p className="card-text text-center">Lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas.</p>
          </div>
        </div>

        <br />

        <div>
          <img src="../assets/imgs/react.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <br />
            <h5 className="card-title text-center"> <strong>  {'REACT JS'} </strong> </h5>
            <p className="card-text text-center">Una biblioteca de JavaScript para construir interfaces de usuario.</p>
          </div>
        </div>

        <br />

        <div>
          <img src="../assets/imgs/bootstrap.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <br />
            <h5 className="card-title text-center"> <strong>  {'BOOTSTRAP 5'} </strong> </h5>
            <p className="card-text text-center">Framework CSS y Javascript para la creación de interfaces y diseño responsive.</p>
          </div>
        </div>

        <br />

        <div>
          <img src="../assets/imgs/node-js.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <br />
            <h5 className="card-title text-center"> <strong>  {'NODE JS'} </strong> </h5>
            <p className="card-text text-center">Entorno en tiempo de ejecución multiplataforma para la capa del servidor basado en JavaScript.</p>
          </div>
        </div>

        <br />

        <div>
          <img src="../assets/imgs/mongo-db.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <br />
            <h5 className="card-title text-center"> <strong>  {'MONGO DB'} </strong> </h5>
            <p className="card-text text-center">Es un sistema de base de datos NoSQL orientado a documentos de código abierto y escrito en C++.</p>
          </div>
        </div>

        <br />

        <div>
          <img src="../assets/imgs/git.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <br />
            <h5 className="card-title text-center"> <strong>  {'GIT'} </strong> </h5>
            <p className="card-text text-center">Sistema de control de versiones que nos permitirá trabajar de manera colaborativa.</p>
          </div>
        </div>

        <br />



      </section>


      {/* <img src="./src/assets/imgs/contacto.jpg" alt="hola" /> */}

      <div id="carouselExampleCaptions" className="carousel slide d-none d-sm-block" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item">
            <img src="../assets/imgs/html-5.png" className="d-block w-50 m-auto rounded-2 animate__animated animate__fadeInLeft" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='animate__animated animate__fadeInLeft'>HTML 5</h5>
              <p className='animate__animated animate__fadeInRight'>Lenguaje de etiquetas, utilizado para la estructuración y la presentación de contenido en los sitios web.</p>
            </div>
          </div>

          <div className="carousel-item active">
            <img src="../assets/imgs/react.jpg" className="d-block w-50 m-auto rounded-2 animate__animated animate__fadeInLeft" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='animate__animated animate__fadeInLeft'>REACT JS</h5>
              <p className='animate__animated animate__fadeInRight'> Una biblioteca de JavaScript para construir interfaces de usuario. </p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="../assets/imgs/javascript.webp" className="d-block w-50 m-auto rounded-2 animate__animated animate__fadeInLeft" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-black animate__animated animate__fadeInLeft' >JAVASCRIPT</h5>
              <p className='text-black animate__animated animate__fadeInRight'> Lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. </p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="../assets/imgs/css.png" className="d-block w-50 m-auto rounded-2 animate__animated animate__fadeInLeft" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='animate__animated animate__fadeInLeft'>CSS 3</h5>
              <p className='animate__animated animate__fadeInRight'> lenguaje de marcado que se emplea para dar formato a un sitio web. </p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="../assets/imgs/bootstrap.jpg" className="d-block w-50 m-auto rounded-2 animate__animated animate__fadeInLeft" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-black animate__animated animate__fadeInLeft'>BOOTSTRAP</h5>
              <p className='text-black m-auto w-75 mt-2 animate__animated animate__fadeInRight'> Framework CSS y Javascript para la creación de interfaces y diseño responsive. </p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="../assets/imgs/node-js.jpg" className="d-block w-50 m-auto rounded-2 animate__animated animate__fadeInLeft" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-white animate__animated animate__fadeInLeft'>NODE JS</h5>
              <p className='text-white m-auto w-75 mt-2 animate__animated animate__fadeInRight'> Entorno en tiempo de ejecución multiplataforma para la capa del servidor basado en JavaScript. </p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="../assets/imgs/git.png" className="d-block w-50 m-auto rounded-2 animate__animated animate__fadeInLeft" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-white animate__animated animate__fadeInLeft'>GIT</h5>
              <p className='text-white m-auto w-75 mt-2 animate__animated animate__fadeInRight'> Sistema de control de versiones que nos permitirá trabajar de manera colaborativa. </p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="../assets/imgs/mongo-db.jpg" className="d-block w-50 m-auto rounded-2 animate__animated animate__fadeInLeft" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='text-white animate__animated animate__fadeInLeft'>MONGO DB</h5>
              <p className='text-white m-auto w-75 mt-2 animate__animated animate__fadeInRight'> Es un sistema de base de datos NoSQL orientado a documentos de código abierto y escrito en C++. </p>
            </div>
          </div>

        </div>

        {/* animate__fadeInRight, animate__fadeInLeft */}


        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>




  )
}


