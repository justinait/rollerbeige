import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { createContext } from 'react';
import db from '../firebaseConfig';

const ProductsContext = createContext();

function ProductsProvider({children}) {
  const [dataCurtains, setDataCurtains] = useState(null);

  useEffect(() => {
    const getCurtains = async () => {
      try {
        const curtainsCollection = collection(db, 'curtains');
        const curtainsSnapshot = await getDocs(curtainsCollection);

        const curtainsList = curtainsSnapshot.docs.map((e) => {
          let eachItem = e.data();
          eachItem.id = e.id;

          return eachItem;
        });

        setDataCurtains(curtainsList);
        
      } catch (error) {
        console.error('Error fetching curtains:', error);
      }
    };

      getCurtains();
    }, []);

  return (
    <ProductsContext.Provider value={{ dataCurtains }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
export { ProductsContext }
