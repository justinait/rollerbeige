import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { db } from '../../firebaseConfig';
import {deleteDoc, doc} from "firebase/firestore"
import EditAddModal from './EditAddModal';
import Modal from 'react-bootstrap/Modal';
import EditIcon from '@mui/icons-material/Edit';
import './ProductsList.css'

function ProductsList({products, setIsChange}) {

    const [productSelected, setProductSelected] = useState(null)
    const [show, setShow] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Todos los productos');
  
    const handleClose = () => setShow(false);
  
    const handleOpen = (product) => {
        setShow(true);
        setProductSelected(product);
    }
  
    const deleteProduct = (id) => {
        deleteDoc(doc(db, "products", id));
        setIsChange(true);
    }

    const categories = [     'Todos los productos' , 'Borlas y Sujetadores','Borlas', 'Sujetadores', 'Cortinas de baño', 'Rieles y Barrales', 'Rieles', 'Barrales', 'Cortinas estándar', 'Accesorios', 'SALE'    ]

    return (
        <div>
        
        <button className='dashboardButton addButton' onClick={()=>handleOpen(null)}>Agregar Nuevo Producto</button>
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
        {
            products.length > 1 ? 
            <table className='tableDiv'>
                <thead>
                    <tr>

                        <th>Título</th>
                        <th>Descrip.</th>
                        <th>$</th>
                        <th>Foto</th>

                        <th>Acción</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {products
                    .filter((e) => selectedCategory === 'Todos los productos' || (e.category && e.category.some(category => category === selectedCategory)))
                    .map((e, i)=>{
                        return (
                            <tr key={e.id} className='tableRowDashboard'>
                                
                                <td>{e.title}</td>
                                <td className='descriptionDashboard'>{e.description}</td>
                                <td>{e.unit_price}</td>
                                <td><img src={e.image} width={80} alt={e.name} /></td>
                                
                                <td>
                                    <button className='dashboardButton editButton' onClick={()=> handleOpen(e) }> <EditIcon/> </button>
                                    <button className='dashboardButton deleteButton' onClick={()=>deleteProduct(e.id)}> <DeleteIcon/></button>
                                </td>

                            </tr>
                        )
                    })}
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <EditAddModal handleClose={handleClose} setIsChange={setIsChange} productSelected={productSelected} setProductSelected={setProductSelected} />
                        
                    </Modal>
                        

                </tbody>
            </table>    :    
            
            <p>No hay promociones por el momento.</p>
        
        }
    </div>
  )
}

export default ProductsList