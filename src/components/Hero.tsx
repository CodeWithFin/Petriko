'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section
      id="hero"
      ref={ref}
      className="h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Hero Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ scale: imgScale, y: imgY }}
      >
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2500&auto=format&fit=crop"
          className="w-full h-full object-cover brightness-[0.4]"
          alt="Luxury interior design by Petriko"
        />
      </motion.div>

      {/* Split oversized text */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-none mix-blend-exclusion py-32 px-6 md:px-12">
        {/* PETRI — top left */}
        <div className="overflow-hidden self-start">
          <motion.h1
            className="hero-text-huge font-medium tracking-tight block"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            PETRI
          </motion.h1>
        </div>

        {/* KO — bottom right (italic) */}
        <div className="overflow-hidden self-end pr-4 md:pr-10">
          <motion.h1
            className="hero-text-huge italic font-light tracking-tight block"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            KO
          </motion.h1>
        </div>
      </div>

      {/* Bottom label */}
      <motion.div
        className="absolute bottom-12 left-6 md:left-12 text-white mix-blend-exclusion flex flex-col gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] font-normal text-[#b19777]">
          Premium Interiors
        </span>
        <span className="text-xs uppercase tracking-[0.3em] opacity-60">
          Nairobi • Kenya
        </span>
      </motion.div>
    </section>
  )
}

export default Hero
