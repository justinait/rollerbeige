import React from 'react'
import './Home.css'
import hero from '/images/cortinas (5).jpg'
import photo1 from '/images/cortinas (10).jpg'
import photo2 from '/images/cortinas (31).jpg'
import photo3 from '/images/cortinas (9).jpg'
import photo4 from '/images/cortinas (14).jpg'
import photo5 from '/images/cortinas (5).jpg'
import photo6 from '/images/cortinas (2).jpg'
import photo7 from '/images/cortinas (2).jpg'
import photo8 from '/images/cortinas (38).jpg'

import blackout from '/images/cortinas (38).jpg'
import sunscreen from '/images/cortinas (14).jpg'
import traslucida from '/images/cortinas (2).jpg'
import eclipse from '/images/cortinas (2).jpg'
import lino from '/images/cortinas (5).jpg'

import { Link } from 'react-router-dom'

function Home() {
  
  return (
    <div>
      <img src={hero} alt="cortina" className='heroHomeImg' />

      {/* <h2 id='products' >NUESTROS PRODUCTOS</h2> */}
      <h3 id='products' >ELEGÍ TUS CORTINAS</h3>
      <h2 id='products' className='subtitleHome' >Por tela</h2>

      <div className='productsBoxContainer'>
        <Link className='productBoxHome' to='/translucida' onClick={()=>setShowDropdown(false)}>
          <img src={blackout} alt="" />
          <p className='productBoxHomeText'> Blackout</p>
          <div className='homeImageOverlay'></div>
        </Link>
        <Link className='productBoxHome' to='/translucida' onClick={()=>setShowDropdown(false)}>
          <img src={sunscreen} alt="" />
          <p className='productBoxHomeText'> Sunscreen</p>
          <div className='homeImageOverlay'></div>
        </Link>
        <Link className='productBoxHome' to='/sunscreen' onClick={()=>setShowDropdown(false)}>
          <img src={traslucida} alt="" />
          <p className='productBoxHomeText'> Traslúcidas</p>
          <div className='homeImageOverlay'></div>
        </Link>
        <Link className='productBoxHome' to='/blackout' onClick={()=>setShowDropdown(false)}>
          <img src={eclipse} alt="" />
          <p className='productBoxHomeText'> Dúo</p>
          <div className='homeImageOverlay'></div>
        </Link>
        <Link className='productBoxHome' to='/duo' onClick={()=>setShowDropdown(false)}>
          <img src={lino} alt="" />
          <p className='productBoxHomeText'> Lino</p>
          <div className='homeImageOverlay'></div>
        </Link>
        <Link className='productBoxHome' to='/rusticas' onClick={()=>setShowDropdown(false)}>
          <img src={photo5} alt="" />
          <p className='productBoxHomeText'> Gross</p>
          <div className='homeImageOverlay'></div>
        </Link>
        <Link className='productBoxHome' to='/linos' onClick={()=>setShowDropdown(false)}>
          <img src={photo6} alt="" />
          <p className='productBoxHomeText'> Tusor</p>
          <div className='homeImageOverlay'></div>
        </Link>
        <Link className='productBoxHome' to='/rusticas' onClick={()=>setShowDropdown(false)}>
          <img src={photo5} alt="" />
          <p className='productBoxHomeText'>Gasa  de Lino</p>
          <div className='homeImageOverlay'></div>
        </Link>
        <Link className='productBoxHome' to='/linos' onClick={()=>setShowDropdown(false)}>
          <img src={photo6} alt="" />
          <p className='productBoxHomeText'>Gasa  de hilo</p>
          <div className='homeImageOverlay'></div>
        </Link>
        <Link className='productBoxHome' to='/linos' onClick={()=>setShowDropdown(false)}>
          <img src={photo6} alt="" />
          <p className='productBoxHomeText'>Voile de hilo</p>
          <div className='homeImageOverlay'></div>
        </Link>
      </div>
    

      <h2 id='products' className='subtitleHome' >Por sistema</h2>

      <div className='productsBoxContainer'>
        <Link className='productBoxHome' to='/translucida' onClick={()=>setShowDropdown(false)}>
          <img src={photo8} alt="" />
          <p className='productBoxHomeText'> Roller</p>
          <div className='homeImageOverlay'></div>
        </Link>
        <Link className='productBoxHome' to='/translucida' onClick={()=>setShowDropdown(false)}>
          <img src={photo1} alt="" />
          <p className='productBoxHomeText'>Bandas  Verticales</p>
          <div className='homeImageOverlay'></div>
        </Link>
        <Link className='productBoxHome' to='/sunscreen' onClick={()=>setShowDropdown(false)}>
          <img src={photo2} alt="" />
          <p className='productBoxHomeText'> Tradicionales</p>
          <div className='homeImageOverlay'></div>
        </Link>
        <Link className='productBoxHome' to='/blackout' onClick={()=>setShowDropdown(false)}>
          <img src={photo3} alt="" />
          <p className='productBoxHomeText'>Paneles  Orientales</p>
          <div className='homeImageOverlay'></div>
        </Link>
        <Link className='productBoxHome' to='/duo' onClick={()=>setShowDropdown(false)}>
          <img src={photo4} alt="" />
          <p className='productBoxHomeText'> Dúo</p>
          <div className='homeImageOverlay'></div>
        </Link>
        <Link className='productBoxHome' to='/rusticas' onClick={()=>setShowDropdown(false)}>
          <img src={photo5} alt="" />
          <p className='productBoxHomeText'> Venecianas</p>
          <div className='homeImageOverlay'></div>
        </Link>
        <Link className='productBoxHome' to='/linos' onClick={()=>setShowDropdown(false)}>
          <img src={photo6} alt="" />
          <p className='productBoxHomeText'> Romanas</p>
          <div className='homeImageOverlay'></div>
        </Link>
        <Link className='productBoxHome' to='/linos' onClick={()=>setShowDropdown(false)}>
          {/* <div className='imageOverlay'></div> */}
          <img src={photo6} alt="" />
          <div className='homeImageOverlay'></div>
          <p className='productBoxHomeText'>Cortinas de baño</p>
        </Link>
      </div>
    
    </div>
  )
}

export default Home