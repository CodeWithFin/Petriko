'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-apple-gray/30 to-white dark:from-black dark:via-apple-gray-dark/30 dark:to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] [background-size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-hero-mobile md:text-hero-desktop font-bold text-apple-text dark:text-apple-text-dark text-balance leading-tight"
          >
            Beautiful spaces.{' '}
            <span className="text-apple-blue dark:text-apple-blue-dark">
              Beautifully crafted.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-body-mobile md:text-body-desktop text-apple-text-secondary dark:text-apple-text-secondary-dark max-w-3xl mx-auto text-balance"
          >
            Premium interior design and painting services across Kenya since 2008.
            Transform your space with our expert craftsmanship and attention to detail.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-apple-blue hover:bg-blue-700 dark:bg-apple-blue-dark dark:hover:bg-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Our Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-apple-gray hover:bg-gray-300 dark:bg-apple-gray-dark dark:hover:bg-gray-700 text-apple-text dark:text-apple-text-dark rounded-full font-semibold text-lg transition-all duration-200"
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={fadeInUp}
            className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { title: 'Since 2008', desc: 'Over 15 years of excellence' },
              { title: 'Premium Quality', desc: 'Only the finest materials' },
              { title: 'Expert Craftsmen', desc: 'Skilled professionals' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-apple-text dark:text-apple-text-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white/10 dark:bg-black/10 apple-blur border border-white/20 dark:border-white/10 text-apple-text dark:text-apple-text-dark hover:bg-apple-blue/20 transition-all duration-200"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default Hero
