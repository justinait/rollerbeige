import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';

function Whatsapp() {
  return (
    <div>
      <Link className='whatsappLink' target='_blank' to='https://api.whatsapp.com/send?phone=5493434282937&text=Hola!%20Quiero%20asesor%C3%ADa%20y%20presupuesto%20de%20cortinas%20%F0%9F%99%82.'>
        <WhatsAppIcon/>
      </Link>

      <Link className='whatsappLink' target='_blank' to='https://www.instagram.com/rollerbeige/'>
        <InstagramIcon/>
      </Link>
    </div>
  )
}

export default Whatsapp