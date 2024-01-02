import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsProvider';

function Fabrics() {
    
    const { dataFabrics } = useContext(ProductsContext);
    const [product, setProduct] = useState([]);
  
    const getProduct = () =>{
  
        dataFabrics?.map(e => {
        
            setProduct(e);
            return product

        })
    }
  
    useEffect(()=>{
      getProduct();
    }, [])

  return (
    <div className='productsContainer'>

      <h2> NUESTRAS TELAS</h2>

      <h3> Telas Sintéticas</h3>

      {
        dataFabrics && dataFabrics.slice().reverse().map((e, i) =>  {
          return(
            <Link to={`/${e.name}`} className='productContainer' key={i}>
              <img src={e.image} alt={e.name} className='imgProduct'/>
              <div className='productInfoContainer'>
                <p className='productName'>{e.name}</p>
                <p dangerouslySetInnerHTML={{ __html: e.description }} className='productDescription'></p>
                <p className='moreInfo'>Ver más...</p>
              </div>

            </Link>
          )
        })
      }

    </div>
  )
}

export default Fabrics