import React from 'react'
import { Link } from 'react-router-dom'
import './Fabric.css'

import blackout from '/images/cortinas (38).jpg'
import sunscreen from '/images/cortinas (14).jpg'
import traslucida from '/images/cortinas (2).jpg'
import eclipse from '/images/cortinas (2).jpg'
import lino from '/images/cortinas (5).jpg'
import gross from '/images/cortinas (38).jpg'
import tusor from '/images/cortinas (14).jpg'
import gasahilo from '/images/cortinas (2).jpg'
import gasalino from '/images/cortinas (2).jpg'
import voilehilo from '/images/cortinas (5).jpg'

function Products() {
  return (
    <div className='productsContainer'>

      <h2 id='products'> NUESTRAS TELAS</h2>

      <div className='productContainer'>
        <img src={blackout} alt="roller" className='imgProduct'/>
        <p className='productText'>Blackout</p>
        <p>Blackout Clásico - Bicapa</p>
        <p>Blackout Lino - Tricapa</p>
        <p>Blackout Clásico</p>
        <p>Blackout Premium</p>
      </div>

      <div className='productContainer'>
        <img src={sunscreen} alt="sunscreen" className='imgProduct'/>
        <p className='productText'>Sunscreen</p>
        <p>Sunscreen 6%</p>
        <p>Sunscreen Premium 5%</p>
        <p>Sunscreen Poliéster 4%</p>
        <p>Sunscreen Premium 3%</p>
      </div>

      <div className='productContainer'>
        <img src={traslucida} alt="traslucidas" className='imgProduct'/>
        <p className='productText'>Traslúcidas</p>
        <p>Traslúcida Luz 3%</p>
        <p>Traslúcida Clásica 3%</p>
        <p>Traslúcida Internacionales 3%</p>
        <p>Traslúcida Premium DAVON 3%</p>
      </div>

      <div className='productContainer'>
        <img src={eclipse} alt="duo" className='imgProduct'/>
        <p className='productText'>Dúo</p>
        <p>Dúo Lisas</p>
        <p>Dúo Matices</p>
        <p>Dúo Premium</p>
      </div>

      <div className='productContainer'>
        <img src={lino} alt="roller" className='imgProduct'/>
        <p className='productText'>Lino</p>
        <p>Lino Blackout</p>
        <p>Lino Screen</p>
      </div>

      <div className='productContainer'>
        <img src={gross} alt="roller" className='imgProduct'/>
        <p className='productText'>Gross</p>
      </div>

      <div className='productContainer'>
        <img src={tusor} alt="roller" className='imgProduct'/>
        <p className='productText'>Tusor</p>
      </div>

      <div className='productContainer'>
        <img src={gasalino} alt="roller" className='imgProduct'/>
        <p className='productText'>Gasa de Lino</p>
      </div>

      <div className='productContainer'>
        <img src={gasahilo} alt="roller" className='imgProduct'/>
        <p className='productText'>Gasa de Hilo</p>
      </div>

      <div className='productContainer'>
        <img src={voilehilo} alt="roller" className='imgProduct'/>
        <p className='productText'>Voile de Hilo</p>
      </div>
        
    </div>
  )
}

export default Products