import React from 'react'
import './Accesories.css'
import roller from '/images/curtains/cortinas (48).jpg'
import bandas from '/images/curtains/cortinas (7).jpg'
import tradicionales from '/images/curtains/cortinas (5).jpg'

function Accesories() {
  return (
    <div className='productsContainer'>
      <h2 style={{marginBottom: '0' }}>ACCESORIOS</h2>

      <div className='accesoriesContainer'>
        <img src={roller} alt="Roller" className='accesoriesImage' />
        <h3>Para Roller</h3>
        <ul>
          <p>⸺ Mecanismos Roller</p>
          <p>⸺ Cadenas Roller</p>
          <p>⸺ Uniones de Cadena</p>
          <p>⸺ Topes de Cadena</p>
          <p>⸺ Pesos de Cadena</p>
          <p>⸺ Zócalos de aluminio</p>
          <p>⸺ Zócalos forrados</p>
        </ul>
      
      </div>
      
      <div className='accesoriesContainer'>
        <img src={bandas} alt="Roller" className='accesoriesImage' />
        <h3>Para Bandas verticales y Paneles orientales</h3>
        <ul>
          <p>          ⸺ Cadenas de giro          </p>
          <p>          ⸺ Cadenas inferiores          </p>
          <p>          ⸺ Pesos de cadena          </p>
          <p>          ⸺ Bastones de aluminio          </p>
        </ul>
      </div>


      <div className='accesoriesContainer'>
        <img src={tradicionales} alt="Roller" className='accesoriesImage' />
        <h3>Para Tradicionales</h3>
        <ul>
          <p>          ⸺ Rieles europeos y super europeos (a bastón)          </p>
          <p>          ⸺ Barrales metápcos de 1” y ¾”          </p>
          <p>          ⸺ Bastones de aluminio para rieles europeos          </p>
          <p>          ⸺ Ganchitos para cabezales de cortina          </p>
          <p>          ⸺ Patines para rieles          </p>
          <p>          ⸺ Cruces europeos y super europeos          </p>
          <p>          ⸺ Soportes de barrales          </p>
          <p>          ⸺ Ménsulas estándar y XL          </p>
        </ul>     
      </div>
    </div>

  )
}

export default Accesories