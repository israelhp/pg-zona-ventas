import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSearch = term => {
    console.log('Searching for:', term)
    // Implement search logic here
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white py-4 px-6 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-amber-400">
            VERSTÄRKER
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links - desktop */}
        <div className="hidden md:flex items-center justify-center flex-grow">
          <div className="flex space-x-8">
            <Link to="/" className="text-white hover:text-amber-300">
              Inicio
            </Link>
            <Link to="/nosotros" className="text-white hover:text-amber-300">
              Nosotros
            </Link>
            <Link to="/productos" className="text-white hover:text-amber-300">
              Productos
            </Link>
            <Link to="/contacto" className="text-white hover:text-amber-300">
              Contacto
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block w-64">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:hidden mt-4`}>
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-white hover:text-amber-300">
              Inicio
            </Link>
            <Link to="/nosotros" className="text-white hover:text-amber-300">
              Nosotros
            </Link>
            <Link to="/productos" className="text-white hover:text-amber-300">
              Productos
            </Link>
            <Link to="/contacto" className="text-white hover:text-amber-300">
              Contacto
            </Link>
            <div className="pt-2">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
