import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact']

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col font-kanit" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="px-6 md:px-10 pt-6 md:pt-8 flex-shrink-0">
        <nav className="flex justify-between">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Main hero content — fills remaining space */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-10">
        {/* Line 1: KRUSHNA */}
        <FadeIn delay={0.1} y={50} className="overflow-hidden">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.85] w-full text-[17vw] sm:text-[18vw] md:text-[19vw] lg:text-[20vw]">
            Krushna
          </h1>
        </FadeIn>

        {/* Middle row: role + decorative line */}
        <FadeIn delay={0.3} y={20} className="flex items-center gap-4 sm:gap-6 md:gap-8 my-3 sm:my-4 md:my-5">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D7E2EA]/30 to-transparent" />
          <p className="text-[#D7E2EA]/70 font-light uppercase tracking-[0.3em] text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
            Developer &bull; Entrepreneur &bull; Creator
          </p>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D7E2EA]/30 to-transparent" />
        </FadeIn>

        {/* Line 2: SARUK */}
        <FadeIn delay={0.2} y={50} className="overflow-hidden">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.85] w-full text-[17vw] sm:text-[18vw] md:text-[19vw] lg:text-[20vw] text-right">
            Saruk
          </h1>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="flex-shrink-0 flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.4} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            an aspiring tech entrepreneur driven by building innovative digital solutions
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
