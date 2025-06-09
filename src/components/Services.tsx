'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Palette, 
  Home, 
  Brush, 
  Sparkles, 
  Wallpaper, 
  Hammer, 
  ShieldCheck, 
  Package 
} from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: Home,
      title: 'Interior Design',
      description: 'Complete interior design solutions that transform your space into a masterpiece.',
      features: ['Space Planning', 'Color Consultation', 'Furniture Selection', 'Lighting Design']
    },
    {
      icon: Palette,
      title: 'Paint Works',
      description: 'Professional painting services using premium materials and expert techniques.',
      features: ['Interior Painting', 'Exterior Painting', 'Color Matching', 'Surface Preparation']
    },
    {
      icon: Sparkles,
      title: 'Stone Finish',
      description: 'Elegant stone finishes that add luxury and sophistication to any space.',
      features: ['Natural Stone', 'Artificial Stone', 'Textured Finishes', 'Custom Patterns']
    },
    {
      icon: Brush,
      title: 'Special Effects',
      description: 'Unique decorative techniques that create stunning visual impact.',
      features: ['Metallic Finishes', 'Faux Painting', 'Decorative Plaster', 'Custom Effects']
    },
    {
      icon: Wallpaper,
      title: 'Wallpaper',
      description: 'Professional wallpaper installation with precision and attention to detail.',
      features: ['Design Selection', 'Expert Installation', 'Pattern Matching', 'Surface Prep']
    },
    {
      icon: Hammer,
      title: 'Skimming',
      description: 'Surface preparation and skimming for perfect paint application.',
      features: ['Wall Preparation', 'Crack Repair', 'Smooth Finishes', 'Surface Leveling']
    },
    {
      icon: ShieldCheck,
      title: 'Ruff & Tuff',
      description: 'Durable finishes designed to withstand high-traffic areas.',
      features: ['Heavy Duty Coatings', 'Traffic Areas', 'Commercial Spaces', 'Long-lasting']
    },
    {
      icon: Package,
      title: 'Paint Supply',
      description: 'Premium paint supplies and materials for professional results.',
      features: ['Quality Paints', 'Professional Tools', 'Color Mixing', 'Material Sourcing']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section id="services" className="py-20 lg:py-32 bg-apple-gray/30 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-h2-mobile md:text-h2-desktop font-bold text-apple-text dark:text-apple-text-dark mb-6"
          >
            Every detail matters.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-mobile md:text-body-desktop text-apple-text-secondary dark:text-apple-text-secondary-dark max-w-3xl mx-auto"
          >
            From concept to completion, we deliver exceptional results that exceed expectations.
            Our comprehensive services ensure every aspect of your project is handled with precision.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white dark:bg-apple-gray-dark rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Service Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-apple-blue/10 dark:bg-apple-blue-dark/10 rounded-xl flex items-center justify-center group-hover:bg-apple-blue group-hover:text-white dark:group-hover:bg-apple-blue-dark transition-all duration-300">
                    <Icon size={24} className="text-apple-blue dark:text-apple-blue-dark group-hover:text-white" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-semibold text-apple-text dark:text-apple-text-dark mb-3 group-hover:text-apple-blue dark:group-hover:text-apple-blue-dark transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark text-sm mb-4">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-xs text-apple-text-secondary dark:text-apple-text-secondary-dark flex items-center"
                    >
                      <div className="w-1.5 h-1.5 bg-apple-blue dark:bg-apple-blue-dark rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute bottom-6 right-6 text-apple-blue dark:text-apple-blue-dark text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-200"
                >
                  Learn more →
                </motion.button>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-apple-blue/5 to-apple-gold/5 dark:from-apple-blue-dark/10 dark:to-apple-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-apple-blue hover:bg-blue-700 dark:bg-apple-blue-dark dark:hover:bg-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
7