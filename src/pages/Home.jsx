import HeroSlider from '../components/HeroSlider'
import AboutSection from '../components/AboutSection'
import ProductsSection from '../components/ProductsSection'
import ContactSection from '../components/ContactSection'
import slides from '../data/slides'

function Home() {
  return (
    <div className="w-full overflow-y-auto">
      <HeroSlider slides={slides} />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
    </div>
  )
}

export default Home
