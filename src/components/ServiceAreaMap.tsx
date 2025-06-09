'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Clock, X, Send } from 'lucide-react'

interface ServiceArea {
  id: string
  name: string
  region: string
  coordinates: [number, number] // [lat, lng]
  coverage: string[]
  phone: string
  hours: string
  description: string
}

const serviceAreas: ServiceArea[] = [
  {
    id: 'nairobi',
    name: 'Nairobi Metropolitan',
    region: 'Central Kenya',
    coordinates: [-1.2921, 36.8219],
    coverage: [
      'Nairobi CBD',
      'Westlands',
      'Karen',
      'Runda',
      'Lavington',
      'Kilimani',
      'Parklands',
      'South C',
      'Kileleshwa'
    ],
    phone: '+254 700 123 456',
    hours: '8:00 AM - 6:00 PM',
    description: 'Complete interior design services for residential and commercial properties in Nairobi and surrounding areas.'
  },
  {
    id: 'meru',
    name: 'Meru County',
    region: 'Eastern Kenya',
    coordinates: [0.0480, 37.6559],
    coverage: [
      'Meru Town',
      'Nkubu',
      'Maua',
      'Chogoria',
      'Timau',
      'Mikinduri',
      'Buuri',
      'Tigania'
    ],
    phone: '+254 700 234 567',
    hours: '8:00 AM - 5:00 PM',
    description: 'Specialized design services for homes and businesses across Meru County, bringing modern aesthetics to Eastern Kenya.'
  },
  {
    id: 'kiambu',
    name: 'Kiambu County',
    region: 'Central Kenya',
    coordinates: [-1.1739, 36.8356],
    coverage: [
      'Thika',
      'Ruiru',
      'Juja',
      'Limuru',
      'Tigoni',
      'Kiambu Town',
      'Githunguri',
      'Lari'
    ],
    phone: '+254 700 345 678',
    hours: '8:00 AM - 6:00 PM',
    description: 'Premium interior design solutions for the rapidly growing Kiambu County residential and commercial market.'
  },
  {
    id: 'nakuru',
    name: 'Nakuru County',
    region: 'Rift Valley',
    coordinates: [-0.3031, 36.0800],
    coverage: [
      'Nakuru Town',
      'Naivasha',
      'Gilgil',
      'Molo',
      'Njoro',
      'Rongai',
      'Bahati',
      'Subukia'
    ],
    phone: '+254 700 456 789',
    hours: '8:00 AM - 5:30 PM',
    description: 'Innovative design services for the vibrant Nakuru County, blending modern trends with local cultural elements.'
  }
]

export default function ServiceAreaMap() {
  const [selectedArea, setSelectedArea] = useState<ServiceArea | null>(null)
  const [hoveredArea, setHoveredArea] = useState<string | null>(null)
  const [showRequestModal, setShowRequestModal] = useState(false)
  const [isSubmittingRequest, setIsSubmittingRequest] = useState(false)
  const [requestForm, setRequestForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  })

  return (
    <section 
      className="py-20 bg-apple-gray dark:bg-black relative overflow-hidden" 
      aria-labelledby="service-areas-title"
      role="region"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,122,255,0.1)_1px,transparent_0)] [background-size:20px_20px]" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-20 right-10 w-12 h-12 bg-apple-blue/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3
        }}
        className="absolute bottom-20 left-10 w-8 h-8 bg-apple-gold/20 rounded-full blur-lg"
      />

      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple-Style Header */}
        <div className="text-center mb-16">
          <motion.h2 
            id="service-areas-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-h2-mobile md:text-h2-desktop font-bold text-apple-text dark:text-apple-text-dark mb-6 text-balance"
          >
            Our Service Areas
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body-mobile md:text-body-desktop text-apple-text-secondary dark:text-apple-text-secondary-dark max-w-3xl mx-auto text-balance"
          >
            We provide premium interior design services across Kenya&apos;s major counties. 
            Discover our coverage areas and local expertise.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Interactive Map Area */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Map Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Kenya Coverage Map</h3>
              <p className="text-gray-600 dark:text-gray-300">Click on any area to view detailed coverage information</p>
            </div>

            {/* Beautiful Interactive Kenya Map */}
            <div className="relative h-96 bg-gradient-to-br from-apple-blue/5 via-white to-apple-gold/5 dark:from-apple-blue-dark/10 dark:via-apple-gray-dark dark:to-apple-gold/10 p-8 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,122,255,0.1)_1px,transparent_0)] [background-size:20px_20px]" />
              </div>

              {/* Floating Design Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-4 right-4 w-8 h-8 bg-apple-blue/20 rounded-full blur-sm"
              />
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2
                }}
                className="absolute bottom-6 left-6 w-6 h-6 bg-apple-gold/30 rounded-full blur-sm"
              />

              {/* Kenya Map with Modern Design */}
              <svg 
                viewBox="0 0 400 300" 
                className="w-full h-full relative z-10"
                style={{ filter: 'drop-shadow(0 8px 25px rgba(0, 122, 255, 0.15))' }}
              >
                {/* Kenya Map Background */}
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(0, 122, 255, 0.1)" />
                    <stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)" />
                    <stop offset="100%" stopColor="rgba(255, 214, 10, 0.1)" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* More Accurate Kenya Outline */}
                <path
                  d="M 80 80 
                     Q 90 70 120 75 
                     L 180 65 
                     Q 220 60 260 70 
                     L 320 75 
                     Q 340 80 350 100 
                     L 355 140 
                     Q 350 170 340 190 
                     L 320 220 
                     Q 300 240 280 245 
                     L 220 250 
                     Q 180 248 140 240 
                     L 100 225 
                     Q 75 200 70 170 
                     L 65 130 
                     Q 70 100 80 80 Z"
                  fill="url(#mapGradient)"
                  stroke="rgba(0, 122, 255, 0.3)"
                  strokeWidth="2"
                  className="transition-all duration-500"
                />
                
                {/* Service Area Markers with Premium Design */}
                {serviceAreas.map((area, index) => {
                  // Better positioning based on actual Kenya geography
                  const positions = {
                    nairobi: { x: 200, y: 180 },
                    meru: { x: 230, y: 130 },
                    kiambu: { x: 195, y: 165 },
                    nakuru: { x: 170, y: 150 }
                  }
                  
                  const pos = positions[area.id as keyof typeof positions] || { x: 200, y: 150 }
                  const isHovered = hoveredArea === area.id
                  const isSelected = selectedArea?.id === area.id
                  
                  return (
                    <g key={area.id}>
                      {/* Animated Ripple Effect */}
                      {isSelected && (
                        <motion.circle
                          cx={pos.x}
                          cy={pos.y}
                          r={20}
                          fill="none"
                          stroke="rgba(0, 122, 255, 0.4)"
                          strokeWidth="2"
                          initial={{ r: 15, opacity: 1 }}
                          animate={{ r: 30, opacity: 0 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                      
                      {/* Glow Effect */}
                      <motion.circle
                        cx={pos.x}
                        cy={pos.y}
                        r={isHovered || isSelected ? 18 : 12}
                        fill="rgba(0, 122, 255, 0.2)"
                        className="transition-all duration-300"
                        animate={{
                          r: isHovered || isSelected ? [12, 20, 12] : 12,
                          opacity: isHovered || isSelected ? [0.2, 0.4, 0.2] : 0.2
                        }}
                        transition={{
                          duration: 2,
                          repeat: isHovered || isSelected ? Infinity : 0
                        }}
                      />
                      
                      {/* Main Marker */}
                      <motion.circle
                        cx={pos.x}
                        cy={pos.y}
                        r={isHovered ? 14 : isSelected ? 12 : 10}
                        fill={isSelected ? '#007AFF' : isHovered ? '#0A84FF' : '#007AFF'}
                        className="cursor-pointer focus:outline-none"
                        style={{ filter: isHovered || isSelected ? 'url(#glow)' : 'none' }}
                        onMouseEnter={() => setHoveredArea(area.id)}
                        onMouseLeave={() => setHoveredArea(null)}
                        onClick={() => setSelectedArea(area)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            setSelectedArea(area)
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label={`Select ${area.name} service area`}
                        aria-pressed={selectedArea?.id === area.id}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      />
                      
                      {/* Inner Dot */}
                      <motion.circle
                        cx={pos.x}
                        cy={pos.y}
                        r={4}
                        fill="white"
                        className="pointer-events-none"
                        animate={{
                          scale: isHovered || isSelected ? [1, 1.2, 1] : 1
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: isHovered || isSelected ? Infinity : 0
                        }}
                      />
                      
                      {/* Label with Apple-style Typography */}
                      <motion.text
                        x={pos.x}
                        y={pos.y - 25}
                        textAnchor="middle"
                        className="text-xs font-semibold fill-apple-text dark:fill-apple-text-dark pointer-events-none"
                        style={{ 
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          textShadow: '0 1px 3px rgba(0,0,0,0.1)'
                        }}
                        initial={{ opacity: 0, y: pos.y - 20 }}
                        animate={{ 
                          opacity: isHovered || isSelected ? 1 : 0.8,
                          y: isHovered || isSelected ? pos.y - 30 : pos.y - 25,
                          scale: isHovered || isSelected ? 1.1 : 1
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {area.name.split(' ')[0]}
                      </motion.text>

                      {/* Connection Lines (when selected) */}
                      {isSelected && (
                        <motion.line
                          x1={pos.x}
                          y1={pos.y}
                          x2={380}
                          y2={280}
                          stroke="rgba(0, 122, 255, 0.3)"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                      )}
                    </g>
                  )
                })}

                {/* Coverage Indicator */}
                <motion.text
                  x="200"
                  y="280"
                  textAnchor="middle"
                  className="text-xs font-medium fill-apple-text-secondary dark:fill-apple-text-secondary-dark"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Premium Services Across Kenya
                </motion.text>
              </svg>
            </div>

            {/* Premium Stats */}
            <div className="p-6 bg-gradient-to-r from-apple-gray/50 via-white to-apple-gray/50 dark:from-apple-gray-dark/50 dark:via-apple-gray-dark dark:to-apple-gray-dark/50 border-t border-apple-blue/10 dark:border-apple-blue-dark/10">
              <div className="grid grid-cols-3 gap-4 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-xl bg-white/50 dark:bg-apple-gray-dark/50 backdrop-blur-sm border border-apple-blue/10 dark:border-apple-blue-dark/10"
                >
                  <div className="text-2xl font-bold text-apple-blue dark:text-apple-blue-dark">{serviceAreas.length}</div>
                  <div className="text-sm text-apple-text-secondary dark:text-apple-text-secondary-dark font-medium">Counties</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-xl bg-white/50 dark:bg-apple-gray-dark/50 backdrop-blur-sm border border-apple-gold/20"
                >
                  <div className="text-2xl font-bold text-apple-gold">32+</div>
                  <div className="text-sm text-apple-text-secondary dark:text-apple-text-secondary-dark font-medium">Cities</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-xl bg-white/50 dark:bg-apple-gray-dark/50 backdrop-blur-sm border border-green-200 dark:border-green-400/20"
                >
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
                  <div className="text-sm text-apple-text-secondary dark:text-apple-text-secondary-dark font-medium">Coverage</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {serviceAreas.map((area) => (
              <motion.div
                key={area.id}
                className={`bg-white/80 dark:bg-apple-gray-dark/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 focus:outline-none border ${
                  selectedArea?.id === area.id 
                    ? 'border-apple-blue dark:border-apple-blue-dark shadow-xl ring-1 ring-apple-blue/20 dark:ring-apple-blue-dark/20 transform scale-[1.02]' 
                    : 'border-gray-200/50 dark:border-white/10 hover:border-apple-blue/30 dark:hover:border-apple-blue-dark/30 hover:shadow-xl hover:scale-[1.01]'
                }`}
                onClick={() => setSelectedArea(selectedArea?.id === area.id ? null : area)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedArea(selectedArea?.id === area.id ? null : area)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`${selectedArea?.id === area.id ? 'Collapse' : 'Expand'} ${area.name} details`}
                aria-expanded={selectedArea?.id === area.id}
                whileHover={{ y: -2 }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-apple-text dark:text-apple-text-dark mb-1">{area.name}</h3>
                      <p className="text-sm text-apple-text-secondary dark:text-apple-text-secondary-dark">{area.region}</p>
                    </div>
                    <div className="p-2 bg-apple-blue/10 dark:bg-apple-blue-dark/10 rounded-full">
                      <MapPin className="h-5 w-5 text-apple-blue dark:text-apple-blue-dark" />
                    </div>
                  </div>

                  {selectedArea?.id === area.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <p className="text-apple-text-secondary dark:text-apple-text-secondary-dark text-sm leading-relaxed">{area.description}</p>
                      
                      {/* Coverage Areas */}
                      <div>
                        <h4 className="font-semibold text-apple-text dark:text-apple-text-dark mb-3 text-sm">Coverage Areas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.coverage.map((location) => (
                            <motion.span
                              key={location}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500, damping: 25 }}
                              className="px-3 py-1 bg-apple-blue/10 dark:bg-apple-blue-dark/10 text-apple-blue dark:text-apple-blue-dark text-xs rounded-full font-medium border border-apple-blue/20 dark:border-apple-blue-dark/20"
                            >
                              {location}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-apple-blue/10 dark:border-apple-blue-dark/10">
                        <motion.div 
                          className="flex items-center gap-3 p-3 rounded-xl bg-apple-gray/30 dark:bg-apple-gray-dark/30 cursor-pointer hover:bg-apple-blue/10 dark:hover:bg-apple-blue-dark/10 transition-colors group"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(`tel:${area.phone}`)
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="p-2 bg-apple-blue/10 dark:bg-apple-blue-dark/10 rounded-lg group-hover:bg-apple-blue group-hover:text-white dark:group-hover:bg-apple-blue-dark transition-colors">
                            <Phone className="h-4 w-4 text-apple-blue dark:text-apple-blue-dark group-hover:text-white" />
                          </div>
                          <span className="text-sm text-apple-text dark:text-apple-text-dark font-medium">{area.phone}</span>
                        </motion.div>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-apple-gray/30 dark:bg-apple-gray-dark/30">
                          <div className="p-2 bg-apple-gold/10 rounded-lg">
                            <Clock className="h-4 w-4 text-apple-gold" />
                          </div>
                          <span className="text-sm text-apple-text dark:text-apple-text-dark font-medium">{area.hours}</span>
                        </div>
                      </div>

                      {/* Get Quote Button */}
                      <div className="pt-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(e) => {
                            e.stopPropagation()
                            const contactSection = document.getElementById('contact')
                            if (contactSection) {
                              // Store area info in sessionStorage for the contact form to read
                              sessionStorage.setItem('selectedServiceArea', JSON.stringify({
                                name: area.name,
                                region: area.region,
                                phone: area.phone
                              }))
                              contactSection.scrollIntoView({ behavior: 'smooth' })
                            }
                          }}
                          className="w-full px-4 py-3 bg-apple-blue hover:bg-blue-700 dark:bg-apple-blue-dark dark:hover:bg-blue-600 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          Get Quote for {area.name.split(' ')[0]}
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Apple-Style Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 dark:bg-apple-gray-dark/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 lg:p-12 max-w-3xl mx-auto border border-gray-200/50 dark:border-white/10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              className="w-16 h-16 bg-apple-blue/10 dark:bg-apple-blue-dark/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <MapPin className="w-8 h-8 text-apple-blue dark:text-apple-blue-dark" />
            </motion.div>
            
            <h3 className="text-h3-mobile md:text-h3-desktop font-bold text-apple-text dark:text-apple-text-dark mb-4">
              Don&apos;t See Your Area?
            </h3>
            <p className="text-body-mobile md:text-body-desktop text-apple-text-secondary dark:text-apple-text-secondary-dark mb-8 max-w-2xl mx-auto">
              We&apos;re constantly expanding our services. Contact us to discuss bringing 
              Petriko Designers to your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowRequestModal(true)}
                className="px-8 py-4 bg-apple-blue hover:bg-blue-700 dark:bg-apple-blue-dark dark:hover:bg-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Request Service Area
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const servicesSection = document.getElementById('services')
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="px-8 py-4 border-2 border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white dark:border-apple-blue-dark dark:text-apple-blue-dark dark:hover:bg-apple-blue-dark dark:hover:text-white rounded-full font-semibold text-lg transition-all duration-200"
              >
                View All Services
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      </div>

      {/* Service Area Request Modal */}
      <AnimatePresence>
        {showRequestModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowRequestModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Request New Service Area</h3>
                  <button
                    onClick={() => setShowRequestModal(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault()
                    setIsSubmittingRequest(true)
                    
                    // Simulate API call delay
                    await new Promise(resolve => setTimeout(resolve, 1500))
                    
                    // In a real app, this would submit to an API
                    alert('Thank you for your request! We\'ll contact you soon to discuss expanding to your area.')
                    setShowRequestModal(false)
                    setRequestForm({ name: '', email: '', phone: '', location: '', message: '' })
                    setIsSubmittingRequest(false)
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="request-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="request-name"
                      type="text"
                      required
                      value={requestForm.name}
                      onChange={(e) => setRequestForm({ ...requestForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="request-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="request-email"
                      type="email"
                      required
                      value={requestForm.email}
                      onChange={(e) => setRequestForm({ ...requestForm, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="request-phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      id="request-phone"
                      type="tel"
                      value={requestForm.phone}
                      onChange={(e) => setRequestForm({ ...requestForm, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="+254 700 000 000"
                    />
                  </div>

                  <div>
                    <label htmlFor="request-location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Requested Location *
                    </label>
                    <input
                      id="request-location"
                      type="text"
                      required
                      value={requestForm.location}
                      onChange={(e) => setRequestForm({ ...requestForm, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="City, County, or specific area"
                    />
                  </div>

                  <div>
                    <label htmlFor="request-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="request-message"
                      rows={3}
                      value={requestForm.message}
                      onChange={(e) => setRequestForm({ ...requestForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project needs or any specific requirements..."
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowRequestModal(false)}
                      className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmittingRequest}
                      className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                    >
                      {isSubmittingRequest ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Submit Request
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}