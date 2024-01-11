import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig'
import {getDocs, collection} from "firebase/firestore"
import './Promos.css'
import Modal from 'react-bootstrap/Modal';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

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
              <div key={e.id}  className='promoContainer' onClick={()=>handleClick(e)} style={{ cursor: 'pointer' }}>
                
                <img src={e.image} alt={e.title} className='promoImage' />                
                <p className='promoTitle'>{e.title}</p>
                <p className='promoPrice'>$ {e.unit_price}</p>

              </div>
            )
          })
        }
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='modalPromoTitle'>{selectedItem?.title} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedItem?.image} className='modalPromoImage' alt="" />
            <p className='modalPromoPrice'>${selectedItem?.unit_price}</p>
            <p className='modalPromoDescription'>{selectedItem?.description}</p>
            <Link target='_blank' to={`https://api.whatsapp.com/send?phone=5493434282937&text=Hola!%20Quiero%20consultar%20por:%20${selectedItem.title}%20`}><p className='modalWsp'>Consultá por este producto <WhatsAppIcon fontSize='16px'/> </p>            </Link>
          </Modal.Body>
          
        </Modal>
      </div>
    </div>
  )
}

export default Promos