import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Transfer() {

  const location = useLocation();
  
  const shipmentCost = location.state.shipment;
  const total = location.state.total;

  const discount = total * 0.10;
  const discountPrice = total - discount;

  const finalPrice = total + shipmentCost

  return (
    <div className='transferPageContainer'>

      <p>
      ¡Hola! ¿Cómo estás? <br /><br />

      Podés hacer transferencia o depósito desde cualquier billetera virtual o banco, a la siguiente cuenta:
      <br /><br />

      <strong>

      Cuenta de Mercado Pago.<br />
      Número de CBU: 0000003100039494013205
      <br />
      Alias: roller.beige.mp <br />
      Titular de la cuenta: Franchini, Ana Mercedes
      </strong>
      
      <br /> <br />
      Recordá enviar el comprobante dentro de las 48 horas respondiendo el mail de compra que te llegó para poder confirmarte tu pedido.
      <br /><br />
      <strong>¡Gracias por tu compra!</strong>
      <br /><br />

      </p>
      <p>El valor de tu compra es <strong>${finalPrice}</strong> </p>
      {/* <p>Con el descuento del 10%, el valor de tu compra es de: <strong> ${discountPrice}</strong> </p> */}

      <br />
      <Link to={'/'}>Continuar comprando</Link>
    </div>
  )
}

export default Transfer