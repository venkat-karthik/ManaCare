'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { PremiumSlideshow } from '@/components/sections/PremiumSlideshow'
import Link from 'next/link'
import { Heart, Home, AlertCircle, Users, Shield, Check, CheckCircle2, ArrowRight, Quote, Phone, MessageCircle, Mail } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/lib/useReveal'

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* PREMIUM SLIDESHOW HERO */}
        <PremiumSlideshow />

        {/* INFO SECTION */}
        <section className="py-16 md:py-20 px-6 sm:px-10 lg:px-12 bg-white border-b border-light-gray">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
              {/* Left Info */}
              <div className="lg:col-span-6 space-y-6">
                <Reveal from="left">
                  <div className="space-y-4">
                    <span className="text-xs font-semibold tracking-widest text-accent uppercase font-sans">Your Peace of Mind, Closer to Home</span>
                    <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy leading-tight">
                      Comprehensive Care Management for NRI Families
                    </h2>
                    <p className="text-dark/70 text-base leading-relaxed max-w-lg font-normal">
                      A dedicated 1-on-1 Care Manager coordinates your parents' wellness, health management, and property oversight with absolute transparency.
                    </p>
                  </div>
                </Reveal>

                <Reveal from="left" delay={0.15}>
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <Link
                      href="/contact"
                      className="bg-primary text-white text-center px-6 py-3.5 rounded-full hover:bg-primary-hover transition-all text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                      Book Free Consultation
                    </Link>
                    <Link
                      href="/services"
                      className="border border-primary text-primary text-center px-6 py-3.5 rounded-full hover:bg-secondary transition-all text-sm font-semibold"
                    >
                      Explore Services
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Right Trust Pillars */}
              <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
                {[
                  { title: '1-on-1 Care Managers', desc: 'No aggregators. A dedicated care manager assigned solely to your family.' },
                  { title: 'Daily WhatsApp Updates', desc: 'Photos, activity checklists, and vitals reports sent directly to you.' },
                  { title: 'Geriatric Care Protocols', desc: 'All staff are certified in elderly assistance and emergency response.' },
                  { title: 'GPS-Verified Inspections', desc: 'Every site visit is timestamped and geo-verified for full transparency.' },
                ].map((pillar, idx) => (
                  <Reveal key={idx} from="right" delay={idx * 0.08}>
                    <div className="flex items-start gap-3 bg-secondary/30 rounded-2xl p-5 border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <CheckCircle2 size={14} strokeWidth={2} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-navy font-sans">{pillar.title}</h4>
                        <p className="text-sm text-dark/60 leading-relaxed font-normal">{pillar.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="relative py-24 px-6 sm:px-10 lg:px-12 border-b border-light-gray overflow-hidden">
          <div className="absolute inset-0 bg-secondary/20" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="crosshatch" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="20" y2="20" stroke="#1B5E43" strokeWidth="0.8" />
                <line x1="20" y1="0" x2="0" y2="20" stroke="#1B5E43" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#crosshatch)" />
          </svg>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-primary/8 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <Reveal from="bottom" className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase font-sans">Seamless Coordination</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy">Setting Up Care in Three Steps</h2>
              <p className="text-dark/60 text-base leading-relaxed font-normal">
                We organise complete local assistance so you can monitor everything from abroad with full confidence.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Free Initial Consultation', desc: 'Book online and we schedule a direct call with your family advisor to understand health requirements, location, and property details.' },
                { step: '02', title: 'Home Assessment Visit', desc: 'Our local Care Manager visits your parents in India, performs a safety audit, maps nearby clinics, and builds a personalised care checklist.' },
                { step: '03', title: 'Continuous Secure Support', desc: 'Visits begin immediately. You receive real-time WhatsApp updates, structured monthly reports, and access to a dedicated 24/7 helpline.' }
              ].map((item, idx) => (
                <Reveal key={idx} from="bottom" delay={idx * 0.12}>
                  <div className="bg-white rounded-2xl p-8 border border-light-gray shadow-sm space-y-4 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <span className="font-serif font-bold text-4xl text-primary/30">{item.step}</span>
                    <h3 className="font-serif font-bold text-navy text-xl">{item.title}</h3>
                    <p className="text-base text-dark/60 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES PREVIEW */}
        <section className="relative py-24 px-6 sm:px-10 lg:px-12 overflow-hidden border-b border-light-gray">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="diag-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="#1B5E43" strokeWidth="1" strokeOpacity="0.06" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diag-lines)" />
          </svg>
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <Reveal from="bottom" className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div className="space-y-4">
                <span className="text-xs font-semibold tracking-widest text-accent uppercase font-sans">Core Focus & Care Pillars</span>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy">Professional Care & Asset Oversight</h2>
                <p className="text-dark/60 max-w-xl text-base leading-relaxed font-normal">
                  Our service structure spotlights parental healthcare and property safety, managed by dedicated local care managers.
                </p>
              </div>
              <Link href="/services" className="group mt-6 md:mt-0 flex items-center gap-2 text-primary font-semibold text-sm hover:underline shrink-0">
                <span>Explore Services</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* parental care spotlight */}
              <Reveal from="left" delay={0.05}>
                <div className="bg-white rounded-3xl border border-primary/15 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src="/assets/Parent Care & Wellness.png"
                      alt="Parental Care & Wellness"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-accent text-white text-[9px] font-bold tracking-widest px-3 py-1 rounded-full uppercase shadow-md animate-pulse">
                      ★ Primary Spotlight
                    </span>
                  </div>

                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <Heart size={22} />
                        </div>
                        <h3 className="font-bold font-serif text-navy text-2xl">Parental Care & Wellness</h3>
                      </div>
                      <p className="text-dark/70 text-sm leading-relaxed font-normal">
                        Empathetic, structured care managers acting as your local eyes and hands. We look after your parents' daily health logs, vitals, medical requirements, and lifestyle companionship.
                      </p>
                      
                      <ul className="space-y-2.5 pt-2">
                        {[
                          'Dedicated 1-on-1 care coordinator',
                          'Regular health, vitals & wellness tracking logs',
                          'Medication delivery, management & refills',
                          'Accompanied hospital & doctor consultation runs'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-dark/80 font-normal">
                            <Check size={14} className="text-accent shrink-0 mt-0.5" strokeWidth={3} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8 border-t border-light-gray mt-8">
                      <Link href="/services#parent-care" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                        <span>Explore Parent Care Solutions</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* property care spotlight */}
              <Reveal from="right" delay={0.1}>
                <div className="bg-white rounded-3xl border border-primary/15 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src="/assets/Property Oversight.png"
                      alt="Property Oversight & Management"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-accent text-white text-[9px] font-bold tracking-widest px-3 py-1 rounded-full uppercase shadow-md animate-pulse">
                      ★ Primary Spotlight
                    </span>
                  </div>

                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <Home size={22} />
                        </div>
                        <h3 className="font-bold font-serif text-navy text-2xl">Property Oversight & Protection</h3>
                      </div>
                      <p className="text-dark/70 text-sm leading-relaxed font-normal">
                        Safeguarding your property investments and family assets in India. We perform regular physical checks, manage local tenants, maintain utilities, and send you detailed digital reports.
                      </p>
                      
                      <ul className="space-y-2.5 pt-2">
                        {[
                          'Regular physical inspections with photo & video audits',
                          'Repairs, maintenance, painting & cleaning coordination',
                          'Tenant verification, onboarding & rent collection admin',
                          'Utility bills, municipal taxes & registration paperwork'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-dark/80 font-normal">
                            <Check size={14} className="text-accent shrink-0 mt-0.5" strokeWidth={3} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8 border-t border-light-gray mt-8">
                      <Link href="/services#property-management" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                        <span>Explore Property Care Solutions</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PLANS PREVIEW */}
        <section className="relative py-24 px-6 sm:px-10 lg:px-12 border-t border-light-gray overflow-hidden">
          <div className="absolute inset-0 bg-navy" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#D4A24C" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-grid)" />
          </svg>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <Reveal from="bottom" className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div className="space-y-4">
                <span className="text-xs font-semibold tracking-widest text-accent uppercase font-sans">Pricing & Tiers</span>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">Care Plans Designed for Every Family</h2>
                <p className="text-white/50 max-w-xl text-base leading-relaxed font-normal">
                  Choose a plan that fits your family's needs. Adjust or cancel anytime.
                </p>
              </div>
              <Link href="/plans" className="group mt-6 md:mt-0 flex items-center gap-2 text-accent font-semibold text-sm hover:underline shrink-0">
                <span>View All Plans</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'Essential Care', price: '₹4,999', desc: '1 wellness check-in visit per month and communication.', popular: false },
                { name: 'Family Care', price: '₹7,999', desc: '2 wellness check-in visits per month and 1 property inspection.', popular: false },
                { name: 'Complete Care', price: '₹11,999', desc: '4 wellness check-in visits per month and 1 property inspection.', popular: false },
                { name: 'NRI Prime', price: '₹20,000', desc: '8 monthly wellness check-ins and 2 property inspections.', popular: true }
              ].map((plan, idx) => (
                <Reveal key={idx} from="bottom" delay={idx * 0.1}>
                  <div className={`rounded-2xl p-8 border transition-all duration-300 relative flex flex-col justify-between h-full hover:-translate-y-1 ${
                    plan.popular
                      ? 'bg-primary border-accent/40 ring-1 ring-accent/30 shadow-2xl'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}>
                    {plan.popular && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                    <div className="space-y-3">
                      <h3 className={`font-bold font-serif text-xl ${plan.popular ? 'text-white' : 'text-white/90'}`}>{plan.name}</h3>
                      <p className={`text-sm leading-relaxed font-normal ${plan.popular ? 'text-white/70' : 'text-white/50'}`}>{plan.desc}</p>
                      <div className="pt-2">
                        <span className={`text-3xl font-bold font-serif ${plan.popular ? 'text-accent' : 'text-white'}`}>{plan.price}</span>
                        <span className="text-sm text-white/40 font-normal ml-1">/ month</span>
                      </div>
                    </div>
                    <Link href="/plans" className={`mt-6 w-full text-center py-3 rounded-full text-sm font-semibold transition-all ${
                      plan.popular
                        ? 'bg-accent text-white hover:bg-accent/90 shadow-lg'
                        : 'border border-white/20 text-white/80 hover:bg-white/10'
                    }`}>
                      Choose Plan
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVOSTAY SECTION */}
        <section className="py-24 px-6 sm:px-10 lg:px-12 border-t border-light-gray">
          <div className="max-w-7xl mx-auto bg-secondary/30 rounded-3xl p-8 md:p-14 border border-primary/5 grid lg:grid-cols-12 gap-12 items-center">
            <Reveal from="left" className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase font-sans">Our Sister Business</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy leading-tight">
                Visiting India?<br />
                Stay covered with <span className="text-primary italic font-normal">Servostay.</span>
              </h2>
              <p className="text-dark/60 text-base leading-relaxed font-normal max-w-xl">
                In partnership with <strong className="text-dark font-semibold">Servostay</strong>, we arrange fully furnished premium serviced apartments for visiting NRI families in Hyderabad, Bengaluru, Visakhapatnam, and Tirupati — with hassle-free check-ins and 24/7 care support.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  '1 to 5 BHK Serviced Apartments',
                  'Family Suites & Corporate Stays',
                  'Fully Equipped Private Kitchens',
                  'Complimentary Airport Pickups',
                  'Dedicated Local Guest Support'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Check size={11} strokeWidth={2.5} />
                    </div>
                    <span className="text-sm text-dark/70 font-normal">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link href="/servostay" className="bg-primary text-white px-7 py-3.5 rounded-full hover:bg-primary-hover transition-all text-sm font-semibold shadow-sm inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-lg">
                  <span>Book via ManaCare</span>
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="https://servostay.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-primary text-primary px-7 py-3.5 rounded-full hover:bg-secondary transition-all text-sm font-semibold inline-flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <span>Visit Servostay.in</span>
                  <ArrowRight size={14} className="-rotate-45" />
                </a>
              </div>
            </Reveal>

            <Reveal from="right" delay={0.1} className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none h-72 sm:h-80 md:h-96 rounded-2xl border border-primary/10 relative overflow-hidden group shadow-lg">
              <img
                src="/assets/servostay_room.png"
                alt="Servostay Premium Apartment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                <span className="text-xs font-semibold tracking-wider text-accent uppercase bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                  Servostay Premium Suite
                </span>
                <h3 className="font-serif font-bold text-lg leading-snug">Vetted Serviced Accommodations</h3>
                <p className="text-sm text-white/70 max-w-xs font-normal leading-relaxed">
                  Cleaned, furnished, and verified by our local care team before your arrival.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="relative py-24 px-6 sm:px-10 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 bg-[#FDFAF6]" />
          <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[0.07]" viewBox="0 0 500 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
            {[80, 160, 240, 320, 400, 480].map((r, i) => (
              <circle key={i} cx="500" cy="400" r={r} fill="none" stroke="#1B5E43" strokeWidth="1.5" />
            ))}
          </svg>
          <svg className="absolute left-0 bottom-0 h-64 w-64 opacity-[0.08]" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {[60, 120, 180, 240].map((r, i) => (
              <circle key={i} cx="0" cy="300" r={r} fill="none" stroke="#D4A24C" strokeWidth="1.5" />
            ))}
          </svg>

          <div className="relative max-w-7xl mx-auto">
            <Reveal from="bottom" className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase font-sans">Community Voices</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy">Trusted by NRI Families Worldwide</h2>
              <p className="text-dark/60 text-base leading-relaxed font-normal">
                Here's what families say about their experience with ManaCare.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Sridhar R.', loc: 'New Jersey, USA', quote: 'ManaCare has been a blessing for our family. Their parent care service is outstanding — personal, reliable, and always proactive.' },
                { name: 'Lakshmi V.', loc: 'Sydney, Australia', quote: 'Very professional team. Property reports are always timely, precise, and highly detailed. I feel completely at ease.' },
                { name: 'Ramesh K.', loc: 'London, UK', quote: 'During our India visit, Servostay arranged a wonderful, clean stay for our family — complete kitchen, great location, no hassles.' }
              ].map((test, idx) => (
                <Reveal key={idx} from="bottom" delay={idx * 0.12}>
                  <div className="bg-white rounded-2xl p-8 border border-primary/8 shadow-sm flex flex-col justify-between gap-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="space-y-4">
                      <Quote className="text-accent/50" size={28} />
                      <p className="text-dark/70 text-base leading-relaxed font-normal italic">"{test.quote}"</p>
                    </div>
                    <div className="pt-4 border-t border-primary/10">
                      <p className="font-semibold text-navy text-sm">{test.name}</p>
                      <p className="text-xs text-accent font-medium mt-0.5">{test.loc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* LEAD CAPTURE FORM */}
        <section className="py-24 px-6 sm:px-10 lg:px-12 bg-secondary/20 border-t border-light-gray">
          <div className="max-w-7xl mx-auto bg-white rounded-3xl border border-light-gray overflow-hidden grid lg:grid-cols-12 shadow-md">

            <Reveal from="left" className="lg:col-span-5 bg-primary text-white p-8 md:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold font-serif leading-tight">Let's Discuss How We Can Help</h3>
                <p className="text-white/75 text-base leading-relaxed font-normal">
                  Book a free consultation with our family care advisor. We'll outline a personalised care plan for your family.
                </p>

                <div className="space-y-4 pt-2">
                  <a href="tel:+919123456789" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                    <Phone size={15} className="text-accent shrink-0" />
                    <span className="text-sm font-normal">+91 91234 56789</span>
                  </a>
                  <a href="https://wa.me/919123456789" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                    <MessageCircle size={15} className="text-accent shrink-0" />
                    <span className="text-sm font-normal">Chat with us on WhatsApp</span>
                  </a>
                  <a href="mailto:care@manacare.in" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                    <Mail size={15} className="text-accent shrink-0" />
                    <span className="text-sm font-normal">care@manacare.in</span>
                  </a>
                </div>
              </div>
              <p className="text-sm text-white/50 font-normal pt-8 border-t border-white/10 mt-8">
                We respond within 2 hours during business hours.
              </p>
            </Reveal>

            <Reveal from="right" delay={0.1} className="lg:col-span-7">
              {isSubmitted ? (
                <div className="bg-gradient-to-br from-white via-white to-secondary/10 p-8 md:p-12 rounded-[32px] border-2 border-primary/20 flex flex-col items-center justify-center text-center space-y-6 shadow-md min-h-[400px] animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-30" />
                    <CheckCircle2 size={32} strokeWidth={2.5} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold font-serif text-navy">Consultation Requested!</h4>
                    <p className="text-sm text-dark/75 font-semibold leading-relaxed max-w-sm">
                      Thank you! Your request has been logged. Our care coordinator will call or WhatsApp you within 2 hours to discuss your requirements.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-5">
                  <h4 className="text-xl font-bold font-serif text-navy">Request a Free Consultation</h4>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-dark/70">Your Name</label>
                      <input
                        type="text" name="name" value={formData.name} onChange={handleChange}
                        placeholder="Enter your name" required
                        className="w-full px-4 py-3 text-sm border border-light-gray rounded-xl focus:outline-none focus:border-primary bg-secondary/20 font-normal transition-all duration-200 hover:border-primary/40"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-dark/70">Phone Number</label>
                      <input
                        type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="Include country code" required
                        className="w-full px-4 py-3 text-sm border border-light-gray rounded-xl focus:outline-none focus:border-primary bg-secondary/20 font-normal transition-all duration-200 hover:border-primary/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-dark/70">Email Address</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="Enter email address" required
                      className="w-full px-4 py-3 text-sm border border-light-gray rounded-xl focus:outline-none focus:border-primary bg-secondary/20 font-normal transition-all duration-200 hover:border-primary/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-dark/70">How can we help?</label>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange}
                      placeholder="Tell us about your parents' needs or property requirements..."
                      rows={4}
                      className="w-full px-4 py-3 text-sm border border-light-gray rounded-xl focus:outline-none focus:border-primary bg-secondary/20 font-normal resize-none transition-all duration-200 hover:border-primary/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3.5 rounded-full hover:bg-primary-hover transition-all text-sm font-semibold shadow-sm mt-1 cursor-pointer hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}