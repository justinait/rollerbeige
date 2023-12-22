import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductsHome from './ProductsHome';
import { ProductsContext } from '../../context/ProductsProvider';

function ProductsContainer() {
    
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

    return(
        <div>
            <ProductsHome curtains={dataCurtains}/>
        </div>
    )
}

export default ProductsContainer