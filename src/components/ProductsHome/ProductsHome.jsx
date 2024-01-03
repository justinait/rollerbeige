import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ProductsHome.css'
// import blackout from '/images/fabrics/black clasico.jpg'
// import sunscreen from '/images/fabrics/sunscreen4.png'
// import traslucida from '/images/fabrics/traslucida.jpg'
// import eclipse from '/images/fabrics/duo2.jpg'
// import lino from '/images/fabrics/linorustico.jpeg'
// import gasalino from '/images/fabrics/gasalino.jpg'
// import gross from '/images/fabrics/gross.jpg'
// import tusor from '/images/fabrics/tusor.jpg'
// import gasahilo from '/images/fabrics/gasahilo.jpeg'
// import voilehilo from '/images/fabrics/voilehilo.jpg'
import { ProductsContext } from '../../context/ProductsProvider'

function ProductsHome() {
    
    const { dataCurtains, dataFabrics } = useContext(ProductsContext);

    const [product, setProduct] = useState([]);
    const [fabric, setFabric] = useState([]);

    const getProduct = () =>{
        dataCurtains?.map(e => {
            setProduct(e);
            return product
        })
    }

    const getFabric = () =>{
        dataFabrics?.map(e => {
            setFabric(e);
            return fabric
        })
    }
  
    useEffect(()=>{
      getProduct();
      getFabric();
    }, [])

  return (
    <div>
        <h3 id='products' style={{marginBottom: '0'}}>ELEGÍ TUS CORTINAS</h3>
        
        <h4 className='subtitleHome' >Por sistema</h4>

        <div className='productsBoxContainer'>
        
        {
            dataCurtains && dataCurtains.slice().reverse().map((e, i) =>  {
                return(
                    <Link 
                    to={`/${e.name}`} 
                    className='productBox' 
                    onClick={()=>setShowDropdown(false)} 
                    key={i} 
                    style={{ width: i === dataCurtains.length - 3 ? '100%' : '50%' }}>
                        <div className='imageOverlay'></div>
                        <img src={e.image} alt={e.title}/>
                        <p dangerouslySetInnerHTML={{ __html: e.title }} className='productBoxText'></p>
                    </Link>
                )

            })
        }
        </div>

        <h4 className='subtitleHome' >Por tela</h4>
        <div className='productsBoxContainer fabric'>

            {
                dataFabrics && dataFabrics.map((e, i) =>  {
                    return(
                        <Link 
                        to={`/${e.name}`} 
                        className='productBox' 
                        onClick={()=>setShowDropdown(false)} 
                        key={i} 
                        style={{ width: i === dataFabrics.length - 3 ? '100%' : '50%' }}>
                            <div className='imageOverlay'></div>
                            <img src={e.image} alt={e.title}/>
                            <p dangerouslySetInnerHTML={{ __html: e.title }} className='productBoxText'></p>
                        </Link>
                    )

                })
            }
        </div>
        
    </div>
  )
}

export default ProductsHome