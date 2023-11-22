import React from 'react'
import './Footer.css'
import logo from '/logo/logo.png'

function Footer() {
  return (
    <div className='footer'>
      <img src={logo} alt="" className='logoFooter'/>
    </div>
  )
}

export default Footer