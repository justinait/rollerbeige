import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import './UserOrders.css'

function UserOrders() {
    const [orders, setOrders] = useState([]);

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

  return (
    <div className='userOrdersContainer'>
        <p>ORDENES</p>
        {console.log(orders)}
        {orders.map(e => {
            return(
                e?.items?.map(item => {
                    return <div>
                        <p>{item.title}</p>
                        <p>{item.unit_price}</p>
                    </div>
                })
            )
            
        })
        }
    </div>
  )
}

export default UserOrders