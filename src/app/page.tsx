import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      {/* Noise texture overlay — fixed above everything */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Sticky dark footer — sits behind the wrapper */}
      <Footer />

      {/* 
        Scrolling wrapper — sits above the footer (z-index: 10).
        margin-bottom: 100vh creates scroll room to reveal the footer.
        Rounded bottom corners + box-shadow give it a "peeling away" feel.
      */}
      <div className="wrapper">
        <Header />
        <Hero />

        {/* Vision statement */}
        <section className="py-40 px-6 md:px-20 max-w-[1600px] mx-auto bg-[var(--c-bg)] relative z-20">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 hidden lg:flex flex-col justify-between border-t border-black/5 pt-8">
              <span className="text-xs font-normal tracking-[0.2em] text-[#b19777]">01 — THE VISION</span>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="display-font text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight max-w-5xl text-[#111]">
                We don&apos;t just decorate rooms; we craft environments. Bringing precision, artistry and premium materials to Kenya&apos;s finest interiors since 2008.
              </h2>
            </div>
          </div>
        </section>

        <Services />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </main>
  )
}
