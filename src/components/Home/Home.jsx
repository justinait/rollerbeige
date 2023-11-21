import React from 'react'
import './Home.css'
import hero from '/fotos crudas/cortinas (1).jpg'
import photo1 from '/fotos crudas/cortinas (1).jpg'
import photo2 from '/fotos crudas/cortinas (2).jpg'
import photo3 from '/fotos crudas/cortinas (3).jpg'
import photo4 from '/fotos crudas/cortinas (7).jpg'
import photo5 from '/fotos crudas/cortinas (5).jpg'
import photo6 from '/fotos crudas/cortinas (8).jpg'

function Home() {
  return (
    <div>
      <img src={hero} alt="cortina" className='heroHomeImg' />

      <h2>NUESTROS PRODUCTOS</h2>
      <div className='productsBoxContainer'>
        <div className='productBox' > 
          <div className='imageOverlay'></div>
          <img src={photo1} alt="" />
          <p className='productBoxText'>Roller</p>
        </div>
        <div className='productBox' >
          <div className='imageOverlay'></div>
          <img src={photo2} alt="" />
          <p className='productBoxText'>Roller</p>
        </div>
        <div className='productBox' >
          <div className='imageOverlay'></div>
          <img src={photo3} alt="" />
          <p className='productBoxText'>Roller</p>
        </div>
        <div className='productBox' >
          <div className='imageOverlay'></div>
          <img src={photo4} alt="" />
          <p className='productBoxText'>Roller</p>
        </div>
        <div className='productBox' >
          <div className='imageOverlay'></div>
          <img src={photo5} alt="" />
          <p className='productBoxText'>Roller</p>
        </div>
        <div className='productBox' >
          <div className='imageOverlay'></div>
          <img src={photo6} alt="" />
          <p className='productBoxText'>Roller</p>
        </div>
        

      </div>
    </div>
  )
}

export default Home