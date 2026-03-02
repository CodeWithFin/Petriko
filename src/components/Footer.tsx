'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-sticky" aria-label="Site footer">
      {/* Subtle background image */}
      <div className="absolute inset-0 z-0 opacity-10 grayscale">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2940&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 text-center w-full max-w-5xl px-6">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-16">
          <div className="w-2 h-2 rounded-full bg-[#b19777] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] text-gray-300 font-normal">
            Accepting New Projects
          </span>
        </div>

        {/* Big CTA text */}
        <a href="mailto:petricolimited@gmail.com" className="block group">
          <motion.h2
            className="display-font text-[12vw] leading-[0.8] font-normal tracking-tighter text-white group-hover:text-[#b19777] transition-colors duration-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            LET&apos;S CRAFT
          </motion.h2>
          <div className="h-[1px] w-0 group-hover:w-full bg-[#b19777] mx-auto transition-all duration-1000 mt-10" />
        </a>

        {/* Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-40 text-left border-t border-white/10 pt-20">
          {/* Social */}
          <div className="flex flex-col gap-8">
            <span className="text-xs uppercase tracking-[0.3em] text-[#b19777]">Social</span>
            <div className="flex flex-col gap-3 text-gray-400 text-sm">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-8">
            <span className="text-xs uppercase tracking-[0.3em] text-[#b19777]">Location</span>
            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <p className="leading-relaxed">P.O Box 817 00200<br />Nairobi, Kenya</p>
            </div>
          </div>

          {/* Inquiries */}
          <div className="flex flex-col gap-8">
            <span className="text-xs uppercase tracking-[0.3em] text-[#b19777]">Inquiries</span>
            <div className="flex flex-col gap-3 text-gray-400 text-sm">
              <a
                href="mailto:petricolimited@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                petricolimited@gmail.com
              </a>
              <a
                href="tel:0726452055"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                0726 452055
              </a>
              <a
                href="tel:0714995033"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                0714 995033
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col justify-end">
            <span className="text-xs text-gray-500 uppercase tracking-[0.3em]">
              © {currentYear} Petriko
            </span>
            <span className="text-xs text-gray-600 mt-1 tracking-[0.1em]">
              Since 2008
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
