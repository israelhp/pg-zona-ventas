import { useState, useEffect } from 'react'

const HeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [slides.length, autoplay])

  const goToSlide = index => {
    setCurrentSlide(index)
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 5000)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 5000)
  }

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 5000)
  }

  const defaultSlide = {
    image: 'https://placeholder.com/600x400',
    title: 'VERSTÄRKER',
    subtitle: 'APOLO',
    description: 'Diseño que impone. Calidad que perdura.',
    flag: '🇪🇸',
    flagText: 'Ingeniería Alemana',
    buttonText: 'Explorar Productos',
    buttonLink: '#productos', // Cambiado a enlace de anclaje
  }

  const slideData = slides?.length ? slides : [defaultSlide]

  // Función para desplazarse suavemente a la sección
  const scrollToSection = e => {
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute('href').substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const offset = 80
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Contenedor principal - altura ajustada para evitar scroll */}
      <div className="h-auto w-full">
        {slideData.map((slide, index) => (
          <div
            key={index}
            className={`w-full transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100 block' : 'opacity-0 hidden'
            }`}
          >
            {/* Vista móvil: diseño en columna con imagen arriba */}
            <div className="md:hidden flex flex-col h-auto">
              {/* Imagen arriba en móvil */}
              <div className="w-full h-64">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              </div>

              {/* Contenido debajo de la imagen */}
              <div className="bg-black w-full px-6 py-5 text-white">
                <h1 className="text-3xl font-bold text-white">{slide.title}</h1>
                <h2 className="text-2xl font-bold text-amber-400 mt-1">{slide.subtitle}</h2>
                <p className="text-sm mt-2 text-white/90">{slide.description}</p>

                <div className="flex items-center mt-2">
                  <span className="text-lg mr-2">{slide.flag}</span>
                  <span className="text-gray-300 text-xs">{slide.flagText}</span>
                </div>

                {/* For mobile view */}
                <div className="mt-4">
                  <a
                    href={slide.buttonLink}
                    onClick={scrollToSection}
                    className="bg-amber-400 hover:bg-amber-500 text-black px-5 py-2 rounded-md font-medium inline-block transition-colors text-sm"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>

            {/* Vista escritorio: layout grid */}
            <div className="hidden md:grid md:grid-cols-2 h-screen max-h-[700px]">
              {/* Imagen in desktop */}
              <div className="flex items-center justify-center p-10">
                <div className="w-full max-w-md rounded-lg overflow-hidden">
                  <img src={slide.image} alt={slide.title} className="w-full h-auto object-cover" />
                </div>
              </div>

              {/* Contenido en escritorio */}
              <div className="flex flex-col justify-center p-10 text-white">
                <h1 className="text-5xl font-bold text-white">{slide.title}</h1>
                <h2 className="text-4xl font-bold text-amber-400 mt-2">{slide.subtitle}</h2>
                <p className="text-xl mt-6 text-white/90">{slide.description}</p>

                <div className="flex items-center mt-4">
                  <span className="text-2xl mr-2">{slide.flag}</span>
                  <span className="text-gray-300">{slide.flagText}</span>
                </div>

                {/* For desktop view */}
                <div className="mt-8">
                  <a
                    href={slide.buttonLink}
                    onClick={scrollToSection}
                    className="bg-amber-400 hover:bg-amber-500 text-black px-8 py-4 rounded-md font-medium inline-block transition-colors"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      {slideData.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-32 md:top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-colors"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-32 md:top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-colors"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Indicadores de slides - ahora colocados en la parte inferior pero visibles sin scroll */}
      {slideData.length > 1 && (
        <div className="w-full flex justify-center gap-2 md:gap-3 z-20 py-2 bg-black">
          {slideData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-amber-400 w-4 md:w-6' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default HeroSlider
