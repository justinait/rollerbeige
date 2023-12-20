import React from 'react'
import './Home.css'
import hero from '/images/hero4.png'
import heroPc from '/images/curtains/heropc2.jpg'
import Services from '../Services/Services'
import ProductsContainer from '../ProductsHome/ProductsContainer'

function Home() {
  return (
    <div>

      <img src={hero} alt="cortina" className='heroHomeImg' />
      <img src={heroPc} alt="cortina" className='heroHomeImgDesktop' />
      
      <Services/>
      <ProductsContainer/>
      
    </div>
  )
}

export default Home