import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'

interface ProjectData {
  number: string
  name: string
  category: string
  col1Img1: string
  col1Img2: string
  col2Img?: string
  video?: string
  link?: string
  info?: {
    title: string;
    content: string[];
  }
}

function InfoModal({ isOpen, onClose, title, content }: { isOpen: boolean; onClose: () => void; title: string; content: string[] }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#0C0C0C] border-2 border-[#D7E2EA]/20 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 font-kanit"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#D7E2EA] mb-6 pr-8 uppercase tracking-wide">{title}</h3>
            <div className="space-y-4 text-[#D7E2EA]/80 leading-relaxed font-light text-sm sm:text-base">
              {content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    name: 'Sutraverse',
    category: 'Startup / Agency',
    col1Img1: '/sutraverse-2.png',
    col1Img2: '/sutraverse-3.png',
    video: '/sutraverse.mov',
    link: 'https://sutraverse.co.in',
  },
  {
    number: '02',
    name: 'Sutraverse App',
    category: 'Mobile App',
    col1Img1: '/sutraverse-app-1.jpeg',
    col1Img2: '/sutraverse-app-2.jpeg',
    video: '/sutraverse-app-video.mp4',
    link: '#',
  },
  {
    number: '03',
    name: 'CubeSat Monitor',
    category: 'Hardware / IoT',
    col1Img1: '/cubesat-3.png',
    col1Img2: '/cubesat-2.png',
    col2Img: '/cubesat-1.png',
    info: {
      title: 'Stepping Out of the Software Sandbox: My First Foray into Hardware World 🛰️',
      content: [
        'Up until now, my comfort zone has been strictly within software architecture and AI pipelines. In past deployments—like compiling macOS environments or processing signals for Project Zankar—I usually volunteered for the codebase, viewing physical hardware as an unpredictable variable I preferred to avoid.',
        'However, for our latest project, a CubeSat-Based Environmental Monitoring & Disaster Management System, thought it was time to stress-test that boundary. We recently presented this multi-nodal IoT system at the Next Gen Project Competition 2K26 (NGPC) hosted by AISSMS IOIT, focusing on the 17 Sustainable Development Goals (SDGs).',
        'Taking the leap on the physical build was a steep but rewarding learning curve. Working closely with ESP32 modules, and an array of environmental sensors (DHT11, MQ135, MPU6050) taught me lessons that software simply cannot. I learned the realities of physical constraints: managing precise pinout configurations, troubleshooting raw connections, dealing with hardware limitations, and the micromanagement required to keep a complex web of jumper wires from turning into chaos.',
        'Our system acts as a central data hub, utilizing ESP-NOW for wireless multi-node communication to collect real-time climate and disaster management data from both rural and urban simulated nodes. Witnessing our code successfully execute in a physical, tangible environment—seeing the live data stream directly to our web dashboard—was a completely different kind of satisfaction.',
        'Successful systemic integration is never a solo effort. A huge thank you to my incredible teammates—Swanand Dindore, Vaishnavi Jare, Prajwal Valekar, and Krushna Saruk—for the late-night debugging sessions and seamless collaboration. This project proved to me that bridging the gap between software logic and hardware reality isn\'t something to avoid; it\'s where the actual engineering happens.',
        '#IoT #HardwareEngineering #ESP32 #CubeSat #DisasterManagement #NGPC2026 #AISSMS #ComputerScience #Engineering'
      ]
    }
  },
]

function ProjectCard({ project, index, totalCards }: { project: ProjectData; index: number; totalCards: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showInfo, setShowInfo] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  // Mouse tilt variables
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6])

  const springX = useSpring(rotateX, { damping: 25, stiffness: 150 })
  const springY = useSpring(rotateY, { damping: 25, stiffness: 150 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left - width / 2
    const mouseY = event.clientY - rect.top - height / 2
    x.set(mouseX / width)
    y.set(mouseY / height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div ref={containerRef} className="h-[85vh]" style={{ position: 'relative', perspective: '1200px' }}>
      <motion.div
        className="sticky rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top cursor-default transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#D7E2EA]/5"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          scale,
          top: `${96 + index * 28}px`,
          rotateX: springX,
          rotateY: springY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4 sm:mb-6 md:mb-8 flex-wrap gap-4" style={{ transform: 'translateZ(30px)' }}>
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <span
              className="text-[#D7E2EA] font-black leading-none hero-heading"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/60 text-xs sm:text-sm font-medium uppercase tracking-widest">
                {project.category}
              </span>
              <span
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <div className="hidden sm:block">
            {project.info ? (
              <>
                <button
                  onClick={() => setShowInfo(true)}
                  className="inline-block rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base text-[#D7E2EA] font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer"
                >
                  View Info
                </button>
                <InfoModal 
                  isOpen={showInfo} 
                  onClose={() => setShowInfo(false)} 
                  title={project.info.title} 
                  content={project.info.content} 
                />
              </>
            ) : (
              <LiveProjectButton link={project.link} />
            )}
          </div>
        </div>

        {/* Image grid */}
        <div className="flex gap-3 sm:gap-4 md:gap-6" style={{ transform: 'translateZ(15px)' }}>
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-6">
            <div
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/10"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Img1}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/10"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Img2}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          <div className="w-[60%] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/10">
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <img
                src={project.col2Img || ''}
                alt={`${project.name} main`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 font-kanit"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto flex flex-col">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} totalCards={PROJECTS.length} />
        ))}
      </div>
    </section>
  )
}
