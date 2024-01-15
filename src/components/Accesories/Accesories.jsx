import React from 'react'
import './Accesories.css'
import roller from '/images/curtains/cortinas (48).jpg'
import bandas from '/images/curtains/cortinas (7).jpg'
import tradicionales from '/images/curtains/cortinas (5).jpg'

function Accesories() {
  return (
    <div className='productsContainer accesoriesDiv'>
      <h2 style={{marginBottom: '0' }}>ACCESORIOS</h2>

      <div className='accesoriesContainer'>
        <div className='ImgTitleAccesories'>
          <img src={roller} alt="Roller" className='accesoriesImage' />
          <h6 className='accesoriesSubtitles h3mobile'>Para Roller</h6>
        </div>
        <ul>
          <h6 className='accesoriesSubtitles h3pc'>Para Roller</h6>
          <p>▫ Mecanismos Roller</p>
          <p>▫ Cadenas Roller</p>
          <p>▫ Uniones de Cadena</p>
          <p>▫ Topes de Cadena</p>
          <p>▫ Pesos de Cadena</p>
          <p>▫ Zócalos de aluminio</p>
          <p>▫ Zócalos forrados</p>
        </ul>
      
      </div>
      
      <div className='accesoriesContainer'>
        <div className='ImgTitleAccesories'>
          <img src={bandas} alt="Bandas verticales" className='accesoriesImage' />
          <h6 className='accesoriesSubtitles h3mobile h3longText'>Para Bandas Verticales y Paneles Orientales</h6>
        </div>
        <ul>
          <h6 className='accesoriesSubtitles h3pc'>Para Bandas Verticales y Paneles Orientales</h6>
          <p>▫ Cadenas de giro          </p>
          <p>▫ Cadenas inferiores          </p>
          <p>▫ Pesos de cadena          </p>
          <p>▫ Bastones de aluminio          </p>
        </ul>
      </div>


      <div className='accesoriesContainer'>
        <div className='ImgTitleAccesories'>
          <img src={tradicionales} alt="Cortinas Tradicionales" className='accesoriesImage' />
          <h6 className='accesoriesSubtitles h3mobile'>Para Tradicionales</h6>
        </div>
        <ul>
          <h6 className='accesoriesSubtitles h3pc'>Para Tradicionales</h6>
          <p>▫ <strong>Rieles europeos</strong> y super europeos (a bastón)          </p>
          <p>▫ <strong> Barrales metálicos</strong> de 1” y ¾”          </p>
          <p>▫ <strong>Bastones de aluminio</strong> para rieles europeos          </p>
          <p>▫ <strong>Ganchitos</strong> para cabezales de cortina          </p>
          <p>▫ <strong>Patines</strong> para rieles          </p>
          <p>▫ <strong>Cruces europeos</strong> y super europeos          </p>
          <p>▫ <strong>Soportes</strong> de barrales          </p>
          <p>▫ <strong>Ménsulas</strong> estándar y XL          </p>
        </ul>     
      </div>
    </div>

  )
}

export default Accesories