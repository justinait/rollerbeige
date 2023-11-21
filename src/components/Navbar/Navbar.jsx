import React from 'react'
import logo from '/logo/logoNavbar.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="cortinas rollerbeige" className='logoNavbar' />
        <p> <Link to='/about'>La empresa</Link></p>
    </div>
  )
}

export default Navbar