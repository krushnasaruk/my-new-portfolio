import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import { Send, Mail, MapPin, Phone, ArrowUpRight, Sparkles, Github, Linkedin, Instagram, Twitter } from 'lucide-react'

const SOCIALS = [
  { name: 'GitHub', href: 'https://github.com/krushnasaruk', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/krushnasaruk', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter / X', href: '#', icon: Twitter },
]

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormState({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section
      id="contact"
      className="relative font-kanit overflow-hidden bg-[#0C0C0C]"
    >
      <div className="relative px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40">
        {/* Heading area */}
        <div className="relative z-10 text-center mb-16 sm:mb-20 md:mb-28">
          <FadeIn delay={0} y={40}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-[#5F69F8]" />
              <span className="text-[#5F69F8] font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm">
                Get in Touch
              </span>
              <Sparkles className="w-5 h-5 text-[#5F69F8]" />
            </div>
          </FadeIn>

          <FadeIn delay={0.05} y={40}>
            <h2
              className="hero-heading font-black uppercase mb-6 sm:mb-8"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Contact
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} y={20}>
            <p className="text-[#D7E2EA]/50 font-light max-w-[520px] mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
              Have a project idea, want to collaborate, or just want to say hello?
              Let&apos;s connect and design something exceptional.
            </p>
          </FadeIn>
        </div>

        {/* Main content grid */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-14">
          {/* Left column — Form (3/5 width) */}
          <FadeIn delay={0.2} y={30} className="lg:col-span-3">
            <div className="rounded-[30px] sm:rounded-[40px] border border-[#D7E2EA]/10 bg-[#111113]/80 backdrop-blur-sm p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-[#5F69F8] animate-pulse" />
                <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-[0.2em] font-medium">
                  Send a Message
                </span>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {(['name', 'email'] as const).map((field) => (
                    <div key={field} className="relative">
                      <label className="block text-[#D7E2EA]/30 text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">
                        {field === 'name' ? 'Your Name' : 'Email Address'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        placeholder={field === 'name' ? 'Krushna Saruk' : 'you@example.com'}
                        value={formState[field]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-[#0C0C0C]/60 border border-[#D7E2EA]/10 rounded-xl text-[#D7E2EA] font-light text-sm sm:text-base py-3.5 px-4 outline-none placeholder:text-[#D7E2EA]/20 focus:border-[#5F69F8]/60 transition-all duration-300"
                      />
                      {focusedField === field && (
                        <motion.div
                          layoutId="input-glow"
                          className="absolute -inset-[1px] rounded-xl pointer-events-none"
                          style={{
                            boxShadow: '0 0 20px rgba(95, 105, 248, 0.15), 0 0 40px rgba(95, 105, 248, 0.08)',
                          }}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Subject */}
                <div className="relative">
                  <label className="block text-[#D7E2EA]/30 text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project collaboration, freelance work..."
                    value={formState.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full bg-[#0C0C0C]/60 border border-[#D7E2EA]/10 rounded-xl text-[#D7E2EA] font-light text-sm sm:text-base py-3.5 px-4 outline-none placeholder:text-[#D7E2EA]/20 focus:border-[#5F69F8]/60 transition-all duration-300"
                  />
                  {focusedField === 'subject' && (
                    <motion.div
                      layoutId="input-glow"
                      className="absolute -inset-[1px] rounded-xl pointer-events-none"
                      style={{
                        boxShadow: '0 0 20px rgba(95, 105, 248, 0.15), 0 0 40px rgba(95, 105, 248, 0.08)',
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="block text-[#D7E2EA]/30 text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your idea, timeline, and budget..."
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="w-full bg-[#0C0C0C]/60 border border-[#D7E2EA]/10 rounded-xl text-[#D7E2EA] font-light text-sm sm:text-base py-3.5 px-4 outline-none placeholder:text-[#D7E2EA]/20 focus:border-[#5F69F8]/60 transition-all duration-300 resize-none"
                  />
                  {focusedField === 'message' && (
                    <motion.div
                      layoutId="input-glow"
                      className="absolute -inset-[1px] rounded-xl pointer-events-none"
                      style={{
                        boxShadow: '0 0 20px rgba(95, 105, 248, 0.15), 0 0 40px rgba(95, 105, 248, 0.08)',
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(95, 105, 248, 0.6)' }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-2 w-full sm:w-auto sm:self-start rounded-full flex items-center justify-center gap-3 px-10 py-4 text-[#D7E2EA] font-semibold uppercase tracking-widest text-sm cursor-pointer border border-[#5F69F8]/20 bg-[#111113] hover:bg-[#18181F] transition-all duration-300 shadow-lg shadow-[#5F69F8]/5 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-[#5F69F8]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 flex items-center gap-3">
                    {submitted ? (
                      '✓ Message Sent!'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 text-[#5F69F8]" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </FadeIn>

          {/* Right column — Info cards + Socials (2/5 width) */}
          <FadeIn delay={0.3} y={30} className="lg:col-span-2">
            <div className="flex flex-col gap-5">
              {/* Info cards */}
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'krushnasaruk1234@gmail.com',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: 'Available on request',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'India',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2, borderColor: 'rgba(95, 105, 248, 0.3)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="rounded-2xl border border-[#D7E2EA]/10 bg-[#111113]/80 backdrop-blur-sm p-5 sm:p-6 flex items-center gap-4 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#5F69F8]/10">
                    <item.icon className="w-5 h-5 text-[#5F69F8]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[#D7E2EA]/35 text-[10px] uppercase tracking-[0.2em] mb-0.5 font-medium">
                      {item.label}
                    </div>
                    <div className="text-[#D7E2EA] font-medium text-sm sm:text-base truncate">
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Socials card */}
              <div className="rounded-2xl border border-[#D7E2EA]/10 bg-[#111113]/80 backdrop-blur-sm p-5 sm:p-6 mt-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[#D7E2EA]/35 text-[10px] uppercase tracking-[0.2em] font-medium">
                    Available for Work
                  </span>
                </div>

                <div className="flex flex-col">
                  {SOCIALS.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ x: 6 }}
                      className="group flex items-center justify-between py-3 border-b border-[#D7E2EA]/5 last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <social.icon className="w-4 h-4 text-[#D7E2EA]/60 group-hover:text-[#5F69F8] transition-colors duration-200" />
                        <span className="text-[#D7E2EA]/80 font-medium text-xs sm:text-sm uppercase tracking-wider group-hover:text-[#5F69F8] transition-colors duration-200">
                          {social.name}
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D7E2EA]/20 group-hover:text-[#5F69F8] transition-all duration-200" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick CTA */}
              <div
                className="rounded-2xl p-6 text-center border border-[#5F69F8]/25"
                style={{
                  background: 'linear-gradient(135deg, rgba(95, 105, 248, 0.08) 0%, rgba(95, 105, 248, 0.03) 100%)',
                }}
              >
                <p className="text-[#D7E2EA]/60 font-light text-sm leading-relaxed mb-1">
                  Prefer a quick chat?
                </p>
                <p className="text-[#D7E2EA] font-semibold text-sm hover:text-[#5F69F8] transition-colors duration-200 cursor-pointer">
                  Schedule a 15-min call →
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
