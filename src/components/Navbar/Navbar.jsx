import React, { useState } from 'react'
import logo from '/logo/logoNavbar.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

  const windowWidth = window.innerWidth;
  
  const [showDropdown, setShowDropdown] = (windowWidth <= 1023) ? useState(false): useState(true)
  
  const handleClick = () => {
    if (windowWidth <= 1023) {
      // scrollToProducts();
      setShowDropdown(!showDropdown);
    }
  }
  const closeDropdown = () => {
    if (windowWidth <= 1023) {
      setShowDropdown(false);
    }
  }
  
  const scrollToProducts = () => {

    const productsSection = document.getElementById('products');
    const offset = productsSection?.offsetTop - 10 * window.innerHeight / 100; // Resta 10vh
  
    window.scrollTo({
      top: offset,
      behavior: 'smooth' 
    });
  };

  return (
    <div className='navbar'>
      <Link to='/' style={{display: 'flex' }} onClick={closeDropdown}><img src={logo} alt="cortinas rollerbeige" className='logoNavbar' /></Link>
      
      <div className='navbarItemsContainer'>
        <p className='navbarItems' onClick={closeDropdown}> <Link to='/about'>Nosotros</Link></p>
        <p className='navbarItems productNavbarItem' onClick={handleClick}> Productos </p>
      </div>
      {showDropdown &&
        <div className='dropdownContainer'>

          <Link to='/cortinas' onClick={closeDropdown} className='dropdownItem'>Cortinas</Link>
          
          <Link to='/telas' onClick={closeDropdown} className='dropdownItem'>Telas</Link>

          <Link to='/accesorios' onClick={closeDropdown} className='dropdownItem'>Accesorios</Link>

          <Link to='/sale' onClick={closeDropdown} className='dropdownItem'>Sale</Link>

        </div>
      }

    </div>
  )
}

export default Navbar