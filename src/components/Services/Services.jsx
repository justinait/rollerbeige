import React from 'react'
import './Services.css'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';

function Services() {
  return (
    <div className='services'>
      <h3>SERVICIOS</h3>
      <div className='servicesContainer'>
        <div className=''>
          <PaletteOutlinedIcon/>
          Asesoramiento personalizado.
        </div>
        <div>
          <EngineeringOutlinedIcon/>
          Instalaciones
        </div>
        <div>
          <HandshakeOutlinedIcon />
          Servicio Postventa
        </div>
        <div>
          <HandymanOutlinedIcon />
          Reparaciones
        </div>
      </div>
    </div>
  )
}

export default Services