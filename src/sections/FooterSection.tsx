import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import { ArrowUp } from 'lucide-react'

const FOOTER_LINKS = [
  {
    heading: 'Navigation',
    links: ['About', 'Services', 'Projects', 'Contact'],
  },
  {
    heading: 'Services',
    links: ['Web Development', 'App Development', 'Software Dev', 'AI & Automation', 'Digital Solutions'],
  },
  {
    heading: 'Connect',
    links: ['GitHub', 'LinkedIn', 'Instagram', 'Twitter / X'],
  },
]

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 font-kanit px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10">
      <div className="max-w-6xl mx-auto">
        {/* Top area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-16 sm:mb-20 md:mb-24">
          {/* Left — CTA */}
          <FadeIn delay={0} y={30}>
            <div>
              <h3
                className="hero-heading font-black uppercase leading-none tracking-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 6vw, 80px)' }}
              >
                Let&apos;s build
                <br />
                together
              </h3>
              <p className="text-[#D7E2EA]/50 font-light text-sm sm:text-base leading-relaxed max-w-[360px] mb-8">
                Have an idea that needs technical execution? Whether it&apos;s a website, app,
                or AI-powered solution — let&apos;s turn it into reality through Sutraverse.
              </p>
              <a
                href="mailto:krushnasaruk1234@gmail.com"
                className="text-[#D7E2EA] font-medium text-lg sm:text-xl hover:text-[#B600A8] transition-colors duration-200 underline underline-offset-4 decoration-[#D7E2EA]/30 hover:decoration-[#B600A8]"
              >
                krushnasaruk1234@gmail.com
              </a>
            </div>
          </FadeIn>

          {/* Right — Link columns */}
          <FadeIn delay={0.15} y={30}>
            <div className="grid grid-cols-3 gap-6 sm:gap-8">
              {FOOTER_LINKS.map((col, i) => (
                <div key={i}>
                  <div className="text-[#D7E2EA]/30 text-xs uppercase tracking-widest mb-4 sm:mb-6">
                    {col.heading}
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-3">
                    {col.links.map((link, j) => (
                      <a
                        key={j}
                        href="#"
                        className="text-[#D7E2EA]/70 font-light text-sm hover:text-[#D7E2EA] transition-colors duration-200"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="h-px bg-[#D7E2EA]/10 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#D7E2EA]/30 font-light text-xs sm:text-sm tracking-wide">
            &copy; {new Date().getFullYear()} Krushna Saruk &middot; Sutraverse. All rights reserved. &middot; Made with ❤️
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center hover:border-[#D7E2EA]/50 hover:bg-[#D7E2EA]/5 transition-colors duration-200 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#D7E2EA]/60" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
