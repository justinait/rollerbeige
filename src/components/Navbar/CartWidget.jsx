import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import './CartWidget.css'
import { Link } from 'react-router-dom';

function CartWidget() {

    const { 
        cart,
        addToCart,
        clearCart,
        deleteById,
        getTotalPrice,
        totalProducts } = useContext(CartContext);

    let total = getTotalPrice()

  return (
    <div>
        {
            <div className='cartWidgetBox'>
                {
                    (cart.length == 0) ?
                    <p className='cartWidgetEmpty'>Tu carrito esta vacío</p>:
                    <div>
                        {cart.map((e, i)=>{
                            return (
                                <div key={i} className='cartWidgetItemContainer'>
            
                                    <img className='cartWidgetImage' src={e.image} alt={e.title} />
                                    <div className='cartWidgetContainerInfo'>
                                        <h6>{e.title}</h6>
                                        <h6>{e.color}</h6>
                                        <p className='cartItemPrice'> {e.quantity} x ${e.unit_price}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            <p className='subtotalCart'>Subtotal: <strong>${total}</strong> </p>
            <Link className='cartWidgetButton' to='/cart' >Ver carrito</Link>
            </div>
        }
        
    </div>
  )
}

export default CartWidget