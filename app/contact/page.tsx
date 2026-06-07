'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { Phone, MessageCircle, Mail, MapPin, Check } from 'lucide-react'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    serviceInterest: '',
    message: '',
  })

  useEffect(() => {
    const service = searchParams.get('service') || ''
    const plan = searchParams.get('plan') || ''

    let prefilledMessage = ''
    if (service) {
      prefilledMessage = `I am interested in learning more about your ${service.replace('-', ' ')} services.`
    } else if (plan) {
      prefilledMessage = `I would like to enquire about getting started with the ${plan.replace('-', ' ')} plan.`
    }

    setFormData(prev => ({
      ...prev,
      serviceInterest: service || plan || '',
      message: prefilledMessage
    }))
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Lead submitted:', formData)
    alert('Thank you! Your request has been logged. Our care advisor will contact you via phone or WhatsApp within 2 hours.')
    setFormData({ name: '', email: '', phone: '', city: '', serviceInterest: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-[36px] p-8 md:p-10 border border-light-gray space-y-5 shadow-sm">
      <h3 className="text-xl font-bold font-serif text-navy">Send us a Message</h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-dark/80 uppercase tracking-wider">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full px-4 py-2.5 text-xs border border-light-gray rounded-xl focus:outline-none focus:border-primary bg-secondary/20 font-semibold"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-dark/80 uppercase tracking-wider">WhatsApp / Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Include country code"
            required
            className="w-full px-4 py-2.5 text-xs border border-light-gray rounded-xl focus:outline-none focus:border-primary bg-secondary/20 font-semibold"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-dark/80 uppercase tracking-wider">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          className="w-full px-4 py-2.5 text-xs border border-light-gray rounded-xl focus:outline-none focus:border-primary bg-secondary/20 font-semibold"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-dark/80 uppercase tracking-wider">Select Service Area</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 text-xs border border-light-gray rounded-xl focus:outline-none focus:border-primary bg-secondary/20 font-semibold"
          >
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
          <label className="text-xs font-bold text-dark/80 uppercase tracking-wider">Subject of Interest</label>
          <input
            type="text"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            placeholder="e.g. Parent Care, Servostay, Custom"
            className="w-full px-4 py-2.5 text-xs border border-light-gray rounded-xl focus:outline-none focus:border-primary bg-secondary/20 font-semibold"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-dark/80 uppercase tracking-wider">Tell us about your family needs</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe how we can support your parents or manage your properties in India..."
          rows={4}
          className="w-full px-4 py-2.5 text-xs border border-light-gray rounded-xl focus:outline-none focus:border-primary bg-secondary/20 font-semibold"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-3.5 rounded-full hover:bg-primary-hover transition-all text-xs font-bold uppercase tracking-wider shadow-sm mt-2 cursor-pointer"
      >
        Submit Consultation Request
      </button>
    </form>
  )
}

export default function ContactPage() {
  const contactChannels = [
    {
      icon: Phone,
      title: 'Call Support',
      desc: 'Mon - Sat, 9 AM - 6 PM IST',
      val: '+91 91234 56789'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      desc: '24/7 Support Channel',
      val: '+91 91234 56789'
    },
    {
      icon: Mail,
      title: 'Email Correspondence',
      desc: 'General & Support queries',
      val: 'support@manacare.com'
    },
    {
      icon: MapPin,
      title: 'Main Operations Hub',
      desc: 'Hyderabad, AP & Telangana',
      val: 'Visit by appointment'
    }
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* HEADER */}
        <section className="bg-gradient-to-r from-primary/5 via-primary/3 to-white py-20 md:py-24 px-6 sm:px-10 lg:px-12 border-b border-primary/10 text-center space-y-4">
          <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-navy tracking-tight">
            Get In Touch With Our Team <br />
            <span className="text-primary font-normal italic">We Are Here to Support Your Family.</span>
          </h1>
          <p className="text-dark/80 text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Ready to give your family the professional care they deserve? Reach out below to speak directly to our care advisor.
          </p>
        </section>

        {/* FORM & DETAILS */}
        <section className="py-24 px-6 sm:px-10 lg:px-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-start">

            {/* Left Column (Channels & Trust) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Reach Out</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy">Contact Information</h2>
                <p className="text-dark/80 text-sm leading-relaxed font-semibold">
                  Choose your preferred channel of contact. Our team regularly coordinates consultations via Zoom or WhatsApp to accommodate international time differences.
                </p>
              </div>

              {/* Channels */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactChannels.map((chan, idx) => {
                  const Icon = chan.icon
                  return (
                    <div key={idx} className="bg-primary/5 p-5 border border-primary/10 rounded-[28px] space-y-3 hover:border-primary/20 transition-all">
                      <div className="w-10 h-10 bg-white rounded-[16px] flex items-center justify-center border border-light-gray text-accent">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy text-[10px] uppercase tracking-widest font-serif">{chan.title}</h4>
                        <p className="text-[10px] text-dark/70 mt-0.5 font-semibold">{chan.desc}</p>
                        <p className="text-xs font-bold text-primary mt-1.5">{chan.val}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Trust checklist */}
              <div className="bg-primary text-white p-6 rounded-[32px] space-y-3.5">
                <h4 className="font-bold font-serif text-xs uppercase tracking-widest text-accent">Why Contact Us?</h4>
                <ul className="space-y-2.5 text-xs font-semibold">
                  <li className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span>Free detailed initial consultation (no obligation)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span>Bespoke care assessment generated in 24 hours</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span>Direct phone line with assigned Local Care Manager</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="text-center py-8 text-xs font-semibold text-dark/50">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
