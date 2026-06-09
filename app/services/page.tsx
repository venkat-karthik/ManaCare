import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import Link from 'next/link'
import { Heart, Users, Home, Shield, AlertCircle, Check, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'parent-care',
    icon: Heart,
    label: 'Parent Care',
    title: 'Parent Care & Elderly Companionship',
    description: 'Comprehensive, regular assistance and wellness monitoring designed specifically for aging parents. We act as your local eyes and ears, ensuring they are happy, healthy, and supported in their daily lives.',
    image: '/assets/elderly_care.png',
    details: [
      'Weekly or daily wellness check-ins by dedicated care managers',
      'Medication management, reminders, and delivery coordination',
      'Escorted hospital and clinic visits with full diagnostic reports shared with you',
      'Assistance with grocery, utility bills, and local running chores',
      'Dedicated social visits to reduce loneliness and improve mental well-being',
    ],
    // bg class, accent colour for the block
    bg: 'bg-white',
    patternColor: '#1B5E43',
    patternType: 'dots',
    blobColor: 'bg-primary/6',
  },
  {
    id: 'relative-care',
    icon: Users,
    label: 'Relative Support',
    title: 'Relative & Family Coordination Support',
    description: 'Supporting extended family members, children, or siblings in India with educational, logistic, or personal coordination — maintaining family bonds even from thousands of miles away.',
    image: null,
    details: [
      'Coordination of local tutoring, activities, or academic support',
      'Assistance with elderly relative check-ins and emergency backups',
      'Logistics support for family gatherings, events, or local travel planning',
      'Regular phone updates and video call arrangements to keep you in the loop',
    ],
    bg: 'bg-navy',
    patternColor: '#D4A24C',
    patternType: 'crosshatch',
    blobColor: 'bg-primary/30',
  },
  {
    id: 'property-management',
    icon: Home,
    label: 'Property',
    title: 'Bespoke Property Management Services',
    description: 'Complete inspection, maintenance, and administrative supervision of your residential or commercial properties in India. We prevent encroachment, maintain value, and keep you fully informed.',
    image: '/assets/property_inspection.png',
    details: [
      'Monthly physical site inspections with detailed photos, videos, and GPS check-ins',
      'Coordination of structural repairs, painting, cleaning, and gardening',
      'Tenant management, contract administration, and rent collection monitoring',
      'Payment of property taxes, municipal dues, and utility coordination',
      'Legal paperwork updates, document organization, and registration assistance',
    ],
    bg: 'bg-[#FDFAF6]',
    patternColor: '#1B5E43',
    patternType: 'arcs',
    blobColor: 'bg-accent/8',
  },
  {
    id: 'household-assistance',
    icon: Shield,
    label: 'Household',
    title: 'Domestic Help & Maintenance Support',
    description: "Reliable household maintenance, repairs, and vetting of domestic staff. Keeping your parents' home safe, secure, and functioning perfectly.",
    image: null,
    details: [
      'Sourcing and verification of domestic helpers, cooks, and security guards',
      'Coordination of certified plumbers, electricians, carpenters, and technicians',
      'Safety audits — gas checks, electrical safety, bathroom anti-slip installations',
      'Appliance repair and maintenance scheduling (AC servicing, water purifiers, etc.)',
    ],
    bg: 'bg-primary',
    patternColor: '#ffffff',
    patternType: 'diagonal',
    blobColor: 'bg-accent/15',
  },
  {
    id: 'emergency-support',
    icon: AlertCircle,
    label: 'Emergency',
    title: '24/7 Dedicated Emergency Support',
    description: 'An absolute safety net for your family. Immediate response, local presence, and rapid coordination during medical, electrical, or utility emergencies.',
    image: null,
    details: [
      'Dedicated 24/7 emergency response hotline for registered parents',
      'Instant ambulance dispatch and hospital coordination',
      'Designated care manager accompaniment to the emergency room',
      'Constant real-time updates sent to you via phone or WhatsApp',
      'Post-discharge care setup and medical follow-up coordination',
    ],
    bg: 'bg-white',
    patternColor: '#1B5E43',
    patternType: 'grid',
    blobColor: 'bg-primary/5',
  },
]

// Per-block SVG pattern
function BlockPattern({ type, color, id }: { type: string; color: string; id: string }) {
  if (type === 'dots') return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.055]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id={id} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
  if (type === 'crosshatch') return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id={id} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="20" y2="20" stroke={color} strokeWidth="0.8" />
          <line x1="20" y1="0" x2="0" y2="20" stroke={color} strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
  if (type === 'arcs') return (
    <svg className="absolute right-0 top-0 h-full w-72 opacity-[0.07]" viewBox="0 0 300 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
      {[60, 120, 180, 240, 300].map((r, i) => (
        <circle key={i} cx="300" cy="300" r={r} fill="none" stroke={color} strokeWidth="1.5" />
      ))}
    </svg>
  )
  if (type === 'diagonal') return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id={id} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="40" stroke={color} strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
  if (type === 'grid') return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id={id} x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          <line x1="32" y1="0" x2="32" y2="32" stroke={color} strokeWidth="1" />
          <line x1="0" y1="32" x2="32" y2="32" stroke={color} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
  return null
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-24">

        {/* PAGE HEADER */}
        <section className="relative overflow-hidden py-20 md:py-28 px-6 sm:px-10 lg:px-12">
          <div className="absolute inset-0 bg-navy" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.10]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="hero-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#D4A24C" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-dots)" />
          </svg>
          <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full bg-primary/25 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[90px] pointer-events-none" />

          {/* Quick-jump nav */}
          <div className="relative max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-5">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase font-sans">Our Services</span>
              <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white leading-tight">
                Caring for Your Family,{' '}
                <span className="text-accent font-normal italic">Securing Your Assets in India.</span>
              </h1>
              <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed font-normal">
                Bespoke, high-quality family and property support services — fully transparent reports, professional care managers, and round-the-clock emergency support.
              </p>
            </div>

            {/* Service pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {services.map((srv) => {
                const Icon = srv.icon
                return (
                  <a
                    key={srv.id}
                    href={`#${srv.id}`}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white/80 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-sm"
                  >
                    <Icon size={14} />
                    {srv.label}
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* SERVICES — each block is its own full-width section */}
        {services.map((srv, index) => {
          const Icon = srv.icon
          const isDark = srv.bg === 'bg-navy' || srv.bg === 'bg-primary'
          const isEven = index % 2 === 0

          return (
            <section
              key={srv.id}
              id={srv.id}
              className={`relative overflow-hidden py-20 px-6 sm:px-10 lg:px-12 ${srv.bg}`}
            >
              {/* Per-block decorative pattern */}
              <BlockPattern type={srv.patternType} color={srv.patternColor} id={`pat-${srv.id}`} />

              {/* Glow blob */}
              <div className={`absolute ${isEven ? '-top-20 -right-20' : '-bottom-20 -left-20'} w-80 h-80 rounded-full ${srv.blobColor} blur-3xl pointer-events-none`} />

              {/* Large decorative step number removed */}

              <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

                {/* Text side */}
                <div className={`lg:col-span-5 space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>

                  {/* Icon + label row */}
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shrink-0 ${
                      isDark
                        ? 'bg-white/10 border-white/15 text-white'
                        : 'bg-primary/10 border-primary/15 text-primary'
                    }`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-semibold tracking-widest text-accent uppercase font-sans">
                      {srv.label}
                    </span>
                  </div>

                  <h2 className={`text-2xl sm:text-3xl font-bold font-serif leading-tight ${isDark ? 'text-white' : 'text-navy'}`}>
                    {srv.title}
                  </h2>

                  <p className={`text-base leading-relaxed font-normal ${isDark ? 'text-white/65' : 'text-dark/65'}`}>
                    {srv.description}
                  </p>

                  <Link
                    href={`/contact?service=${srv.id}`}
                    className={`inline-flex items-center gap-2 text-sm font-semibold group transition-colors ${
                      isDark ? 'text-accent hover:text-accent/80' : 'text-primary hover:text-primary/80'
                    }`}
                  >
                    <span>Request this service</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Feature card + image side */}
                <div className={`lg:col-span-7 space-y-5 ${!isEven ? 'lg:order-1' : ''}`}>

                  {/* What's included card */}
                  <div className={`relative overflow-hidden rounded-2xl border shadow-md ${
                    isDark
                      ? 'bg-white/[0.07] border-white/[0.12]'
                      : 'bg-white border-primary/10'
                  }`}>
                    {/* Accent top bar */}
                    <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary/40" />

                    <div className="p-6 md:p-8">
                      <p className={`text-xs font-semibold tracking-widest uppercase font-sans mb-5 ${isDark ? 'text-accent' : 'text-primary'}`}>
                        What&apos;s included
                      </p>
                      <ul className="space-y-4">
                        {srv.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-3 leading-relaxed">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isDark ? 'bg-white/10 text-accent' : 'bg-primary/10 text-primary'
                            }`}>
                              <Check size={11} strokeWidth={2.5} />
                            </div>
                            <span className={`text-sm font-normal ${isDark ? 'text-white/75' : 'text-dark/70'}`}>
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Service image */}
                  {srv.image && (
                    <div className="w-full h-64 rounded-2xl overflow-hidden border border-primary/10 relative shadow-lg group">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
                      <div className="absolute bottom-5 left-6">
                        <span className="text-xs font-semibold text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/15">
                          {srv.label} — ManaCare
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )
        })}

        {/* CALL TO ACTION */}
        <section className="relative overflow-hidden py-24 px-6 sm:px-10 lg:px-12">
          {/* Faded green background */}
          <div className="absolute inset-0 bg-primary/80" />
          {/* Subtle dark overlay for depth */}
          <div className="absolute inset-0 bg-black/20" />
          {/* Ring design — kept, stroke lightened to white so it shows on green */}
          <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[0.12]" viewBox="0 0 500 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
            {[80, 160, 240, 320, 400, 480].map((r, i) => (
              <circle key={i} cx="500" cy="300" r={r} fill="none" stroke="#ffffff" strokeWidth="1.5" />
            ))}
          </svg>
          {/* Also add rings from bottom-left for balance */}
          <svg className="absolute left-0 bottom-0 h-64 w-64 opacity-[0.08]" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {[60, 120, 180, 240].map((r, i) => (
              <circle key={i} cx="0" cy="300" r={r} fill="none" stroke="#ffffff" strokeWidth="1.5" />
            ))}
          </svg>
          {/* Soft glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-primary blur-[80px] opacity-50 pointer-events-none" />

          <div className="relative max-w-2xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold tracking-widest text-white/60 uppercase font-sans">Get Started</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white leading-tight">
              Need a Custom Care Arrangement?
            </h2>
            <p className="text-white/70 text-base leading-relaxed font-normal">
              We design bespoke care packages tailored exactly to your family&apos;s circumstances — including multi-city operations, custom check-in frequencies, and specialised requirements.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="bg-[#D4A24C] text-white px-8 py-4 rounded-full hover:bg-[#c4913c] hover:shadow-xl transition-all text-sm font-semibold inline-flex items-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
