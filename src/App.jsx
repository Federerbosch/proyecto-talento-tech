import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacto from './pages/Contacto'
import Tienda from './pages/Tienda'
import Carrito from './pages/Carrito'
import QuienesSomos from './pages/QuienesSomos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Router>
        <div>
          <NavBar />
          <Container className="mt-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tienda" element={<Tienda />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/quienessomos" element={<QuienesSomos />} />
              <Route path="/carrito" element={<Carrito/>} />
            </Routes>
          </Container>
        </div>
      </Router>
    </div>
    
  )
}

export default App
