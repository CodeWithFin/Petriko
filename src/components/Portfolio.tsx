'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    location: 'Westlands',
    title: 'The Grove Residences',
    subtitle: 'Nairobi West',
    description:
      'A full interior transformation across 8 executive apartments — bespoke stone finishes, custom colour palettes, and precision paintwork that redefine luxury living in Westlands.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop',
    tags: ['Interior Design', 'Completed'],
  },
  {
    location: 'Karen',
    title: 'Acacia Ridge Villa',
    subtitle: 'Karen, Nairobi',
    description:
      'End-to-end interior design and decorative paint works for a 5-bedroom private villa. Metallic accents, textured feature walls, and hand-selected wallpapers throughout.',
    image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2670&auto=format&fit=crop',
    tags: ['Special Effects', 'Paint Works'],
  },
  {
    location: 'Kilimani',
    title: 'Skyline Penthouse',
    subtitle: 'Kilimani, Nairobi',
    description:
      'A panoramic penthouse finished with Ruff & Tuff heavy-duty coatings in common areas and bespoke Italian-inspired stone effects in all living rooms.',
    image: 'https://images.unsplash.com/photo-1618219944342-824e40a13285?q=80&w=2670&auto=format&fit=crop',
    tags: ['Stone Finish', 'Completed'],
  },
]

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="portfolio" ref={sectionRef} className="stack-section pb-40">
      {/* Header */}
      <div className="px-6 md:px-20 mb-24 pt-20 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#b19777]" />
            <span className="text-xs font-normal uppercase tracking-[0.25em] text-gray-400">
              Selected Projects
            </span>
          </div>
          <h2 className="display-font text-4xl md:text-5xl font-normal tracking-tight leading-none uppercase">
            Featured
            <br />
            Work
          </h2>
        </div>
        <div className="hidden md:block">
          <button
            onClick={() => { }}
            className="group flex items-center gap-4 text-xs font-normal uppercase tracking-[0.2em] hover:text-[#b19777] transition-colors"
          >
            All Projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Stacked cards */}
      <div className="px-4 md:px-20 flex flex-col">
        {projects.map((project, i) => (
          <StackCard key={i} project={project} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  )
}

function StackCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[0]
  index: number
  total: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  // The card shrinks/fades when the NEXT card enters from below
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 0.1', 'end 0.2'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, index < total - 1 ? 0.9 : 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, index < total - 1 ? 0.6 : 1])
  const y = useTransform(scrollYProgress, [0, 1], [0, index < total - 1 ? -40 : 0])

  return (
    <div className="card-item group" ref={cardRef}>
      <motion.div
        className="card-inner flex flex-col md:grid md:grid-cols-[1.2fr_1fr] rounded-2xl border border-black/5"
        style={{ scale, opacity, y }}
      >
        {/* Image */}
        <div className="h-[280px] md:min-h-[72vh] w-full relative overflow-hidden order-1 md:order-2">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col p-8 md:p-12 lg:p-16 order-2 md:order-1 bg-white relative">
          {/* Header row */}
          <div className="flex justify-between items-start mb-6 md:mb-12">
            <span className="text-[10px] tracking-[0.2em] text-[#b19777] uppercase font-medium mt-2">
              {project.location}
            </span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#111] group-hover:text-white group-hover:border-[#111] transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
            </div>
          </div>

          {/* Title */}
          <div className="mb-4">
            <h3 className="display-font text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#111] mb-2 uppercase">
              {project.title}
            </h3>
            <span className="text-xs text-gray-400 uppercase tracking-[0.2em] font-medium block">
              {project.subtitle}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed mb-10 max-w-md">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-auto pt-6 border-t border-black/5 flex gap-3 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-5 py-2.5 bg-[#F9F9F9] rounded-full text-[10px] tracking-widest uppercase text-gray-500 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Portfolio
