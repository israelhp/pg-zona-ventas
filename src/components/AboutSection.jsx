import React from 'react'

const AboutSection = () => {
  return (
    <section
      id="nosotros"
      className="bg-zinc-900 text-white min-h-screen flex items-center py-8 scroll-margin-top-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            Sobre <span className="text-amber-400">VERSTÄRKER</span>
          </h2>
          <p className="max-w-4xl mx-auto text-gray-300 text-lg">
            Nuestra pasión es el sonido puro y la ingeniería de precisión. Desde nuestros inicios en
            el corazón de Alemania, nos hemos dedicado a crear componentes de audio que no solo
            suenan increíble, sino que están construidos para durar generaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta de Precisión */}
          <div className="bg-black border border-gray-800 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 7l-5 5 5 5V7z"></path>
                <path d="M18.1 12.1l-1.4 1.4c.6.9 1 1.9 1 3 0 3-2.5 5.5-5.5 5.5-1.1 0-2.2-.3-3-.9l-1.4 1.4c1.3.9 2.8 1.5 4.5 1.5 4.1 0 7.5-3.4 7.5-7.5 0-1.7-.6-3.2-1.7-4.4z"></path>
                <path d="M15.9 5.9l1.4-1.4C15.7 2.6 13.5 1 11 1 6.9 1 3.5 4.4 3.5 8.5c0 2.1.8 4 2.1 5.5l1.4-1.4C5.9 11.5 5.5 10 5.5 8.5 5.5 5.5 8 3 11 3c1.8 0 3.4.8 4.5 2.1l.4.8z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Precisión</h3>
            <p className="text-gray-400">
              Cada componente es fabricado con tolerancias mínimas, asegurando un rendimiento y una
              fiabilidad excepcionales.
            </p>
          </div>

          {/* Tarjeta de Calidad de Sonido */}
          <div className="bg-black border border-gray-800 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Calidad de Sonido</h3>
            <p className="text-gray-400">
              Diseñamos para audiófilos. Nuestro objetivo es la reproducción de sonido más fiel y
              cristalina posible.
            </p>
          </div>

          {/* Tarjeta de Durabilidad */}
          <div className="bg-black border border-gray-800 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Durabilidad</h3>
            <p className="text-gray-400">
              Utilizamos solo los mejores materiales para garantizar que su inversión en sonido
              perdure en el tiempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
