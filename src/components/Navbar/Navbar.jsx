import React, { useContext, useState } from 'react'
import logo from '/logo/logoNavbar.png'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { onLogOut } from '../../firebaseConfig';
import { AuthContext } from '../../context/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { Dashboard } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartContext } from '../../context/CartContext';
import CartWidget from './CartWidget';

function Navbar() {

  const {handleLogoutAuth, user, isLogged} = useContext(AuthContext);
  
  const windowWidth = window.innerWidth;
  let navigate = useNavigate()

  const [showDropdown, setShowDropdown] = (windowWidth <= 1200) ? useState(false): useState(true)
  
  const handleLogOut = () => {
    onLogOut();
    handleLogoutAuth()
    navigate('/')
  }

  const handleClick = () => {
    if (windowWidth <= 1200) {
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
  const { 
    cart,
    addToCartContext,
    clearCart,
    deleteById,
    getTotalPrice,
    totalProducts,
    getQuantityById 
  } = useContext(CartContext);
  return (
    <div className='header'>
      <Link to='/' style={{display: 'flex' }} onClick={closeDropdown}><img src={logo} alt="cortinas rollerbeige" className='logoNavbar' /></Link>
      <div className='navbarItemsContainer'>

        <div className='navbarItemsSubContainer'>
          <p className='navbarItems' onClick={closeDropdown}> <Link to='/about'>Nosotros</Link></p>
          <p className='navbarItems productNavbarItem' onClick={handleClick}> Productos </p>
          
        </div>
        {showDropdown &&
          <div className='dropdownContainer'>

            <Link to='/cortinas' onClick={closeDropdown} className='dropdownItem'>Cortinas</Link>
            <Link to='/telas' onClick={closeDropdown} className='dropdownItem'>Telas</Link>
            <Link to='/accesorios' onClick={closeDropdown} className='dropdownItem'>Accesorios</Link>
            <Link to='/store' onClick={closeDropdown} className='dropdownItem'>TIENDA</Link>

            {
              isLogged &&
              <>
                <Link to='/dashboard' onClick={closeDropdown} className='dropdownItem'><Dashboard fontSize='small'/></Link>
                <p className="dropdownItem"><LogoutIcon fontSize='small' onClick={handleLogOut} /></p>
              </>
            }
          </div>
        }
        {
          cart.length > 0 &&
          <CartWidget />
        }
      </div>
    </div>
  )
}

export default Navbar