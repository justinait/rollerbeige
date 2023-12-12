import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

import roller from '/images/curtains/cortinas (6).jpg'
import eclipse from '/images/curtains/cortinas (46).jpg'
import tradicionales from '/images/curtains/cortinas (2).jpg'
import verticales from '/images/curtains/cortinas (73).jpg'//82
import orientales from '/images/curtains/cortinas (41).jpg'
import baño from '/images/curtains/cortinas (8).jpg'
import romanas from '/images/curtains/cortinas (73).jpg'

function Products() {
  return (
    <div className='productsContainer'>

        <h2 id='products'> NUESTRAS CORTINAS</h2>

        <div className='productContainer'>
            <img src={roller} alt="roller" className='imgProduct'/>
            <p className='productName'>Roller</p>
            <p className='productDescription'>
                Las cortinas <strong>roller</strong>, también conocidas como cortinas enrollables, son una opción popular y
                versátil y moderna, que combina funcionalidad con estilo,
                adaptándose a una amplia gama de necesidades de diseño y preferencias personales.
            </p>
            {/* <ul>
                <li> Solo trabajamos sistemas reforzados, en medidas de 32, 38 y 45 mm.                 </li>
                <li> Variedad de telas: poliéster, algodón, mezclas de tejidos, e incluso
                tejidos técnicos que ofrecen propiedades adicionales como resistencia al agua
                o aislamiento térmico.                </li>
                <li>Control de luz y privacidad: tela translúcida permiten que pase la luz suavemente,
mientras que las opciones opacas brindan mayor privacidad y bloqueo de luz.</li>
                <li>Fácil mantenimiento</li>
                <li>Adaptabilidad a Diferentes Ventanas</li>
                <li>Personalización: Posibilidad de personalizar con bordes decorativos, cenefas o impresiones.</li>
                <li>Posibilidad de motorización</li>
            </ul> */}
        </div>

        <div className='productContainer'>
            <img src={verticales} alt="roller" className='imgProduct'/>
            <p className='productText'>Bandas Verticales</p>
        </div>

        <div className='productContainer'>
            <img src={tradicionales} alt="roller" className='imgProduct'/>
            <p className='productText'>Tradicionales</p>
        </div>

        <div className='productContainer'>
            <img src={orientales} alt="roller" className='imgProduct'/>
            <p className='productText'>Paneles Orientales</p>
        </div>

        <div className='productContainer'>
            <img src={eclipse} alt="roller" className='imgProduct'/>
            <p className='productText'>Dúo</p>
        </div>

        <div className='productContainer'>
            <img src={roller} alt="roller" className='imgProduct'/>
            <p className='productText'>Venecianas</p>
        </div>

        <div className='productContainer'>
            <img src={romanas} alt="roller" className='imgProduct'/>
            <p className='productText'>Romanas</p>
        </div>

        <div className='productContainer'>
            <img src={baño} alt="roller" className='imgProduct'/>
            <p className='productText'>Cortinas de baño</p>
        </div>


        
    </div>
  )
}

export default Products