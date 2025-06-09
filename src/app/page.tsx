import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import ServiceAreaMap from '../components/ServiceAreaMap'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
      <ServiceAreaMap />
      <Contact />
      <Footer />
    </main>
  )
}
