import React from 'react'
import './Promos.css'
import promo1 from '/images/curtains/cortinas (3).jpg'
import promo2 from '/images/curtains/cortinas (2).jpg'

function Promos() {
  return (
    <div>
      <h2>ACCESORIOS</h2>
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