import React from 'react'
import './About.css'
import van from '/camioneta.png'
import image from '/images/curtains/cortinas (22).png'
import image2 from '/images/curtains/cortinas (73).jpg'


function About() {
  return (
    <div className='aboutContainer'>
      
      {/* <h2>Roller Beige</h2> */}
      
      <img src={image} alt="" />
      
      <p className='aboutText'>
        <h3>Nuestra historia</h3>

        <strong>Bienvenidos a Roller Beige</strong>, un proyecto que nació en el corazón de una
        familia apasionada por la creación de ambientes acogedores y estilos propios.
        Fundada a principios del año 2021, nos dedicamos a la
        fabricación y venta de cortinas e insumos, convirtiéndonos en una referencia en
        el mercado.
        <br />
        Somos más que una empresa, somos un equipo comprometido con la excelencia y la
        satisfacción de nuestros clientes.
        <br />
        <br />
        
        <img src={image2} alt="" />
        <h3>Por qué elegirnos</h3>
      
        Nuestra experiencia y profesionalismo en el mundo de las cortinas nos
        permiten ofrecer un asesoramiento único. <br />Queremos compartir contigo
        nuestros conocimientos para que tomes la mejor decisión al elegir tus cortinas,
        garantizando no solo un elemento decorativo, sino también funcional para tu
        espacio.
        <br />
        En Roller Beige, cada cortina es más que un producto; es el resultado de
        nuestra dedicación y amor por lo que hacemos. Estamos aquí para transformar
        tus espacios y hacer que cada rincón de tu hogar o negocio refleje tu estilo.
        <br />
        Descubre el mundo de las cortinas con Roller Beige, donde &quot;tenemos conciencia de servicio&quot; para ofrecerte una
        atención personalizada, tanto en la compra como en la postventa.
        <br />
        <br />
        <strong>Gracias por ser parte de nuestra historia.</strong>
        
      </p>
    </div>
  )
}

export default About