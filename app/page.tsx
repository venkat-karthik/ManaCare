'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { PremiumSlideshow } from '@/components/sections/PremiumSlideshow'
import Link from 'next/link'
import { Heart, Home, AlertCircle, Users, Shield, Check, CheckCircle2, ArrowRight, Quote, Phone, MessageCircle, Mail, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Consultation requested:', formData)
    alert('Thank you! We will get in touch with you shortly.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* PREMIUM SLIDESHOW HERO */}
        <PremiumSlideshow />

        {/* INFO SECTION BELOW SLIDESHOW */}
        <section className="py-16 md:py-20 px-6 sm:px-10 lg:px-12 bg-white border-b border-light-gray">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
              {/* Left Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Your Peace of Mind, Closer to Home</span>
                  <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy leading-tight">
                    Comprehensive Care Management for NRI Families
                  </h2>
                  <p className="text-dark/80 text-sm leading-relaxed max-w-lg font-semibold">
                    A dedicated 1-on-1 Care Manager coordinates your parents' wellness, health management, and property oversight with absolute transparency.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="bg-primary text-white text-center px-6 py-3.5 rounded-full hover:bg-primary-hover transition-all text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Book Free Consultation
                  </Link>
                  <Link
                    href="/services"
                    className="border border-primary text-primary text-center px-6 py-3.5 rounded-full hover:bg-secondary transition-all text-xs font-bold uppercase tracking-wider"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              {/* Right Trust Pillars */}
              <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-secondary/30 rounded-[24px] p-4 border border-primary/10">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <CheckCircle2 size={13} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider font-serif">1-on-1 Care Managers</h4>
                    <p className="text-[10px] text-dark/70 mt-1 leading-tight font-semibold">No aggregators. Dedicated personal assistance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-secondary/30 rounded-[24px] p-4 border border-primary/10">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <CheckCircle2 size={13} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider font-serif">Daily WhatsApp Updates</h4>
                    <p className="text-[10px] text-dark/70 mt-1 leading-tight font-semibold">Photos, checklists, and vitals updates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-secondary/30 rounded-[24px] p-4 border border-primary/10">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <CheckCircle2 size={13} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider font-serif">Geriatric Care Protocols</h4>
                    <p className="text-[10px] text-dark/70 mt-1 leading-tight font-semibold">All staff certified in emergency assistance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-secondary/30 rounded-[24px] p-4 border border-primary/10">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <CheckCircle2 size={13} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider font-serif">GPS-Verified Inspections</h4>
                    <p className="text-[10px] text-dark/70 mt-1 leading-tight font-semibold">Full transparency on every site visit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CREATIVE SECTION: HOW IT WORKS */}
        <section className="py-24 px-6 sm:px-10 lg:px-12 bg-secondary/20 border-b border-light-gray">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Seamless Coordination</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy">Setting Up Care in Three Steps</h2>
              <p className="text-dark/80 text-sm leading-relaxed font-semibold">
                We organize complete local assistance so you can monitor everything smoothly from abroad.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Free Initial Consultation',
                  desc: 'Book a consultation online. We schedule a direct call with your family advisor to gather health, location, and property detail requirements.'
                },
                {
                  step: '02',
                  title: 'Home Assessment Visit',
                  desc: 'Our local Care Manager visits your parents in India. We perform a safety check, map nearby clinics, and draft a customized checklist.'
                },
                {
                  step: '03',
                  title: 'Continuous Secure Support',
                  desc: 'Visits begin immediately. You receive real-time updates via WhatsApp, structured monthly portal reports, and a dedicated 24/7 helpline.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-[32px] p-8 border border-light-gray shadow-xs space-y-4 hover:border-primary/20 transition-all duration-300">
                  <span className="font-serif font-bold text-3xl text-primary">{item.step}</span>
                  <h3 className="font-serif font-bold text-navy text-lg">{item.title}</h3>
                  <p className="text-xs text-dark/80 leading-relaxed font-semibold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES PREVIEW */}
        <section className="py-24 px-6 sm:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div className="space-y-3">
                <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">What We Do</span>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy">Professional Care & Asset Oversight</h2>
                <p className="text-dark/85 max-w-xl text-sm leading-relaxed font-semibold">
                  Selectively structured services managed by background-verified professionals in India.
                </p>
              </div>
              <Link href="/services" className="group mt-4 md:mt-0 flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs hover:underline shrink-0">
                <span>View All Services</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: Heart, title: 'Parent Care', desc: 'Wellness check-ins, medicine refills, and daily coordinator logs.' },
                { icon: Users, title: 'Relative Care', desc: 'Extended support for family, siblings, and academic coordination.' },
                { icon: Home, title: 'Property Management', desc: 'Regular audits, utility payments, tenant coordination, and repairs.' },
                { icon: Shield, title: 'Household Assistance', desc: 'Sourcing helpers, domestic safety audits, and appliance repairs.' },
                { icon: AlertCircle, title: 'Emergency Support', desc: 'Dedicated 24/7 response helpline and direct hospital accompaniment.' }
              ].map((srv, idx) => {
                const Icon = srv.icon
                return (
                  <div key={idx} className="bg-white rounded-[28px] p-6 border border-light-gray hover:border-primary/25 hover:shadow-md transition-all flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center border border-light-gray text-accent group-hover:bg-primary group-hover:text-white transition-all">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-bold font-serif text-navy text-base leading-snug">{srv.title}</h3>
                      <p className="text-xs text-dark/80 leading-relaxed font-semibold">{srv.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* PLANS PREVIEW */}
        <section className="py-24 px-6 sm:px-10 lg:px-12 bg-secondary/35 border-t border-light-gray">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div className="space-y-3">
                <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Pricing & Tiers</span>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy">Care Plans Designed for Every Family</h2>
                <p className="text-dark/85 max-w-xl text-sm leading-relaxed font-semibold">
                  Choose a subscription plan that suits your parental and property care needs. Adjust or cancel anytime.
                </p>
              </div>
              <Link href="/plans" className="group mt-4 md:mt-0 flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs hover:underline shrink-0">
                <span>View All Plans</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'Essential Care', price: '₹4,999', desc: 'Basic parent wellness check-ins.', popular: false },
                { name: 'Family Care', price: '₹7,999', desc: 'Regular visits, activity reports, and coordination.', popular: false },
                { name: 'Complete Care', price: '₹11,999', desc: 'Comprehensive parent care and property checks.', popular: false },
                { name: 'NRI Prime', price: '₹16,999', desc: 'Premium multi-family and property services.', popular: true }
              ].map((plan, idx) => (
                <div key={idx} className={`bg-white rounded-[32px] p-8 border transition-all relative flex flex-col justify-between ${
                  plan.popular ? 'border-primary ring-2 ring-primary/20 shadow-md scale-102 lg:scale-100' : 'border-light-gray hover:border-primary/25'
                }`}>
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-bold tracking-wider px-3.5 py-1 rounded-full uppercase font-serif">
                      Most Popular
                    </span>
                  )}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="font-bold font-serif text-navy text-lg">{plan.name}</h3>
                      <p className="text-xs text-dark/75 leading-relaxed font-semibold">{plan.desc}</p>
                    </div>
                    <div className="text-2xl font-bold text-primary font-serif">
                      {plan.price} <span className="text-[10px] text-dark/60 font-sans font-normal uppercase tracking-wider">/ month</span>
                    </div>
                  </div>
                  <Link href="/plans" className={`mt-6 w-full text-center py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    plan.popular ? 'bg-primary text-white hover:bg-primary-hover shadow-sm' : 'border border-primary text-primary hover:bg-secondary'
                  }`}>
                    Choose Plan
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVOSTAY SECTION */}
        <section className="py-24 px-6 sm:px-10 lg:px-12 border-t border-light-gray">
          <div className="max-w-7xl mx-auto bg-secondary/30 rounded-[48px] p-8 md:p-14 border border-primary/5 grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Our Sister Business</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy leading-tight">
                Visiting India? <br />
                We've Got Your Stay Covered with <span className="text-primary font-normal italic">Servostay.</span>
              </h2>
              <p className="text-dark/80 text-sm leading-relaxed max-w-xl font-semibold">
                In partnership with <strong>Servostay</strong>, we arrange fully furnished premium serviced apartments and suites for visiting NRI families in Hyderabad, Bengaluru, Visakhapatnam, and Tirupati. Hassle-free check-ins, home cooking space, and 24/7 care support.
              </p>

              {/* Point Grid */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  '1 to 5 BHK Serviced Apartments',
                  'Family Suites & Corporate Stays',
                  'Fully Equipped Private Kitchens',
                  'Complimentary Airport Pickups',
                  'Dedicated Local Guest Support'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-dark/95 font-bold uppercase tracking-wider">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link href="/servostay" className="bg-primary text-white px-7 py-3.5 rounded-full hover:bg-primary-hover transition-all text-xs font-bold uppercase tracking-wider shadow-sm inline-flex items-center gap-2">
                  <span>Book via ManaCare</span>
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="https://servostay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-primary text-primary px-7 py-3.5 rounded-full hover:bg-secondary transition-all text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>Visit Servostay.com</span>
                  <ArrowRight size={14} className="-rotate-45" />
                </a>
              </div>
            </div>

            {/* Right Graphic representing beautiful living space */}
            <div className="lg:col-span-5 h-96 rounded-[36px] border border-primary/10 relative overflow-hidden group shadow-lg">
              <img
                src="/assets/servostay_room.png"
                alt="Servostay Premium Apartment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                <span className="text-[9px] font-bold tracking-wider text-accent uppercase bg-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
                  Servostay Premium Suite
                </span>
                <h3 className="font-serif font-bold text-lg leading-snug">Vetted Serviced Accommodations</h3>
                <p className="text-[11px] text-white/70 max-w-xs font-semibold leading-relaxed">
                  Cleaned, fully furnished, and verified by our local care team before your family's arrival.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-24 px-6 sm:px-10 lg:px-12 bg-white border-t border-light-gray">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Community Voices</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy">Trusted by NRI Families Worldwide</h2>
              <p className="text-dark/80 text-sm leading-relaxed font-semibold">
                Here's what our community says about their care experiences with ManaCare.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Sridhar R.', loc: 'New Jersey, USA', quote: 'ManaCare has been a blessing for our family. Their parent care service is outstanding and personal.' },
                { name: 'Lakshmi V.', loc: 'Sydney, Australia', quote: 'Very professional team. Property reports are always timely, precise, and highly detailed.' },
                { name: 'Ramesh K.', loc: 'London, UK', quote: 'During our India visit, Servostay arranged a wonderful, clean stay for our family with a complete kitchen.' }
              ].map((test, idx) => (
                <div key={idx} className="bg-secondary/35 rounded-[32px] p-8 border border-light-gray flex flex-col justify-between items-start space-y-6 hover:shadow-xs transition-all">
                  <div className="space-y-4">
                    <Quote className="text-accent fill-accent/5 shrink-0" size={24} />
                    <p className="text-dark/85 text-xs leading-relaxed italic font-semibold">"{test.quote}"</p>
                  </div>
                  <div className="pt-4 border-t border-primary/10 w-full">
                    <h4 className="font-bold text-navy text-xs uppercase tracking-wide">{test.name}</h4>
                    <p className="text-[10px] text-accent font-bold uppercase tracking-wider">{test.loc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEAD CAPTURE FORM SECTION */}
        <section className="py-24 px-6 sm:px-10 lg:px-12 bg-secondary/20 border-t border-light-gray">
          <div className="max-w-7xl mx-auto bg-white rounded-[40px] border border-light-gray overflow-hidden grid lg:grid-cols-12 shadow-md">
            
            {/* Form Info Panel */}
            <div className="lg:col-span-5 bg-primary text-white p-8 md:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold font-serif leading-tight">Let's Discuss How We Can Help</h3>
                <p className="text-white/80 text-sm leading-relaxed font-semibold">
                  Book a free consultation with our family care advisor today. We'll outline a customized care plan tailored specifically for your family.
                </p>

                <div className="space-y-4 pt-4 text-xs font-semibold tracking-wide">
                  <a href="tel:+919123456789" className="flex items-center gap-3 text-white/90 hover:text-accent transition-colors">
                    <Phone size={14} className="text-accent shrink-0" />
                    <span>+91 91234 56789</span>
                  </a>
                  <a href="https://wa.me/919123456789" className="flex items-center gap-3 text-white/90 hover:text-accent transition-colors">
                    <MessageCircle size={14} className="text-accent shrink-0" />
                    <span>Chat with us on WhatsApp</span>
                  </a>
                  <a href="mailto:care@manacare.in" className="flex items-center gap-3 text-white/90 hover:text-accent transition-colors">
                    <Mail size={14} className="text-accent shrink-0" />
                    <span>care@manacare.in</span>
                  </a>
                </div>
              </div>

              <div className="text-[10px] text-white/60 pt-8 border-t border-white/10 mt-8 font-bold uppercase tracking-wider">
                Response within 2 hours during business hours.
              </div>
            </div>

            {/* Actual Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 p-8 md:p-12 space-y-5">
              <h4 className="text-xl font-bold font-serif text-navy">Request a Free Consultation</h4>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-dark/80">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-2.5 text-xs border border-light-gray rounded-xl focus:outline-none focus:border-primary bg-secondary/20 font-semibold"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-dark/80">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter number with country code"
                    required
                    className="w-full px-4 py-2.5 text-xs border border-light-gray rounded-xl focus:outline-none focus:border-primary bg-secondary/20 font-semibold"
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
                  placeholder="Enter email address"
                  required
                  className="w-full px-4 py-2.5 text-xs border border-light-gray rounded-xl focus:outline-none focus:border-primary bg-secondary/20 font-semibold"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-dark/80">How can we help you?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your parents' needs or property management requirements..."
                  rows={3}
                  className="w-full px-4 py-2.5 text-xs border border-light-gray rounded-xl focus:outline-none focus:border-primary bg-secondary/20 font-semibold"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3.5 rounded-full hover:bg-primary-hover transition-all text-xs font-bold uppercase tracking-wider shadow-sm mt-2 cursor-pointer"
              >
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}