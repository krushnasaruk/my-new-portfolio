import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'

interface ToolItem {
  name: string
  icon: string
}

interface ToolCategory {
  title: string
  description: string
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
    title: 'Languages',
    description: 'Core programming languages for scripting and systems.',
    tools: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    description: 'Modern component-driven web architectures.',
    tools: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    ],
  },
  {
    title: 'Databases & Cloud',
    description: 'Data architectures and cloud-native services.',
    tools: [
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    ],
  },
  {
    title: 'Platforms & Designing',
    description: 'UI/UX creation, systems, and hardware platforms.',
    tools: [
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg' },
    ],
  },
]

export default function ToolsSection() {
  return (
    <section className="bg-[#0C0C0C] py-20 sm:py-24 md:py-32 font-kanit overflow-hidden">
      {/* Stats bar */}
      <div className="max-w-6xl mx-auto mb-20 sm:mb-28 md:mb-36 px-5 sm:px-8 md:px-10">
        <FadeIn delay={0} y={40}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, borderColor: 'rgba(95, 105, 248, 0.2)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-3xl border border-[#D7E2EA]/10 bg-[#111113]/30 backdrop-blur-sm p-6 text-center cursor-default"
              >
                <div
                  className="hero-heading font-black leading-none mb-2"
                  style={{ fontSize: 'clamp(2rem, 5vw, 64px)' }}
                >
                  {stat.value}
                </div>
                <div className="text-[#D7E2EA]/50 font-medium uppercase tracking-widest text-[10px] sm:text-xs">
                  {stat.label}
                </div>
              </motion.div>
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

      {/* Bento Grid of Categories */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TOOL_CATEGORIES.map((category, catIdx) => (
            <FadeIn key={catIdx} delay={catIdx * 0.1} y={30}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(95, 105, 248, 0.25)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="h-full rounded-[30px] border border-[#D7E2EA]/10 bg-[#111113]/40 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between cursor-default"
              >
                <div>
                  <h3 className="text-[#D7E2EA] font-semibold text-lg sm:text-xl mb-1">
                    {category.title}
                  </h3>
                  <p className="text-[#D7E2EA]/40 text-xs sm:text-sm font-light mb-6">
                    {category.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {category.tools.map((tool, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.03, y: -2, borderColor: 'rgba(95, 105, 248, 0.4)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-[#D7E2EA]/5 bg-[#0C0C0C]/80"
                      >
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-6 h-6 object-contain pointer-events-none"
                          loading="lazy"
                        />
                        <span className="text-[#D7E2EA]/80 font-medium text-xs sm:text-sm tracking-wide">
                          {tool.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
