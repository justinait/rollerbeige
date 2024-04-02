import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './CartWidget.css'
import { Link, useLocation } from 'react-router-dom';

function CartWidget() {

    const { 
        cart,
        addToCart,
        clearCart,
        deleteById,
        getTotalPrice,
        totalProducts } = useContext(CartContext);
    const [openCartDropdown, setOpenCartDropdown] = useState(false)
    const [prevTotal, setPrevTotal] = useState(0);
    let total = getTotalPrice()
    const location = useLocation();

    const handleOpenCart =()=> {
        if(openCartDropdown == false)
            setOpenCartDropdown(true)
        else
            setOpenCartDropdown(false)
    }
    useEffect(()=> {
        if (total > prevTotal) {
            setOpenCartDropdown(true);
        }
        setPrevTotal(total);
    }, [total])
    
    useEffect(()=> {
        setOpenCartDropdown(false);
    }, [location.pathname]);
  return (
    <div>
        <ShoppingCartOutlinedIcon fontSize='small' className='cartItemNavbar' onClick={handleOpenCart}/>
        {openCartDropdown &&
            <div className='cartWidgetBox'>
            {
                cart.map((e, i)=>{
                    return (
                        <div key={i} className='cartWidgetItemContainer'>
    
                            <img className='cartWidgetImage' src={e.image} alt={e.title} />
                            <div className='cartWidgetContainerInfo'>
                                <h6>{e.title}</h6>
                                <p className='cartItemPrice'> ${e.unit_price}</p>
                            </div>
                        </div>
                    )
                })
            }
            <p className='subtotalCart'>Subtotal: <strong>${total}</strong> </p>
            <Link className='cartWidgetButton' to='/cart' onClick={handleOpenCart}>Ver carrito</Link>
            </div>
        }
        
    </div>
  )
}

export default CartWidget