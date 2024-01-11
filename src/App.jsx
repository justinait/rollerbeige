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
import ProductsProvider from './context/ProductsProvider'
import Fabrics from './components/Fabrics/Fabrics'
import Whatsapp from './components/Whatsapp/Whatsapp'
import Accesories from './components/Accesories/Accesories'
import Login from './components/Login/Login'
import AuthContextComponent from './context/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard'

function App() {

  return (
    <ProductsProvider>
      <AuthContextComponent>
        <BrowserRouter>
        
        <Navbar />
        <CheckScroll/>
        <Whatsapp />

        <Routes className='appRoutes'>

          <Route path='/' element={< Home />} />
          <Route path='/entrar' element={< Login />} />
          
          <Route path='/about' element={< About />} />
          
          <Route path='/cortinas' element={< Products />} />
          <Route path='/telas' element={< Fabrics />} />
          <Route path='/accesorios' element={< Accesories />} />
          <Route path='/sale' element={< Promos />} />
          <Route path='/:curtain' element={< Detail />} />
          <Route path='/dashboard' element={< Dashboard />} />
          
          
        </Routes>

        <Footer />

        </BrowserRouter>
      </AuthContextComponent>
    </ProductsProvider>

  )
}

export default App
