import React from 'react'
import './Promos.css'
import promo1 from '/images/curtains/cortinas (3).jpg'
import promo2 from '/images/curtains/cortinas (2).jpg'

function Promos() {
  return (
    <div>
      <h2>ACCESORIOS</h2>
        
        <p>Accesorios ROLLER</p>
        <ul>
          <li>
            Mecanismos Roller (todas las medidas) blancos, negros, beige y gris.    
          </li>
          <li>
          Mecanismos Roller (todas las medidas) blancos, negros, beige y gris.
          </li>
          <li>
          Cadenas Roller, blancas, negras, beige y gris.
          </li>
          <li>
          Uniones y topes de cadenas de cadena 
          </li>
          <li>
          Pesos de cadena, blancos, negros, beige y gris.
          </li>
          <li>
          Zocalos de aluminio blancos, negros, beige y gris
          </li>
          <li>
          Zocalos forrados
          </li>
        </ul>
        
        <p>Accesorios BANDAS VERTICALES y PANLES ORIENTALES</p>
        <ul>
          <li>
          Cadenas de giro
          </li>
          <li>
          Cadenas inferiores
          </li>
          <li>
          Pesos de cadena
          </li>
          <li>
          Bastones de aluminio
          </li>
        </ul>
        <p>Accesorios TRADICIONALES</p>
        <ul>
          <li>
          Rieles europeos y super europeos (a bastón)
          </li>
          <li>
          Barrales metálicos de 1” y ¾”, blancos, negros y níquel
          </li>
          <li>
          Bastones de aluminio para rieles europeos
          </li>
          <li>
          Ganchitos para cabezales de cortina
          </li>
          <li>
          Patines para rieles
          </li>
          <li>
          Cruces europeos y super europeos
          </li>
          <li>
          Soportes de barrales
          </li>
          <li>
          Ménsulas estándar y XL
          </li>
        </ul>     
        
        
      <div className='promosDivContainer'>
        <div className='promoContainer'>
          <img src={promo1} alt="" className='promoImage' />
          <p className='promoCategory'>Tela</p>
          <h5 className='promoTitle'>Tela de Lino 1x1</h5>
          <p className='promoPrice'>$ 300</p>
        </div>
        <div className='promoContainer'>
          <img src={promo2} alt="" className='promoImage' />
          <p className='promoCategory'>Tela</p>
          <h5 className='promoTitle'>Tela de Lino 1x1</h5>
          <p className='promoPrice'>$ 300</p>
        </div>
      </div>
    </div>
  )
}

export default Promos