import React from 'react'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';

function Services() {
  return (
    <div>
      <h2>SERVICIOS</h2>
      <PaletteOutlinedIcon/>
      Asesoramiento personalizado.
      <EngineeringOutlinedIcon/>
      Instalaciones
      <HandshakeOutlinedIcon />
      Servicio Postventa
      <ChatOutlinedIcon/>

      <HandymanOutlinedIcon />
      Reparaciones
    </div>
  )
}

export default Services