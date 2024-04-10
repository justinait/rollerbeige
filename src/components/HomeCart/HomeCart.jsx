import React, { useEffect, useState } from 'react'
import './HomeCart.css'
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { Link } from 'react-router-dom';

function HomeCart() {

  const [products, setProducts] = useState([]);
  
  useEffect(()=>{

    let refCollection = collection(db, 'products')
    let q = query(refCollection, orderBy('unit_price'), limit(4));
    getDocs(q)
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
  const numToShow = window.innerWidth < 1000 ? 2 : 4;

  return (
    <div>
      <h3>NUESTRA TIENDA</h3>
      <div className='menuStore'>
        {
        products
        .slice(0, numToShow)
        .map((e, i)=>{
          return(
          <Link to={'/store'} key={e.id}  className='promoContainer' style={{ cursor: 'pointer' }}>
            <img src={e.image} alt={e.title} className='promoImage' />                
            <p className='promoTitle'>{e.title}</p>
            <p className='promoPrice'>$ {e.unit_price}</p>
          </Link>
          )
        })
        }
      </div>
    </div>
  )
}

export default HomeCart