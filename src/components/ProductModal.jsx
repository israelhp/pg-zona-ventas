import React, { useEffect } from 'react'

const ProductModal = ({ isOpen, onClose, product }) => {
  // Mover el useEffect fuera de la renderización condicional
  useEffect(() => {
    if (isOpen) {
      // Deshabilitar scroll cuando el modal está abierto
      document.body.style.overflow = 'hidden'
    } else {
      // Rehabilitar scroll cuando el modal está cerrado
      document.body.style.overflow = ''
    }

    // Función de limpieza para asegurar que el scroll se re-habilite si el componente se desmonta
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen]) // Este efecto ahora se ejecutará cada vez que isOpen cambie

  // Si el modal está cerrado o no hay producto, no renderizar nada
  if (!isOpen || !product) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80">
      <div
        className="relative bg-zinc-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Imagen del producto */}
          <div className="bg-black p-8 rounded-lg flex items-center justify-center">
            <img src={product.image} alt={product.series} className="max-h-80 object-contain" />
          </div>

          {/* Información del producto */}
          <div className="text-white">
            <h2 className="text-3xl font-bold text-amber-400 mb-2">{product.series} Series</h2>
            <p className="text-gray-300 text-lg mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Especificaciones</h3>
              <ul className="space-y-2">
                {product.features &&
                  product.features.map((feature, index) => (
                    <li key={index} className="flex justify-between border-b border-zinc-700 pb-2">
                      <span className="text-gray-400">{feature.label}</span>
                      <span className="font-medium">{feature.value}</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Descripción</h3>
              <p className="text-gray-300">
                {product.longDescription ||
                  `El ${product.series} Series representa la excelencia en ingeniería alemana. 
                Fabricado con los materiales de la más alta calidad y atención meticulosa al detalle, 
                este producto ofrece un rendimiento excepcional y durabilidad incomparable.`}
              </p>
            </div>

            {/* Solo mostramos el precio centrado */}
            <div className="text-center pt-4 border-t border-zinc-700">
              <span className="text-3xl font-bold text-amber-400">${product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
