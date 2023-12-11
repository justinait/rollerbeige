import React from 'react'
import './Home.css'
import hero from '/images/hero1.png'
import Services from '../Services/Services'
import ProductsHome from '../ProductsHome/ProductsHome'

function Home() {
  return (
    <div>

      <img src={hero} alt="cortina" className='heroHomeImg' />
      
      <Services/>
      <ProductsHome/>
      
    </div>
  )
}

export default Home