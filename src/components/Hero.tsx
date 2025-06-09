'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Star, Award, Users } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0)

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    { 
      icon: Award,
      title: 'Since 2008', 
      desc: 'Over 15 years of excellence',
      stat: '15+',
      label: 'Years'
    },
    { 
      icon: Star,
      title: 'Premium Quality', 
      desc: 'Only the finest materials',
      stat: '1000+',
      label: 'Projects'
    },
    { 
      icon: Users,
      title: 'Expert Craftsmen', 
      desc: 'Skilled professionals',
      stat: '50+',
      label: 'Craftsmen'
    }
  ]

  // Rotate featured stats every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [features.length])

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

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-apple-gray/30 to-white dark:from-black dark:via-apple-gray-dark/30 dark:to-black pt-20 lg:pt-24 pt-safe-top">
      {/* Enhanced Background with Floating Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] [background-size:20px_20px]" />
      </div>

      {/* Floating Design Elements */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-20 left-10 w-16 h-16 bg-apple-blue/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        className="absolute top-40 right-20 w-24 h-24 bg-apple-gold/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 4 } }}
        className="absolute bottom-40 left-20 w-20 h-20 bg-green-500/10 rounded-full blur-xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-12 sm:py-16 lg:py-20 pl-safe-left pr-safe-right">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="space-y-8 sm:space-y-10 lg:space-y-12"
        >
          {/* Main Headline with Enhanced Typography */}
          <motion.h1
            variants={fadeInUp}
            className="text-hero-mobile md:text-hero-desktop font-bold text-apple-text dark:text-apple-text-dark text-balance leading-snug md:leading-tight px-2 sm:px-0 mb-4 sm:mb-6"
          >
            Beautiful spaces.{' '}
            <span className="text-apple-blue dark:text-apple-blue-dark relative">
              Beautifully crafted.
              {/* Subtle underline accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-apple-blue to-apple-gold rounded-full"
              />
            </span>
          </motion.h1>

          {/* Enhanced Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-body-mobile md:text-body-desktop text-apple-text-secondary dark:text-apple-text-secondary-dark max-w-3xl mx-auto text-balance"
          >
            Premium interior design and painting services across Kenya since 2008.
            Transform your space with our expert craftsmanship and attention to detail.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-apple-blue hover:bg-blue-700 dark:bg-apple-blue-dark dark:hover:bg-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Our Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                initial={false}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white dark:border-apple-blue-dark dark:text-apple-blue-dark dark:hover:bg-apple-blue-dark dark:hover:text-white rounded-full font-semibold text-lg transition-all duration-200"
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Enhanced Interactive Features Stats */}
          <motion.div
            variants={fadeInUp}
            className="pt-12"
          >
            {/* Main rotating stat display */}
            <motion.div
              key={currentFeatureIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 dark:bg-black/80 apple-blur rounded-3xl p-8 max-w-md mx-auto mb-8 border border-white/20 dark:border-white/10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="w-16 h-16 mx-auto mb-4 bg-apple-blue/10 rounded-full flex items-center justify-center"
              >
                {React.createElement(features[currentFeatureIndex].icon, {
                  size: 32,
                  className: "text-apple-blue dark:text-apple-blue-dark"
                })}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-apple-blue dark:text-apple-blue-dark mb-2">
                  {features[currentFeatureIndex].stat}
                </div>
                <div className="text-lg font-semibold text-apple-text dark:text-apple-text-dark mb-1">
                  {features[currentFeatureIndex].label}
                </div>
                <div className="text-apple-text-secondary dark:text-apple-text-secondary-dark">
                  {features[currentFeatureIndex].desc}
                </div>
              </motion.div>
            </motion.div>

            {/* Feature indicators */}
            <div className="flex justify-center gap-2">
              {features.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentFeatureIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentFeatureIndex 
                      ? 'bg-apple-blue dark:bg-apple-blue-dark' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            {/* All features grid - smaller version */}
            <motion.div
              variants={fadeInUp}
              className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`text-center p-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                      index === currentFeatureIndex 
                        ? 'bg-apple-blue/10 dark:bg-apple-blue-dark/10' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                    onClick={() => setCurrentFeatureIndex(index)}
                  >
                    <div className="w-12 h-12 mx-auto mb-3 bg-apple-blue/10 rounded-full flex items-center justify-center">
                      <Icon size={24} className="text-apple-blue dark:text-apple-blue-dark" />
                    </div>
                    <h3 className="text-lg font-semibold text-apple-text dark:text-apple-text-dark mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-apple-text-secondary dark:text-apple-text-secondary-dark">
                      {feature.desc}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-white/10 dark:bg-black/10 apple-blur border border-white/20 dark:border-white/10 text-apple-text dark:text-apple-text-dark hover:border-apple-blue/50 transition-all duration-200 group"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <ChevronDown size={24} className="group-hover:text-apple-blue transition-colors duration-200" />
          <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1">
            Explore
          </span>
        </motion.div>
      </motion.button>
    </section>
  )
}

export default Hero
