import React from 'react'
import './Accesories.css'
import roller from '/images/curtains/cortinas (48).jpg'
import bandas from '/images/curtains/cortinas (7).jpg'
import tradicionales from '/images/curtains/cortinas (5).jpg'

function Accesories() {
  return (
    <div className='productsContainer'>
      <h2 style={{marginBottom: '0' }}>ACCESORIOS</h2>

      <h5 style={{marginTop: '0' }}>Para Roller</h5>
      <div className='accesoriesContainer'>
        <img src={roller} alt="Roller" className='accesoriesImage' />
        <ul>
          <li>          Mecanismos Roller          </li>
          <li>          Cadenas Roller          </li>
          <li>          Uniones de cadena           </li>
          <li>          Topes de cadena          </li>
          <li>          Pesos de cadena          </li>
          <li>          Zocalos de aluminio          </li>
          <li>          Zocalos forrados          </li>
        </ul>
      
      </div>
      
      <h5>Para Bandas verticales y Paneles orientales</h5>
      <div className='accesoriesContainer'>
        <img src={bandas} alt="Roller" className='accesoriesImage' />
        <ul>
          <li>          Cadenas de giro          </li>
          <li>          Cadenas inferiores          </li>
          <li>          Pesos de cadena          </li>
          <li>          Bastones de aluminio          </li>
        </ul>
      </div>

      <h5>Para Tradicionales</h5>

      <div className='accesoriesContainer'>
        <img src={tradicionales} alt="Roller" className='accesoriesImage' />
        <ul>
          <li>          Rieles europeos y super europeos (a bastón)          </li>
          <li>          Barrales metálicos de 1” y ¾”          </li>
          <li>          Bastones de aluminio para rieles europeos          </li>
          <li>          Ganchitos para cabezales de cortina          </li>
          <li>          Patines para rieles          </li>
          <li>          Cruces europeos y super europeos          </li>
          <li>          Soportes de barrales          </li>
          <li>          Ménsulas estándar y XL          </li>
        </ul>     
      </div>
    </div>

  )
}

export default Accesories