'use client'

import { motion } from 'framer-motion'
import { Home, Users, Palette, Brush, Sparkles, Hammer } from 'lucide-react'

const capabilities = [
  { label: 'Interior Design', icon: Home },
  { label: 'Commercial Projects', icon: Users },
  { label: 'Paint Works', icon: Palette },
  { label: 'Special Effects', icon: Brush },
  { label: 'Stone Finishing', icon: Sparkles },
  { label: 'Surface Preparation', icon: Hammer },
]

const About = () => {
  return (
    <section id="about" className="py-56 bg-[#0A0A0A] text-white relative z-20 overflow-hidden">
      <div className="px-6 md:px-20 max-w-[1600px] mx-auto grid md:grid-cols-2 gap-20">
        {/* Left — Vision text */}
        <div>
          <span className="text-xs font-normal text-[#b19777] block mb-10 tracking-[0.3em] uppercase">
            Capabilities
          </span>
          <h2 className="display-font text-5xl md:text-7xl font-normal tracking-tight leading-none uppercase">
            Areas of
            <br />
            Excellence
          </h2>
          <p className="mt-10 max-w-sm text-gray-400 text-base font-light leading-relaxed">
            Since 2008, Petriko Designers has delivered uncompromising quality across
            Kenya&apos;s most prestigious residential and commercial interiors.
          </p>
        </div>

        {/* Right — hover list */}
        <div className="flex flex-col justify-center">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex justify-between items-center border-b border-white/10 py-8 group hover:pl-6 transition-all duration-500 cursor-pointer"
              >
                <span className="text-xl font-normal text-gray-300 group-hover:text-[#b19777] transition-colors">
                  {cap.label}
                </span>
                <Icon
                  className="w-6 h-6 text-white/20 group-hover:text-[#b19777] transition-colors"
                  strokeWidth={1.5}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
