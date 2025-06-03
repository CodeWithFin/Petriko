'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Calendar, Clock, Ruler, User, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { Project } from '../data/portfolio'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-apple-gray-dark rounded-3xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                  <p className="text-white/90 text-lg">{project.type}</p>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 max-h-[60vh] overflow-y-auto">
              {/* Project Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-apple-blue/10 dark:bg-apple-blue-dark/10 rounded-full flex items-center justify-center">
                    <Calendar size={18} className="text-apple-blue dark:text-apple-blue-dark" />
                  </div>
                  <div>
                    <p className="text-sm text-apple-text-secondary dark:text-apple-text-secondary-dark">Year</p>
                    <p className="font-semibold text-apple-text dark:text-apple-text-dark">{project.year}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-apple-blue/10 dark:bg-apple-blue-dark/10 rounded-full flex items-center justify-center">
                    <Clock size={18} className="text-apple-blue dark:text-apple-blue-dark" />
                  </div>
                  <div>
                    <p className="text-sm text-apple-text-secondary dark:text-apple-text-secondary-dark">Duration</p>
                    <p className="font-semibold text-apple-text dark:text-apple-text-dark">{project.duration}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-apple-blue/10 dark:bg-apple-blue-dark/10 rounded-full flex items-center justify-center">
                    <MapPin size={18} className="text-apple-blue dark:text-apple-blue-dark" />
                  </div>
                  <div>
                    <p className="text-sm text-apple-text-secondary dark:text-apple-text-secondary-dark">Location</p>
                    <p className="font-semibold text-apple-text dark:text-apple-text-dark">{project.location}</p>
                  </div>
                </div>

                {project.area && (
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-apple-blue/10 dark:bg-apple-blue-dark/10 rounded-full flex items-center justify-center">
                      <Ruler size={18} className="text-apple-blue dark:text-apple-blue-dark" />
                    </div>
                    <div>
                      <p className="text-sm text-apple-text-secondary dark:text-apple-text-secondary-dark">Area</p>
                      <p className="font-semibold text-apple-text dark:text-apple-text-dark">{project.area}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-apple-text dark:text-apple-text-dark mb-4">Project Overview</h3>
                <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Services */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-apple-text dark:text-apple-text-dark mb-4">Services Provided</h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-apple-text-secondary dark:text-apple-text-secondary-dark">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before/After Section */}
              {project.beforeImage && project.afterImage && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-apple-text dark:text-apple-text-dark mb-4">Before & After</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-apple-text-secondary dark:text-apple-text-secondary-dark mb-2 uppercase tracking-wide">Before</h4>
                      <div className="aspect-video relative rounded-2xl overflow-hidden">
                        <Image
                          src={project.beforeImage}
                          alt={`${project.title} - Before`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-apple-text-secondary dark:text-apple-text-secondary-dark mb-2 uppercase tracking-wide">After</h4>
                      <div className="aspect-video relative rounded-2xl overflow-hidden">
                        <Image
                          src={project.afterImage}
                          alt={`${project.title} - After`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-apple-text dark:text-apple-text-dark mb-4">Project Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="aspect-square relative rounded-xl overflow-hidden">
                        <Image
                          src={image}
                          alt={`${project.title} - Gallery ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
