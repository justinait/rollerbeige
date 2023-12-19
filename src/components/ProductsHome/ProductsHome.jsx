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

function ProductsHome({curtains}) {
  return (
    <div>
        <h3 id='products' >ELEGÍ TUS CORTINAS</h3>
        
        <h2 id='products' className='subtitleHome' >Por sistema</h2>

        <div className='productsBoxContainer'>
        
        {
            curtains && curtains.slice().reverse().map((e, i) =>  {
                return(
                    <Link className='productBox' to='/cortinas' onClick={()=>setShowDropdown(false)} key={i} style={{ width: i === curtains.length - 1 ? '100%' : '50%' }}>
                        <div className='imageOverlay'></div>
                        <img src={e.image} alt={e.title}/>
                        <p dangerouslySetInnerHTML={{ __html: e.title }} className='productBoxText'></p>
                    </Link>
                )

            })
        }
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