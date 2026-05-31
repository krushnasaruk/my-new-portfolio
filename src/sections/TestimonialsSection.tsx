import { useRef, useEffect, useState } from 'react'
import FadeIn from '../components/FadeIn'
import { Star, Quote, User } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  company: string
  text: string
  avatar?: string
  rating: number
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Prof. Anand Kulkarni',
    role: 'Faculty Advisor',
    company: 'DPCO AI/ML Club',
    text: "Krushna's leadership as Vice President of our AI/ML club has been outstanding. He brings genuine enthusiasm and organizes workshops that inspire students to explore technology.",
    rating: 5,
  },
  {
    name: 'Riya Sharma',
    role: 'Club Member',
    company: 'AI/ML Club, DPCO',
    text: 'The workshops Krushna organized on Python and AI fundamentals were incredibly helpful. He has a talent for making complex topics accessible to beginners.',
    rating: 5,
  },
  {
    name: 'Amit Deshmukh',
    role: 'Small Business Owner',
    company: 'HealthPlus Clinic',
    text: "Krushna built a WhatsApp automation prototype for our clinic that streamlined appointment reminders. His understanding of real business problems is impressive for a student.",
    rating: 5,
  },
  {
    name: 'Sneha Patil',
    role: 'Fellow Student',
    company: 'DPCO',
    text: "Working with Krushna on the Sutraverse project has been an amazing experience. His vision for building a full-service tech company while still in college is truly inspiring.",
    rating: 5,
  },
  {
    name: 'Vikram Joshi',
    role: 'Mentor',
    company: 'Startup India',
    text: "Krushna shows the rare combination of technical curiosity and entrepreneurial drive. His project ideas around AI automation and IoT demonstrate real market understanding.",
    rating: 5,
  },
]

const AVATAR_COLORS = [
  { bg: '#362A24', fg: '#F89A74' },
  { bg: '#242A36', fg: '#749AF8' },
  { bg: '#243628', fg: '#74F890' },
  { bg: '#362432', fg: '#F874DA' },
  { bg: '#363424', fg: '#F8EE74' },
]

const DUPED = [...TESTIMONIALS, ...TESTIMONIALS]

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let frame: number
    let position = 0
    const speed = 0.4

    const animate = () => {
      if (!isPaused) {
        position -= speed
        const halfWidth = track.scrollWidth / 2
        if (Math.abs(position) >= halfWidth) {
          position = 0
        }
        track.style.transform = `translateX(${position}px)`
      }
      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [isPaused])

  return (
    <section className="bg-[#0C0C0C] py-20 sm:py-24 md:py-32 font-kanit overflow-hidden">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 px-5"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Reviews
        </h2>
      </FadeIn>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-6 md:gap-8"
          style={{ willChange: 'transform' }}
        >
          {DUPED.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[340px] sm:w-[400px] md:w-[460px] rounded-[30px] sm:rounded-[40px] border border-[#D7E2EA]/15 bg-[#111113] p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-6 transition-colors duration-300 hover:border-[#D7E2EA]/40"
            >
              <Quote className="text-[#D7E2EA]/20 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />

              <p className="text-[#D7E2EA]/80 font-light leading-relaxed text-sm sm:text-base flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#B600A8] text-[#B600A8]" />
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2 border-t border-[#D7E2EA]/10">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover bg-gray-200"
                    loading="lazy"
                  />
                ) : (
                  <div 
                    className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden"
                    style={{ backgroundColor: AVATAR_COLORS[i % AVATAR_COLORS.length].bg, color: AVATAR_COLORS[i % AVATAR_COLORS.length].fg }}
                  >
                    <User className="w-8 h-8 mt-2" fill="currentColor" />
                  </div>
                )}
                <div>
                  <div className="text-[#D7E2EA] font-medium text-sm sm:text-base">{t.name}</div>
                  <div className="text-[#D7E2EA]/50 text-xs sm:text-sm">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
