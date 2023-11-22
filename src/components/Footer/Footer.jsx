import React from 'react'
import './Footer.css'
import logo from '/logo/logo.png'
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
  return (
    <div className='footer'>
      <img src={logo} alt="" className='logoFooter'/>
      <div className='footerInfo'>
        <h4>Contactanos</h4>
        <Link className='footerLinks' target='_blank' to='https://api.whatsapp.com/send?phone=5493434282937&text=Hola!%20Quiero%20asesor%C3%ADa%20y%20presupuesto%20de%20cortinas%20%F0%9F%99%82.'>
          <WhatsAppIcon/>
          +54 9 3434 28-2937
        </Link>
        
        <Link className='footerLinks' target='_blank' to='https://www.instagram.com/rollerbeige/'>
          <InstagramIcon />
          Rollerbeige
        </Link>

        <a className='footerLinks' href="mailto:rollerbeigeparana@gmail.com" target='_blank'>
          <MailOutlineIcon />
          rollerbeigeparana@gmail.com
        </a>

      </div>
    </div>
  )
}

export default Footer