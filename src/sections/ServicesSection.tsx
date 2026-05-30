import FadeIn from '../components/FadeIn'

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
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                ...(i === 0 ? { borderTop: '1px solid rgba(12, 12, 12, 0.15)' } : {}),
              }}
            >
              <span
                className="text-[#0C0C0C] font-black leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>

              <div className="flex flex-col justify-center gap-2 sm:gap-3 pt-2 sm:pt-4">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
