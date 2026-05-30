import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'
import TestimonialsSection from './sections/TestimonialsSection'
import ToolsSection from './sections/ToolsSection'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'

export default function App() {
  return (
    <div className="bg-[#0C0C0C] font-kanit" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ToolsSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
