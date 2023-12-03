import React from 'react'
import { Link } from 'react-router-dom'
import './Fabric.css'

import blackoutClasico from '/images/fabrics/black clasico.jpg'
import blackoutLino from '/images/fabrics/black lino.png'
import blackoutClasicoSintetico from '/images/fabrics/black clasico sintetico2.png'
import blackoutPremium from '/images/fabrics/black lino.png'

import sunscreen from '/images/fabrics/black lino.png'
import traslucida from '/images/curtains/cortinas (2).jpg'
import eclipse from '/images/curtains/cortinas (2).jpg'
import lino from '/images/curtains/cortinas (5).jpg'
import gross from '/images/curtains/cortinas (38).jpg'
import tusor from '/images/curtains/cortinas (14).jpg'
import gasahilo from '/images/curtains/cortinas (2).jpg'
import gasalino from '/images/curtains/cortinas (2).jpg'
import voilehilo from '/images/curtains/cortinas (5).jpg'

function Products() {
  return (
    <div className='productsContainer'>

      <h2 id='products'> NUESTRAS TELAS</h2>

      <p className='fabricTitle'>Blackout</p>
      
      <div className='fabricContainer'>
        <div>
          <img src={blackoutClasico} alt="roller" className='imgFabric'/>
          <p>Blackout Clásico <br /> Bicapa</p>
        </div>
        <div>
          <img src={blackoutLino} alt="roller" className='imgFabric'/>
          <p>Blackout Lino <br /> Tricapa</p>
        </div>
        <div>
          <img src={blackoutClasicoSintetico} alt="roller" className='imgFabric'/>
          <p>Blackout Clásico</p>
        </div>
        <div>
          <img src={blackoutLino} alt="roller" className='imgFabric'/>
          <p>Blackout Premium</p>
        </div>
      </div>

      <div className='productContainer'>
        <p className='productText'>Sunscreen</p>
        <img src={sunscreen} alt="sunscreen" className='imgFabric'/>
        <p>Sunscreen 6%</p>
        <p>Sunscreen Premium 5%</p>
        <p>Sunscreen Poliéster 4%</p>
        <p>Sunscreen Premium 3%</p>
      </div>

      <div className='productContainer'>
        <img src={traslucida} alt="traslucidas" className='imgFabric'/>
        <p className='productText'>Traslúcidas</p>
        <p>Traslúcida Luz 3%</p>
        <p>Traslúcida Clásica 3%</p>
        <p>Traslúcida Internacionales 3%</p>
        <p>Traslúcida Premium DAVON 3%</p>
      </div>

      <div className='productContainer'>
        <img src={eclipse} alt="duo" className='imgFabric'/>
        <p className='productText'>Dúo</p>
        <p>Dúo Lisas</p>
        <p>Dúo Matices</p>
        <p>Dúo Premium</p>
      </div>

      <div className='productContainer'>
        <img src={lino} alt="roller" className='imgFabric'/>
        <p className='productText'>Lino</p>
        <p>Lino Blackout</p>
        <p>Lino Screen</p>
      </div>

      <div className='productContainer'>
        <img src={gross} alt="roller" className='imgFabric'/>
        <p className='productText'>Gross</p>
      </div>

      <div className='productContainer'>
        <img src={tusor} alt="roller" className='imgFabric'/>
        <p className='productText'>Tusor</p>
      </div>

      <div className='productContainer'>
        <img src={gasalino} alt="roller" className='imgFabric'/>
        <p className='productText'>Gasa de Lino</p>
      </div>

      <div className='productContainer'>
        <img src={gasahilo} alt="roller" className='imgFabric'/>
        <p className='productText'>Gasa de Hilo</p>
      </div>

      <div className='productContainer'>
        <img src={voilehilo} alt="roller" className='imgFabric'/>
        <p className='productText'>Voile de Hilo</p>
      </div>
        
    </div>
  )
}

export default Products