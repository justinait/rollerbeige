import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsProvider';
import './Fabrics.css'

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

      <h5 style={{marginTop: '0' }} > Telas Sintéticas</h5>
      {
        dataFabrics && dataFabrics.slice().reverse().map((e, i) =>  {
          
          return(
            <>
              {
                !e.category &&   
                <Link to={`/${e.name}`} className='productContainer' key={i}>
                  <img src={e.image} alt={e.name} className='imgProduct'/>
                  <div className='productInfoContainer'>
                    <p className='productName'>{e.name}</p>
                    <p dangerouslySetInnerHTML={{ __html: e.description }} className='productDescription'></p>
                    <p className='moreInfo'>Ver más...</p>
                  </div>
                </Link>
              }
            </>
              
          )
        })
        
           
      }

      <h5> Telas Tradicionales</h5>
      <p className='traditionalDescription'>
        En Roller Beige, estamos comprometidos con la excelencia y la satisfacción del
        cliente, y eso se refleja en cada detalle de nuestras telas de género. Antes de llegar a
        tus ventanas, cada cortina de género ha pasado por un riguroso proceso de calidad,
        siendo sometida a nuestras más altas exigencias. <br />
        Cada una de nuestras telas tradicionales ha sido probada y aprobada por nosotros
        mismos, asegurando que cumplan con estabilidad dimensional y preservando la
        intensidad de los colores.
      </p>
      {
        dataFabrics && dataFabrics.slice().reverse().map((e, i) =>  {
          
          return(
            <>
              {
                e.category &&   
                <Link to={`/${e.name}`} className='productContainer' key={i}>
                  <img src={e.image} alt={e.name} className='imgProduct'/>
                  <div className='productInfoContainer'>
                    <p className='productName'>{e.name}</p>
                    <p dangerouslySetInnerHTML={{ __html: e.description }} className='productDescription'></p>
                    
                  </div>
                </Link>
              }
            </>
              
          )
        })
      }

    </div>
  )
}

export default Fabrics