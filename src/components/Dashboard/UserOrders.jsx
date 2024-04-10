import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';
import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import './UserOrders.css'

function UserOrders() {
    const [orders, setOrders] = useState([]);
    const [orderState, setOrderState] = useState(false);
    const [shipmentCost, setShipmentCost] = useState(0);
    
    useEffect(()=>{
        const shipmentDocRef = doc(db, "shipment", "2EprTT1j7rjCxhSFA8ox");
        
        getDoc(shipmentDocRef).then((doc) => {
          if (doc.exists()) {
            setShipmentCost(doc.data().cost)
          }
        }).catch((error) => {
          console.log("Error getting document:", error);
        });
    
      }, [])
    useEffect(()=> {
        const ordersCollections = collection (db, "orders")
        getDocs(ordersCollections).then(res =>{
            const newArr = res.docs.map( e =>{
                return {
                    ...e.data(), id: e.id
                }
            })
            setOrders(newArr)
        })
    }, [ ])
    
    const markAsSent = async (orderId) => {
        const orderRef = doc(db, "orders", orderId);
        await updateDoc(orderRef, {
            sent: true
        });
        const updatedOrders = orders.map(order => {
            if (order.id === orderId) {
                return { ...order, sent: true };
            }
            return order;
        });
        setOrders(updatedOrders);
    };
  return (
    <div className='userOrdersContainer'>
        <h2>ORDENES</h2>
        <div className='dashboardCategoryBox'>
            <button className={`dashboardCategory ${orderState === false ? 'dashboardCategoryActive' : ''}`} onClick={() => setOrderState(false)}>En Espera</button>
            <button className={`dashboardCategory ${orderState === true ? 'dashboardCategoryActive' : ''}`} onClick={() => setOrderState(true)}>Enviadas</button>
        </div>

        {orders
        .filter((e) => (orderState === e.sent))
        .map((e, i) => {
            const reversedIndex = orders.length - i;
            const timestamp = e.date;
            const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
            const formattedDate = date.toISOString();
            const finalDate = formattedDate.split("T")[0];
            return(
                <div key={i} className='orderContainer'>
                    <div className='orderTitle'>
                        <p>Código: {e.id}</p>
                    </div>
                    <p>{!e.sent && <button onClick={() => markAsSent(e.id)}>Marcar como enviada</button>}</p>
                    
                    <p>Fecha de compra: {finalDate}</p>
                    {e.pickUp && <h6>RETIRA POR EL LOCAL</h6>}
                    <p>Método de pago: {e.paymentMethod}</p>
                    <p>Total: ${e.total} + {shipmentCost}</p>

                    {e?.items?.map((item, index) => {
                        return (
                            <div className='itemOrderContainer' key={index}>
                                <div className='itemOrderGroup'>
                                    <p>Item {index + 1}</p>
                                    <img src={item.image} width={50}/> 
                                </div>
                                <div className='itemOrderGroup'>
                                    <p>{item.title}</p>
                                    <p>{item.quantity} x ${item.unit_price}</p>
                                    <p>{item.color}</p>
                                </div>
                            </div>
                        )
                    })}

                    <h6>Datos del comprador:</h6>                   
                    {Object.keys(e.userData).map((key, index) => {
                        const element = e.userData[key];
                        return (
                            <div key={index} className='userOrder'>
                                <p>{element}</p>
                            </div>
                        )
                    })}
                </div>
            )
        })
        }
    </div>
  )
}

export default UserOrders