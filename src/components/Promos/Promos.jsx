import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig'
import {getDocs, collection} from "firebase/firestore"
import './Promos.css'
import promo1 from '/images/curtains/cortinas (3).jpg'
import promo2 from '/images/curtains/cortinas (2).jpg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Promos() {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleClick =(e)=>{
    if (!show) {
      setSelectedItem(e);
      handleShow();
    }
  }

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
              <div key={e.id}  className='promoContainer' onClick={()=>handleClick(e)}>
                
                <img src={e.image} alt={e.title} className='promoImage' />                
                <p className='promoTitle'>{e.title}</p>
                <p className='promoPrice'>$ {e.unit_price}</p>

              </div>
            )
          })
        }
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem?.title} </Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Promos