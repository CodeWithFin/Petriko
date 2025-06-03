'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Interior Design',
    'Paint Works',
    'Stone Finish',
    'Special Effects',
    'Wallpaper',
    'Skimming',
    'Ruff & Tuff',
    'Paint Supply'
  ]

  const contactInfo = [
    { icon: Phone, text: '0726 452055', href: 'tel:0726452055' },
    { icon: Phone, text: '0726 379289', href: 'tel:0726379289' },
    { icon: Phone, text: '0714 995033', href: 'tel:0714995033' },
    { icon: Phone, text: '0771 191801', href: 'tel:0771191801' },
    { icon: Mail, text: 'petricolimited@gmail.com', href: 'mailto:petricolimited@gmail.com' },
    { icon: MapPin, text: 'P.O BOX 817 00200, Nairobi', href: '#' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-apple-text dark:bg-black text-white border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4">Petriko Designers</h3>
            <p className="text-gray-300 dark:text-apple-text-secondary-dark mb-6 text-sm leading-relaxed">
              Transforming spaces across Kenya since 2008 with premium interior design 
              and painting services. Quality craftsmanship, attention to detail, and 
              client satisfaction are our priorities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/254726452055')}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Us</span>
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 dark:text-apple-text-secondary-dark hover:text-white dark:hover:text-apple-text-dark transition-colors text-sm"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 dark:text-apple-text-secondary-dark text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <li key={index}>
                    {contact.href.startsWith('#') ? (
                      <div className="flex items-center space-x-3">
                        <Icon size={16} className="text-apple-blue dark:text-apple-blue-dark flex-shrink-0" />
                        <span className="text-gray-300 dark:text-apple-text-secondary-dark text-sm">
                          {contact.text}
                        </span>
                      </div>
                    ) : (
                      <motion.a
                        whileHover={{ x: 5 }}
                        href={contact.href}
                        className="flex items-center space-x-3 text-gray-300 dark:text-apple-text-secondary-dark hover:text-white dark:hover:text-apple-text-dark transition-colors"
                      >
                        <Icon size={16} className="text-apple-blue dark:text-apple-blue-dark flex-shrink-0" />
                        <span className="text-sm">{contact.text}</span>
                      </motion.a>
                    )}
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 dark:border-gray-800 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-300 dark:text-apple-text-secondary-dark">
              <span>© {currentYear} Petriko Designers. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>in Kenya</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-300 dark:text-apple-text-secondary-dark">
              <span>Since 2008</span>
              <span>•</span>
              <span>15+ Years Experience</span>
              <span>•</span>
              <span>1000+ Projects</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-14 h-14 bg-apple-blue hover:bg-blue-700 dark:bg-apple-blue-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Mail size={24} />
          </motion.div>
        </motion.button>
      </motion.div>
    </footer>
  )
}

export default Footer
