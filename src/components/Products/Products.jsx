import React from 'react'
import photo1 from '/images/cortinas (10).jpg'
import photo2 from '/fotos crudas/cortinas (33).jpg'
import photo3 from '/images/cortinas (9).jpg'
import photo4 from '/fotos crudas/cortinas (15).jpg'
import photo5 from '/fotos crudas/cortinas (5).jpg'
import photo6 from '/fotos crudas/cortinas (2).jpg'
import photo8 from '/images/cortinas (38).jpg'
import { Link } from 'react-router-dom'
import './Products.css'

function Products() {
  return (
    <div>
        <h2 id='products' >NUESTROS PRODUCTOS</h2>
      <h3 id='products' >ELEGÍ TUS CORTINAS</h3>
      <h2 id='products' className='subtitleHome' >Por sistema</h2>
        <div className='productsBoxContainer'>
            <Link className='productBox' to='/translucida' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo8} alt="" />
                <p className='productBoxText'>Roller</p>
            </Link>
            <Link className='productBox' to='/translucida' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo1} alt="" />
                <p className='productBoxText'>Bandas Verticales</p>
            </Link>
            <Link className='productBox' to='/sunscreen' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo2} alt="" />
                <p className='productBoxText'>Tradicionales</p>
            </Link>
            <Link className='productBox' to='/blackout' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo3} alt="" />
                <p className='productBoxText'>Paneles Orientales</p>
            </Link>
            <Link className='productBox' to='/duo' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo4} alt="" />
                <p className='productBoxText'>Dúo</p>
            </Link>
            <Link className='productBox' to='/rusticas' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo5} alt="" />
                <p className='productBoxText'>Venecianas</p>
            </Link>
            <Link className='productBox' to='/linos' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo2} alt="" />
                <p className='productBoxText'>Romanas</p>
            </Link>
            <Link className='productBox' to='/linos' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo6} alt="" />
                <p className='productBoxText'>Cortinas de baño</p>
            </Link>
        </div>
        <h2 id='products' className='subtitleHome' >Por tela</h2>
        <div className='productsBoxContainer'>
            <Link className='productBox' to='/translucida' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo8} alt="" />
                <p className='productBoxText'>Blackout</p>
            </Link>
            <Link className='productBox' to='/translucida' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo1} alt="" />
                <p className='productBoxText'>Sunscreen</p>
            </Link>
            <Link className='productBox' to='/sunscreen' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo2} alt="" />
                <p className='productBoxText'>Traslúcidas</p>
            </Link>
            <Link className='productBox' to='/blackout' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo3} alt="" />
                <p className='productBoxText'>Dúo</p>
            </Link>
            <Link className='productBox' to='/duo' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo4} alt="" />
                <p className='productBoxText'>Lino</p>
            </Link>
            <Link className='productBox' to='/rusticas' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo5} alt="" />
                <p className='productBoxText'>Gross</p>
            </Link>
            <Link className='productBox' to='/linos' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo2} alt="" />
                <p className='productBoxText'>Tusor</p>
            </Link>
            <Link className='productBox' to='/linos' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo6} alt="" />
                <p className='productBoxText'>Gasa de Lino</p>
            </Link>
            <Link className='productBox' to='/linos' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo2} alt="" />
                <p className='productBoxText'>Gasa de Hilo</p>
            </Link>
            <Link className='productBox' to='/linos' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={photo6} alt="" />
                <p className='productBoxText'>Voile de hilo</p>
            </Link>
        </div>
    </div>
  )
}

export default Products