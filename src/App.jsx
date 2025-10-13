import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<div className="p-4">Página Nosotros</div>} />
          <Route path="/productos" element={<div className="p-4">Página Productos</div>} />
          <Route path="/contacto" element={<div className="p-4">Página Contacto</div>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
