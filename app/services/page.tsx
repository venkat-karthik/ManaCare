'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import Link from 'next/link'
import { Heart, Users, Home, Shield, AlertCircle, Check, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'parent-care',
    icon: Heart,
    title: 'Parent Care & Elderly Companionship',
    description: 'Comprehensive, regular assistance and wellness monitoring designed specifically for aging parents. We act as your local eyes and ears, ensuring they are happy, healthy, and supported in their daily lives.',
    image: '/assets/elderly_care.png',
    details: [
      'Weekly or daily wellness check-ins by dedicated care managers',
      'Medication management, reminders, and delivery coordination',
      'Escorted hospital and clinic visits with full diagnostic reports shared with you',
      'Assistance with grocery, utility bills, and local running chores',
      'Dedicated social visits to reduce loneliness and improve mental well-being'
    ]
  },
  {
    id: 'relative-care',
    icon: Users,
    title: 'Relative & Family Coordination Support',
    description: 'Supporting extended family members, children, or siblings in India with educational, logistic, or personal coordination, maintaining family bonds even from thousands of miles away.',
    image: null,
    details: [
      'Coordination of local tutoring, activities, or academic support',
      'Assistance with elderly relative check-ins and emergency backups',
      'Logistics support for family gatherings, events, or local travel planning',
      'Regular phone updates and video call arrangements to keep you in the loop'
    ]
  },
  {
    id: 'property-management',
    icon: Home,
    title: 'Bespoke Property Management Services',
    description: 'Complete inspection, maintenance, and administrative supervision of your residential or commercial properties in India. We prevent encroachment, maintain value, and keep you informed.',
    image: '/assets/property_inspection.png',
    details: [
      'Monthly physical site inspections with detailed photos, videos, and GPS check-ins',
      'Coordination of structural repairs, painting, cleaning, and gardening',
      'Tenant management, contract administration, and rent collection monitoring',
      'Payment of property taxes, municipal dues, and utility coordination',
      'Legal paperwork updates, document organization, and registration assistance'
    ]
  },
  {
    id: 'household-assistance',
    icon: Shield,
    title: 'Domestic Help & Maintenance Support',
    description: 'Reliable household maintenance, repairs, and vetting of domestic staff. Keeping your parents’ home safe, secure, and functioning perfectly.',
    image: null,
    details: [
      'Sourcing and verification of domestic helpers, cooks, and security guards',
      'Coordination of certified plumbers, electricians, carpenters, and technicians',
      'Safety audits (gas checks, electrical safety, bathroom anti-slip installations)',
      'Appliance repair and maintenance scheduling (AC servicing, water purifiers, etc.)'
    ]
  },
  {
    id: 'emergency-support',
    icon: AlertCircle,
    title: '24/7 Dedicated Emergency Support',
    description: 'An absolute safety net for your family. Immediate response, local presence, and rapid coordination during medical, electrical, or utility emergencies.',
    image: null,
    details: [
      'Dedicated 24/7 emergency response hotline for registered parents',
      'Instant ambulance dispatch and hospital coordination',
      'Designated care manager accompaniment to the emergency room',
      'Constant real-time updates sent to you via phone or WhatsApp',
      'Post-discharge care setup and medical follow-up coordination'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* PAGE HEADER */}
        <section className="bg-gradient-to-r from-primary/5 via-primary/3 to-white py-20 md:py-24 px-6 sm:px-10 lg:px-12 border-b border-primary/10">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Our Services</span>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif text-navy tracking-tight">
              Caring for Your Family, <br />
              <span className="text-primary font-normal italic">Securing Your Assets in India.</span>
            </h1>
            <p className="text-dark/80 text-base max-w-2xl mx-auto leading-relaxed font-medium">
              We offer bespoke, high-quality family and property support services. Fully transparent reports, professional managers, and round-the-clock emergency support.
            </p>
          </div>
        </section>

        {/* DETAILED SERVICES LIST */}
        <section className="py-24 px-6 sm:px-10 lg:px-12">
          <div className="max-w-5xl mx-auto space-y-24">
            {services.map((srv, index) => {
              const Icon = srv.icon
              return (
                <div
                  key={srv.id}
                  id={srv.id}
                  className={`grid lg:grid-cols-12 gap-10 items-start pb-16 border-b border-light-gray last:border-b-0 last:pb-0 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left Icon and Title info */}
                  <div className={`lg:col-span-5 space-y-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="w-14 h-14 bg-primary/10 rounded-[20px] flex items-center justify-center text-primary border border-primary/15">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-serif text-navy leading-tight">{srv.title}</h2>
                    <p className="text-dark/80 text-sm leading-relaxed font-semibold">{srv.description}</p>
                    <div className="pt-2">
                      <Link
                        href={`/contact?service=${srv.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary tracking-widest uppercase hover:underline"
                      >
                        <span>Request this service</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Bullet List Details & Image */}
                  <div className={`lg:col-span-7 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-primary/5 rounded-[32px] p-6 md:p-8 border border-primary/10">
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 font-serif">What's Included:</h3>
                      <ul className="space-y-3.5">
                        {srv.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-3 text-sm text-dark/90 leading-relaxed font-semibold">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                              <Check size={12} strokeWidth={3} />
                            </div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {srv.image && (
                      <div className="w-full h-64 rounded-[36px] overflow-hidden border border-primary/10 relative shadow-md group">
                        <img
                          src={srv.image}
                          alt={srv.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-20 bg-primary text-white text-center px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold font-serif">Need a Custom Care Arrangement?</h2>
            <p className="text-white/80 text-sm leading-relaxed font-semibold">
              We design bespoke care packages tailored exactly to your family’s circumstances, including multi-city operations, custom check-ins, and specialized requirements.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="bg-accent text-white px-8 py-4 rounded-full hover:shadow-lg transition-all text-xs font-bold uppercase tracking-wider inline-block cursor-pointer"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
