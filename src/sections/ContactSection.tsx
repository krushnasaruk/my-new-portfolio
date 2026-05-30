import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import { Send, ArrowUpRight, Github, Linkedin, Instagram, Twitter } from 'lucide-react'

const SOCIALS = [
  { name: 'GitHub', href: 'https://github.com/krushnasaruk', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/krushnasaruk', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter / X', href: '#', icon: Twitter },
]

const SERVICES_OFFERED = [
  'Web Development',
  'App Development',
  'AI & Automation',
  'Software Dev',
  'Digital Solutions',
]

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormState({ name: '', email: '', subject: '', message: '' })
    setSelectedServices([])
  }

  return (
    <section
      id="contact"
      className="relative font-kanit overflow-hidden bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] rounded-b-[40px] sm:rounded-b-[50px] md:rounded-b-[60px]"
    >
      <div className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Contact
          </h2>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          {/* Service interest pills */}
            <div
              className="py-7 sm:py-8"
              style={{ borderTop: '1px solid rgba(12, 12, 12, 0.12)', borderBottom: '1px solid rgba(12, 12, 12, 0.12)' }}
            >
              <p
                className="text-[#0C0C0C] font-black uppercase mb-4 sm:mb-5"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2rem)' }}
              >
                I&apos;m interested in
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {SERVICES_OFFERED.map((service) => (
                  <motion.button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-full px-5 sm:px-6 py-2 sm:py-2.5 font-semibold uppercase tracking-wider text-[10px] sm:text-xs cursor-pointer border-2 transition-all duration-300 ${
                      selectedServices.includes(service)
                        ? 'bg-[#7621B0] border-[#7621B0] text-white'
                        : 'bg-transparent border-[#0C0C0C]/30 text-[#0C0C0C] hover:border-[#7621B0] hover:text-[#7621B0]'
                    }`}
                  >
                    {service}
                  </motion.button>
                ))}
              </div>
            </div>

          {/* Form — compact rows */}
          <FadeIn delay={0.1} y={25}>
            <form ref={formRef} onSubmit={handleSubmit}>
              {[
                { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
                { label: 'Email', name: 'email', type: 'email', placeholder: 'you@example.com' },
                { label: 'Subject', name: 'subject', type: 'text', placeholder: 'Project collaboration, freelance...' },
              ].map((field) => (
                <div
                  key={field.name}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 md:gap-12 py-6 sm:py-7"
                  style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.12)' }}
                >
                  <label
                    className="text-[#0C0C0C] font-black flex-shrink-0 uppercase"
                    style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2rem)', minWidth: '160px' }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formState[field.name as keyof typeof formState]}
                    onChange={handleChange}
                    required
                    className="flex-1 bg-transparent text-[#0C0C0C] font-light text-base sm:text-lg py-1 outline-none placeholder:text-[#0C0C0C]/20 border-none"
                  />
                </div>
              ))}

              {/* Message */}
              <div
                className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 md:gap-12 py-6 sm:py-7"
                style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.12)' }}
              >
                <label
                  className="text-[#0C0C0C] font-black flex-shrink-0 uppercase pt-1"
                  style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2rem)', minWidth: '160px' }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="flex-1 bg-transparent text-[#0C0C0C] font-light text-base sm:text-lg py-1 outline-none placeholder:text-[#0C0C0C]/20 border-none resize-none"
                />
              </div>

              {/* Submit */}
              <div className="py-7 sm:py-8">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, backgroundColor: '#7621B0', borderColor: '#7621B0' }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full flex items-center justify-center gap-3 px-10 sm:px-12 py-3.5 sm:py-4 text-[#0C0C0C] font-semibold uppercase tracking-widest text-xs sm:text-sm cursor-pointer border-2 border-[#0C0C0C] bg-transparent hover:text-white transition-colors duration-300"
                >
                  {submitted ? (
                    '✓ Sent!'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </FadeIn>

          {/* Socials row */}
          <FadeIn delay={0.2} y={20}>
            <div className="flex flex-wrap items-center gap-x-1 mt-4 sm:mt-6"
              style={{ borderTop: '1px solid rgba(12, 12, 12, 0.12)' }}
            >
              {SOCIALS.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onMouseEnter={() => setHoveredSocial(i)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className="flex items-center gap-2.5 py-5 sm:py-6 pr-6 sm:pr-8 cursor-pointer"
                  animate={{
                    color: hoveredSocial === i ? '#7621B0' : '#0C0C0C',
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 opacity-60" />
                  <span className="font-medium uppercase tracking-wider text-xs sm:text-sm">
                    {social.name}
                  </span>
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-40" />
                </motion.a>
              ))}
            </div>
          </FadeIn>

          {/* Bottom info — compact row */}
          <FadeIn delay={0.25} y={15}>
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-8 py-6 sm:py-8"
              style={{ borderTop: '1px solid rgba(12, 12, 12, 0.12)' }}
            >
              <a
                href="mailto:krushnasaruk1234@gmail.com"
                className="text-[#0C0C0C] font-medium text-sm sm:text-base hover:text-[#7621B0] transition-colors duration-200"
              >
                krushnasaruk1234@gmail.com
              </a>
              <p className="text-[#0C0C0C]/50 font-medium text-sm sm:text-base">India</p>
              <p className="text-[#0C0C0C] font-medium text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for work
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
