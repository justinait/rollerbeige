import React, { useContext, useState } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { CartContext } from '../../context/CartContext';
import './Checkout.css'
import axios from 'axios';

function Checkout() {
  
  const { 
    cart,
    addToCartContext,
    clearCart,
    deleteById,
    getTotalPrice,
    totalProducts,
    getQuantityById 
  } = useContext(CartContext);

  const [preferenceId, setPreferenceId]= useState(null);

  initMercadoPago("APP_USR-80c5d300-27b4-41d7-9445-042e9cd3f19f", {locale:"es-AR"})

  const createPreference = async()=> {
    const newArray = cart.map ( e=>{
      return {
        title: e.title,
        unit_price: +e.unit_price,
        quantity: e.quantity
      }
    })
    try {
      let response = await axios.post("http://localhost:8080/create_preference", {
        items: newArray,
        shipment_cost: 100
      })
      const {id} = response.data
      return id;
    } catch (error) {
      console.log(error);
    }
  }

  const handleBuy = async () => {
    const id = await createPreference();
    if(id){
      setPreferenceId(id);
    }
  }

  return (
    <div className='checkoutContainer'>
      <button onClick={handleBuy}>Seleccionar método de pago</button>
      {
        preferenceId && <Wallet initialization={{preferenceId, redirectMode:"self"}} />
      }
    </div>
  )
}

export default Checkout