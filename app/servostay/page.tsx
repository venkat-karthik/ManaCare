'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { Check, Calendar, MapPin, Key, ShieldCheck, HeartHandshake, PhoneCall, ExternalLink, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/lib/useReveal'

export default function ServostayPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    dates: '',
    duration: '',
    type: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', city: '', dates: '', duration: '', type: '', message: '' })
  }

  const features = [
    {
      icon: Key,
      title: 'Premium Serviced Suites',
      desc: 'Fully furnished apartments ranging from 1 BHK to 5 BHK configurations. Equipped with operational private kitchens, separate living rooms, high-speed WiFi, laundry services, and air conditioning.'
    },
    {
      icon: HeartHandshake,
      title: 'Airport Handover & Transit Support',
      desc: 'Dedicated chauffeur meeting service at airport arrivals, help with luggage, and direct transfer to your Servostay apartment so you and your family travel with absolute comfort.'
    },
    {
      icon: MapPin,
      title: 'Strategic Indian Locations',
      desc: 'Properties situated in prime residential and corporate hubs across Hyderabad, Bengaluru, Visakhapatnam, and Tirupati. Safe gated communities with 24/7 security staff.'
    },
    {
      icon: PhoneCall,
      title: 'Custom Stay & Errand Logistics',
      desc: 'Assigned on-stay Care Coordinator who arranges local transport/drivers, domestic helpers, pre-stocked custom groceries, and direct line emergency medical setup.'
    }
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-24">
        {/* HERO HEADER */}
        <section className="relative bg-[#0F172A] bg-gradient-to-b from-[#0F172A] via-[#0d1f17] to-[#0F172A] py-20 md:py-24 px-6 sm:px-10 lg:px-12 border-b border-white/5 text-center space-y-5 overflow-hidden select-none">
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
              <pattern id="grid-servostay" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <line x1="60" y1="0" x2="60" y2="60" stroke="#1B5E43" strokeWidth="1" />
                <line x1="0" y1="60" x2="60" y2="60" stroke="#1B5E43" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-servostay)" />
          </svg>

          <div className="relative z-10 space-y-5 flex flex-col items-center">
            <Reveal from="bottom">
              <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase font-serif">Sister Business Integration</span>
            </Reveal>
            <Reveal from="bottom" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
                Premium Serviced Suites by <span className="text-accent font-normal italic mt-2 block sm:inline sm:mt-0">Servostay.</span>
              </h1>
            </Reveal>
            <Reveal from="bottom" delay={0.2}>
              <p className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed font-medium">
                In partnership with Servostay, we offer NRI families transition homes, extended stays, and corporate accommodation packages in India. Secure, vetted, and fully serviced.
              </p>
            </Reveal>

            <Reveal from="bottom" delay={0.3} className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="https://servostay.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-7 py-3.5 rounded-full hover:bg-accent/90 transition-all text-xs font-bold uppercase tracking-wider shadow-lg shadow-accent/20 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Visit Servostay.in</span>
                <ExternalLink size={14} />
              </a>
              <a
                href="#enquiry-form"
                className="border border-white/20 text-white px-7 py-3.5 rounded-full hover:bg-white/10 hover:border-white/40 transition-all text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Request Booking Quote</span>
                <ArrowRight size={14} className="rotate-95 text-accent" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* FEATURED COVER PHOTO SECTION */}
        <section className="py-16 px-6 sm:px-10 lg:px-12">
          <div className="max-w-6xl mx-auto rounded-[40px] overflow-hidden border border-light-gray relative h-[340px] sm:h-80 md:h-[450px] shadow-lg group">
            <img
              src="/assets/servostay_room.png"
              alt="Servostay Apartment Room"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 text-white space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-accent font-serif bg-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
                Luxury Living
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">A True Home Away From Home</h2>
              <p className="text-xs md:text-sm text-white/80 max-w-xl">
                Unlike cramped hotel rooms, Servostay provides large private living spaces and equipped kitchens where your family can settle in comfortably.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-16 px-6 sm:px-10 lg:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {features.map((feat, idx) => {
              const Icon = feat.icon
              return (
                <div key={idx} className="group relative bg-gradient-to-br from-primary/6 to-primary/2 p-8 rounded-[32px] border-2 border-primary/15 flex gap-5 items-start overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-lg hover:scale-105">
                  {/* Shiny overlay effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                  </div>
                  
                  {/* Background shimmer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
                  </div>

                  {/* Icon container */}
                  <div className="w-14 h-14 bg-white rounded-[20px] flex items-center justify-center border-2 border-primary/15 text-accent shrink-0 group-hover:from-primary/20 group-hover:to-accent/20 group-hover:border-accent group-hover:scale-110 group-hover:shadow-md transition-all duration-300 relative z-10">
                    <Icon size={24} strokeWidth={1.5} className="group-hover:text-primary transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2 relative z-10">
                    <h3 className="font-bold font-serif text-navy text-lg group-hover:text-primary transition-colors duration-300">{feat.title}</h3>
                    <p className="text-sm text-dark/75 leading-relaxed font-light group-hover:text-dark transition-colors duration-300">{feat.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* MEMBER BENEFITS & ENQUIRY FORM */}
        <section id="enquiry-form" className="py-24 bg-primary/5 border-y border-primary/10 px-6 sm:px-10 lg:px-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (Benefits) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Exclusive Benefits</span>
                <h2 className="text-3xl font-bold font-serif text-navy leading-tight">Exclusive Perks for ManaCare Members</h2>
                <p className="text-dark/80 text-sm leading-relaxed">
                  If you are currently subscribed to a ManaCare Parent Care plan, you receive additional benefits for your travels:
                </p>
              </div>

              <div className="space-y-4">
                {[
                  '15% Discount on all Servostay suites',
                  'Priority booking windows during peak NRI holiday seasons (Nov - Jan)',
                  'Complimentary airport pickup service coordination',
                  'Zero deposit requirement for verified active members',
                  'Free initial groceries and pantry stocking before arrival'
                ].map((perk, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-dark/95 font-semibold leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-5 rounded-[28px] border border-light-gray flex items-center gap-3 shadow-xs">
                <ShieldCheck size={24} className="text-primary shrink-0" />
                <p className="text-xs text-dark/85 font-semibold">
                  All Servostay properties are personally inspected and safety-audited by ManaCare staff.
                </p>
              </div>
            </div>

            {/* Right Column (Form / Success Screen) */}
            {isSubmitted ? (
              <div className="lg:col-span-7 bg-gradient-to-br from-white via-white to-secondary/10 p-8 md:p-10 rounded-[32px] border-2 border-primary/20 flex flex-col items-center justify-center text-center space-y-6 shadow-md min-h-[440px] animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-30" />
                  <Check size={32} strokeWidth={3} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-serif text-navy">Enquiry Submitted!</h3>
                  <p className="text-sm text-dark/75 font-semibold leading-relaxed max-w-md">
                    Thank you for your Servostay enquiry! A booking assistant will contact you within 24 hours to present accommodation options.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="lg:col-span-7 bg-gradient-to-br from-white via-white to-secondary/10 p-8 md:p-10 rounded-[32px] border-2 border-primary/20 space-y-6 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-display inline-block">Booking Form</span>
                  <h3 className="text-2xl font-bold font-serif text-navy">Book or Enquire About a Stay</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-dark/80 uppercase tracking-wider font-display">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-secondary/30 font-medium transition-all duration-200 placeholder:text-gray-400 hover:border-primary/30"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-dark/80 uppercase tracking-wider font-display">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="WhatsApp/Phone contact"
                      className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-secondary/30 font-medium transition-all duration-200 placeholder:text-gray-400 hover:border-primary/30"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-dark/80 uppercase tracking-wider font-display">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                    className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-secondary/30 font-medium transition-all duration-200 placeholder:text-gray-400 hover:border-primary/30"
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-dark/80 uppercase tracking-wider font-display">City Visiting</label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-secondary/30 font-medium transition-all duration-200 hover:border-primary/30"
                    >
                      <option value="">Select city</option>
                      <option value="guntur">Guntur</option>
                      <option value="vijayawada">Vijayawada</option>
                      <option value="bapatla">Bapatla</option>
                      <option value="ongole">Ongole</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-dark/80 uppercase tracking-wider font-display">Stay Duration</label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 2 weeks, 1 month"
                      className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-secondary/30 font-medium transition-all duration-200 placeholder:text-gray-400 hover:border-primary/30"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-dark/80 uppercase tracking-wider font-display">Accommodation Type</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-secondary/30 font-medium transition-all duration-200 hover:border-primary/30"
                    >
                      <option value="">Select type</option>
                      <option value="serviced-apartment">Serviced Apartment</option>
                      <option value="family-suite">Family Suite</option>
                      <option value="villa">Bungalow/Villa</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-dark/80 uppercase tracking-wider font-display">Expected Travel Dates & Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Expected dates of travel, airport pickup request, or specific area preferences..."
                    rows={4}
                    className="w-full px-4 py-2.5 text-sm border-2 border-primary/20 rounded-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-secondary/30 font-medium transition-all duration-200 placeholder:text-gray-400 resize-none hover:border-primary/30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-hover text-white py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer font-display"
                >
                  Submit Booking Enquiry
                </button>
              </form>
            )
          }
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
