'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10 pt-safe-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-safe-left pr-safe-right">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-apple-text dark:text-apple-text-dark cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Petriko
          </motion.h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.slice(1))}
                className="text-apple-text-secondary dark:text-apple-text-secondary-dark hover:text-apple-text dark:hover:text-apple-text-dark transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right side - Theme toggle and mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-apple-gray/50 dark:bg-apple-gray-dark/50 hover:bg-apple-gray dark:hover:bg-apple-gray-dark transition-all duration-200"
            >
              {mounted ? (
                theme === 'light' ? 
                  <Moon size={20} className="text-apple-text dark:text-apple-text-dark" /> : 
                  <Sun size={20} className="text-apple-text dark:text-apple-text-dark" />
              ) : (
                <Sun size={20} className="text-apple-text dark:text-apple-text-dark" />
              )}
            </motion.button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full bg-apple-gray/50 dark:bg-apple-gray-dark/50 hover:bg-apple-gray dark:hover:bg-apple-gray-dark transition-all duration-200"
            >
              {isOpen ? 
                <X size={20} className="text-apple-text dark:text-apple-text-dark" /> : 
                <Menu size={20} className="text-apple-text dark:text-apple-text-dark" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg border-b border-black/10 dark:border-white/10"
          >
            <div className="px-4 py-4 space-y-4 pl-safe-left pr-safe-right">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className="block w-full text-left text-apple-text-secondary dark:text-apple-text-secondary-dark hover:text-apple-text dark:hover:text-apple-text-dark transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
