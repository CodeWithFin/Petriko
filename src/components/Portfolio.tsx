'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Eye, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { projects, Project, getProjectsByCategory } from '../data/portfolio'
import ProjectModal from './ProjectModal'
import BeforeAfterSlider from './BeforeAfterSlider'
import ImageLightbox from './ImageLightbox'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState<string[]>([])
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [showBeforeAfter, setShowBeforeAfter] = useState(false)

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'featured', name: 'Featured' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
  ]

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const openLightbox = (images: string[], startIndex: number = 0) => {
    setLightboxImages(images)
    setLightboxIndex(startIndex)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setLightboxImages([])
    setLightboxIndex(0)
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length)
  }

  const previousImage = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)
  }

  const filteredProjects = getProjectsByCategory(activeFilter)

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
    <>
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
                className="group relative bg-white dark:bg-apple-gray-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
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
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        const images = project.gallery || [project.image]
                        openLightbox(images)
                      }}
                      className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Eye size={18} className="text-white" />
                    </motion.button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-apple-blue/90 text-white text-xs font-medium rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-apple-text dark:text-apple-text-dark">
                      {project.title}
                    </h3>
                    <span className="text-sm text-apple-text-secondary dark:text-apple-text-secondary-dark">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark text-sm mb-2">
                    {project.type}
                  </p>
                  <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark text-sm mb-4">
                    {project.description}
                  </p>
                  
                  {/* View More Button */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-apple-blue dark:text-apple-blue-dark font-medium text-sm flex items-center"
                  >
                    View Details
                    <ExternalLink size={16} className="ml-2" />
                  </motion.div>
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                className="px-8 py-4 bg-apple-gray hover:bg-gray-300 dark:bg-apple-gray-dark dark:hover:bg-gray-700 text-apple-text dark:text-apple-text-dark rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {showBeforeAfter ? 'Hide' : 'View'} Transformations
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-apple-blue hover:bg-blue-700 dark:bg-apple-blue-dark dark:hover:bg-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Before/After Transformations Section */}
        <AnimatePresence>
          {showBeforeAfter && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-12"
              >
                <h3 className="text-h3-mobile md:text-h3-desktop font-bold text-apple-text dark:text-apple-text-dark mb-4">
                  Amazing Transformations
                </h3>
                <p className="text-body-mobile md:text-body-desktop text-apple-text-secondary dark:text-apple-text-secondary-dark max-w-2xl mx-auto">
                  See the dramatic before and after results of our interior design and renovation projects.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12">
                {projects
                  .filter(project => project.beforeImage && project.afterImage)
                  .slice(0, 4)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <BeforeAfterSlider
                        beforeImage={project.beforeImage!}
                        afterImage={project.afterImage!}
                        title={project.title}
                        className="mb-8"
                      />
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Image Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
        title="Portfolio Gallery"
      />

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}

export default Portfolio
