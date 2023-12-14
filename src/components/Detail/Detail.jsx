import React, { useEffect } from 'react'
import './Detail.css'
import Whatsapp from '../Whatsapp/Whatsapp'

function Detail() { 
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
    .then((response) => response.json())
    .then((data) => setData(data.curtains));
  }, []);

  return (
    <div className='detailContainer'>
      {console.log(data)}
      <Whatsapp/>
    </div>
  )
}

export default Detail