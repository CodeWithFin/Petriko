'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Filter, Eye, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'featured', name: 'Featured' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Mirema Apartments',
      category: 'featured',
      type: 'Residential Complex',
      description: 'Complete interior design and painting transformation of luxury apartments.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      details: 'Modern interior design with premium finishes and custom color schemes.',
      year: '2024'
    },
    {
      id: 2,
      title: 'DCI Headquarters',
      category: 'featured',
      type: 'Commercial Office',
      description: 'Professional office space design with corporate aesthetics.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      details: 'Sophisticated commercial design emphasizing professionalism and productivity.',
      year: '2024'
    },
    {
      id: 3,
      title: 'Utawala Residence',
      category: 'residential',
      type: 'Private Home',
      description: 'Elegant residential interior with custom stone finishes.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      details: 'Luxury home design featuring natural materials and premium craftsmanship.',
      year: '2023'
    },
    {
      id: 4,
      title: 'Ruiru Family Home',
      category: 'residential',
      type: 'Family Residence',
      description: 'Warm and inviting family home with vibrant color schemes.',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop',
      details: 'Family-friendly design balancing style and functionality.',
      year: '2023'
    },
    {
      id: 5,
      title: 'Langata Villa',
      category: 'residential',
      type: 'Luxury Villa',
      description: 'High-end villa renovation with premium materials.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      details: 'Luxurious villa transformation with attention to every detail.',
      year: '2023'
    },
    {
      id: 6,
      title: 'Acceler Global Logistics',
      category: 'commercial',
      type: 'Corporate Office',
      description: 'Modern corporate office design for logistics company.',
      image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop',
      details: 'Professional workspace designed for efficiency and brand representation.',
      year: '2024'
    },
    {
      id: 7,
      title: 'Babadogo Residence',
      category: 'residential',
      type: 'Modern Home',
      description: 'Contemporary home design with innovative paint techniques.',
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
      details: 'Modern residential design showcasing innovative finishing techniques.',
      year: '2023'
    },
    {
      id: 8,
      title: 'Ruaraka Project',
      category: 'residential',
      type: 'Apartment Complex',
      description: 'Multi-unit residential painting and design project.',
      image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4f0?w=800&h=600&fit=crop',
      details: 'Large-scale residential project with consistent quality across all units.',
      year: '2023'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-apple-blue text-white dark:bg-apple-blue-dark'
                    : 'bg-white dark:bg-apple-gray-dark text-apple-text dark:text-apple-text-dark hover:bg-apple-gray dark:hover:bg-gray-700'
                }`}
              >
                {filter.name}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              layout
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-apple-gray-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                
                {/* Overlay Icons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-full">
                    <Eye size={18} className="text-white" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-apple-blue/90 text-white text-xs font-medium rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-apple-text dark:text-apple-text-dark">
                    {project.title}
                  </h3>
                  <span className="text-sm text-apple-text-secondary dark:text-apple-text-secondary-dark">
                    {project.year}
                  </span>
                </div>
                <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark text-sm mb-4">
                  {project.description}
                </p>
                
                {/* View More Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-apple-blue dark:text-apple-blue-dark font-medium text-sm flex items-center"
                >
                  View Details
                  <ExternalLink size={16} className="ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-apple-blue hover:bg-blue-700 dark:bg-apple-blue-dark dark:hover:bg-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
