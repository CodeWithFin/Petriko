'use client'

import { useRef, useEffect } from 'react'

const panels = [
  {
    index: '01',
    label: 'EXPERTISE',
    title: 'Interior Design',
    description:
      'Transforming spaces into masterpieces. From space planning and colour consultation to furniture curation and lighting — every element considered.',
    bg: '#F8F8F8',
  },
  {
    index: '02',
    label: 'EXPERTISE',
    title: 'Paint Works',
    description:
      'Premium finishes that last a lifetime. Interior, exterior, decorative plaster, stone effects and everything in between — applied with surgical precision.',
    bg: '#FFFFFF',
  },
  {
    index: '03',
    label: 'EXPERTISE',
    title: 'Special Effects',
    description:
      'Textures that transcend the ordinary. Metallic sheens, faux finishes, Ruff & Tuff, wallpaper installation — the details that define a space.',
    bg: '#F4F4F4',
  },
]

const Services = () => {
  // Outer div provides the scroll budget (controls how long the section is "pinned")
  const outerRef = useRef<HTMLDivElement>(null)
  // Track is the 300vw wide flex row that slides horizontally
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const outer = outerRef.current
    const track = trackRef.current
    if (!outer || !track) return

    let rafId: number

    const update = () => {
      const rect = outer.getBoundingClientRect()

      // How far we've scrolled INTO this section (0 → scrollRange px)
      const scrolled = Math.max(0, -rect.top)

      // Scroll range = outer height − viewport height = (400vh − 100vh) = 300vh
      // This is how long the inner div stays "pinned" before the section exits
      const scrollRange = outer.offsetHeight - window.innerHeight

      const progress = Math.min(1, scrolled / scrollRange)

      // maxX = 300vw - 100vw = 200vw (total horizontal travel for 3 panels)
      const maxX = track.scrollWidth - window.innerWidth

      track.style.transform = `translateX(${-progress * maxX}px)`
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    // Outer div — 400vh tall = 100vh for the visible panel + 300vh of "pinned" scrolling
    // 100vh per panel × 3 panels = natural one-screen-height-per-panel pacing
    <div ref={outerRef} style={{ height: '400vh' }} className="relative" id="services">

      {/* Sticky div — pins at the top of the viewport for the full 300vh scroll range.
          overflowX:clip on THIS element clips the 300vw track without affecting
          the sticky positioning (clip doesn't create a scroll container). */}
      <div
        className="sticky top-0 h-screen"
        style={{ overflowX: 'clip' }}
      >
        {/* 300vw track — JS translates this from 0 to -200vw as user scrolls */}
        <div
          ref={trackRef}
          className="flex h-full"
          style={{ width: '300vw' }}
        >
          {panels.map((panel, i) => (
            <div
              key={i}
              className="w-screen h-full flex flex-col justify-center px-6 md:px-20 flex-shrink-0 border-t border-black/5"
              style={{
                background: panel.bg,
                borderRight: i < panels.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
              }}
            >
              <span className="text-xs font-normal text-[#b19777] mb-8 tracking-[0.3em] uppercase">
                {panel.index} — {panel.label}
              </span>
              <h2 className="display-font text-6xl md:text-8xl font-normal tracking-tight uppercase text-[#111]">
                {panel.title}
              </h2>
              <p className="mt-10 max-w-sm text-gray-500 text-lg font-light leading-relaxed">
                {panel.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services