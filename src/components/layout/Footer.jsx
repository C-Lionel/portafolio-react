import React from 'react'

export const Footer = () => {

    const moonLanding = new Date();
    const fecha_actual = moonLanding.getFullYear();

    return (
        <>
            <footer className='footer color-text-global'>
            
                <img className='img-perfil' src="../assets/imgs/img-perfil-2.png" alt="" />
                <h3> <strong> Lionel Cancellieri </strong> </h3>
                <h5>Técnico Superior en Desarrollo de Software</h5>
                <h8>{fecha_actual} &copy; All rights reserved</h8>
                
                
            </footer>
        </>
    )
}
