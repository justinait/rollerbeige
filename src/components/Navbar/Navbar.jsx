import React, { useState } from 'react'
import logo from '/logo/logoNavbar.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    scrollToProducts();
    setShowDropdown(!showDropdown);

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
      <Link to='/' style={{marginBottom: '-2%' }} onClick={()=>setShowDropdown(false)}><img src={logo} alt="cortinas rollerbeige" className='logoNavbar' /></Link>
      
      <div className='navbarItemsContainer'>
        <p className='navbarItems' onClick={()=>setShowDropdown(false)}> <Link to='/about'>Nosotros</Link></p>
        <p className='navbarItems' onClick={handleClick}> Productos </p>
      </div>
      {showDropdown &&
        <div className='dropdownContainer'>
          <Link to='/translucida' onClick={()=>setShowDropdown(false)}><p className='dropdownItem'>Translúcida</p></Link>
          <Link to='/sunscreen' onClick={()=>setShowDropdown(false)}><p className='dropdownItem'>Sunscreen</p></Link>
          <Link to='/blackout' onClick={()=>setShowDropdown(false)}><p className='dropdownItem'>Blackout</p></Link>
          <Link to='/duo' onClick={()=>setShowDropdown(false)}><p className='dropdownItem'>Dúo</p></Link>
          <Link to='/rusticas' onClick={()=>setShowDropdown(false)}><p className='dropdownItem'>Rústicas</p></Link>
          <Link to='/linos' onClick={()=>setShowDropdown(false)}><p className='dropdownItem'>Linos</p></Link>
          
        </div>
      }

    </div>
  )
}

export default Navbar