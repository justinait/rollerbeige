import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import CartContextComponent from './context/CartContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard'
import ProtectedAdmin from './ProtectedAdmin'
import Checkout from './components/Checkout/Checkout'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <ProductsProvider>
      <AuthContextComponent>
        <CartContextComponent>
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
          <Route path='/store' element={< Promos />} />
          <Route path='/:curtain' element={< Detail />} />
          
          <Route path='/checkout' element={< Checkout />} />
          <Route path='/cart' element={< Cart />} />
          
          
          <Route element={<ProtectedAdmin/>} >
            <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
          
        </Routes>

        <Footer />

        </BrowserRouter>
        
        </CartContextComponent>
      </AuthContextComponent>
    </ProductsProvider>

  )
}

export default App
