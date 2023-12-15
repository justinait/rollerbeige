import React, { useEffect, useState } from 'react'
import db from '../../firebaseConfig';
import { getDocs, collection } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import ProductsHome from './ProductsHome';

function ProductsContainer() {
    
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

    return(
        <div>
            <ProductsHome curtains={dataCurtains}/>
        </div>
    )
}

export default ProductsContainer