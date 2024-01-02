import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../context/ProductsProvider';
import { Link, useParams } from 'react-router-dom';
import Detail from './Detail';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function DetailContainer() {
    const { dataCurtains, dataFabrics } = useContext(ProductsContext);
    const {param} = useParams();
    const [product, setProduct] = useState([]);
    const [isFabric, setIsFabric] = useState(false);

    const getProduct = () => {
        let foundProduct = dataCurtains?.find((e) => param === e.name);
        if(foundProduct){
            setProduct(foundProduct);
            setIsFabric(false);
        } else {
            foundProduct = dataFabrics?.find((e) => param === e.name);
            setIsFabric(true);
            setProduct(foundProduct);
        }
        
    };
  
  useEffect(() => {
    const loadData = () => {
      if (!dataCurtains && !dataFabrics) {
        setTimeout(loadData, 100);//0.1segundo
        return;
      }

      getProduct();
    };

    loadData();
  }, [dataCurtains, param, dataFabrics]);

//   const {image, name, description, attributes} = product
  
//   let objectData;

//   if (product && product.attributes) {
//     objectData = Object.keys(attributes);
//   }

  return (
    <div>
        {
        isFabric ? <Link to='/telas'>      <ArrowBackIcon/>      </Link>
        : <Link to='/cortinas'>      <ArrowBackIcon/>      </Link>
        }
        {console.log(product)}
        <Detail productData={product} />
    </div>
  )
}

export default DetailContainer