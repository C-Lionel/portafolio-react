import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Contacto, Inicio, About, Skills, Proyectos, Proyecto, Error404 } from '../components';
import { Footer, HeaderNav } from '../components/layout';


export const AppRouter = () => {
    return (
        <BrowserRouter>

            {/* HEADER Y NAVEGACION */}

            <HeaderNav />


            {/* CONTENIDO CENTRAL */}

            <section className='content'>

                <Routes>
                    {/* <Route path='/' element={<Navigate to="/inicio" />} /> */}
                    <Route path='*' element={<Navigate to="/error404" />} />
                    <Route path='/' element={<Inicio />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/proyectos' element={<Proyectos />} />
                    <Route path='/proyecto/:id' element={<Proyecto />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/error404' element={<Error404 />} />
            
                    {/* <Route path='/*' element={<Navigate to="/error404" />} /> */}
                    {/* <Route path='/*' element={<Navigate to="/Error404" />} /> */}
                    {/* <Route path='*' element={ <h1> Error - 404 </h1> } /> */}
                    {/* <Route path='*' element={<h1> Error 404 </h1>} /> */}
                    {/* <Route path='/*' element={
                        <div className='page'>
                            <h1 className='heading'> Error 404 </h1> 
                        </div>
                         } /> */}

                         
                </Routes>
                
            </section>



            {/* FOOTER */}

            {/* <Footer /> */}


        </BrowserRouter>
    )
}
