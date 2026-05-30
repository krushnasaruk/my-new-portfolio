import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'

interface ToolItem {
  name: string
  icon: string
}

interface ToolCategory {
  number: string
  title: string
  tools: ToolItem[]
}

const STATS = [
  { value: 'VP', label: 'AI/ML Club, DPCO' },
  { value: '10+', label: 'Projects Built' },
  { value: '5+', label: 'Technologies' },
  { value: '∞', label: 'Curiosity' },
]

const TOOL_CATEGORIES: ToolCategory[] = [
  {
    number: '01',
    title: 'Languages',
    tools: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    ],
  },
  {
    number: '02',
    title: 'Frameworks & Libraries',
    tools: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    ],
  },
  {
    number: '03',
    title: 'Databases & Cloud',
    tools: [
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    ],
  },
  {
    number: '04',
    title: 'Platforms & Design',
    tools: [
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg' },
    ],
  },
]

export default function ToolsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#0C0C0C] py-20 sm:py-24 md:py-32 font-kanit overflow-hidden">
      {/* Stats row */}
      <div className="max-w-5xl mx-auto mb-20 sm:mb-28 md:mb-36 px-5 sm:px-8 md:px-10">
        <FadeIn delay={0} y={40}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center cursor-default">
                <div
                  className="hero-heading font-black leading-none mb-3"
                  style={{ fontSize: 'clamp(2.2rem, 5vw, 72px)' }}
                >
                  {stat.value}
                </div>
                <div className="text-[#D7E2EA]/40 font-medium uppercase tracking-widest text-[10px] sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 px-5"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Tools
        </h2>
      </FadeIn>

      {/* Accordion rows — same pattern as Services */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10">
        {TOOL_CATEGORIES.map((category, i) => (
          <FadeIn key={category.number} delay={i * 0.08} y={30}>
            <motion.div
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="py-8 sm:py-10 md:py-12 cursor-default relative"
              style={{
                borderBottom: '1px solid rgba(215, 226, 234, 0.12)',
                ...(i === 0 ? { borderTop: '1px solid rgba(215, 226, 234, 0.12)' } : {}),
              }}
              animate={{
                paddingLeft: hoveredIndex === i ? '24px' : '0px',
                paddingRight: hoveredIndex === i ? '24px' : '0px',
                backgroundColor: hoveredIndex === i ? 'rgba(215, 226, 234, 0.03)' : 'rgba(215, 226, 234, 0)',
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              {/* Top row: number + title */}
              <div className="flex items-start gap-6 sm:gap-8 md:gap-12 mb-0">
                <motion.span
                  className="hero-heading font-black leading-none flex-shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  animate={{
                    scale: hoveredIndex === i ? 1.05 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                >
                  {category.number}
                </motion.span>

                <div className="flex flex-col justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 flex-1">
                  <motion.h3
                    className="text-[#D7E2EA] font-medium uppercase"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    animate={{
                      color: hoveredIndex === i ? '#BBCCD7' : '#D7E2EA',
                    }}
                  >
                    {category.title}
                  </motion.h3>

                  {/* Tool icons — slide in on hover */}
                  <motion.div
                    className="flex flex-wrap gap-3 sm:gap-4"
                    animate={{
                      opacity: hoveredIndex === i ? 1 : 0.6,
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                  >
                    {category.tools.map((tool, j) => (
                      <motion.div
                        key={j}
                        className="flex items-center gap-2.5 py-2 px-4 rounded-full border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.03]"
                        animate={{
                          borderColor: hoveredIndex === i ? 'rgba(215, 226, 234, 0.25)' : 'rgba(215, 226, 234, 0.1)',
                          y: hoveredIndex === i ? 0 : 4,
                        }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: hoveredIndex === i ? j * 0.04 : 0 }}
                      >
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-6 h-6 sm:w-7 sm:h-7 object-contain pointer-events-none"
                          loading="lazy"
                        />
                        <span className="text-[#D7E2EA]/70 font-medium text-xs sm:text-sm uppercase tracking-wider">
                          {tool.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
