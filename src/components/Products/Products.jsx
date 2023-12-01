import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

import roller from '/images/cortinas (6).jpg'
import eclipse from '/images/cortinas (85).jpg'
import tradicionales from '/images/cortinas (5).jpg'
import verticales from '/images/cortinas (73).jpg'//82
import orientales from '/images/cortinas (41).jpg'
import baño from '/images/cortinas (8).jpg'
import romanas from '/images/cortinas (73).jpg'

function Products() {
  return (
    <div className='productsContainer'>

        <h2 id='products'> NUESTRAS CORTINAS</h2>

        <div className='productContainer'>
            <img src={roller} alt="roller" className='imgProduct'/>
            <p className='productText'>Roller</p>
        </div>

        <div className='productContainer'>
            <img src={verticales} alt="roller" className='imgProduct'/>
            <p className='productText'>Bandas Verticales</p>
        </div>

        <div className='productContainer'>
            <img src={orientales} alt="roller" className='imgProduct'/>
            <p className='productText'>Paneles Orientales</p>
        </div>

        <div className='productContainer'>
            <img src={eclipse} alt="roller" className='imgProduct'/>
            <p className='productText'>Dúo</p>
        </div>

        <div className='productContainer'>
            <img src={roller} alt="roller" className='imgProduct'/>
            <p className='productText'>Venecianas</p>
        </div>

        <div className='productContainer'>
            <img src={romanas} alt="roller" className='imgProduct'/>
            <p className='productText'>Romanas</p>
        </div>

        <div className='productContainer'>
            <img src={baño} alt="roller" className='imgProduct'/>
            <p className='productText'>Cortinas de baño</p>
        </div>


        
    </div>
  )
}

export default Products