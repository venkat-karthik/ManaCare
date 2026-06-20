'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Play, Pause, SkipForward, Heart, Home } from 'lucide-react'

interface StoryBeat {
  image: string
  subtitle: string
  caption: string
  duration: number
}

const parentalStory: StoryBeat[] = [
  {
    image: '/assets/Parent Care & Wellness.png',
    subtitle: 'Every morning, your parents wake up in India.',
    caption: 'Miles away, you wonder — did they eat? Did they take their medicine? Are they okay?',
    duration: 4500,
  },
  {
    image: '/assets/care_hospital_transport.png',
    subtitle: 'Our care manager arrives at their door.',
    caption: 'Picking them up, accompanying them to every hospital visit — safely, warmly, on time.',
    duration: 4500,
  },
  {
    image: '/assets/care_hospital_assistance.png',
    subtitle: 'We stay right beside them throughout.',
    caption: 'At-hospital assistance, IV coordination, blood bank access — we handle every detail so they never feel alone.',
    duration: 4500,
  },
  {
    image: '/assets/care_evening_update.png',
    subtitle: 'Every evening, you receive an update.',
    caption: 'Photos, health reports, and a voice note — delivered to your WhatsApp at 6 PM, without fail.',
    duration: 4500,
  },
]

const propertyStory: StoryBeat[] = [
  {
    image: '/assets/Property Oversight.png',
    subtitle: 'Your property in India sits unattended.',
    caption: 'Rain damage, encroachment, unpaid taxes, neglectful tenants — the risks are very real without local eyes.',
    duration: 4500,
  },
  {
    image: '/assets/property_inspection_professional.png',
    subtitle: 'Our team conducts monthly physical inspections.',
    caption: 'Structural health checks, monsoon readiness, depreciation assessments — documented with GPS-verified photos.',
    duration: 4500,
  },
  {
    image: '/assets/property_selling_rental.png',
    subtitle: 'Looking to rent, sell, or build?',
    caption: 'We scout locations, find verified tenants, manage rental income, coordinate construction — end to end.',
    duration: 4500,
  },
  {
    image: '/assets/Management and Coordination.png',
    subtitle: 'You receive a full report every month.',
    caption: 'Repairs coordinated, bills paid, tenants managed — complete transparency without a single trip back.',
    duration: 4500,
  },
]

export function StoryPlayer() {
  const [activeStory, setActiveStory] = useState<'parental' | 'property'>('parental')
  const [currentBeat, setCurrentBeat] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const story = activeStory === 'parental' ? parentalStory : propertyStory

  const clearTimers = useCallback(() => {
    if (intervalRef.current) clearTimeout(intervalRef.current)
    if (progressRef.current) clearInterval(progressRef.current)
  }, [])

  const advanceBeat = useCallback(() => {
    setSubtitleVisible(false)
    setTimeout(() => {
      setCurrentBeat(prev => (prev + 1) % story.length)
      setProgress(0)
      setSubtitleVisible(true)
    }, 400)
  }, [story.length])

  const startProgress = useCallback(() => {
    clearTimers()
    if (!isPlaying) return
    const beat = story[currentBeat]
    const tickInterval = 50
    const totalTicks = beat.duration / tickInterval
    let tick = 0

    progressRef.current = setInterval(() => {
      tick++
      setProgress((tick / totalTicks) * 100)
      if (tick >= totalTicks) {
        clearInterval(progressRef.current!)
      }
    }, tickInterval)

    intervalRef.current = setTimeout(advanceBeat, beat.duration)
  }, [isPlaying, story, currentBeat, advanceBeat, clearTimers])

  useEffect(() => {
    startProgress()
    return clearTimers
  }, [currentBeat, isPlaying, activeStory]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleStorySwitch = (s: 'parental' | 'property') => {
    clearTimers()
    setActiveStory(s)
    setCurrentBeat(0)
    setProgress(0)
    setSubtitleVisible(true)
    setIsPlaying(true)
  }

  const handleSkip = () => {
    clearTimers()
    advanceBeat()
  }

  const handlePlayPause = () => {
    setIsPlaying(p => !p)
    if (isPlaying) clearTimers()
  }

  const beat = story[currentBeat]

  return (
    <section className="relative py-24 px-6 sm:px-10 lg:px-12 bg-navy overflow-hidden border-y border-white/5">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: '#1B5E43', opacity: 0.06, filter: 'blur(120px)' }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-3">
          <span className="text-[10px] font-bold tracking-[0.25em] text-accent uppercase font-sans">Our Story in Action</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">See How We Care</h2>
          <p className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
            A cinematic walkthrough of how ManaCare works for your family — every step, every service, every day.
          </p>
        </div>

        {/* Story Type Tabs */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => handleStorySwitch('parental')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
              activeStory === 'parental'
                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30'
                : 'border-white/15 text-white/50 hover:border-white/30 hover:text-white'
            }`}
          >
            <Heart size={14} />
            Parental Care
          </button>
          <button
            onClick={() => handleStorySwitch('property')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
              activeStory === 'property'
                ? 'bg-accent text-white border-accent shadow-lg shadow-accent/30'
                : 'border-white/15 text-white/50 hover:border-white/30 hover:text-white'
            }`}
          >
            <Home size={14} />
            Property Care
          </button>
        </div>

        {/* Story Player */}
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-white/10 bg-[#0a0f0c] h-[340px] sm:h-auto sm:aspect-[16/7] w-full">

          {/* Image */}
          {story.map((b, idx) => (
            <div
              key={`${activeStory}-${idx}`}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: idx === currentBeat ? 1 : 0 }}
            >
              <img
                src={b.image}
                alt={b.subtitle}
                className="w-full h-full object-cover"
              />
              {/* Cinematic gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
              {/* Left vignette */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            </div>
          ))}

          {/* Letterbox bars */}
          <div className="absolute top-0 left-0 right-0 h-[6%] bg-black z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-[6%] bg-black z-10" />

          {/* Beat indicators top */}
          <div className="absolute top-[8%] left-6 right-6 flex gap-1.5 z-20">
            {story.map((_, idx) => (
              <div key={idx} className="h-0.5 flex-1 rounded-full bg-white/20 overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-none"
                  style={{
                    width: idx < currentBeat ? '100%' : idx === currentBeat ? `${progress}%` : '0%',
                    transition: idx === currentBeat ? 'none' : undefined,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Story badge */}
          <div className="absolute top-[14%] left-6 z-20">
            <span
              className="text-[9px] font-bold tracking-widest px-3 py-1.5 rounded-full uppercase border backdrop-blur-sm"
              style={{
                background: activeStory === 'parental' ? 'rgba(27,94,67,0.4)' : 'rgba(212,162,76,0.35)',
                borderColor: activeStory === 'parental' ? 'rgba(27,94,67,0.6)' : 'rgba(212,162,76,0.5)',
                color: activeStory === 'parental' ? '#6ee7b7' : '#fcd34d',
              }}
            >
              {activeStory === 'parental' ? '❤ Parental Care' : '🏠 Property Management'} — Scene {currentBeat + 1}/{story.length}
            </span>
          </div>

          {/* Subtitles */}
          <div
            className="absolute bottom-6 left-6 right-20 sm:bottom-[12%] sm:right-6 z-20 space-y-2"
            style={{
              opacity: subtitleVisible ? 1 : 0,
              transform: subtitleVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            {/* Main subtitle */}
            <div className="inline-block">
              <p className="text-white font-serif font-bold text-lg sm:text-2xl leading-tight drop-shadow-lg max-w-2xl">
                {beat.subtitle}
              </p>
            </div>
            {/* Caption (subtitle track) */}
            <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg inline-block max-w-2xl">
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed font-medium">
                {beat.caption}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-6 right-6 sm:bottom-[10%] z-20 flex items-center gap-2">
            <button
              onClick={handlePlayPause}
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <button
              onClick={handleSkip}
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <SkipForward size={14} />
            </button>
          </div>
        </div>

        {/* Beat navigation dots */}
        <div className="flex justify-center gap-2 mt-5">
          {story.map((b, idx) => (
            <button
              key={idx}
              onClick={() => {
                clearTimers()
                setCurrentBeat(idx)
                setProgress(0)
                setSubtitleVisible(true)
                setIsPlaying(true)
              }}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentBeat
                  ? 'w-8 h-2 bg-accent'
                  : 'w-2 h-2 bg-white/25 hover:bg-white/50'
              }`}
              title={b.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
