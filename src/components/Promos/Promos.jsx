import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig'
import {getDocs, collection} from "firebase/firestore"
import { Link } from 'react-router-dom';
import './Promos.css'
import promo1 from '/images/curtains/cortinas (3).jpg'
import promo2 from '/images/curtains/cortinas (2).jpg'

function Promos() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    let refCollection = collection(db, 'products')
    getDocs(refCollection)
    .then((res)=>{
      let newArray = res.docs.map(e =>{
        return {
          ...e.data(), 
          id: e.id
        }
      })
      setProducts(newArray);
    })
    .catch((err)=>console.log(err))
  }, [])
  return (
    <div className='productsContainer'>
      <h2>SALE</h2>
      <div className='promosDivContainer'>
        {
          products.map(e=>{
            return(
              <div key={e.id}  className='promoContainer'>
                
                <img src={e.image} alt={e.title} className='promoImage' />                
                <p className='promoTitle'>{e.title}</p>
                <p className='promoPrice'>$ {e.unit_price}</p>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Promos