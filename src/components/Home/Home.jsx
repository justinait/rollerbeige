import React from 'react'
import './Home.css'
import hero from '/images/hero4.png'
import heroPc from '/images/curtains/heropc2.jpg'
import Services from '../Services/Services'
import ProductsHome from '../ProductsHome/ProductsHome'

function Home() {
  return (
    <div>

      <img src={hero} alt="cortina" className='heroHomeImg' />
      <img src={heroPc} alt="cortina" className='heroHomeImgDesktop' />
      
      <Services/>
      <ProductsHome/>
      
    </div>
  )
}

export default Home