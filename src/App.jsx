import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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
          {/* Redireccionar cualquier otra ruta a Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
