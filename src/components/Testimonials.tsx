'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Building2, Home, Award } from 'lucide-react'
import Image from 'next/image'
import { testimonials, getFeaturedTestimonials, Testimonial } from '../data/testimonials'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', name: 'All Reviews', icon: Award },
    { id: 'residential', name: 'Residential', icon: Home },
    { id: 'commercial', name: 'Commercial', icon: Building2 },
  ]

  const filteredTestimonials = activeFilter === 'all' 
    ? getFeaturedTestimonials() 
    : testimonials.filter(t => t.category === activeFilter).slice(0, 6)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredTestimonials.length - 1 : prevIndex - 1
    )
  }

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-apple-gray/30 dark:bg-apple-gray-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-h2-mobile md:text-h2-desktop font-bold text-apple-text dark:text-apple-text-dark mb-6"
          >
            Trusted by amazing clients.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-mobile md:text-body-desktop text-apple-text-secondary dark:text-apple-text-secondary-dark max-w-3xl mx-auto mb-12"
          >
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about 
            their experience working with Petriko Designers.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => {
              const Icon = filter.icon
              return (
                <motion.button
                  key={filter.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveFilter(filter.id)
                    setCurrentIndex(0) // Reset to first testimonial when filter changes
                  }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-apple-blue text-white dark:bg-apple-blue-dark'
                      : 'bg-white dark:bg-apple-gray-dark text-apple-text dark:text-apple-text-dark hover:bg-apple-gray dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon size={18} />
                  <span>{filter.name}</span>
                </motion.button>
              )
            })}
          </motion.div>
        </div>

        {/* Featured Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative bg-white dark:bg-apple-gray-dark rounded-3xl p-8 lg:p-12 shadow-2xl mb-16"
        >
          {/* Quote Icon */}
          <div className="absolute top-8 left-8 opacity-10">
            <Quote size={80} className="text-apple-blue dark:text-apple-blue-dark" />
          </div>

          {filteredTestimonials.length > 0 && (
            <div className="relative z-10">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Client Image */}
                <div className="w-20 h-20 mx-auto mb-6 relative">
                  <Image
                    src={filteredTestimonials[currentIndex].image}
                    alt={filteredTestimonials[currentIndex].name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-full border-4 border-apple-blue/20 dark:border-apple-blue-dark/20"
                  />
                </div>

                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {renderStars(filteredTestimonials[currentIndex].rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-apple-text dark:text-apple-text-dark font-medium leading-relaxed mb-8 max-w-4xl mx-auto">
                  &ldquo;{filteredTestimonials[currentIndex].text}&rdquo;
                </blockquote>

                {/* Client Info */}
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-apple-text dark:text-apple-text-dark">
                    {filteredTestimonials[currentIndex].name}
                  </h4>
                  <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark">
                    {filteredTestimonials[currentIndex].role} at {filteredTestimonials[currentIndex].company}
                  </p>
                  <p className="text-sm text-apple-blue dark:text-apple-blue-dark">
                    {filteredTestimonials[currentIndex].project} • {filteredTestimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>

              {/* Navigation */}
              {filteredTestimonials.length > 1 && (
                <div className="flex justify-center items-center space-x-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-apple-gray/50 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-apple-blue hover:text-white dark:hover:bg-apple-blue-dark transition-all duration-200"
                  >
                    <ChevronLeft size={20} />
                  </motion.button>

                  {/* Dots Indicator */}
                  <div className="flex space-x-2">
                    {filteredTestimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentIndex
                            ? 'bg-apple-blue dark:bg-apple-blue-dark'
                            : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-apple-gray/50 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-apple-blue hover:text-white dark:hover:bg-apple-blue-dark transition-all duration-200"
                  >
                    <ChevronRight size={20} />
                  </motion.button>
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTestimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-apple-gray-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Client Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-apple-text dark:text-apple-text-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-apple-text-secondary dark:text-apple-text-secondary-dark">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark text-sm leading-relaxed mb-4 line-clamp-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Project Info */}
              <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                <p className="text-xs text-apple-blue dark:text-apple-blue-dark font-medium">
                  {testimonial.project}
                </p>
                <p className="text-xs text-apple-text-secondary dark:text-apple-text-secondary-dark">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-apple-blue hover:bg-blue-700 dark:bg-apple-blue-dark dark:hover:bg-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Join Our Happy Clients
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
