import FadeIn from '../components/FadeIn'
import { motion } from 'framer-motion'

interface ToolItem {
  name: string
  icon: string
}

const TOOL_ROWS: ToolItem[][] = [
  [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  ],
  [
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  ],
  [
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
    { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg' },
  ],
]

const STATS = [
  { value: 'VP', label: 'AI/ML Club, DPCO' },
  { value: '10+', label: 'Projects Built' },
  { value: '5+', label: 'Technologies' },
  { value: '∞', label: 'Curiosity' },
]

export default function ToolsSection() {
  return (
    <section className="bg-[#0C0C0C] py-20 sm:py-24 md:py-32 font-kanit overflow-hidden">
      {/* Stats bar */}
      <div className="max-w-6xl mx-auto mb-20 sm:mb-28 md:mb-36 px-5 sm:px-8 md:px-10">
        <FadeIn delay={0} y={40}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="text-center py-6 sm:py-8"
                style={
                  i < STATS.length - 1
                    ? { borderRight: '1px solid rgba(215, 226, 234, 0.1)' }
                    : undefined
                }
              >
                <div
                  className="hero-heading font-black leading-none mb-2 sm:mb-3"
                  style={{ fontSize: 'clamp(2.5rem, 7vw, 90px)' }}
                >
                  {stat.value}
                </div>
                <div className="text-[#D7E2EA]/50 font-medium uppercase tracking-widest text-xs sm:text-sm">
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

      {/* Tool rows */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10 flex flex-col gap-4 sm:gap-6">
        {TOOL_ROWS.map((row, rowIdx) => (
          <FadeIn key={rowIdx} delay={rowIdx * 0.15} y={30}>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
              {row.map((tool, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -8, 0]
                  }}
                  transition={{
                    y: {
                      duration: 3 + (i % 4) * 0.7,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ scale: 1.08 }}
                  className="flex items-center gap-3 sm:gap-4 px-5 py-3 sm:px-7 sm:py-4 md:px-8 md:py-5 rounded-full border border-[#D7E2EA]/15 bg-[#111113] hover:border-[#D7E2EA]/40 transition-colors duration-300 cursor-default"
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                    loading="lazy"
                  />
                  <span className="text-[#D7E2EA] font-medium text-sm sm:text-base md:text-lg tracking-wide">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
