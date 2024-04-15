import React, { useContext, useEffect, useRef, useState } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { CartContext } from '../../context/CartContext';
import './Checkout.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection, updateDoc, serverTimestamp, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import mp from '/mercadopago.png'
import { Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com'; 

function Checkout() {
  const navigate = useNavigate();
  const form = useRef();
  
  const { cart, addToCartContext, clearCart, deleteById, getTotalPrice, totalProducts, getQuantityById   } = useContext(CartContext);
  
  const [shipmentCost, setShipmentCost] = useState(0);
  const [shipmentCostAux, setShipmentCostAux] = useState(0);
  const [preferenceId, setPreferenceId]= useState(null);
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    cp: "",
    phone: "",
    city: "",
    province: "",
    adress: "",
    depto: "",
  })

  initMercadoPago(import.meta.env.VITE_PUBLICKEY, {locale:"es-AR"})
  
  const [errorsArray, setErrorsArray] = useState([])
  const [pickUp, setPickUp] = useState(false);
  const [methodChange, setMethodChange] = useState(false)
  
  let total = getTotalPrice()

  const sendEmail = async () => {
    const user_email =userData.email;
    const user_name =userData.name;
    const total =getTotalPrice();
    const items = cart.map ( e=> `${e.title}: ${e.quantity} x $${e.unit_price}`);

    const templateParams = {
      user_name,
      user_email,
      total,
      shipmentCost,
      items: items.join(', ')
    };
    
    try {
      await emailjs.send('34014722', 'template_gtev08e', templateParams, 'd1e499f2Vp0oNsjIh');
      console.log('Correo electrónico enviado correctamente!');
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
    }
  };
  // const updateStock = async (order) => {
  //   order?.items.forEach((e, i) => {
      
  //     updateDoc(
  //       doc(db, "products", e.id), 
  //       {details: e.color == details[0].color && (details[0].stock = (details[0].stock - e.quantity))}
  //     )
  //   })
  // };
  const updateStock = async (order) => {

    order?.items.forEach(async (item) => {
      console.log(item);
      console.log(item.id);
      let itemNewStock = null;

      for (const key in cart) {
        const cartItem = cart[key];
        console.log(cartItem.id);
        console.log(item.id);
        
        if (cartItem.id === item.id) {
          const newArray = cartItem.details.map(e=>{
            if(e.color == item.color){
              const updatedStock = e.stock - item.quantity;
              itemNewStock = e.stock - item.quantity
              return { ...e, stock: updatedStock }
            } else {
              return e
            }
          })
          console.log(newArray);
          updateDoc(doc(db, "products", item.id), { "details": newArray });
        }
      }
      
    });
  };
  useEffect(()=>{
    let order = JSON.parse(localStorage.getItem("order"));
    
    if(order?.paymentMethod === 'transfer') {
      let ordersCollections = collection(db, "orders");
      addDoc(ordersCollections, {
        ...order,
        date: serverTimestamp()
      }).then((res)=>{
        let shipment = pickUp ? 0 :shipmentCost
        navigate('/transfer', { state: { total, shipment } });
      }).catch((error) => {
        console.error("Error adding document: ", error);
      });

      //descontar stock
      //descuenta solo 1 si hya varios del mismo color
      // Object.keys(cart).forEach(key => {
      //   const cartItem = cart[key];
      //   order?.items.forEach(e => {
      //     console.log(e); 
      //     if (cartItem.color === e.color) {
      //       const newStock = parseFloat(cartItem.details.find(item => item.color === cartItem.color).stock) - parseFloat(e.quantity);
      //       cartItem.details.map(item => {
      //         item.color === cartItem.color ? { ...item, stock: newStock } : item
      //       })
      //       updateDoc(doc(db, "products", cartItem.id), {"details": x });
      //     }
      //   });
      // });
      updateStock(order);
      

      localStorage.removeItem("order");
      clearCart();
      setUserData({
        email: "",
        name: "",
        cp: "",
        phone: "",
        city: "",
        province: "",
        adress: "",
        depto: "",
      })
    } else if(order?.paymentMethod === 'card') {

      let ordersCollections = collection(db, "orders");
      addDoc(ordersCollections, {
        ...order,
        date: serverTimestamp()
      }).catch((error) => {
        console.error("Error adding document: ", error);
      });
      
      Object.keys(cart).forEach(key => {
        const cartItem = cart[key];
        order?.items.forEach(e => {
          console.log(e); 
          if (cartItem.color === e.color) {
            const newStock = parseFloat(cartItem.details.find(item => item.color === cartItem.color).stock) - parseFloat(e.quantity);
            updateDoc(doc(db, "products", cartItem.id), {"details": cartItem.details.map(item => item.color === cartItem.color ? { ...item, stock: newStock } : item)});
          }
        });
      });

      localStorage.removeItem("order");
      clearCart();
      setUserData({
        email: "",
        name: "",
        cp: "",
        phone: "",
        city: "",
        province: "",
        adress: "",
        depto: "",
      })
    }

  }, [methodChange])

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

  const handleBuy = async (e, method) => {
    e.preventDefault();
    const result = validate(userData);
    if(!Object.keys(result).length){ 
      setMethodChange(!methodChange)
      let paymentMethod = method;
      const newArray = cart.map ( e=>{
        return {
          title: e.title,
          unit_price: +e.unit_price,
          image: e.image,
          color: e.color,
          quantity: e.quantity,
          id: e.id
        }
      })
      let order = {
        userData: userData,
        items: newArray,
        total: total,
        paymentMethod,
        pickUp: pickUp,
        sent: false
      }
      localStorage.setItem("order", JSON.stringify(order))
      await sendEmail();
    }
    
    if(method === 'card'){
      const id = await createPreference();
      if(id){
        setPreferenceId(id);
      }
    }
  }
  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})
  }
  useEffect(()=>{
    const shipmentDocRef = doc(db, "shipment", "2EprTT1j7rjCxhSFA8ox");
    
    getDoc(shipmentDocRef).then((doc) => {
      if (doc.exists()) {
        setShipmentCost(doc.data().cost)
        setShipmentCostAux(doc.data().cost)
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });

  }, [])

  const handlePickUp =(e)=> {
    setPickUp(e.target.checked);
  }
  useEffect(()=>{
  }, [shipmentCost])
  const validate = (values) => {
    const errors = {}
    if(!values.name){
      errors.name = 'Este campo es obligatorio'
    }
    if(!values.email){
      errors.email = 'Este campo es obligatorio'
    }
    if(!values.phone){
      errors.phone = 'Este campo es obligatorio'
    }

    if(!pickUp){
      if(!values.cp){
        errors.cp = 'Este campo es obligatorio'
      }
      if(!values.city){
        errors.city = 'Este campo es obligatorio'
      }
      if(!values.province){
        errors.province = 'Este campo es obligatorio'
      }
      if(!values.adress){
        errors.adress = 'Este campo es obligatorio'
      }
    }
    setErrorsArray(errors)
    return errors;
  }
  return (
    <div className='checkoutContainer'>
      <Link to={'/cart'}>Volver al carrito</Link>
      {
        <form ref={form} className="form">
          <h6 className='checkoutSubtitle'>DETALLE DE LA COMPRA</h6>
          <div className='detailCheckout'>

            {cart.map((e, i)=>{
              return(
                <div key={i} >
                  <div className='checkoutDetailContainer'>
                    <img src={e.image} alt="" className='imgCheckout'/>
                    <p>{e.title}</p>
                    <p>{e.color}</p>
                    <p> {e.quantity} x ${e.unit_price}</p>
                  </div>

                  <div className='separatorCart'></div>
                </div>
              )
            })}
            <p className='totalCheckout'>Total: ${total}</p>
          </div>
          
          <h5>DATOS DE CONTACTO</h5>
          <div>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Nombre y apellido"
              className="input"
            />
            {errorsArray.name && <Alert key={'danger'} variant={'danger'} className='p-1' style={{ width: 'fit-content' }}>                {errorsArray.name}           </Alert> }
          </div>
          <div >
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className="input"
            />
            {errorsArray.email && <Alert key={'danger'} variant={'danger'} className='p-1' style={{ width: 'fit-content' }}>                {errorsArray.email}           </Alert> }
          </div>
          <div>
            <input
              type="string"
              name="phone"
              onChange={handleChange}
              placeholder="Número de Celular"
              className="input"
            />
            {errorsArray.phone && <Alert key={'danger'} variant={'danger'} className='p-1' style={{ width: 'fit-content' }}>                {errorsArray.phone}           </Alert> }
          </div>

          <h6>Costo de envío: ${shipmentCost}</h6>
          <div className='checkboxContainerCheckout'>
            <h6>Retiro por el local en Paraná, Entre Ríos (gratis)</h6>
            <input type="checkbox" name='pickUp' checked={pickUp} onChange={(e)=>handlePickUp(e)} />
          </div>
          <p>En caso de retiro por el local comunicate para coordinar con nosotros.</p>
            {console.log(cart)}
          {(pickUp == false) &&
          <>
            <h5>DATOS DE ENVÍO</h5>
            <div >
              <input
                type="string"
                name="cp"
                onChange={handleChange}
                placeholder="Código Postal"
                className="input"
              />
              {errorsArray.cp && <Alert key={'danger'} variant={'danger'} className='p-1' style={{ width: 'fit-content' }}>                {errorsArray.cp}           </Alert> }
            </div>
            <div >
              <input
                type="string"
                name="city"
                onChange={handleChange}
                placeholder="Ciudad"
                className="input"
              />
              {errorsArray.city && <Alert key={'danger'} variant={'danger'} className='p-1' style={{ width: 'fit-content' }}>                {errorsArray.city}           </Alert> }
            </div>
            <div >
              <input
                type="string"
                name="province"
                onChange={handleChange}
                placeholder="Provincia"
                className="input"
              />
              {errorsArray.province && <Alert key={'danger'} variant={'danger'} className='p-1' style={{ width: 'fit-content' }}>                {errorsArray.province}           </Alert> }
            </div>
            <div >
              <input
                type="string"
                name="adress"
                onChange={handleChange}
                placeholder="Dirección de entrega"
                className="input"
              />
              {errorsArray.adress && <Alert key={'danger'} variant={'danger'} className='p-1' style={{ width: 'fit-content' }}>                {errorsArray.adress}           </Alert> }
            </div>
            
            <div >
              <input
                type="string"
                name="depto"
                onChange={handleChange}
                placeholder="Departamento"
                className="input"
              />
            </div>
          </>
          
          }
          <div className='buttonsCheckoutContainer'>
            <p className='seleccionarMetodoCheckout' onClick={(e)=>handleBuy(e, 'transfer')}> Pagar con transferencia</p>
            <button className='seleccionarMetodoCheckout' onClick={(e)=>handleBuy(e, 'card')} disabled={(preferenceId!=null)}> <img src={mp} alt="Mercado Pago" className='mercadoPagoLogo' /> Pagar con tarjeta de crédito/débito</button>
          </div>

        </form>
        
      }
      {
        preferenceId && <Wallet initialization={{preferenceId, redirectMode:"self"}} />
      }
      
    </div>
  )
}

export default Checkout