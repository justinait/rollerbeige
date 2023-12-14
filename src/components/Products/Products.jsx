import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

import roller from '/images/curtains/roller.jpeg'
import eclipse from '/images/curtains/cortinas (46).jpg'
import tradicionales from '/images/curtains/cortinas (2).jpg'
import verticales from '/images/curtains/cortinas (73).jpg'//82
import orientales from '/images/curtains/cortinas (41).jpg'
import baño from '/images/curtains/cortinas (8).jpg'
import romanas from '/images/curtains/romanas.jpg'
import venecianas from '/images/curtains/venecianas.jpg'
import celulares from '/images/curtains/celulares.jpg'

function Products() {
  return (
    <div className='productsContainer'>

        <h2 id='products'> NUESTRAS CORTINAS</h2>

        <Link to='/roller' className='productContainer'>
            <img src={roller} alt="roller" className='imgProduct'/>
            <p className='productName'>Roller</p>
            <p className='productDescription'>
                Las cortinas <strong>roller</strong>, también conocidas como cortinas enrollables, son una opción popular y
                versátil y moderna, que combina funcionalidad con estilo,
                adaptándose a una amplia gama de necesidades de diseño y preferencias personales.
            </p>
        </Link>

        <div className='productContainer'>
            <img src={verticales} alt="roller" className='imgProduct'/>
            <p className='productName'>Bandas Verticales</p>
            <p className='productDescription'> 
                Las cortinas verticales o cortinas de <strong> bandas verticales</strong>, son una opción
                elegante y funcional para la decoración de ventanas. Es lo recomendado para oficinas, estar,
                living y comedores.
                Son solución práctica y moderna para ventanas grandes o puertas corredizas. 
                Su diseño versátil y fácil mantenimiento las convierten en una elección 
                popular en una variedad de entornos.
            </p>
        </div>

        <div className='productContainer'>
            <img src={tradicionales} alt="roller" className='imgProduct'/>
            <p className='productName'>Tradicionales</p>
            <p className="productDescription">
                Las cortinas <strong>tradicionales</strong>, convencionales o también llamadas “clásicas” se han utilizado
                durante mucho tiempo y siguen siendo populares en la decoración. Su aporte siempre es cálido
                y elegante.
                Su versatilidad y capacidad para adaptarse a diferentes estilos decorativos
                las convierten en una elección clásica y atemporal para la decoración de ventanas.
                <br />
            </p>
        </div>

        <div className='productContainer'>
            <img src={orientales} alt="roller" className='imgProduct'/>
            <p className='productName'>Paneles Orientales</p>
            <p className="productDescription">
                Las cortinas de <strong> paneles orientales</strong>, también conocidas como paneles japoneses, son una
                opción elegante y funcional para cubrir grandes áreas de ventana o para dividir ambientes
                grandes en distintos espacios. <br />
                Estas cortinas son una opción contemporánea y versátil para aquellos que buscan un diseño
                limpio y moderno que también sea funcional en la gestión de la luz y la privacidad. 
            </p>
        </div>

        <div className='productContainer'>
            <img src={eclipse} alt="roller" className='imgProduct'/>
            <p className='productName'>Eclipse, Dúo o Zebra</p>
            <p className="productDescription">
                Las cortinas <strong> Eclipse</strong>, también conocidas como cortinas Duo o Zebra, son un tipo moderno y
                elegante de cortinas que combinan bandas de tela opaca y translúcida para ofrecer opciones
                versátiles de luz y privacidad. En ROLLERBEIGE contamos con la gama de telas más amplia
                del mercado para este tipo de sistemas, ofreciendo alternativas lisas, alternativas con matices y
                una alternativa superior, destacada por ser Calidad Premium, Nº:1 en el mercado nacional.
            </p>
        </div>

        <div className='productContainer'>
            <img src={venecianas} alt="roller" className='imgProduct'/>
            <p className='productName'>Venecianas</p>
            <p className="productDescription">
                Las cortinas <strong> venecianas</strong> son un estilo clásico de tratamiento de ventanas que consisten en
                lamas horizontales que se pueden ajustar para controlar la luz y la privacidad.
                <br />Son una opción clásica y atemporal que ofrece funcionalidad y estilo.
                <br />Su capacidad de ajustar la orientación de las lamas las hace ideales para adaptarse a
                diferentes necesidades de luz y privacidad a lo largo del día.
            </p>
        </div>

        <div className='productContainer'>
            <img src={romanas} alt="roller" className='imgProduct'/>
            <p className='productName'>Romanas</p>
            <p className="productDescription">
                Las cortinas <strong> romanas</strong> son un estilo elegante y clásico de tratamiento de ventanas que se
                caracteriza por sus pliegues suaves y estructura de tela.
                <br />Aportan una elegancia atemporal a cualquier espacio y son una opción
                versátil para aquellos que buscan un estilo clásico con la funcionalidad de un tratamiento de
                ventana ajustable.
            </p>
        </div>

        <div className='productContainer'>
            <img src={baño} alt="roller" className='imgProduct'/>
            <p className='productName'>Cortinas de baño</p>
            <p className="productDescription">
                Las <strong>cortinas de baño</strong> son elementos funcionales y decorativos esenciales en un cuarto de
                baño. Su principal función es proporcionar privacidad en la ducha o bañera y evitar que el agua
                salpique fuera del área designada.
                <br />La elección de materiales resistentes al agua y el mantenimiento adecuado son clave para asegurar su
                durabilidad y mantener un entorno de baño limpio y agradable.
            </p>
        </div>

        <div className='productContainer'>
            <img src={celulares} alt="roller" className='imgProduct'/>
            <p className='productName'>Celulares</p>
            <p className="productDescription">
                Las cortinas <strong>celulares</strong>, también conocidas como cortinas arriba-abajo o celulares, son una
                opción versátil, novedosa y elegante para la decoración de ventanas.
            </p>
        </div>


        
    </div>
  )
}

export default Products