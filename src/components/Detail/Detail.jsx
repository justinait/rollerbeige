import React, { useContext, useEffect, useState } from 'react';
import './Detail.css';
import Whatsapp from '../Whatsapp/Whatsapp';
import { ProductsContext } from '../../context/ProductsProvider';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Detail() { 
  const { dataCurtains, dataFabrics } = useContext(ProductsContext);
  const param = useParams();
  const [product, setProduct] = useState([]);
  const [isFabric, setIsFabric] = useState(false);

  const getProduct = () => {
    let foundProduct = null;
  
    foundProduct = dataCurtains?.find((e) => param.curtain === e.name);
  
    if (foundProduct) {
      setIsFabric(false);
    } else {
      foundProduct = dataFabrics?.find((e) => param.curtain === e.name);
      setIsFabric(true);
    }
  
    setProduct(foundProduct);
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
  }, [dataCurtains, param]);
  
  const { image, name, description, attributes } = product;
  let objectData;

  if (product && product.attributes) {
    objectData = Object.keys(attributes);
  }

  return (
    <div className='detailContainer'>
      {isFabric ?      
      <Link to='/telas' className='arrow'>      <ArrowBackIcon/>      </Link>  :
      <Link to='/cortinas' className='arrow'>      <ArrowBackIcon/>      </Link> 
      }
      <h3>{name}</h3>
      <img src={image} alt={name} className='detailImage'/>
      <p dangerouslySetInnerHTML={{ __html: description }} className='detailDescription'></p>

      {Array.isArray(objectData) && objectData.map((e, i) => {
        const values = attributes[e];

        return (
          <div key={i}>
            <h4 className='detailAttributeSubtitle'>{e}</h4>
            {Array.isArray(values) ? (
              <ul>
                {values.map((item, k) => (
                  <li key={k}>{item}</li>
                ))}
              </ul>
            ) : (
              <ul>
                <li>{values}</li>
              </ul>
            )}
          </div>
        );
      })}
      
    </div>
  );
}

export default Detail;
