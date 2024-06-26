import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './Cart.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function Cart() {
    
    const { 
      cart,
      addToCartContext,
      clearCart,
      deleteById,
      getTotalPrice,
      totalProducts,
      getQuantityById 
    } = useContext(CartContext);

    let total = getTotalPrice()

    return (
        <div className='cartContainer'>
            {cart.length !== 0 ?
            
            <>
                <h3>Tu carrito</h3>
                <div className='buttonsContainer'>
                    <button className='clearCartButton' onClick={clearCart}>Vaciar carrito</button>
                    <Link to='/checkout' className='goToCheckoutButton'>Finalizar compra</Link>
                </div>
                <div className='cartMapContainer'>

                {
                    cart.map((e, i)=>{
                        return (
                            <div key={i} >

                                <div className='cartItemContainer'>
                                    
                                    <img className='cartItemImage' src={e.image} alt={e.title} />
                                    <div className='infoCartItem'>
                                        <p>{e.title}</p>
                                        <p>{e.color}</p>
                                        <button className='cartItemDelete' onClick={()=>deleteById(e.id, e.color)}> <DeleteOutlinedIcon/> </button>
                                        <h6 className='cartItemPrice'>{e.quantity} x <strong> ${e.unit_price}</strong></h6>
                                    </div>
                                </div>
                                <div className='separatorCart'></div>
                            </div>
                        )
                    })
                }
                </div>
                <p className='subtotalCart'>Subtotal: ${total}</p>
                <Link to={'/store'}>Continuar comprando</Link>
            </>
            :
            <div className='emptyContainer'>
                <ShoppingCartOutlinedIcon className='cartEmptyIcon'/>
                <p className='cartEmptyText'>Tu carrito está vacío</p>
                <Link to='/store' className='returnButtonCart'>Regresar a la tienda</Link>
            </div>
            }
        </div>
  )
}

export default Cart