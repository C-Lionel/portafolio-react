import React from 'react';
import { NavLink } from 'react-router-dom';
import { RedesSociales } from './RedesSociales';

export const HeaderNav = () => {

 

return (

    <header className='header'>

        <NavLink to="/"> <img className='logo' src="../assets/imgs/logo.png" alt="logo" />  </NavLink>

        <nav>

            <ul>
                <li>
                    {/* Para la clase active, se genera dicho ternario y se crea la clase active en el css */}
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}> Inicio </NavLink>
                </li>

                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}> Sobre mí </NavLink>
                </li>

                <li>
                    <NavLink to="/proyectos" className={({ isActive }) => isActive ? 'active' : ''}> Proyectos </NavLink>
                </li>

                <li>
                    <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}> Skills </NavLink>
                </li>

                <li>
                    <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}> Contacto </NavLink>
                </li>

            </ul>
        </nav>



        {/* OFFCANVAS */}



        <button className="btn button-canva" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            {
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-menu-up" viewBox="0 0 16 16">
                    <path d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793l1.853 1.854zM1 9V6h14v3H1zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2h14zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5z" />
                </svg>
            }
        </button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

            <div className="offcanvas-header stylecanvas">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body stylecanvas">

                <div className="dropdown mt-3 ">

                    <ul>

                        <div>

                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                            <li className='mt-3 header stylecanvasli' data-bs-dismiss="offcanvas" > Inicio </li>
                        </NavLink>

                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                            <li className='mt-3 header stylecanvasli' data-bs-dismiss="offcanvas"> Sobre mí </li>
                        </NavLink>

                        <NavLink to="/proyectos" className={({ isActive }) => isActive ? 'active' : ''}>
                            <li className='mt-3 header stylecanvasli' data-bs-dismiss="offcanvas"> Proyectos </li>
                        </NavLink>

                        <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>
                            <li className='mt-3 header stylecanvasli' data-bs-dismiss="offcanvas"> Skills </li>
                        </NavLink>

                        <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}>
                            <li id='contacto' className='mt-3 header stylecanvasli' data-bs-dismiss="offcanvas"> Contacto </li>
                        </NavLink>
                        
                        

                        </div>

                    </ul>
                </div>

                <RedesSociales margin='15%' />


            </div>



        </div>


    </header>

)
}
