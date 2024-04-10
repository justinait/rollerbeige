import React from 'react'
import { Link } from 'react-router-dom'

function PaymentApproved() {
  return (
    <div className='checkoutContainer'>
      <h2>El pago se realizó con éxito.</h2>
      <p className='approvedText'>Te contactaremos a tu correo.</p>
      <br />
      <br />
      <br />
      <p>Recordá que si retirás tu pedido por el local, debés coordinar con nosotros. <Link target='_blank' to='https://wa.link/fstsmy'>Hace click aquí</Link> o respondé el mail de compra pidiendo mas información sobre tu retiro.</p>

      <Link to='/store' className='returnButtonCart'>Continuar comprando</Link>
    </div>
  )
}

export default PaymentApproved