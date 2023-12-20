import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import db from '../../firebaseConfig';
import { getDocs, collection } from 'firebase/firestore'
import './Products.css'

import roller from '/images/curtains/roller.jpeg'
import eclipse from '/images/curtains/cortinas (46).jpg'
import tradicionales from '/images/curtains/cortinas (2).jpg'
import verticales from '/images/curtains/cortinas (73).jpg'//82
import orientales from '/images/curtains/cortinas (41).jpg'
import baño from '/images/curtains/cortinas (8).jpg'
import romanas from '/images/curtains/romanas.jpg'
import venecianas from '/images/curtains/venecianas.jpg'
import celulares from '/images/curtains/celulares.jpg'

function Products() {
    const [dataCurtains, setdataCurtains] = useState([])
    const { id } = useParams();

    const getCurtains = async () => {
        
        const curtainsCollection = collection(db, 'curtains');
        const curtainsSnapshot = await getDocs(curtainsCollection);

        const curtainsList = curtainsSnapshot.docs.map( (e) => {
            let eachItem = e.data();
            eachItem.id = e.id;

            return eachItem;
        })
        return curtainsList
        
    }

    useEffect(() => {
        
        getCurtains()
        .then( (res) => { 
            setdataCurtains(res)
        })
    }, [id])

  return (
    <div className='productsContainer'>

        <h2> NUESTRAS CORTINAS</h2>

        {
            dataCurtains && dataCurtains.slice().reverse().map((e, i) =>  {
                return(
                    <Link to={`/${e.name}`} className='productContainer' key={i}>
                        <img src={e.image} alt={e.name} className='imgProduct'/>
                        <p className='productName'>{e.name}</p>
                        
                        <p dangerouslySetInnerHTML={{ __html: e.description }} className='productDescription'></p>

                    </Link>
                )
            })
        }

    </div>
  )
}

export default Products