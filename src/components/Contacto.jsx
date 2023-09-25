import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Footer, RedesSociales } from './layout'


export const Contacto = () => {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger me-4'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Está seguro que desea enviar el formulario?',
      text: "Enviará un formulario de contacto que será respondido a la brevedad..",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    })

      .then((result) => {
        if (result.isConfirmed) {
          emailjs.sendForm('service_ykrb94k', 'template_dallcn2', form.current, 'user_0rv8S2OYEBzS2Fp80CRNP')
          swalWithBootstrapButtons.fire(
            'Enviado!',
            'El formulario de contacto ha sido enviado exitosamente',
            'success'
          )
          document.getElementById('nombre').value = "";
          document.getElementById('apellido').value = "";
          document.getElementById('email').value = "";
          document.getElementById('telefono').value = "";
          document.getElementById('asunto').value = "";
          document.getElementById('mensaje').value = "";
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'El formulario de contacto ha sido cancelado',
            'error'
          )
        }

      })

  };


  return (

    <>
    

    <div className='page contacto'>
      <h1 className='heading heading animate__animated animate__zoomIn'>CONTACTO</h1>

      <form ref={form} onSubmit={sendEmail}>


        <input type="text" name='nombre' id='nombre' placeholder='Nombre' required />
        <input type="text" name='apellido' id='apellido' placeholder='Apellido' required  />
        <input  type="email" name='email' id='email' placeholder='E-Mail' required />
        <input type="tel" name='telefono' id='telefono' placeholder='Teléfono' required />
        <input type="text" name='asunto' id='asunto' placeholder='Asunto' required />
        <textarea name="mensaje" id='mensaje' placeholder='Mensaje' required></textarea>
        <input type="submit" value='ENVIAR' className='boton' />


      </form>

    </div>

    <RedesSociales />

    <Footer />

    </>
  );
};



