import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from './SearchBar'
import ProductModal from './ProductModal'
import { products } from '../data/products'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Función para abrir el modal con un producto específico
  const openProductModal = productId => {
    const product = products.find(p => p.id === productId)
    if (product) {
      setSelectedProduct(product)
      setModalOpen(true)
    }
  }

  // Función para manejar los enlaces de navegación
  const scrollToSection = sectionId => {
    // Cerrar el menú móvil si está abierto
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }

    // Si estamos en la página de inicio, desplazarse a la sección
    if (location.pathname === '/') {
      // Caso especial para "inicio": scroll al principio de la página
      if (sectionId === 'inicio') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
        return
      }

      const section = document.getElementById(sectionId)
      if (section) {
        // Calcular la posición del elemento
        const navbarHeight = 64 // altura del navbar en píxeles (4rem = 64px)
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset

        // Desplazar a la posición ajustada (restar altura del navbar)
        window.scrollTo({
          top: sectionPosition - navbarHeight,
          behavior: 'smooth',
        })
      }
      return
    }

    // Si estamos en otra página, navegar a Home y luego a la sección
    // usando URL con hash
    if (sectionId === 'inicio') {
      window.location.href = '/'
    } else {
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <>
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
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-white hover:text-amber-300 cursor-pointer"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-white hover:text-amber-300 cursor-pointer"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('productos')}
                className="text-white hover:text-amber-300 cursor-pointer"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-white hover:text-amber-300 cursor-pointer"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block w-64">
            <SearchBar onProductSelect={openProductModal} />
          </div>

          {/* Mobile Menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:hidden mt-4`}>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-white hover:text-amber-300 cursor-pointer"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-white hover:text-amber-300 cursor-pointer"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('productos')}
                className="text-white hover:text-amber-300 cursor-pointer"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-white hover:text-amber-300 cursor-pointer"
              >
                Contacto
              </button>
              <div className="pt-2">
                <SearchBar onProductSelect={openProductModal} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal de producto */}
      <ProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        product={selectedProduct}
      />
    </>
  )
}

export default Navbar
