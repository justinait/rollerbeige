import React, { useContext, useEffect, useState } from 'react';
import './Detail.css';
import Whatsapp from '../Whatsapp/Whatsapp';
import { ProductsContext } from '../../context/ProductsProvider';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Detail() { 
  const { dataCurtains } = useContext(ProductsContext);
  const {curtain} = useParams();
  const [product, setProduct] = useState([]);

  const getProduct = () => {
    const foundProduct = dataCurtains?.find((e) => curtain === e.name);
  
    if (foundProduct) {
      setProduct(foundProduct);
    }
  };
  

  useEffect(() => {
    const loadData = () => {
      if (!dataCurtains) {
        setTimeout(loadData, 100);//0.1segundo
        return;
      }

      getProduct();
    };

    loadData();
  }, [dataCurtains, curtain]);

  const {image, name, description, attributes} = product
  
  let objectData;

  if (product && product.attributes) {
    objectData = Object.keys(attributes);
  }

  return (
    <div className='detailContainer'>
      <Link to='/cortinas'>      <ArrowBackIcon/>      </Link>
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
