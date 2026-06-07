'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { Check, Calendar, MapPin, Key, ShieldCheck, HeartHandshake, PhoneCall, ExternalLink, ArrowRight } from 'lucide-react'
import { useState } from 'react'

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Servostay enquiry:', formData)
    alert('Thank you for your Servostay enquiry! A booking assistant will contact you within 24 hours to present accommodation options.')
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

      <main className="flex-grow">
        {/* HERO HEADER */}
        <section className="bg-gradient-to-r from-primary/5 via-primary/3 to-white py-20 md:py-24 px-6 sm:px-10 lg:px-12 border-b border-primary/10 text-center space-y-5">
          <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Sister Business Integration</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-navy tracking-tight leading-tight">
            Premium Serviced Suites by <span className="text-primary font-normal italic">Servostay.</span>
          </h1>
          <p className="text-dark/80 text-base max-w-2xl mx-auto leading-relaxed font-medium">
            In partnership with Servostay, we offer NRI families transition homes, extended stays, and corporate accommodation packages in India. Secure, vetted, and fully serviced.
          </p>

          <div className="pt-2 flex justify-center gap-4">
            <a
              href="https://servostay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-7 py-3.5 rounded-full hover:bg-primary-hover transition-all text-xs font-bold uppercase tracking-wider shadow-sm inline-flex items-center gap-2"
            >
              <span>Visit Servostay.com</span>
              <ExternalLink size={14} />
            </a>
            <a
              href="#enquiry-form"
              className="border border-primary text-primary px-7 py-3.5 rounded-full hover:bg-secondary transition-all text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span>Request Booking Quote</span>
              <ArrowRight size={14} className="rotate-90" />
            </a>
          </div>
        </section>

        {/* FEATURED COVER PHOTO SECTION */}
        <section className="py-16 px-6 sm:px-10 lg:px-12">
          <div className="max-w-6xl mx-auto rounded-[40px] overflow-hidden border border-light-gray relative h-96 md:h-[450px] shadow-lg group">
            <img
              src="/assets/servostay_room.png"
              alt="Servostay Apartment Room"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
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
                <div key={idx} className="bg-primary/5 border border-primary/10 rounded-[32px] p-8 flex gap-5 items-start hover:border-primary/20 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-[20px] flex items-center justify-center border border-light-gray text-accent shrink-0">
                    <Icon size={22} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold font-serif text-navy text-lg">{feat.title}</h3>
                    <p className="text-sm text-dark/80 leading-relaxed">{feat.desc}</p>
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

            {/* Right Column (Form) */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white p-8 md:p-10 rounded-[36px] border border-light-gray space-y-5 shadow-sm">
              <h3 className="text-xl font-bold font-serif text-navy">Book or Enquire About a Stay</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-dark/80">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2 text-sm border border-light-gray rounded-lg focus:outline-none focus:border-primary bg-secondary/20"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-dark/80">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="WhatsApp/Phone contact"
                    className="w-full px-4 py-2 text-sm border border-light-gray rounded-lg focus:outline-none focus:border-primary bg-secondary/20"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-dark/80">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                  className="w-full px-4 py-2 text-sm border border-light-gray rounded-lg focus:outline-none focus:border-primary bg-secondary/20"
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-dark/80">City Visiting</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 text-sm border border-light-gray rounded-lg focus:outline-none focus:border-primary bg-secondary/20"
                  >
                    <option value="">Select city</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="bengaluru">Bengaluru</option>
                    <option value="visakhapatnam">Visakhapatnam</option>
                    <option value="tirupati">Tirupati</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-dark/80">Stay Duration</label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 2 weeks, 1 month"
                    className="w-full px-4 py-2 text-sm border border-light-gray rounded-lg focus:outline-none focus:border-primary bg-secondary/20"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-dark/80">Accommodation Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 text-sm border border-light-gray rounded-lg focus:outline-none focus:border-primary bg-secondary/20"
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
                <label className="text-xs font-semibold text-dark/80">Expected Travel Dates & Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Expected dates of travel, airport pickup request, or specific area preferences..."
                  rows={3}
                  className="w-full px-4 py-2 text-sm border border-light-gray rounded-lg focus:outline-none focus:border-primary bg-secondary/20"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3.5 rounded-full hover:bg-primary-hover transition-all text-xs font-bold uppercase tracking-wider shadow-sm mt-2 cursor-pointer"
              >
                Submit Booking Enquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
