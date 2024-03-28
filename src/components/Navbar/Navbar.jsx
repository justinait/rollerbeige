import React, { useContext, useState } from 'react'
import logo from '/logo/logoNavbar.png'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { onLogOut } from '../../firebaseConfig';
import { AuthContext } from '../../context/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { Dashboard } from '@mui/icons-material';

function Navbar() {

  const {handleLogoutAuth, user, isLogged} = useContext(AuthContext);
  
  const windowWidth = window.innerWidth;
  let navigate = useNavigate()

  const [showDropdown, setShowDropdown] = (windowWidth <= 1023) ? useState(false): useState(true)
  
  const handleLogOut = () => {
    onLogOut();
    handleLogoutAuth()
    navigate('/')
  }

  const handleClick = () => {
    if (windowWidth <= 1023) {
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
    <div className='header'>
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
          <Link to='/store' onClick={closeDropdown} className='dropdownItem'>TIENDA</Link>
          <Link to='/cart' onClick={closeDropdown} className='dropdownItem'>Ver carrito</Link>

          {
            isLogged &&
            <>
              <Link to='/dashboard' onClick={closeDropdown} className='dropdownItem'><Dashboard/></Link>
              
              <p className="dropdownItem"><LogoutIcon onClick={handleLogOut} /></p>
              
            </>
              
            
          }
        </div>
      }

    </div>
  )
}

export default Navbar