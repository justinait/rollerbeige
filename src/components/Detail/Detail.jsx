import React, { useContext, useEffect, useState } from 'react';
import './Detail.css';
import Whatsapp from '../Whatsapp/Whatsapp';
import { ProductsContext } from '../../context/ProductsProvider';
import { useParams } from 'react-router-dom';

function Detail() { 
  const { dataCurtains } = useContext(ProductsContext);
  const {curtain} = useParams();
  const [product, setProduct] = useState([]);

  const getProduct = () =>{

    dataCurtains?.map(e => {
      
      if(curtain == e.name){
        setProduct(e);
      }
      return product
    })
  }

  useEffect(()=>{
    getProduct();
  }, [curtain])

  const {image, name, description, attributes} = product
  
  let objectData;

  if (product && product.attributes) {
    objectData = Object.keys(attributes);
  }

  return (
    <div className='detailContainer'>
      <h3>{name}</h3>
      <img src={image} alt={name} className='detailImage'/>
      <p dangerouslySetInnerHTML={{ __html: description }} className='detailDescription'></p>

      {Array.isArray(objectData) && objectData.map((e, i) => {
        const values = attributes[e];

        return (
          <div key={i}>
            <h4 className='detailAttributeSubtitle'>{e}</h4>
            <ul>
              {Array.isArray(values) && values.map((value, j) => (
                <li key={j} className='detailAttribute'>{value}</li>
              ))}
            </ul>
          </div>
        );
      })}
      
      <Whatsapp />
    </div>
  );
}

export default Detail;
