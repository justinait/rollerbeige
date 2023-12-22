import React from 'react'
import './Services.css'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';

function Services() {
  return (
    <div className='services'>
      <h3>SERVICIOS</h3>
      <div className='servicesContainer'>
        <div className='servicesDiv'>
          <PaletteOutlinedIcon className='icons'/>
          Asesoramiento personalizado
        </div>
        <div className='servicesDiv'>
          <EngineeringOutlinedIcon className='icons'/>
          Instalaciones
        </div>
        <div className='servicesDiv'>
          <HandshakeOutlinedIcon  className='icons'/>
          Servicio Postventa
        </div>
        <div className='servicesDiv'>
          <HandymanOutlinedIcon  className='icons'/>
          Reparaciones
        </div>
      </div>
    </div>
  )
}

export default Services