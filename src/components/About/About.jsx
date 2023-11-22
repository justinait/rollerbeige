import React from 'react'
import './About.css'
import image from '/camioneta.png'

function About() {
  return (
    <div className='aboutContainer'>
      <h2>NOSOTROS</h2>
      <img src={image} alt="" />
      
      <h3>Cortinas Roller Beige</h3>
      <p className='aboutText'>Nuestro compromiso es más que solo ofrecer las mejores cortinas. Te ofrecemos:
        <br />
        <br />
        
        👷‍♀️ Asesoría Personalizada: Nuestro equipo te guiará en cada paso, desde la elección del estilo hasta la instalación. Tu satisfacción es nuestra prioridad.
        <br />
        🏡 Instalación Profesional: Deja la instalación en manos de profesionales con experiencia para garantizar que tus cortinas queden impecables y funcionen perfectamente.
        <br />
        📦 Envíos a Toda Argentina: No importa dónde te encuentres, Roller Beige llega a tu puerta con nuestras cortinas de alta calidad.
        <br />
        <br />
        
        ¡Contáctanos hoy y comienza a dar vida a tus ventanas! 🌆✨</p>
    </div>
  )
}

export default About