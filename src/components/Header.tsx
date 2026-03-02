'use client'

import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#111111] text-white flex flex-col items-center justify-center transition-transform duration-[600ms] cubic-bezier(0.16,1,0.3,1) ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <nav className="flex flex-col gap-10 text-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="display-font text-4xl font-normal tracking-tight hover:text-[#b19777] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-12 text-xs uppercase tracking-[0.25em] text-white/30">
          Petriko Designers
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className="fixed top-0 w-full px-6 py-6 md:px-12 md:py-10 flex justify-between items-center z-50 mix-blend-exclusion text-white"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex items-center md:flex-1">
          <button
            onClick={() => scrollToSection('hero')}
            className="display-font text-xl font-medium tracking-tight uppercase"
          >
            Petriko
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-12 text-xs font-normal tracking-[0.25em] uppercase">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-[#b19777] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:flex-1 justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 flex items-center justify-center md:hidden w-10 h-10 relative"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {/* Hamburger */}
            <svg
              className={`absolute transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
            {/* Close X */}
            <svg
              className={`absolute transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
              width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Header
