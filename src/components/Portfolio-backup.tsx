'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-apple-gray/30 dark:bg-apple-gray-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-h2-mobile md:text-h2-desktop font-bold text-apple-text dark:text-apple-text-dark mb-6"
          >
            See the transformation.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-mobile md:text-body-desktop text-apple-text-secondary dark:text-apple-text-secondary-dark max-w-3xl mx-auto mb-12"
          >
            Explore our portfolio of completed projects across Kenya. Each space tells a story of 
            craftsmanship, creativity, and attention to detail.
          </motion.p>
          
          <div className="text-center">
            <p className="text-apple-text dark:text-apple-text-dark">Portfolio coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
