import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact']

export default function HeroSection() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <section className="relative h-screen flex flex-col font-kanit" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="px-6 md:px-10 pt-6 md:pt-8 flex-shrink-0 z-20">
        <nav className="flex justify-between relative">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative px-4 py-1.5 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-colors duration-200"
            >
              <span className="relative z-10">{link}</span>
              {hoveredLink === link && (
                <motion.div
                  layoutId="nav-hover-bg"
                  className="absolute inset-0 bg-[#D7E2EA]/10 rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Main hero content — fills remaining space */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-10 relative z-10">
        {/* Line 1: KRUSHNA */}
        <FadeIn delay={0.15} y={50} className="overflow-hidden pb-2">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.85] w-full text-[17vw] sm:text-[18vw] md:text-[19vw] lg:text-[20vw] select-none">
            Krushna
          </h1>
        </FadeIn>

        {/* Middle row: role + decorative line */}
        <FadeIn delay={0.4} y={20} className="flex items-center gap-4 sm:gap-6 md:gap-8 my-3 sm:my-4 md:my-5">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D7E2EA]/30 to-transparent" />
          <p className="text-[#D7E2EA]/70 font-light uppercase tracking-[0.3em] text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
            Developer &bull; Entrepreneur &bull; Creator
          </p>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D7E2EA]/30 to-transparent" />
        </FadeIn>

        {/* Line 2: SARUK */}
        <FadeIn delay={0.3} y={50} className="overflow-hidden pt-2">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.85] w-full text-[17vw] sm:text-[18vw] md:text-[19vw] lg:text-[20vw] text-right select-none">
            Saruk
          </h1>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="flex-shrink-0 flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-10">
        <FadeIn delay={0.6} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            an aspiring tech entrepreneur driven by building innovative digital solutions
          </p>
        </FadeIn>

        <FadeIn delay={0.7} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
