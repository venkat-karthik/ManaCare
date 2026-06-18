'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { Eye, Shield, Users, Heart, ClipboardCheck, Award } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/lib/useReveal'

export default function AboutPage() {
  const pillars = [
    { icon: Shield, title: 'Rigorous Verification', desc: 'Every caregiver, support associate, and property inspector undergoes deep background vetting, reference validation, and compliance checks.' },
    { icon: Eye, title: 'Absolute Transparency', desc: 'We share timestamped photos, GPS check-ins, activity logs, and doctor reports directly to your dashboard. No guessing, just facts.' },
    { icon: Users, title: 'Local Care Managers', desc: "Our managers reside locally in your parents' city, speak the local language natively, and maintain a close personal relationship with families." },
    { icon: Award, title: 'Proven Professionalism', desc: 'Serving NRI families with consistent excellence, empathy, and professional accountability across every interaction.' }
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
              <pattern id="grid-about" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <line x1="60" y1="0" x2="60" y2="60" stroke="#1B5E43" strokeWidth="1" />
                <line x1="0" y1="60" x2="60" y2="60" stroke="#1B5E43" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-about)" />
          </svg>

          <div className="relative z-10 space-y-4">
            <Reveal from="bottom">
              <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase font-serif">About ManaCare</span>
            </Reveal>
            <Reveal from="bottom" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
                Our Mission & Philosophy <br />
                <span className="text-accent font-normal italic mt-2 block">Bridging the Distance with Care & Trust.</span>
              </h1>
            </Reveal>
            <Reveal from="bottom" delay={0.2}>
              <p className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed font-medium">
                ManaCare was founded to solve a deeply personal challenge: providing reliable, high-quality care for elderly parents in India on behalf of their children living abroad.
              </p>
            </Reveal>
          </div>
        </section>

        {/* MISSION & DETAILS */}
        <section className="py-24 px-6 sm:px-10 lg:px-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <Reveal from="left">
              <div className="space-y-6">
                <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Our Story</span>
                <h2 className="text-3xl font-bold font-serif text-navy">Why We Started ManaCare</h2>
                <p className="text-dark/80 text-sm leading-relaxed font-semibold">
                  As Non-Resident Indians ourselves, we realized that sending money home was never enough. Our parents deserved companionship, prompt medical accompaniment, and dedicated care.
                </p>
                <p className="text-dark/80 text-sm leading-relaxed font-semibold">
                  Similarly, supervising family homes and properties from abroad was stressful. We built ManaCare as a professional platform that combines compassionate parental care with reliable property oversight.
                </p>
              </div>
            </Reveal>

            <Reveal from="right" delay={0.1}>
              <div className="bg-gradient-to-br from-primary/8 via-primary/5 to-secondary/8 rounded-[36px] p-8 border-2 border-primary/15 space-y-4 relative overflow-hidden group hover:border-accent hover:shadow-xl transition-all duration-300">
                {/* Shiny overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent/8 rounded-full blur-3xl" />
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] group-hover:bg-accent/10 transition-colors duration-300" />

                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-[24px] flex items-center justify-center text-white border-2 border-primary/30 group-hover:from-accent group-hover:to-accent/80 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 relative z-10">
                  <Heart size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold font-serif text-primary group-hover:text-accent transition-colors duration-300 relative z-10">"We Care. You Relax."</h3>
                <p className="text-sm text-dark/75 leading-relaxed font-light group-hover:text-dark transition-colors duration-300 relative z-10">
                  Our philosophy is simple: we act exactly as you would if you were physically present in India. Your family's comfort, health, and peace of mind are our absolute top priority.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PILLARS OF TRUST */}
        <section className="py-24 bg-primary/5 border-y border-primary/10 px-6 sm:px-10 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <Reveal from="bottom" className="text-center space-y-3 mb-16 max-w-xl mx-auto">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Quality Standards</span>
              <h2 className="text-3xl font-bold font-serif text-navy">The Pillars of Our Services</h2>
              <p className="text-dark/85 text-sm font-semibold leading-relaxed">
                How we maintain premium quality standards and complete accountability across all cities.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon
                return (
                  <Reveal key={idx} from={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 0.1}>
                    <div className="group relative bg-gradient-to-br from-white via-white to-secondary/5 p-8 rounded-[32px] border-2 border-primary/15 flex gap-5 items-start overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                      </div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
                      </div>

                      <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-[20px] flex items-center justify-center text-primary border-2 border-primary/15 shrink-0 group-hover:from-primary/20 group-hover:to-accent/20 group-hover:border-accent group-hover:scale-110 group-hover:shadow-md transition-all duration-300 relative z-10">
                        <Icon size={24} strokeWidth={1.5} className="group-hover:text-accent transition-colors duration-300" />
                      </div>

                      <div className="space-y-2 relative z-10">
                        <h3 className="font-bold text-navy text-lg font-serif group-hover:text-primary transition-colors duration-300">{pillar.title}</h3>
                        <p className="text-sm text-dark/75 leading-relaxed font-light group-hover:text-dark transition-colors duration-300">{pillar.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* TRAINING SECTION */}
        <section className="py-24 px-6 sm:px-10 lg:px-12">
          <Reveal from="scale" className="max-w-4xl mx-auto">
            <div className="group relative bg-gradient-to-br from-primary via-primary/98 to-primary/95 text-white rounded-[40px] p-8 md:p-14 border-2 border-primary/50 grid md:grid-cols-12 gap-8 items-center overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
              </div>

              <div className="md:col-span-8 space-y-4 relative z-10">
                <span className="text-[10px] font-bold tracking-widest text-accent uppercase inline-block">Training & Compliance</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold">Our Caregiver Training Standard</h2>
                <p className="text-white/80 text-sm leading-relaxed font-light">
                  Every ManaCare associate undergoes a specialized 4-week training program in geriatric care, emergency medical support coordination, and soft skills to ensure respect, warmth, and complete professional competence.
                </p>
              </div>

              <div className="md:col-span-4 flex justify-center md:justify-end relative z-10">
                <div className="group/badge bg-white/10 backdrop-blur-sm p-6 rounded-[28px] border-2 border-white/20 text-center space-y-1 group-hover/badge:bg-white/20 group-hover/badge:border-accent/50 group-hover/badge:scale-110 transition-all duration-300">
                  <ClipboardCheck size={36} className="text-accent mx-auto mb-2 group-hover/badge:scale-125 transition-transform duration-300" />
                  <div className="text-3xl font-bold font-serif text-accent group-hover/badge:text-white transition-colors duration-300">100%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/90">Vetted & Trained</div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <Reveal from="bottom" className="py-16 px-6 text-center border-t border-primary/10 bg-secondary/20">
          <p className="text-dark/70 text-base mb-6 font-medium">Ready to let ManaCare take care of your family?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-hover transition-all text-sm font-semibold shadow-md hover:-translate-y-0.5 hover:shadow-lg"
          >
            Book a Free Consultation
          </Link>
        </Reveal>
      </main>

      <Footer />
    </div>
  )
}
