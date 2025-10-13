import React, { useState } from 'react'
import ProductCard from './ProductCard'

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')

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
    },
    {
      id: 2,
      series: 'ARES',
      description: 'Tweeter de cúpula de seda.',
      price: '249',
      image: '/images/products/ares.jpg',
      category: 'amplifiers',
    },
    {
      id: 3,
      series: 'ZEUS',
      description: 'Componente de 2 vías.',
      price: '799',
      image: '/images/products/zeus.jpg',
      category: 'amplifiers',
    },
    {
      id: 4,
      series: 'HADES',
      description: 'Subwoofer de 12" de alta excursión.',
      price: '999',
      image: '/images/products/hades.jpg',
      category: 'subwoofers',
    },
  ]

  // Filtrar productos según la categoría seleccionada
  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter(product => product.category === activeCategory)

  return (
    <section className="bg-black text-white min-h-screen py-16">
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
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
