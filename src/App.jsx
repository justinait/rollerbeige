import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import CheckScroll from './CheckScroll'
import Detail from './components/Detail/Detail'
import Products from './components/Products/Products'
import Promos from './components/Promos/Promos'
import Fabric from './components/Fabric/Fabric'

function App() {

  return (
    <BrowserRouter>
    
    <Navbar />
    <CheckScroll/>

    <Routes className='appRoutes'>

      <Route path='/' element={< Home />} />
      
      <Route path='/about' element={< About />} />
      
      <Route path='/cortinas' element={< Products />} />
      <Route path='/telas' element={< Fabric />} />
      <Route path='/accesorios' element={< Promos />} />
      
      <Route path='/:product' element={< Detail />} />
      
    </Routes>

    <Footer />

  </BrowserRouter>
  )
}

export default App
