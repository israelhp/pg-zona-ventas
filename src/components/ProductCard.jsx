import React from 'react'

const ProductCard = ({
  image,
  series,
  description,
  price,
  linkText = 'Ver más',
  product,
  onViewDetails,
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg">
      {/* Imagen del producto con fondo blanco */}
      <div className="bg-white p-4 flex items-center justify-center h-48 rounded-t-lg">
        <img src={image} alt={series} className="max-h-full object-contain" />
      </div>

      {/* Información del producto con fondo azul oscuro */}
      <div className="bg-gray-900 p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white">{series} Series</h3>
        <p className="text-gray-400 mt-1 mb-4 text-sm">{description}</p>

        <div className="mt-auto flex justify-between items-center">
          <span className="text-amber-400 text-2xl font-bold">${price}</span>
          <button
            onClick={() => onViewDetails(product)}
            className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
          >
            {linkText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
