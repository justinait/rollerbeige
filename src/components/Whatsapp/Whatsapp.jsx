import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import './Whatsapp.css'

function Whatsapp() {
  return (
    <div className='linksContainer'>
      <Link className='whatsappLink' target='_blank' to='https://api.whatsapp.com/send?phone=5493434282937&text=Hola!%20Quiero%20asesor%C3%ADa%20y%20presupuesto%20de%20cortinas%20%F0%9F%99%82.'>
        <WhatsAppIcon className='linksIcons'/>
      </Link>

      <Link className='whatsappLink' target='_blank' to='https://www.instagram.com/rollerbeige/'>
        <InstagramIcon className='linksIcons'/>
      </Link>
    </div>
  )
}

export default Whatsapp