import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { db, uploadFile } from '../../firebaseConfig';
import {addDoc, collection, updateDoc, doc} from "firebase/firestore"

function EditAddModal({handleClose, setIsChange, productSelected, setProductSelected}) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [checkboxes, setCheckboxes] = useState([])
  const [categoryArray, setCategoryArray] = useState([])
  const [newProduct, setNewProduct] = useState({
    title:"",
    unit_price:0,
    image:"",
    description:"",
    category: []
  })
  const [file, setFile] = useState(null);

  const handleImage = async () => {
    setIsLoading(true);
    let url = await uploadFile(file);

    if(productSelected) {
      setProductSelected({
        ...productSelected, image: url
      })
    } else {
      setNewProduct({...newProduct, image: url})
    }

    setIsLoading(false);
  }
   
  const handleChange = (e) => {
    if(productSelected) {
      setProductSelected({
        ...productSelected,  [e.target.name]: e.target.value
      })
    } else {
      setNewProduct({...newProduct, [e.target.name]: e.target.value})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const productsCollection = collection(db, "products")
    
    if(productSelected){
      let obj = {
        ...productSelected,
        unit_price: +productSelected.unit_price,
        category: newProduct.category
      }

      updateDoc(doc(productsCollection, productSelected.id), obj).then(()=>{
        setIsChange(true);
        handleClose();
      })
      
    } else{
      let obj = {
        ...newProduct,
        unit_price: +newProduct.unit_price
      }
      addDoc(productsCollection, obj).then(()=> {
        setIsChange(true);
        handleClose();
      })

    }
  }

  const categories = [  'Borlas y Sujetadores', 'Cortinas de baño', 'Riles y Barrales', 'Cortinas estándar', 'Accesorios', 'SALE'    ]
  const handleCheckboxChange = (event, category) => {
    const { checked } = event.target;
    const updatedCheckboxes = { ...checkboxes, [category]: checked };
    setCheckboxes(updatedCheckboxes);
    updateCategoryArray(category, checked);
  };

  const updateCategoryArray = (category, checked) => {
    if (checked) {
      setNewProduct(prevState => ({
        ...prevState,
        category: [...prevState.category, category]
      }));
    } else {
      setNewProduct(prevState => ({
        ...prevState,
        category: prevState.category.filter(cat => cat !== category)
      }));
    }
    console.log(newProduct);
  };
  useEffect(() => {
    if (productSelected) {
      const selectedCategories = productSelected.category;
      const updatedCheckboxes = {};
      categories.forEach(category => {
        updatedCheckboxes[category] = selectedCategories.includes(category);
      });
      setCheckboxes(updatedCheckboxes);
      setNewProduct(prevState => ({
        ...prevState,
        category: selectedCategories
      }));
    }
  }, [productSelected]);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{productSelected?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
         
        <form className="form">
          <div className="input">
            <input
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="Nombre"
              className="input"
              defaultValue={productSelected?.title}
            />
          </div>
          <div className="input">
            <input
              type="number"
              name="unit_price"
              onChange={handleChange}
              placeholder="Precio"
              className="input"
              defaultValue={productSelected?.unit_price}
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="description"
              onChange={handleChange}
              placeholder="Descripción"
              className="input"
              defaultValue={productSelected?.description}
            />
          </div>
          
          <p>Categorías</p>
          <div className="inputModal">
            {categories.map((category, i)=>{    
              return (
                <div key={i}>
                  <input
                    type="checkbox"
                    name={category}
                    checked={checkboxes[category] || false}
                    id={`checkbox-${category}`}
                    onChange={(event)=>handleCheckboxChange(event, category)}
                  />
                  <label>{category}</label>
                </div>
              )
            })}
          </div>

          <div className="input">
            <input
              type="file"
              onChange={(e)=>setFile(e.target.files[0])}
              className="input"
            />
          </div>
          {
            file &&
            <button type='button' onClick={handleImage}>Confirmar imagen</button>
          }

        </form>
         
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        
        {
          !isLoading &&
          <Button type='submit' onClick={handleSubmit} variant="primary">Guardar</Button>
        }
        
    </Modal.Footer>
    </>
  );
}

export default EditAddModal;