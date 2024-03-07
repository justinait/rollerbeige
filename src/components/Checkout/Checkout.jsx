import React, { useContext, useEffect, useState } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { CartContext } from '../../context/CartContext';
import './Checkout.css'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { addDoc, collection, updateDoc, serverTimestamp, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function Checkout() {
  
  const { cart, addToCartContext, clearCart, deleteById, getTotalPrice, totalProducts, getQuantityById   } = useContext(CartContext);
  
  const [preferenceId, setPreferenceId]= useState(null);
  const [userData, setUserData] = useState({
    email: "",
    cp: "",
    phone: ""
  })
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search)
  const paramValue = queryParams.get("status")

  initMercadoPago(import.meta.env.VITE_PUBLICKEY, {locale:"es-AR"})

  useEffect(()=>{
    let order = JSON.parse(localStorage.getItem("order"));
    if(paramValue === "approved"){
      
      let ordersCollections = collection(db, "orders");
      addDoc(ordersCollections, {
        ...order,
        date: serverTimestamp()
      }).then(res=>{
        setOrderId(res.id)
      })
      //item o items?
      order.items.foreach((e)=>{
        updateDoc(doc(db, "products", e.id), {stock: e.stock - e.quantity})
      })

      localStorage.removeItem("order");
      clearCart();
    }

  }, [paramValue])

  const createPreference = async()=> {
    const newArray = cart.map ( e=>{
      return {
        title: e.title,
        unit_price: +e.unit_price,
        quantity: e.quantity
      }
    })
    try {
      let response = await axios.post("https://roller-backend-ten.vercel.app/create_preference", {
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
    let order = {
      email: userData.email,
      cp: userData.cp,
      phone: userData.phone,
      items: cart,
      total: getTotalPrice + shipmentCost
    }
    localStorage.setItem("order", JSON.stringify(order))
    
    const id = await createPreference();
    if(id){
      setPreferenceId(id);
    }
  }
  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})
  }

  return (
    <div className='checkoutContainer'>
      {
        !orderId ?
        <div className="form">
          <div className="input">
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className="input"
            />
          </div>
          <div className="input">
            <input
              type="number"
              name="cp"
              onChange={handleChange}
              placeholder="Código Postal"
              className="input"
            />
          </div>
          <div className="input">
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              placeholder="Número de Celular"
              className="input"
            />
          </div>
          <button onClick={handleBuy}>Seleccionar método de pago</button>
        </div>
        :
        <h2>El pago se realizó con éxito. {orderId}</h2>
      }
      {
        preferenceId && <Wallet initialization={{preferenceId, redirectMode:"self"}} />
      }
      
    </div>
  )
}

export default Checkout