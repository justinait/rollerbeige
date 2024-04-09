import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../firebaseConfig'
import {getDocs, collection} from "firebase/firestore"
import './Promos.css'
import Modal from 'react-bootstrap/Modal';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function Promos() {
  
  const { 
    cart,
    addToCartContext,
    clearCart,
    deleteById,
    getTotalPrice,
    totalProducts,
    getQuantityById 
  } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos los productos');
  const [quantity, setQuantity] = useState(1)
  const [count, setCount] = useState(quantity);
  const [selectedColor, setSelectedColor] = useState('');
  const [available, setAvailable] = useState(0)

  const handleClose = () => {
    setShow(false);
    setSelectedItem([])
  }
  const handleShow = () => setShow(true);
  
  const handleClick =(e)=>{
    if (!show) {
      setSelectedItem(e);
      handleShow();
    }
  }

  function onAdd (product) {
    if ( product.stock > count ){
      return setCount(count+1);
    }
    else{
      alert('stock maximo')
    }
  }
    
  function onRemove () {
    if( count > 0)   setCount ( count - 1 )
  }

  function addToCart (product, count) {
    let obj = {
      ...product,
      quantity: count
    }
    addToCartContext(obj)
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

  useEffect(()=>{
    if(selectedItem){
      setQuantity(getQuantityById(selectedItem.id))
    }
  }, [selectedItem])

  const checkStock = () => {
    if(selectedItem.length !== 0){
      const detailsArray = selectedItem.details
      {console.log(detailsArray)}
      
      detailsArray.map((e) => {
        if (e.color == selectedColor && e.stock > 1){
          return setAvailable(true)
        }
      });
    }
  }

  useEffect(()=>{
    checkStock();
  }, [selectedColor])
  const categories = [     'Todos los productos' , 'Borlas y Sujetadores', 'Cortinas de baño', 'Riles y Barrales', 'Cortinas estándar', 'Accesorios', 'SALE'    ]
  const handleColorPick = (color) => {
    setSelectedColor(color);
  }
  return (
    <div className='productsContainer'>
      <h2 style={{marginBottom: '-2%' }}>NUESTRA TIENDA</h2>
      <div className='storeCategoryBox' >
        {categories.map((e, i) => (
          <button
            key={i}
            className={`storeCategory ${selectedCategory === e ? 'storeCategoryActive' : ''}`}
            onClick={() => setSelectedCategory(e)}
          >
            {e}
          </button>
          
        ))}
      </div>

      <div className='promosDivContainer'>
        {
          products
          .filter((e) => selectedCategory === 'Todos los productos' || (e.category && e.category.some(category => category === selectedCategory)))
          .map((e, i)=>{
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
            <div className='infoModalContainer'>

              <p className='modalPromoPrice'>${selectedItem?.unit_price}</p>
              <p className='modalPromoDescription'>{selectedItem?.description}</p>
              <div>
                {
                  selectedItem.details?.map((e, i)=>{
                    return(
                      <p key={i} onClick={()=>{handleColorPick(e.color)}} className={`modalColors ${selectedColor === e.color ? 'sizeActive' : ''}`}>{e.color}</p>
                    )
                  })
                }
                {
                  (selectedColor && !available) &&
                  <p className='noStock'>Sin stock</p>
                }
              </div>
              <div className='addCartContainerModal'>

                <div className='itemCountContainer'>
                  <button className='buttonCount' onClick={ ()=>onRemove() }> - </button>
                  <p> { count } </p>
                  <button className='buttonCount' onClick={ ()=>onAdd(selectedItem) }> + </button>
                </div>
                <button 
                className={`buttonCountAdd ${ (!available || !selectedColor )
                ? 'disabledButton' : ''}`} 
                onClick={ ()=> addToCart(selectedItem, count)} 
                disabled={(!available || !selectedColor )}> Agregar al carrito </button>
              </div>
            </div>
            
          </Modal.Body>
          
        </Modal>
      </div>
    </div>
  )
}

export default Promos