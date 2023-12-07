import React from 'react'
import './Home.css'
// import hero from '/images/curtains/hero.jpg'
import hero from '/images/curtains/cortinas (6).jpg'
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