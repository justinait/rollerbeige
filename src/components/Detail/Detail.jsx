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
  let objectData
  if (product && Object.keys(product).length > 0) {
    objectData = Object.keys(product).map(key => ({
      key,
      value: product[key],
    }));
  }

  return (
    <div className='detailContainer'>
      
      <img src={image} alt={name} className='detailImage'/>
      <p dangerouslySetInnerHTML={{ __html: description }} className=''></p>
      
      {console.log(attributes)}
      {console.log(objectData)}

      {/* {objectData && objectData.map(item => (
        <div key={item.key}>
          
          <p>Nombre: {product.name}</p>
          <p>
            Array 1: {attributes}
          </p>
        </div>
      ))} */}

      {/* {objectData?.map((e, i) => (
        <div key={i}>
          
          <p>{e}:</p>
          
          {e.map((value, index) => {
            return (<p>{value}</p>)
          }  
          )}
        </div>
      ))}  */}
      {/* {Object.keys(attributes)?.map((e, i) => (
        <div key={index}>
          <p>{e}</p>
          {e.map((value, index) => {
            return (<p>{value}</p>)

          }  
          )}
        </div>
      ))} */}

      <Whatsapp />
    </div>
  );
}

export default Detail;
