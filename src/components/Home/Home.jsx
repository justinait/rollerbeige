import React from 'react'
import './Home.css'
import hero from '/images/cortinas (5).jpg'
import photo1 from '/images/cortinas (10).jpg'
import photo2 from '/fotos crudas/cortinas (33).jpg'
import photo3 from '/images/cortinas (9).jpg'
import photo4 from '/fotos crudas/cortinas (15).jpg'
import photo5 from '/fotos crudas/cortinas (5).jpg'
import photo6 from '/fotos crudas/cortinas (2).jpg'
import photo8 from '/images/cortinas (38).jpg'
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
          <img src={photo8} alt="" />
          <p className='productBoxHomeText'><br /> Blackout</p>
        </Link>
        <Link className='productBoxHome' to='/translucida' onClick={()=>setShowDropdown(false)}>
          <img src={photo1} alt="" />
          <p className='productBoxHomeText'><br /> Sunscreen</p>
        </Link>
        <Link className='productBoxHome' to='/sunscreen' onClick={()=>setShowDropdown(false)}>
          <img src={photo2} alt="" />
          <p className='productBoxHomeText'><br /> Traslúcidas</p>
        </Link>
        <Link className='productBoxHome' to='/blackout' onClick={()=>setShowDropdown(false)}>
          <img src={photo3} alt="" />
          <p className='productBoxHomeText'><br /> Dúo</p>
        </Link>
        <Link className='productBoxHome' to='/duo' onClick={()=>setShowDropdown(false)}>
          <img src={photo4} alt="" />
          <p className='productBoxHomeText'><br /> Lino</p>
        </Link>
        <Link className='productBoxHome' to='/rusticas' onClick={()=>setShowDropdown(false)}>
          <img src={photo5} alt="" />
          <p className='productBoxHomeText'><br /> Gross</p>
        </Link>
        <Link className='productBoxHome' to='/linos' onClick={()=>setShowDropdown(false)}>
          <img src={photo6} alt="" />
          <p className='productBoxHomeText'><br /> Tusor</p>
        </Link>
        <Link className='productBoxHome' to='/rusticas' onClick={()=>setShowDropdown(false)}>
          <img src={photo5} alt="" />
          <p className='productBoxHomeText'>Gasa <br /> de Lino</p>
        </Link>
        <Link className='productBoxHome' to='/linos' onClick={()=>setShowDropdown(false)}>
          <img src={photo6} alt="" />
          <p className='productBoxHomeText'>Gasa <br /> de hilo</p>
        </Link>
        <Link className='productBoxHome' to='/linos' onClick={()=>setShowDropdown(false)}>
          <img src={photo6} alt="" />
          <p className='productBoxHomeText'>Voile <br /> de hilo</p>
        </Link>
      </div>
    

      <h2 id='products' className='subtitleHome' >Por sistema</h2>

      <div className='productsBoxContainer'>
        <Link className='productBoxHome' to='/translucida' onClick={()=>setShowDropdown(false)}>
          <img src={photo8} alt="" />
          <p className='productBoxHomeText'><br /> Roller</p>
        </Link>
        <Link className='productBoxHome' to='/translucida' onClick={()=>setShowDropdown(false)}>
          <img src={photo1} alt="" />
          <p className='productBoxHomeText'>Bandas <br /> Verticales</p>
        </Link>
        <Link className='productBoxHome' to='/sunscreen' onClick={()=>setShowDropdown(false)}>
          <img src={photo2} alt="" />
          <p className='productBoxHomeText'><br /> Tradicionales</p>
        </Link>
        <Link className='productBoxHome' to='/blackout' onClick={()=>setShowDropdown(false)}>
          <img src={photo3} alt="" />
          <p className='productBoxHomeText'>Paneles <br /> Orientales</p>
        </Link>
        <Link className='productBoxHome' to='/duo' onClick={()=>setShowDropdown(false)}>
          <img src={photo4} alt="" />
          <p className='productBoxHomeText'><br /> Dúo</p>
        </Link>
        <Link className='productBoxHome' to='/rusticas' onClick={()=>setShowDropdown(false)}>
          <img src={photo5} alt="" />
          <p className='productBoxHomeText'><br /> Venecianas</p>
        </Link>
        <Link className='productBoxHome' to='/linos' onClick={()=>setShowDropdown(false)}>
          <img src={photo6} alt="" />
          <p className='productBoxHomeText'><br /> Romanas</p>
        </Link>
        <Link className='productBoxHome' to='/linos' onClick={()=>setShowDropdown(false)}>
          <img src={photo6} alt="" />
          <p className='productBoxHomeText'>Cortinas de baño</p>
        </Link>
      </div>
    
    </div>
  )
}

export default Home