import React from 'react'
import './Home.css'
import hero from '/images/heromobilefinal.png'
import heroPc from '/images/heropcfinal.png'
import Services from '../Services/Services'
import ProductsHome from '../ProductsHome/ProductsHome'
import HomeCart from '../HomeCart/HomeCart'

function Home() {
  return (
    <div>

      <img src={hero} alt="cortina" className='heroHomeImg' />
      <img src={heroPc} alt="cortina" className='heroHomeImgDesktop' />
      
      <Services/>
      <HomeCart/>
      <ProductsHome/>
      
    </div>
  )
}

export default Home