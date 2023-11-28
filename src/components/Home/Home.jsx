import React from 'react'
import './Home.css'
import hero from '/images/cortinas (7).jpg'
import photo1 from '/images/cortinas (10).jpg'
import photo2 from '/fotos crudas/cortinas (33).jpg'
import photo3 from '/images/cortinas (9).jpg'
import photo4 from '/fotos crudas/cortinas (15).jpg'
import photo5 from '/fotos crudas/cortinas (5).jpg'
import photo6 from '/fotos crudas/cortinas (2).jpg'
import { Link } from 'react-router-dom'
import Promos from '../Promos/Promos'

function Home() {
  
  return (
    <div>
      <img src={hero} alt="cortina" className='heroHomeImg' />
      {/* <p>Asesoramiento Personalizado</p> */}

      <h2 id='products' >NUESTROS PRODUCTOS</h2>
      <div className='productsBoxContainer'>
        <Link className='productBox' to='/translucida' onClick={()=>setShowDropdown(false)}>
          <div className='imageOverlay'></div>
          <img src={photo1} alt="" />
          <p className='productBoxText'>Translúcida</p>
        </Link>
        <Link className='productBox' to='/sunscreen' onClick={()=>setShowDropdown(false)}>
          <div className='imageOverlay'></div>
          <img src={photo2} alt="" />
          <p className='productBoxText'>Sunscreen</p>
        </Link>
        <Link className='productBox' to='/blackout' onClick={()=>setShowDropdown(false)}>
          <div className='imageOverlay'></div>
          <img src={photo3} alt="" />
          <p className='productBoxText'>Blackout</p>
        </Link>
        <Link className='productBox' to='/duo' onClick={()=>setShowDropdown(false)}>
          <div className='imageOverlay'></div>
          <img src={photo4} alt="" />
          <p className='productBoxText'>Dúo</p>
        </Link>
        <Link className='productBox' to='/rusticas' onClick={()=>setShowDropdown(false)}>
          <div className='imageOverlay'></div>
          <img src={photo5} alt="" />
          <p className='productBoxText'>Rústicas</p>
        </Link>
        <Link className='productBox' to='/linos' onClick={()=>setShowDropdown(false)}>
          <div className='imageOverlay'></div>
          <img src={photo6} alt="" />
          <p className='productBoxText'>Linos</p>
        </Link>

      </div>

      <Promos/>
    </div>
  )
}

export default Home