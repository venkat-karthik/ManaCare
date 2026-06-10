'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { Phone, MessageCircle, Mail, MapPin, Check } from 'lucide-react'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Reveal } from '@/lib/useReveal'

function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', city: '', serviceInterest: '', message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const service = searchParams.get('service') || ''
    const plan = searchParams.get('plan') || ''
    let prefilledMessage = ''
    if (service) prefilledMessage = `I am interested in learning more about your ${service.replace('-', ' ')} services.`
    else if (plan) prefilledMessage = `I would like to enquire about getting started with the ${plan.replace('-', ' ')} plan.`
    setFormData(prev => ({ ...prev, serviceInterest: service || plan || '', message: prefilledMessage }))
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', city: '', serviceInterest: '', message: '' })
  }

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-white via-white to-secondary/10 rounded-[28px] p-8 md:p-10 border-2 border-primary/20 flex flex-col items-center justify-center text-center space-y-6 shadow-md min-h-[440px] animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-30" />
          <Check size={32} strokeWidth={3} />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold font-serif text-navy">Request Received!</h3>
          <p className="text-sm text-dark/75 font-semibold leading-relaxed max-w-sm">
            Thank you! Your request has been logged. Our care advisor will contact you via phone or WhatsApp within 2 hours.
          </p>
        </div>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white via-white to-secondary/10 rounded-[28px] p-8 md:p-10 border-2 border-primary/20 space-y-6 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300">
      <div className="space-y-1.5">
        <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-display inline-block">Message Form</span>
        <h3 className="text-2xl font-bold font-serif text-navy">Send us a Message</h3>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-dark/80 uppercase tracking-wider font-display">Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required
            className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-secondary/30 font-medium transition-all duration-200 placeholder:text-gray-400 hover:border-primary/30" />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-dark/80 uppercase tracking-wider font-display">WhatsApp / Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Include country code" required
            className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-secondary/30 font-medium transition-all duration-200 placeholder:text-gray-400 hover:border-primary/30" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-dark/80 uppercase tracking-wider font-display">Email Address</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required
          className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-secondary/30 font-medium transition-all duration-200 placeholder:text-gray-400 hover:border-primary/30" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-dark/80 uppercase tracking-wider font-display">Select Service Area</label>
          <select name="city" value={formData.city} onChange={handleChange} required
            className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-secondary/30 font-medium transition-all duration-200 hover:border-primary/30">
            <option value="">Select a city</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="vijayawada">Vijayawada</option>
            <option value="visakhapatnam">Visakhapatnam</option>
            <option value="tirupati">Tirupati</option>
            <option value="guntur">Guntur</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-dark/80 uppercase tracking-wider font-display">Subject of Interest</label>
          <input type="text" name="serviceInterest" value={formData.serviceInterest} onChange={handleChange}
            placeholder="e.g. Parent Care, Servostay"
            className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-secondary/30 font-medium transition-all duration-200 placeholder:text-gray-400 hover:border-primary/30" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-dark/80 uppercase tracking-wider font-display">Tell us about your family needs</label>
        <textarea name="message" value={formData.message} onChange={handleChange}
          placeholder="Describe how we can support your parents or manage your properties in India..."
          rows={4}
          className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-secondary/30 font-medium transition-all duration-200 placeholder:text-gray-400 resize-none hover:border-primary/30" />
      </div>

      <button type="submit"
        className="w-full bg-gradient-to-r from-primary to-primary-hover text-white py-3 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer font-display">
        Submit Consultation Request
      </button>
    </form>
  )
}

export default function ContactPage() {
  const contactChannels = [
    { icon: Phone, title: 'Call Support', desc: 'Mon - Sat, 9 AM - 6 PM IST', val: '+91 91234 56789' },
    { icon: MessageCircle, title: 'WhatsApp Chat', desc: '24/7 Support Channel', val: '+91 91234 56789' },
    { icon: Mail, title: 'Email Correspondence', desc: 'General & Support queries', val: 'support@manacare.com' },
    { icon: MapPin, title: 'Main Operations Hub', desc: 'Hyderabad, AP & Telangana', val: 'Visit by appointment' }
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-24">
        {/* HEADER */}
        <section className="relative bg-[#0F172A] bg-gradient-to-b from-[#0F172A] via-[#0d1f17] to-[#0F172A] py-20 md:py-24 px-6 sm:px-10 lg:px-12 border-b border-white/5 text-center space-y-4 overflow-hidden select-none">
          {/* Ambient glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 700, height: 700,
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              background: '#1B5E43',
              opacity: 0.08,
              filter: 'blur(140px)',
            }}
          />

          {/* Subtle grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="grid-contact" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <line x1="60" y1="0" x2="60" y2="60" stroke="#1B5E43" strokeWidth="1" />
                <line x1="0" y1="60" x2="60" y2="60" stroke="#1B5E43" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-contact)" />
          </svg>

          <div className="relative z-10 space-y-4">
            <Reveal from="bottom">
              <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase font-display inline-block">Contact Us</span>
            </Reveal>
            <Reveal from="bottom" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
                Get In Touch With Our Team <br />
                <span className="text-accent font-normal italic mt-2 block">We Are Here to Support Your Family.</span>
              </h1>
            </Reveal>
            <Reveal from="bottom" delay={0.2}>
              <p className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed font-medium">
                Ready to give your family the professional care they deserve? Reach out below to speak directly to our care advisor.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FORM & DETAILS */}
        <section className="py-20 px-6 sm:px-10 lg:px-12 bg-gradient-to-b from-white via-secondary/5 to-white">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-start">

            {/* Left Column */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal from="left">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-display inline-block">Reach Out</span>
                  <h2 className="text-3xl font-bold font-serif text-navy leading-tight">Contact Information</h2>
                  <p className="text-dark/70 text-sm leading-relaxed font-light">
                    Choose your preferred channel of contact. Our team regularly coordinates consultations via Zoom or WhatsApp to accommodate international time differences.
                  </p>
                </div>
              </Reveal>

              {/* Channels */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactChannels.map((chan, idx) => {
                  const Icon = chan.icon
                  return (
                    <Reveal key={idx} from="left" delay={0.1 + idx * 0.08}>
                      <div className="group bg-gradient-to-br from-primary/6 to-primary/2 p-5 border-2 border-primary/15 rounded-[24px] space-y-3 hover:border-primary/40 hover:bg-gradient-to-br hover:from-primary/12 hover:to-primary/6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                        <div className="w-10 h-10 bg-white rounded-[14px] flex items-center justify-center border-2 border-primary/20 text-accent group-hover:scale-110 group-hover:border-accent group-hover:shadow-sm transition-all duration-300">
                          <Icon size={18} strokeWidth={1.5} />
                        </div>
                        <div className="min-h-[90px] flex flex-col justify-between">
                          <div>
                            <h4 className="font-bold text-navy text-[11px] uppercase tracking-widest font-display leading-tight">{chan.title}</h4>
                            <p className="text-[12px] text-dark/60 mt-1.5 font-light">{chan.desc}</p>
                          </div>
                          <p className="text-sm font-bold text-primary pt-2 group-hover:text-primary-hover transition-colors duration-300">{chan.val}</p>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>

              {/* Trust checklist */}
              <Reveal from="left" delay={0.45}>
                <div className="group bg-gradient-to-br from-primary via-primary/98 to-primary/95 text-white p-6 rounded-[28px] space-y-4 shadow-md border border-primary/70 hover:shadow-lg hover:border-primary/90 transition-all duration-300">
                  <h4 className="font-bold font-display text-xs uppercase tracking-widest text-accent">Why Contact Us?</h4>
                  <ul className="space-y-3 text-xs font-medium">
                    {[
                      'Free detailed initial consultation (no obligation)',
                      'Bespoke care assessment generated in 24 hours',
                      'Direct phone line with assigned Local Care Manager'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5 border border-accent/30 group-hover:bg-accent/30 transition-all duration-300">
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <span className="leading-relaxed pt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Right Column */}
            <Reveal from="right" delay={0.15} className="lg:col-span-7">
              <Suspense fallback={<div className="text-center py-12 text-sm font-medium text-dark/50 font-display">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </Reveal>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
