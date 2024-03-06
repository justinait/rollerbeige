import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();

function CartContextComponent({children}) {
    
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        setTotalProducts(cart.length);
    }, [cart]);

    const addToCartContext = (product) => {
        let exist = cart.some(e=> e.id ===product.id)
        if(exist){
            let newArr = cart.map (e =>{
                if(e.id === product.id){
                    return {...e, quantity: product.quantity}
                } else {
                    return e;
                }
            })
            localStorage.setItem("cart", JSON.stringify(newArr))
            setTotalProducts(totalProducts+product.quantity)
            setCart(newArr)

        } else {
            localStorage.setItem("cart", JSON.stringify([...cart, product]))
            setCart([...cart, product])
            setTotalProducts(totalProducts+product.quantity)
        }
        
    }
    const getQuantityById = (id) =>{
        let product = cart.find(e=> e.id ===id);
        return product?.quantity;
    }
    const clearCart =()=>{
        setTotalProducts(0)
        localStorage.removeItem("cart")
        setCart([]);
    }
    
    const deleteById = (id) => {
        const newArr = cart.filter(e=> e.id !== id)
        setCart(newArr)
        localStorage.setItem("cart", JSON.stringify(newArr))
        setTotalProducts(totalProducts-1)
    }

    const getTotalPrice =()=>{
        const total= cart.reduce((acc, e)=>{
            return acc + (e.unit_price * e.quantity);
        }, 0);
        return total;
    }

    let data = {
        cart,
        addToCartContext,
        clearCart,
        deleteById,
        getTotalPrice,
        totalProducts,
        getQuantityById
    }
    
  return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextComponent