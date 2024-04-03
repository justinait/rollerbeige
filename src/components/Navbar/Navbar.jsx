import React, { useContext, useEffect, useState } from 'react'
import logo from '/logo/logoNavbar.png'
import './Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { onLogOut } from '../../firebaseConfig';
import { AuthContext } from '../../context/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { Dashboard } from '@mui/icons-material';
import { CartContext } from '../../context/CartContext';
import CartWidget from './CartWidget';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar() {

  const {handleLogoutAuth, user, isLogged} = useContext(AuthContext);
  
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [openCartDropdown, setOpenCartDropdown] = useState(false);
  const [prevTotal, setPrevTotal] = useState(0);

  const windowWidth = window.innerWidth;
  let navigate = useNavigate()

  const location = useLocation();
  const [showDropdown, setShowDropdown] = (windowWidth <= 1200) ? useState(false): useState(true)
  
  const { 
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalPrice,
    totalProducts } = useContext(CartContext);
    
  let total = getTotalPrice()
  const handleLogOut = () => {
    onLogOut();
    handleLogoutAuth()
    navigate('/')
  }

  const handleClick = () => {
    if (windowWidth <= 1200) {
      setShowDropdown(!showDropdown);
      setOpenCartDropdown(false);
    }
  }
  const closeDropdown = () => {
    if (windowWidth <= 1000) {
      setShowDropdown(false);
    }
  }
  const handleClickCart = () => {
    
    if(openCartDropdown == false){
      setOpenCartDropdown(true)
      if (windowWidth <= 1200) {
        setShowDropdown(false);
      }
    } else{
      setOpenCartDropdown(false)
    }
    
  };
  useEffect(()=> {
    if (total > prevTotal) {
      setOpenCartDropdown(true);
    }
    setPrevTotal(total);
  }, [total])

  useEffect(()=> {
    setOpenCartDropdown(false);
  }, [location.pathname]);

  const scrollToProducts = () => {

    const productsSection = document.getElementById('products');
    const offset = productsSection?.offsetTop - 10 * window.innerHeight / 100; // Resta 10vh
  
    window.scrollTo({
      top: offset,
      behavior: 'smooth' 
    });
  }

  
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
                <Link to='/orders' className="dropdownItem"><FeaturedPlayListIcon fontSize='small' /></Link>
              </>
            }

          </div>
        }
        {!isLogged && <ShoppingCartOutlinedIcon color='grey' fontSize='small' className='cartItemNavbar' onClick={handleClickCart}/>}
        {openCartDropdown &&
          <CartWidget />
        }
      </div>
    </div>
  )
}

export default Navbar