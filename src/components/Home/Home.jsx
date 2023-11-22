import React from 'react'
import './Home.css'
import hero from '/images/cortinas (7).jpg'
import photo1 from '/images/cortinas (10).jpg'
import photo2 from '/fotos crudas/cortinas (33).jpg'
import photo3 from '/images/cortinas (9).jpg'
import photo4 from '/fotos crudas/cortinas (15).jpg'
import photo5 from '/fotos crudas/cortinas (5).jpg'
import photo6 from '/fotos crudas/cortinas (2).jpg'

function Home() {
  
  return (
    <div>
      <img src={hero} alt="cortina" className='heroHomeImg' />

      <h2 id='products' >NUESTROS PRODUCTOS</h2>
      <div className='productsBoxContainer'>
        <div className='productBox' > 
          <div className='imageOverlay'></div>
          <img src={photo1} alt="" />
          <p className='productBoxText'>Translúcida</p>
        </div>
        <div className='productBox' >
          <div className='imageOverlay'></div>
          <img src={photo2} alt="" />
          <p className='productBoxText'>Sunscreen</p>
        </div>
        <div className='productBox' >
          <div className='imageOverlay'></div>
          <img src={photo3} alt="" />
          <p className='productBoxText'>Blackout</p>
        </div>
        <div className='productBox' >
          <div className='imageOverlay'></div>
          <img src={photo4} alt="" />
          <p className='productBoxText'>Dúo</p>
        </div>
        <div className='productBox' >
          <div className='imageOverlay'></div>
          <img src={photo5} alt="" />
          <p className='productBoxText'>Rústicas</p>
        </div>
        <div className='productBox' >
          <div className='imageOverlay'></div>
          <img src={photo6} alt="" />
          <p className='productBoxText'>Linos</p>
        </div>

      </div>
    </div>
  )
}

export default Home