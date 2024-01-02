import React from 'react'
import './Promos.css'
import promo1 from '/images/curtains/cortinas (3).jpg'
import promo2 from '/images/curtains/cortinas (2).jpg'
import Accesories from '../Accesories/Accesories'

function Promos() {
  return (
    <div>
      <br />
      <br />
      <Accesories/>
        <h2>OUTLET</h2>
      <div className='promosDivContainer'>
        <div className='promoContainer'>
          <img src={promo1} alt="" className='promoImage' />
          <p className='promoCategory'>Tela</p>
          <h6 className='promoTitle'>Tela de Lino 1x1</h6>
          <p className='promoPrice'>$ 300</p>
        </div>
        <div className='promoContainer'>
          <img src={promo2} alt="" className='promoImage' />
          <p className='promoCategory'>Tela</p>
          <h6 className='promoTitle'>Tela de Lino 1x1</h6>
          <p className='promoPrice'>$ 300</p>
        </div>
      </div>
    </div>
  )
}

export default Promos