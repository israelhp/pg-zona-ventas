import React, { useState } from 'react'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'speakers', name: 'Altavoces' },
    { id: 'amplifiers', name: 'Amplificadores' },
    { id: 'subwoofers', name: 'Subwoofers' },
    { id: 'accessories', name: 'Accesorios' },
  ]

  const products = [
    {
      id: 1,
      series: 'APOLO',
      description: 'Altavoz de rango medio 6.5".',
      price: '499',
      image: '/images/products/apolo.jpg',
      category: 'speakers',
      longDescription:
        'El altavoz APOLO Series de VERSTÄRKER ofrece una reproducción de sonido excepcionalmente clara y detallada. Su driver de rango medio de 6.5" proporciona voces naturales y una respuesta de graves contundente en un diseño compacto y elegante.',
    },
    {
      id: 2,
      series: 'ARES',
      description: 'Tweeter de cúpula de seda.',
      price: '249',
      image: '/images/products/ares.jpg',
      category: 'amplifiers',
      longDescription:
        'El amplificador ARES Series combina potencia y refinamiento en un diseño compacto. Con una arquitectura de circuito discreta y componentes de alta calidad, ofrece un sonido limpio y dinámico que satisfará a los audiófilos más exigentes.',
    },
    {
      id: 3,
      series: 'ZEUS',
      description: 'Componente de 2 vías.',
      price: '799',
      image: '/images/products/zeus.jpg',
      category: 'amplifiers',
      longDescription:
        'El sistema de componentes ZEUS Series representa la cumbre de la ingeniería acústica alemana. Su crossover de precisión y drivers perfectamente emparejados ofrecen una imagen estéreo impresionante y una respuesta tonal equilibrada.',
    },
    {
      id: 4,
      series: 'HADES',
      description: 'Subwoofer de 12" de alta excursión.',
      price: '999',
      image: '/images/products/hades.jpg',
      category: 'subwoofers',
      longDescription:
        'El subwoofer HADES Series está diseñado para reproducir las frecuencias más bajas con autoridad y precisión. Su driver de 12" con suspensión de alta excursión y caja sintonizada con precisión proporciona graves profundos y articulados sin distorsión.',
    },
  ]

  // Filtrar productos según la categoría seleccionada
  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter(product => product.category === activeCategory)

  // Función para abrir el modal con el producto seleccionado
  const handleViewDetails = product => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <section id="productos" className="bg-black text-white min-h-screen py-16 scroll-margin-top-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            Nuestros <span className="text-amber-400">Productos</span>
          </h2>
          <p className="text-gray-400">
            Explora nuestra gama de componentes de audio de alta fidelidad.
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-amber-400 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              series={product.series}
              description={product.description}
              price={product.price}
              product={product}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      {/* Modal de detalles del producto */}
      <ProductModal isOpen={modalOpen} onClose={handleCloseModal} product={selectedProduct} />
    </section>
  )
}

export default ProductsSection
