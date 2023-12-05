import React from 'react'
import { Link } from 'react-router-dom'
import './ProductsHome.css'
import photo1 from '/images/curtains/cortinas (10).jpg'
import photo2 from '/fotos crudas/cortinas (33).jpg'
import photo4 from '/fotos crudas/cortinas (15).jpg'
import photo5 from '/fotos crudas/cortinas (5).jpg'
import photo6 from '/fotos crudas/cortinas (2).jpg'

import blackout from '/images/curtains/cortinas (38).jpg'
import sunscreen from '/images/curtains/cortinas (14).jpg'
import traslucida from '/images/curtains/cortinas (2).jpg'
import eclipse from '/images/curtains/cortinas (2).jpg'
import lino from '/images/curtains/cortinas (5).jpg'

import roller from '/images/curtains/cortinas (6).jpg'
import tradicionales from '/images/curtains/cortinas (5).jpg'
import verticales from '/images/curtains/cortinas (4).png'
import orientales from '/images/curtains/cortinas (2).jpg'
import baño from '/images/curtains/cortinas (8).jpg'

function ProductsHome() {
  return (
    <div>
        <h3 id='products' >ELEGÍ TUS CORTINAS</h3>

        <h2 id='products' className='subtitleHome' >Por sistema</h2>

        <div className='productsBoxContainer'>
        <Link className='productBox' to='/cortinas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={roller} alt="roller" />
            <p className='productBoxText'><br />Roller</p>
        </Link>
        <Link className='productBox' to='/cortinas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={verticales} alt="bandas verticales" />
            <p className='productBoxText'>Bandas Verticales</p>
        </Link>
        <Link className='productBox' to='/cortinas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={tradicionales} alt="tradicionales" />
            <p className='productBoxText'><br />Tradicionales</p>
        </Link>
        <Link className='productBox' to='/cortinas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={orientales} alt="paneles orientales" />
            <p className='productBoxText'>Paneles Orientales</p>
        </Link>
        <Link className='productBox' to='/cortinas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={photo4} alt="duo eclipse" />
            <p className='productBoxText'><br />Dúo</p>
        </Link>
        <Link className='productBox' to='/cortinas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={photo5} alt="venecianas" />
            <p className='productBoxText'><br />Venecianas</p>
        </Link>
        <Link className='productBox' to='/cortinas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={photo1} alt="romanas" />
            <p className='productBoxText'><br />Romanas</p>
        </Link>
        <Link className='productBox' to='/cortinas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={baño} alt="cortiñas de baño" />
            <p className='productBoxText'>Cortinas <br />de baño</p>
        </Link>
        </div>

        <h2 id='products' className='subtitleHome' >Por tela</h2>

        <div className='productsBoxContainer'>
        <Link className='productBox' to='/telas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={blackout} alt="blackout" />
            <p className='productBoxText'><br />Blackout</p>
        </Link>
        <Link className='productBox' to='/telas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={sunscreen} alt="sunscreen" />
            <p className='productBoxText'><br />Sunscreen</p>
        </Link>
        <Link className='productBox' to='/telas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={traslucida} alt="traslucidas" />
            <p className='productBoxText'><br />Traslúcidas</p>
        </Link>
        <Link className='productBox' to='/telas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={eclipse} alt="duo" />
            <p className='productBoxText'><br />Dúo</p>
        </Link>
        <Link className='productBox' to='/telas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={photo4} alt="lino" />
            <p className='productBoxText'><br />Lino</p>
        </Link>
        <Link className='productBox' to='/telas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={photo5} alt="gross" />
            <p className='productBoxText'><br />Gross</p>
        </Link>
        <Link className='productBox' to='/telas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={photo2} alt="tusor" />
            <p className='productBoxText'><br />Tusor</p>
        </Link>
        <Link className='productBox' to='/telas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={lino} alt="gasa de lino" />
            <p className='productBoxText'><br />Gasa de Lino</p>
        </Link>
        <Link className='productBox' to='/telas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={photo2} alt="gasa de hilo" />
            <p className='productBoxText'><br />Gasa de Hilo</p>
        </Link>
        <Link className='productBox' to='/telas' onClick={()=>setShowDropdown(false)}>
            <div className='imageOverlay'></div>
            <img src={photo6} alt="voile de hilo" />
            <p className='productBoxText'><br />Voile de hilo</p>
        </Link>
        </div>
    </div>
  )
}

export default ProductsHome