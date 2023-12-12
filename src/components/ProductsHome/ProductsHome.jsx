import React from 'react'
import { Link } from 'react-router-dom'
import './ProductsHome.css'

import blackout from '/images/fabrics/black clasico.jpg'
import sunscreen from '/images/fabrics/sunscreen4.png'

import traslucida from '/images/fabrics/traslucida.jpg'
import eclipse from '/images/fabrics/duo2.jpg'
import lino from '/images/fabrics/linorustico.jpeg'
import gasalino from '/images/fabrics/gasalino.jpg'
import gross from '/images/fabrics/gross.jpg'
import tusor from '/images/fabrics/tusor.jpg'
import gasahilo from '/images/fabrics/gasahilo.jpeg'
import voilehilo from '/images/fabrics/voilehilo.jpg'

import roller from '/images/curtains/roller.jpeg'
import duo from '/images/curtains/duo.jpg'
import tradicionales from '/images/curtains/tradicionales.jpg'
import verticales from '/images/curtains/cortinas (83).jpg'
import orientales from '/images/curtains/cortinas (2).jpg'
import baño from '/images/curtains/cortinas (8).jpg'
import romanas from '/images/curtains/romanas.jpg'
import venecianas from '/images/curtains/venecianas2.jpg'

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
                <p className='productBoxText'>Bandas <br /> <strong>Verticales</strong> </p>
            </Link>
            <Link className='productBox' to='/cortinas' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={tradicionales} alt="tradicionales" />
                <p className='productBoxText'><br />Tradicionales</p>
            </Link>
            <Link className='productBox' to='/cortinas' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={orientales} alt="paneles orientales" />
                <p className='productBoxText'>Paneles <br /><strong>Orientales</strong> </p>
            </Link>
            <Link className='productBox' to='/cortinas' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={duo} alt="duo eclipse" />
                <p className='productBoxText'><br />Dúo</p>
            </Link>
            <Link className='productBox' to='/cortinas' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={venecianas} alt="venecianas" />
                <p className='productBoxText'><br />Venecianas</p>
            </Link>
            <Link className='productBox' to='/cortinas' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={romanas} alt="romanas" />
                <p className='productBoxText'><br />Romanas</p>
            </Link>
            <Link className='productBox' to='/cortinas' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={baño} alt="cortiñas de baño" />
                <p className='productBoxText'>Cortina <br />de baño</p>
            </Link>
        </div>

        <h2 id='products' className='subtitleHome' >Por tela</h2>

        <div className='productsBoxContainer fabric'>
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
                <img src={lino} alt="lino" />
                <p className='productBoxText'><br />Lino</p>
            </Link>
            <Link className='productBox' to='/telas' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={gross} alt="gross" />
                <p className='productBoxText'><br />Gross</p>
            </Link>
            <Link className='productBox' to='/telas' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={tusor} alt="tusor" />
                <p className='productBoxText'><br />Tusor</p>
            </Link>
            <Link className='productBox' to='/telas' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={gasalino} alt="gasa de lino" />
                <p className='productBoxText'><br />Gasa de Lino</p>
            </Link>
            <Link className='productBox' to='/telas' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={gasahilo} alt="gasa de hilo" />
                <p className='productBoxText'><br />Gasa de Hilo</p>
            </Link>
            <Link className='productBox' to='/telas' onClick={()=>setShowDropdown(false)}>
                <div className='imageOverlay'></div>
                <img src={voilehilo} alt="voile de hilo" />
                <p className='productBoxText'><br />Voile de hilo</p>
            </Link>
        </div>
    </div>
  )
}

export default ProductsHome