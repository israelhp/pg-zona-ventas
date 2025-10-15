import React, { useState, useEffect, useRef } from 'react'
import { products } from '../data/products'

const SearchBar = ({ onProductSelect }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef(null)

  // Función para manejar la búsqueda
  const handleSearch = e => {
    const term = e.target.value
    setSearchTerm(term)

    if (term.length >= 1) {
      // Filtrar productos que coincidan con el término de búsqueda
      const filteredResults = products.filter(
        product =>
          product.series.toLowerCase().includes(term.toLowerCase()) ||
          product.description.toLowerCase().includes(term.toLowerCase()) ||
          product.category.toLowerCase().includes(term.toLowerCase())
      )
      setResults(filteredResults)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }

  // Cerrar resultados al hacer clic fuera del componente
  useEffect(() => {
    const handleClickOutside = event => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Función para limpiar la búsqueda
  const clearSearch = () => {
    setSearchTerm('')
    setResults([])
    setIsOpen(false)
  }

  // Función para seleccionar un producto y abrir el modal
  const selectProduct = product => {
    if (onProductSelect) {
      onProductSelect(product.id)
    }
    clearSearch()
  }

  return (
    <div ref={searchRef} className="relative w-full">
      {/* Campo de búsqueda */}
      <div className="relative">
        {/* Icono de lupa a la izquierda */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Buscar productos..."
          className="w-full py-2 pl-10 pr-10 rounded-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
        />

        {/* Botón de limpiar a la derecha (solo se muestra cuando hay texto) */}
        {searchTerm && (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            onClick={clearSearch}
            aria-label="Limpiar búsqueda"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Modal de resultados de búsqueda */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-30 top-full mt-2 w-full max-h-96 overflow-y-auto bg-white rounded-lg shadow-lg">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">Productos</h3>
              <button
                onClick={clearSearch}
                className="text-gray-500 hover:text-gray-800"
                aria-label="Cerrar resultados"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {results.map(product => (
                <div
                  key={product.id}
                  className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                  onClick={() => selectProduct(product)}
                >
                  <div className="h-16 w-16 flex-shrink-0 bg-white rounded-md overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.series}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{product.series}</h4>
                    <p className="text-gray-600 text-sm uppercase">
                      {product.category === 'speakers'
                        ? 'ALTAVOZ'
                        : product.category === 'amplifiers'
                          ? 'AMPLIFICADOR'
                          : product.category === 'subwoofers'
                            ? 'SUBWOOFER'
                            : 'ACCESORIO'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mostrar mensaje cuando no hay resultados pero se está buscando */}
      {isOpen && searchTerm.length > 0 && results.length === 0 && (
        <div className="absolute z-30 top-full mt-2 w-full bg-white rounded-lg shadow-lg p-4">
          <p className="text-gray-600 text-center">
            No se encontraron productos que coincidan con "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  )
}

export default SearchBar
