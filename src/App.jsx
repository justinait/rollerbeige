import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import CheckScroll from './CheckScroll'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <CheckScroll/>
    <Routes className='appRoutes'>

      <Route path='/' element={< Home />} />
      
      <Route path='/about' element={< About />} />
      
      {/* <Route path='/:category' element={< GalleryContainer />} />
      <Route path='/prensa/:id' element={< NewsDetail />} /> */}
      
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
