import HeroSlider from '../components/HeroSlider'
import AboutSection from '../components/AboutSection'
import ProductsSection from '../components/ProductsSection'
import ContactSection from '../components/ContactSection'

function Home() {
  const slides = [
    {
      image: '/images/product-1.jpeg',
      title: 'VERSTÄRKER',
      subtitle: 'APOLO',
      description: 'Diseño que impone. Calidad que perdura.',
      flag: '🇪🇸',
      flagText: 'Ingeniería Alemana',
      buttonText: 'Explorar Productos',
      buttonLink: '/productos',
    },
    {
      image: '/images/product-2.jpeg',
      title: 'VERSTÄRKER',
      subtitle: 'ARTEMIS',
      description: 'Potencia y claridad en cada nota.',
      flag: '🇩🇪',
      flagText: 'Ingeniería Alemana',
      buttonText: 'Ver Detalles',
      buttonLink: '/productos/artemis',
    },
    {
      image: '/images/product-3.jpeg',
      title: 'VERSTÄRKER',
      subtitle: 'ZEUS',
      description: 'Sonido envolvente que redefine la experiencia.',
      flag: '🇩🇪',
      flagText: 'Ingeniería Alemana',
      buttonText: 'Descubrir',
      buttonLink: '/productos/zeus',
    },
  ]

  return (
    <div className="w-full">
      <HeroSlider slides={slides} />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
    </div>
  )
}

export default Home
