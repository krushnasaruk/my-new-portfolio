import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import { ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    number: '01',
    name: 'Web Development',
    description:
      'Building modern, responsive, and high-performance websites using the latest frameworks and technologies — from landing pages to full-stack web applications.',
  },
  {
    number: '02',
    name: 'App Development',
    description:
      'Designing and developing cross-platform mobile applications that deliver seamless user experiences on both Android and iOS devices.',
  },
  {
    number: '03',
    name: 'Software Development',
    description:
      'Creating custom software solutions tailored to business needs — from desktop tools to cloud-based platforms with robust architecture.',
  },
  {
    number: '04',
    name: 'AI & Automation',
    description:
      'Developing intelligent automation solutions including WhatsApp bots, smart assistants, and AI-powered tools that streamline business workflows.',
  },
  {
    number: '05',
    name: 'Custom Digital Solutions',
    description:
      'End-to-end digital product design and development through Sutradhar — from concept and strategy to deployment and scaling.',
  },
]

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="skills" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 font-kanit">
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <motion.div
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex items-center justify-between gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12 cursor-pointer relative transition-all duration-300 rounded-2xl"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                ...(i === 0 ? { borderTop: '1px solid rgba(12, 12, 12, 0.15)' } : {}),
              }}
              animate={{
                paddingLeft: hoveredIndex === i ? '24px' : '0px',
                paddingRight: hoveredIndex === i ? '24px' : '0px',
                backgroundColor: hoveredIndex === i ? 'rgba(12, 12, 12, 0.03)' : 'rgba(12, 12, 12, 0)',
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="flex items-start gap-6 sm:gap-8 md:gap-12">
                <motion.span
                  className="text-[#0C0C0C] font-black leading-none flex-shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  animate={{
                    scale: hoveredIndex === i ? 1.05 : 1,
                    color: hoveredIndex === i ? '#7621B0' : '#0C0C0C',
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                >
                  {service.number}
                </motion.span>

                <div className="flex flex-col justify-center gap-2 sm:gap-3 pt-2 sm:pt-4">
                  <motion.h3
                    className="text-[#0C0C0C] font-medium uppercase"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    animate={{
                      color: hoveredIndex === i ? '#7621B0' : '#0C0C0C',
                    }}
                  >
                    {service.name}
                  </motion.h3>
                  <motion.p
                    className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                    animate={{
                      opacity: hoveredIndex === i ? 1 : 0.6,
                    }}
                  >
                    {service.description}
                  </motion.p>
                </div>
              </div>

              {/* Dynamic rotating arrow icon */}
              <motion.div
                className="hidden md:flex w-14 h-14 rounded-full border border-[#0C0C0C]/15 items-center justify-center flex-shrink-0"
                animate={{
                  opacity: hoveredIndex === i ? 1 : 0,
                  x: hoveredIndex === i ? 0 : -20,
                  rotate: hoveredIndex === i ? -45 : 0,
                  borderColor: hoveredIndex === i ? '#7621B0' : 'rgba(12, 12, 12, 0.15)',
                  backgroundColor: hoveredIndex === i ? '#7621B0' : 'transparent',
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <ArrowRight className={`w-6 h-6 transition-colors duration-200 ${hoveredIndex === i ? 'text-white' : 'text-[#0C0C0C]'}`} />
              </motion.div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
