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
        {orders.map(e => {
            {
                e?.items?.map(item => {
                    return <div>
                        <h2>{item.title}</h2>
                    </div>
                })
            }
            return <div key={e.id}>
                <h4>{e.title}</h4>
            </div>
        })
        }
    </div>
  )
}

export default UserOrders