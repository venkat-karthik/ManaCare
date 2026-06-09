'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import Link from 'next/link'
import { Heart, Users, Home, Shield, AlertCircle, Check, ArrowRight, ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState, type ReactNode } from 'react'

// ─── DATA ─────────────────────────────────────────────────────────────────────

const scenes = [
  {
    id: 'parent-care',
    icon: Heart,
    questionEmotion: "You're thousands of miles away.",
    question: "Who is making sure your parents are okay today?",
    questionSub: "Did they take their medicine? Did they eat? Are they lonely? The distance makes it impossible to know.",
    questionBg: 'from-[#0F172A] via-[#0d1f17] to-[#0F172A]',
    questionAccent: '#1B5E43',
    answerTag: 'Parent Care & Elderly Companionship',
    answerHeadline: 'We become your eyes, ears & hands in India.',
    answerBody: 'Our dedicated care managers visit your parents regularly — checking their health, handling errands, escorting them to hospitals, and making sure they never feel alone. You get detailed reports. You stay in control. They stay safe.',
    answerImage: '/assets/Parent Care & Wellness.png',
    details: [
      'Regular wellness check-ins — daily or weekly, your choice',
      'Medication management, reminders & pharmacy delivery',
      'Escorted hospital visits with reports shared directly to you',
      'Grocery runs, utility bills & daily chore support',
      'Companionship visits to keep loneliness away',
    ],
    answerBg: '#FAFDF9',
    answerAccent: '#1B5E43',
    answerAccentLight: 'rgba(27,94,67,0.1)',
  },
  {
    id: 'relative-care',
    icon: Users,
    questionEmotion: 'Family milestones happen without you.',
    question: 'Who is there for your siblings, cousins and extended family?',
    questionSub: "Admissions, emergencies, family events — life doesn't pause because you're abroad.",
    questionBg: 'from-[#1a1000] via-[#1a0f00] to-[#0F172A]',
    questionAccent: '#D4A24C',
    answerTag: 'Relative & Family Coordination',
    answerHeadline: 'We keep your family connected, no matter the distance.',
    answerBody: 'From coordinating tutoring for younger siblings to supporting elderly relatives with check-ins and logistics — we act as your local family liaison so nothing falls through the cracks.',
    answerImage: '/assets/Management and Coordination.png',
    details: [
      'Coordination of tutoring, activities & academic support',
      'Elderly relative check-ins and emergency backups',
      'Logistics for family events, gatherings & local travel',
      'Regular updates & video call arrangements for you',
    ],
    answerBg: '#0F172A',
    answerAccent: '#D4A24C',
    answerAccentLight: 'rgba(212,162,76,0.12)',
  },
  {
    id: 'property-management',
    icon: Home,
    questionEmotion: 'Your property in India sits unattended.',
    question: 'Is your home being maintained — or quietly falling apart?',
    questionSub: "Encroachment, damage, unpaid taxes, neglectful tenants. Without local oversight, the risks are real.",
    questionBg: 'from-[#0F172A] via-[#0d1f17] to-[#0F172A]',
    questionAccent: '#1B5E43',
    answerTag: 'Property Management',
    answerHeadline: 'Your property is inspected, maintained and protected every month.',
    answerBody: "We conduct physical site visits, coordinate repairs, manage tenants, pay dues on time, and send you detailed photo and video reports — so you always know exactly what's happening on the ground.",
    answerImage: '/assets/Property Oversight.png',
    details: [
      'Monthly physical inspections with photos, videos & GPS',
      'Repairs, painting, cleaning & gardening coordination',
      'Tenant management, rent monitoring & contract admin',
      'Property tax, utility & municipal dues payment',
      'Legal paperwork, documentation & registration help',
    ],
    answerBg: '#FDFAF6',
    answerAccent: '#1B5E43',
    answerAccentLight: 'rgba(27,94,67,0.08)',
  },
  {
    id: 'household-assistance',
    icon: Shield,
    questionEmotion: 'Something broke at home.',
    question: "Who arranges the plumber, electrician or househelp for your parents?",
    questionSub: "When you're not there, a leaky tap or faulty wiring becomes a huge burden for aging parents.",
    questionBg: 'from-[#1a1000] via-[#0f0c00] to-[#0F172A]',
    questionAccent: '#D4A24C',
    answerTag: 'Domestic Help & Home Maintenance',
    answerHeadline: "We handle every repair, every hire, every safety check.",
    answerBody: "We vet and source trusted domestic helpers, coordinate certified technicians, and run full home safety audits — so your parents live in a home that works perfectly and stays safe.",
    answerImage: '/assets/Household Management.png',
    details: [
      'Verified domestic helpers, cooks & security guards',
      'Certified plumbers, electricians & carpenters on call',
      'Safety audits — gas, electrics & fall prevention',
      'Appliance servicing: AC, water purifier & more',
    ],
    answerBg: '#0F172A',
    answerAccent: '#D4A24C',
    answerAccentLight: 'rgba(212,162,76,0.1)',
  },
  {
    id: 'emergency-support',
    icon: AlertCircle,
    questionEmotion: "It's 3am. Your phone rings.",
    question: 'Is someone already at the hospital with your parent right now?',
    questionSub: "In a medical emergency, every minute matters. Being 8,000 km away is the worst feeling in the world.",
    questionBg: 'from-[#0a0f0c] via-[#050f08] to-[#0F172A]',
    questionAccent: '#1B5E43',
    answerTag: '24/7 Emergency Response',
    answerHeadline: 'We are already there before you even hang up.',
    answerBody: 'Our emergency response team operates around the clock. The moment a crisis occurs, we dispatch support, accompany your parent to hospital, coordinate doctors, and keep you informed in real time — every step of the way.',
    answerImage: '/assets/Hospital Visit Assistance.png',
    details: [
      '24/7 dedicated emergency hotline for registered families',
      'Instant ambulance dispatch & hospital coordination',
      'Care manager accompanies your parent to the ER',
      'Real-time WhatsApp & phone updates to you',
      'Post-discharge follow-up & recovery care setup',
    ],
    answerBg: '#FAFDF9',
    answerAccent: '#1B5E43',
    answerAccentLight: 'rgba(27,94,67,0.08)',
  },
]

// ─── HOOKS ────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

// ─── SCROLL PROGRESS BAR ──────────────────────────────────────────────────────

function ScrollBar() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const fn = () => {
      const d = document.documentElement
      setPct(d.scrollHeight - d.clientHeight > 0
        ? (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100
        : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px]" style={{ background: 'rgba(255,255,255,0.06)' }}>
      <div
        className="h-full"
        style={{
          width: `${pct}%`,
          background: 'linear-gradient(to right, #1B5E43, #D4A24C, #1B5E43)',
          transition: 'width 80ms linear',
        }}
      />
    </div>
  )
}

// ─── ANIMATED TEXT WRAPPER ────────────────────────────────────────────────────

function Reveal({
  children,
  delay = 0,
  from = 'bottom',
  className = '',
}: {
  children: ReactNode
  delay?: number
  from?: 'bottom' | 'left' | 'right' | 'scale'
  className?: string
}) {
  const { ref, inView } = useInView(0.15)
  const hidden =
    from === 'bottom' ? 'translateY(48px)'
    : from === 'left' ? 'translateX(-64px)'
    : from === 'right' ? 'translateX(64px)'
    : 'scale(0.88)'

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : hidden,
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

// ─── QUESTION PANEL ───────────────────────────────────────────────────────────

function QuestionPanel({ scene, isLast }: { scene: typeof scenes[0]; isLast: boolean }) {
  const { ref: panelRef, inView: panelIn } = useInView(0.1)

  return (
    <div
      ref={panelRef}
      className={`relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 text-center overflow-hidden bg-gradient-to-b ${scene.questionBg}`}
    >
      {/* Ambient glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 700, height: 700,
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: scene.questionAccent,
          opacity: 0.07,
          filter: 'blur(140px)',
        }}
      />

      {/* Subtle grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id={`grid-${scene.id}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="60" y1="0" x2="60" y2="60" stroke={scene.questionAccent} strokeWidth="1" />
            <line x1="0" y1="60" x2="60" y2="60" stroke={scene.questionAccent} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${scene.id})`} />
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        {/* Icon */}
        <div
          style={{
            opacity: panelIn ? 1 : 0,
            transform: panelIn ? 'scale(1)' : 'scale(0.5)',
            transition: 'all 0.6s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          <div
            className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center"
            style={{
              background: `${scene.questionAccent}20`,
              border: `1.5px solid ${scene.questionAccent}40`,
            }}
          >
            <scene.icon size={28} style={{ color: scene.questionAccent }} />
          </div>
        </div>

        {/* Emotional opener */}
        <div
          style={{
            opacity: panelIn ? 1 : 0,
            transform: panelIn ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease 0.15s',
          }}
        >
          <p
            className="text-sm font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ color: scene.questionAccent }}
          >
            {scene.questionEmotion}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-white leading-[1.1]">
            {scene.question}
          </h2>
        </div>

        {/* Sub-text */}
        <div
          style={{
            opacity: panelIn ? 1 : 0,
            transform: panelIn ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.3s',
          }}
        >
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            {scene.questionSub}
          </p>
        </div>

        {/* Scroll nudge */}
        <div
          className="flex flex-col items-center gap-2 pt-4"
          style={{
            opacity: panelIn ? 1 : 0,
            transition: 'opacity 0.7s ease 0.5s',
          }}
        >
          <p className="text-white/25 text-xs tracking-[0.2em] uppercase">scroll for the answer</p>
          <div className="animate-bounce" style={{ animationDuration: '1.6s' }}>
            <ChevronDown size={20} style={{ color: scene.questionAccent, opacity: 0.6 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── ANSWER / REVEAL PANEL ────────────────────────────────────────────────────

function AnswerPanel({ scene, index }: { scene: typeof scenes[0]; index: number }) {
  const isDark = scene.answerBg === '#0F172A'
  const flipLayout = index % 2 !== 0   // alternate image left / right each section

  return (
    <div
      id={scene.id}
      className="relative overflow-hidden"
      style={{ background: scene.answerBg }}
    >
      {/* Background radial glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 900, height: 700,
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: scene.answerAccent,
          opacity: isDark ? 0.05 : 0.04,
          filter: 'blur(160px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">

        {/* Tag + "Yes" badge + headline — centred */}
        <Reveal delay={0} from="bottom" className="text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: scene.answerAccent }} />
            <span
              className="text-xs font-bold tracking-[0.22em] uppercase"
              style={{ color: scene.answerAccent }}
            >
              {scene.answerTag}
            </span>
            <div className="h-px w-10" style={{ background: scene.answerAccent }} />
          </div>

          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-7"
            style={{
              background: `${scene.answerAccent}15`,
              border: `1px solid ${scene.answerAccent}30`,
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: scene.answerAccent }}
            />
            <span className="text-sm font-semibold" style={{ color: scene.answerAccent }}>
              Yes — ManaCare is here for that.
            </span>
          </div>

          <h3
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight max-w-3xl mx-auto"
            style={{ color: isDark ? '#fff' : '#0F172A' }}
          >
            {scene.answerHeadline}
          </h3>
        </Reveal>

        {/* Body + features — LEFT | Image — RIGHT  (flipped on odd scenes) */}
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>

          {/* TEXT COLUMN */}
          <Reveal delay={0.1} from={flipLayout ? 'right' : 'left'} className={flipLayout ? 'lg:order-2' : ''}>
            <div className="space-y-7">
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: isDark ? 'rgba(255,255,255,0.62)' : 'rgba(15,23,42,0.65)' }}
              >
                {scene.answerBody}
              </p>

              <ul className="space-y-3.5">
                {scene.details.map((d, i) => (
                  <Reveal key={i} delay={0.18 + i * 0.07} from={flipLayout ? 'right' : 'left'}>
                    <li className="flex items-start gap-4">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: scene.answerAccentLight }}
                      >
                        <Check size={12} strokeWidth={3} style={{ color: scene.answerAccent }} />
                      </div>
                      <span
                        className="text-sm sm:text-base leading-relaxed"
                        style={{ color: isDark ? 'rgba(255,255,255,0.72)' : 'rgba(15,23,42,0.72)' }}
                      >
                        {d}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={0.6} from="bottom">
                <Link
                  href={`/contact?service=${scene.id}`}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                  style={{
                    background: scene.answerAccent,
                    color: '#fff',
                    boxShadow: `0 8px 32px ${scene.answerAccent}40`,
                  }}
                >
                  <span>Get this service for my family</span>
                  <ArrowRight size={15} />
                </Link>
              </Reveal>
            </div>
          </Reveal>

          {/* IMAGE COLUMN */}
          <Reveal delay={0.2} from={flipLayout ? 'left' : 'right'} className={flipLayout ? 'lg:order-1' : ''}>
            <ServiceImage scene={scene} isDark={isDark} />
          </Reveal>

        </div>
      </div>
    </div>
  )
}


// ─── SERVICE IMAGE CARD ───────────────────────────────────────────────────────

function ServiceImage({ scene, isDark }: { scene: typeof scenes[0]; isDark: boolean }) {
  return (
    <div className="space-y-5 max-w-lg mx-auto lg:max-w-none w-full">
      {/* Main photo */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl"
        style={{
          aspectRatio: '4/3',
          border: `2px solid ${scene.answerAccent}28`,
          boxShadow: `0 32px 80px ${scene.answerAccent}20`,
        }}
      >
        <img
          src={scene.answerImage!}
          alt={scene.answerTag}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        {/* Dark gradient overlay so caption is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

        {/* Caption bar at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
          <div>
            <p className="text-white/55 text-xs font-medium mb-1">ManaCare — on the ground</p>
            <p className="text-white font-semibold text-sm leading-snug">{scene.answerTag}</p>
          </div>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-lg"
            style={{ background: scene.answerAccent }}
          >
            <scene.icon size={18} color="#fff" />
          </div>
        </div>

        {/* Top shimmer accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(to right, ${scene.answerAccent}, ${isDark ? '#D4A24C' : '#1B5E43'}, ${scene.answerAccent}50)` }}
        />
      </div>

      {/* Trust badge */}
      <TrustBadge accent={scene.answerAccent} isDark={isDark} />
    </div>
  )
}


// ─── TRUST BADGE ─────────────────────────────────────────────────────────────

function TrustBadge({ accent, isDark }: { accent: string; isDark: boolean }) {
  return (
    <div
      className="rounded-2xl px-5 py-4 flex items-center gap-4"
      style={{
        background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
        border: `1px solid ${accent}18`,
      }}
    >
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
        style={{ background: `${accent}15` }}
      >
        <Shield size={16} style={{ color: accent }} />
      </div>
      <p
        className="text-xs leading-relaxed"
        style={{ color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(15,23,42,0.5)' }}
      >
        All services are managed by verified, trained ManaCare professionals — fully transparent, fully accountable.
      </p>
    </div>
  )
}

// ─── BRIDGE / TRANSITION BETWEEN SCENES ──────────────────────────────────────

function SceneBridge({ fromAccent, toAccent }: { fromAccent: string; toAccent: string }) {
  const { ref, inView } = useInView(0.5)
  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center py-10 overflow-hidden"
      aria-hidden="true"
      style={{ background: '#0a0f0c' }}
    >
      {/* vertical gradient line */}
      <div
        className="w-px"
        style={{
          height: inView ? 80 : 0,
          background: `linear-gradient(to bottom, ${fromAccent}60, ${toAccent}60)`,
          transition: 'height 0.8s cubic-bezier(0.22,1,0.36,1)',
        }}
      />
      {/* dot */}
      <div
        className="w-3 h-3 rounded-full mt-3"
        style={{
          background: toAccent,
          opacity: inView ? 0.7 : 0,
          transition: 'opacity 0.5s ease 0.6s',
          boxShadow: `0 0 12px ${toAccent}80`,
        }}
      />
    </div>
  )
}

// ─── STATIC PARTICLES (pre-computed to avoid SSR/client hydration mismatch) ──
// Never use Math.random() inside JSX render — it differs between server & client.

const PARTICLES = Array.from({ length: 55 }, (_, i) => ({
  w:   1 + ((i * 37 + 13) % 20) / 10,
  h:   1 + ((i * 53 + 7)  % 20) / 10,
  top: ((i * 173 + 29) % 1000) / 10,
  left:((i * 211 + 61) % 1000) / 10,
  gold: i % 4 === 0,
  op:  0.08 + ((i * 41 + 3) % 40) / 100,
  dur: 2 + ((i * 67 + 11) % 40) / 10,
  del: ((i * 97 + 17) % 40) / 10,
}))

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col font-sans">
      <ScrollBar />
      <Header />

      <main className="flex-grow pt-20">

        {/* ── CINEMATIC HERO ── */}
        <section className="relative min-h-[100vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #050d08 0%, #0a1f12 50%, #0F172A 100%)' }}
        >
          {/* Floating particles — positions are deterministic (no Math.random) */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {PARTICLES.map((p, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-pulse"
                style={{
                  width: p.w,
                  height: p.h,
                  top: `${p.top}%`,
                  left: `${p.left}%`,
                  background: p.gold ? '#D4A24C' : '#1B5E43',
                  opacity: p.op,
                  animationDuration: `${p.dur}s`,
                  animationDelay: `${p.del}s`,
                }}
              />
            ))}
          </div>

          {/* Glows */}
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[500px] rounded-full pointer-events-none"
            style={{ background: '#1B5E43', opacity: 0.12, filter: 'blur(140px)' }} />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: '#D4A24C', opacity: 0.07, filter: 'blur(120px)' }} />

          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <p className="text-xs font-bold tracking-[0.28em] uppercase" style={{ color: '#D4A24C' }}>
              ManaCare — What We Do
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-serif text-white leading-[1.08]">
              Every worry you carry<br />
              <span className="italic font-normal" style={{ color: '#D4A24C' }}>
                we carry it too.
              </span>
            </h1>

            <p className="text-white/50 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Scroll down and see how ManaCare answers the questions that keep you awake at night — one real solution at a time.
            </p>

            {/* Scroll cue */}
            <div className="flex flex-col items-center gap-3 pt-6">
              <p className="text-white/25 text-xs tracking-[0.25em] uppercase">begin scrolling</p>
              <div className="flex flex-col gap-2 animate-bounce" style={{ animationDuration: '2s' }}>
                <div className="w-px h-8 mx-auto" style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,162,76,0.6))' }} />
                <ChevronDown size={18} style={{ color: '#D4A24C', opacity: 0.7 }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── QUESTION → ANSWER SCENES ── */}
        {scenes.map((scene, i) => (
          <div key={scene.id}>
            {/* Dark bridge before each question (except first) */}
            {i > 0 && (
              <SceneBridge
                fromAccent={scenes[i - 1].answerAccent}
                toAccent={scene.questionAccent}
              />
            )}

            {/* The question — full-screen pain point */}
            <QuestionPanel scene={scene} isLast={i === scenes.length - 1} />

            {/* The answer — ManaCare's reveal */}
            <AnswerPanel scene={scene} index={i} />
          </div>
        ))}

        {/* ── CLOSING CTA ── */}
        <section
          className="relative overflow-hidden py-32 px-6 sm:px-10 lg:px-12 text-center"
          style={{ background: 'linear-gradient(160deg, #050d08 0%, #0a1f12 60%, #0F172A 100%)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(212,162,76,0.1) 0%, transparent 70%)' }}
          />
          <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[0.05]" viewBox="0 0 500 600" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
            {[80, 160, 240, 320, 400, 480].map((r, i) => (
              <circle key={i} cx="500" cy="300" r={r} fill="none" stroke="#D4A24C" strokeWidth="1.5" />
            ))}
          </svg>

          <div className="relative max-w-2xl mx-auto space-y-8">
            <Reveal from="scale">
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-2"
                style={{ background: 'rgba(212,162,76,0.12)', border: '1px solid rgba(212,162,76,0.25)' }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#D4A24C' }} />
                <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: '#D4A24C' }}>
                  You are not alone
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1} from="bottom">
              <h2 className="text-4xl sm:text-5xl font-bold font-serif text-white leading-tight">
                One call. We handle the rest.
              </h2>
            </Reveal>

            <Reveal delay={0.2} from="bottom">
              <p className="text-white/55 text-base sm:text-lg leading-relaxed">
                Whether it&apos;s a single service or a fully custom care package — ManaCare is your trusted partner on the ground in India.
              </p>
            </Reveal>

            <Reveal delay={0.35} from="bottom">
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                  style={{
                    background: '#D4A24C',
                    color: '#fff',
                    boxShadow: '0 8px 32px rgba(212,162,76,0.35)',
                  }}
                >
                  Schedule a Free Consultation
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/plans"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all duration-300"
                >
                  See Care Plans
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
