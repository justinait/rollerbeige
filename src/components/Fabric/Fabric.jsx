import React from 'react'
import { Link } from 'react-router-dom'
import './Fabric.css'

import blackoutClasico from '/images/fabrics/black clasico.jpg'
import blackoutLino from '/images/fabrics/black lino.png'
import blackoutClasicoSintetico from '/images/fabrics/black clasico sintetico2.png'
import blackoutPremium from '/images/fabrics/black premium.png'

import sunscreen6 from '/images/fabrics/sunscreen6.jpg'
import sunscreen5 from '/images/fabrics/sunscreen5.png'
import sunscreen4 from '/images/fabrics/sunscreen4.png'
import sunscreen3 from '/images/fabrics/sunscreen3.png'

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
      <br />
      
      <p className='fabricTitle'>Blackout</p>
      <div className='fabricContainer'>
        <div>
          <img src={blackoutClasico} alt="blackout clasico" className='imgFabric'/>
          <p>Blackout Clásico <br /> Bicapa Tradicional</p>
        </div>
        <div>
          <img src={blackoutLino} alt="blackout lino" className='imgFabric'/>
          <p>Blackout Lino <br /> Tricapa</p>
        </div>
        <div>
          <img src={blackoutClasicoSintetico} alt="blackout clasico" className='imgFabric'/>
          <p>Blackout Clásico <br />Sintética</p>
        </div>
        <div>
          <img src={blackoutPremium} alt="blackout premium" className='imgFabric'/>
          <p>Blackout Premium</p>
        </div>
      </div>

      <p className='fabricTitle'>Sunscreen</p>
      <div className='fabricContainer'>
        <div>
          <img src={sunscreen6} alt="sunscreen" className='imgFabric'/>
          <p>Sunscreen 6%</p>
        </div>
        <div>
          <img src={sunscreen5} alt="sunscreen" className='imgFabric'/>
          <p>Sunscreen Premium 5%</p>
        </div>
        <div>
          <img src={sunscreen4} alt="sunscreen" className='imgFabric'/>
          <p>Sunscreen Poliéster 4%</p>
        </div>
        <div>
          <img src={sunscreen3} alt="sunscreen" className='imgFabric'/>
          <p>Sunscreen Premium 3%</p>
        </div>
      </div>

      <p className='fabricTitle'>Traslúcidas</p>
      <div className='fabricContainer'>
        <div>
          <img src={traslucida} alt="traslucidas" className='imgFabric'/>
          <p>Traslúcida Luz 3%</p>
        </div>
        <div>
          <img src={traslucida} alt="traslucidas" className='imgFabric'/>
          <p>Traslúcida Clásica 3%</p>
        </div>
        <div>
          <img src={traslucida} alt="traslucidas" className='imgFabric'/>
          <p>Traslúcida Internacionales 3%</p>
        </div>
        <div>
          <img src={traslucida} alt="traslucidas" className='imgFabric'/>
          <p>Traslúcida Premium DAVON 3%</p>
        </div>
      </div>

      <p className='fabricTitle'>Dúo</p>
      <div className='fabricContainer'>
        <div>
          <img src={eclipse} alt="duo" className='imgFabric'/>
          <p>Dúo Lisas</p>
        </div>
        <div>
          <img src={eclipse} alt="duo" className='imgFabric'/>
          <p>Dúo Matices</p>
        </div>
        <div>
          <img src={eclipse} alt="duo" className='imgFabric'/>
          <p>Dúo Premium</p>
        </div>
      </div>

      <p className='fabricText'>Lino</p>
      <div className='fabricContainer'>
        <div>
          <img src={lino} alt="roller" className='imgFabric'/>
          <p>Lino Blackout</p>
        </div>
        <div>
          <img src={lino} alt="roller" className='imgFabric'/>
          <p>Lino Screen</p>
        </div>
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