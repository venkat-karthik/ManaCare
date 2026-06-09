'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { Eye, Shield, Users, Heart, ClipboardCheck, Award, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const pillars = [
    {
      icon: Shield,
      title: 'Rigorous Verification',
      desc: 'Every caregiver, support associate, and property inspector undergoes deep background vetting, reference validation, and compliance checks.'
    },
    {
      icon: Eye,
      title: 'Absolute Transparency',
      desc: 'We share timestamped photos, GPS check-ins, activity logs, and doctor reports directly to your dashboard. No guessing, just facts.'
    },
    {
      icon: Users,
      title: 'Local Care Managers',
      desc: 'Our managers reside locally in your parents\u2019 city, speak the local language natively, and maintain a close personal relationship with families.'
    },
    {
      icon: Award,
      title: 'Proven Professionalism',
      desc: 'Serving NRI families with consistent excellence, empathy, and professional accountability across every interaction.'
    }
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-24">
        {/* HEADER */}
        <section className="bg-gradient-to-r from-primary/5 via-primary/3 to-white py-20 md:py-24 px-6 sm:px-10 lg:px-12 border-b border-primary/10 text-center space-y-4">
          <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">About ManaCare</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-navy tracking-tight">
            Our Mission & Philosophy <br />
            <span className="text-primary font-normal italic">Bridging the Distance with Care & Trust.</span>
          </h1>
          <p className="text-dark/80 text-base max-w-2xl mx-auto leading-relaxed font-medium">
            ManaCare was founded to solve a deeply personal challenge: providing reliable, high-quality care for elderly parents in India on behalf of their children living abroad.
          </p>
        </section>

        {/* MISSION & DETAILS */}
        <section className="py-24 px-6 sm:px-10 lg:px-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Our Story</span>
              <h2 className="text-3xl font-bold font-serif text-navy">Why We Started ManaCare</h2>
              <p className="text-dark/80 text-sm leading-relaxed font-semibold">
                As Non-Resident Indians ourselves, we realized that sending money home was never enough. Our parents deserved companionship, prompt medical accompaniment, and support with household maintenance. 
              </p>
              <p className="text-dark/80 text-sm leading-relaxed font-semibold">
                Similarly, supervising properties and coordinating family logistics from abroad was stressful. We built ManaCare as a professional platform that combines compassionate care with corporate accountability.
              </p>
            </div>
            
            <div className="bg-primary/5 rounded-[36px] p-8 border border-primary/10 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px]" />
              <div className="w-12 h-12 bg-primary/10 rounded-[20px] flex items-center justify-center text-primary">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold font-serif text-primary">"We Care. You Relax."</h3>
              <p className="text-xs text-dark/75 leading-relaxed font-semibold">
                Our philosophy is simple: we act exactly as you would if you were physically present in India. Your family's comfort, health, and peace of mind are our absolute top priority.
              </p>
            </div>
          </div>
        </section>

        {/* PILLARS OF TRUST */}
        <section className="py-24 bg-primary/5 border-y border-primary/10 px-6 sm:px-10 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-3 mb-16 max-w-xl mx-auto">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Quality Standards</span>
              <h2 className="text-3xl font-bold font-serif text-navy">The Pillars of Our Services</h2>
              <p className="text-dark/85 text-sm font-semibold leading-relaxed">
                How we maintain premium quality standards and complete accountability across all cities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon
                return (
                  <div key={idx} className="bg-white p-8 rounded-[32px] border border-light-gray flex gap-5 items-start hover:border-primary/15 transition-all">
                    <div className="w-12 h-12 bg-secondary rounded-[20px] flex items-center justify-center text-primary border border-primary/10 shrink-0">
                      <Icon size={22} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-navy text-base font-serif">{pillar.title}</h3>
                      <p className="text-xs text-dark/80 leading-relaxed font-semibold">{pillar.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* VERIFICATION AND TRAINING */}
        <section className="py-24 px-6 sm:px-10 lg:px-12">
          <div className="max-w-4xl mx-auto bg-primary text-white rounded-[40px] p-8 md:p-14 border border-primary/10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Training & Compliance</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold">Our Caregiver Training Standard</h2>
              <p className="text-white/80 text-sm leading-relaxed font-semibold">
                Every ManaCare associate undergoes a specialized 4-week training program in geriatric care, emergency medical support coordination, and soft skills to ensure respect, warmth, and complete professional competence.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="bg-white/10 backdrop-blur-xs p-6 rounded-[28px] border border-white/15 text-center space-y-1">
                <ClipboardCheck size={32} className="text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold font-serif text-accent">100%</div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-white/90">Vetted & Trained</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
