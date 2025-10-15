const products = [
  {
    id: 1,
    series: 'APOLO',
    description: 'Altavoz de rango medio 6.5".',
    shortDescription: 'Altavoz de rango medio 6.5".',
    price: '499',
    image: '/images/products/apolo.jpg',
    category: 'speakers',
    longDescription:
      'El altavoz APOLO Series de VERSTÄRKER ofrece una reproducción de sonido excepcionalmente clara y detallada. Su driver de rango medio de 6.5" proporciona voces naturales y una respuesta de graves contundente en un diseño compacto y elegante.',
    features: [
      { label: 'Potencia', value: '100W RMS' },
      { label: 'Respuesta de frecuencia', value: '45Hz - 20kHz' },
      { label: 'Sensibilidad', value: '89dB' },
      { label: 'Impedancia', value: '8 ohms' },
      { label: 'Tipo de driver', value: 'Cono de polipropileno' },
    ],
  },
  {
    id: 2,
    series: 'ARES',
    description: 'Amplificador estéreo de alta fidelidad.',
    shortDescription: 'Tweeter de cúpula de seda.',
    price: '249',
    image: '/images/products/ares.jpg',
    category: 'amplifiers',
    longDescription:
      'El amplificador ARES Series combina potencia y refinamiento en un diseño compacto. Con una arquitectura de circuito discreta y componentes de alta calidad, ofrece un sonido limpio y dinámico que satisfará a los audiófilos más exigentes.',
    features: [
      { label: 'Potencia de salida', value: '150W x 2 canales' },
      { label: 'THD', value: '<0.01%' },
      { label: 'Relación señal/ruido', value: '>105dB' },
      { label: 'Entradas', value: '4 RCA, 1 XLR, 1 Optical' },
      { label: 'Salidas', value: 'Terminal banana, Pre-out' },
    ],
  },
  {
    id: 3,
    series: 'ZEUS',
    description: 'Sistema de componentes de alta definición.',
    shortDescription: 'Componente de 2 vías.',
    price: '799',
    image: '/images/products/zeus.jpg',
    category: 'amplifiers',
    longDescription:
      'El sistema de componentes ZEUS Series representa la cumbre de la ingeniería acústica alemana. Su crossover de precisión y drivers perfectamente emparejados ofrecen una imagen estéreo impresionante y una respuesta tonal equilibrada.',
    features: [
      { label: 'Potencia de salida', value: '200W x 2 canales' },
      { label: 'THD', value: '<0.008%' },
      { label: 'Relación señal/ruido', value: '>110dB' },
      { label: 'Entradas', value: '5 RCA, 2 XLR, 2 Optical' },
      { label: 'Salidas', value: 'Terminal banana, Pre-out, Subwoofer' },
    ],
  },
  {
    id: 4,
    series: 'HADES',
    description: 'Subwoofer potente para graves profundos.',
    shortDescription: 'Subwoofer de 12" de alta excursión.',
    price: '999',
    image: '/images/products/hades.jpg',
    category: 'subwoofers',
    longDescription:
      'El subwoofer HADES Series está diseñado para reproducir las frecuencias más bajas con autoridad y precisión. Su driver de 12" con suspensión de alta excursión y caja sintonizada con precisión proporciona graves profundos y articulados sin distorsión.',
    features: [
      { label: 'Potencia', value: '500W RMS' },
      { label: 'Respuesta de frecuencia', value: '20Hz - 200Hz' },
      { label: 'Tamaño de driver', value: '12"' },
      { label: 'Tipo de caja', value: 'Bass reflex' },
      { label: 'Peso', value: '15kg' },
    ],
  },
]

// Categorías de productos
const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'speakers', name: 'Altavoces' },
  { id: 'amplifiers', name: 'Amplificadores' },
  { id: 'subwoofers', name: 'Subwoofers' },
  { id: 'accessories', name: 'Accesorios' },
]

export { products, categories }
