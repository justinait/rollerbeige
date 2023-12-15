import React from 'react'
import './Home.css'
import hero from '/images/hero4.png'
import Services from '../Services/Services'
import ProductsHome from '../ProductsHome/ProductsHome'
import ProductsContainer from '../ProductsHome/ProductsContainer'

function Home() {
  return (
    <div>

      <img src={hero} alt="cortina" className='heroHomeImg' />
      
      <Services/>
      <ProductsContainer/>
      
    </div>
  )
}

export default Home