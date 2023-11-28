import React from 'react'
import './About.css'
import van from '/camioneta.png'
import image from '/images/cortinas (10).jpg'


function About() {
  return (
    <div className='aboutContainer'>
      <h2>NOSOTROS</h2>
      <img src={image} alt="" />
      
      <h3>Cortinas Roller Beige</h3>
      <p className='aboutText'>Bienvenidos a Roller Beige, un proyecto que nació en el corazón de una
        familia apasionada por la creación de ambientes acogedores y estilos propios.
        Fundada a principios del año 2021, nos hemos dedicado con esmero a la
        fabricación y venta de cortinas e insumos, convirtiéndonos en una referencia en
        el mercado.
        Para nosotros, la familia es nuestro pilar fundamental. Creemos en el esfuerzo
        conjunto como herramienta de crecimiento y prosperidad, valores que se
        reflejan en cada detalle de nuestros productos y de nuestros servicios. Somos
        más que una empresa, somos un equipo comprometido con la excelencia y la
        satisfacción de nuestros clientes.
        Nuestra experiencia y profesionalismo en el mundo de las cortinas nos
        permiten ofrecer un asesoramiento único. Queremos compartir contigo
        nuestros conocimientos para que tomes la mejor decisión al elegir tus cortinas,
        garantizando no solo un elemento decorativo, sino también funcional para tu
        espacio.
        En Roller Beige, cada cortina es más que un producto; es el resultado de
        nuestra dedicación y amor por lo que hacemos. Estamos aquí para transformar
        tus espacios y hacer que cada rincón de tu hogar o negocio refleje tu estilo
        único.
        Gracias por ser parte de nuestra historia. Descubre el mundo de las cortinas
        con Roller Beige, donde &quot;tenemos conciencia de servicio&quot; para ofrecerte una
        atención personalizada, tanto en la compra como en la postventa.
      </p>
    </div>
  )
}

export default About