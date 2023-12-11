import React from 'react'
import './Home.css'
import hero from '/images/hero1.png'
// import hero from '/images/curtains/cortinas (4).jpg'
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