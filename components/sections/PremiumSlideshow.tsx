'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Slide {
  id: number
  title: string
  subtitle: string
  category: string
  image: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Parent Care & Wellness',
    subtitle: 'Ensuring your parents are healthy, happy, and supported in India',
    category: 'Parents',
    image: '/assets/Parent Care & Wellness.png',
  },
  {
    id: 2,
    title: 'Hospital Visit Assistance',
    subtitle: 'Accompanying your loved ones to appointments and managing medical coordination with care',
    category: 'Healthcare',
    image: '/assets/Hospital Visit Assistance.png',
  },
  {
    id: 3,
    title: 'Household Management',
    subtitle: 'Professional domestic help and household maintenance coordination',
    category: 'Household',
    image: '/assets/Household Management.png',
  },
  {
    id: 4,
    title: 'Property Oversight',
    subtitle: 'Complete inspection, maintenance, and administrative supervision',
    category: 'Property',
    image: '/assets/Property Oversight.png',
  },
  {
    id: 5,
    title: 'Management & Coordination',
    subtitle: 'Seamless multi-city operations and extended family support',
    category: 'Management',
    image: '/assets/Management and Coordination.png',
  }
]

export function PremiumSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // 5 sec auto-play

    return () => clearInterval(interval)
  }, [currentSlide, isPaused])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section 
      className="group relative w-full h-[580px] sm:h-[640px] md:h-[680px] lg:h-[760px] bg-[#0a2318] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Styles for dynamic progress animation */}
      <style>{`
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      {/* Dynamic drifting background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[180px] animate-pulse duration-[8000ms] pointer-events-none z-20" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[180px] animate-pulse duration-[6000ms] pointer-events-none z-20" />

      {/* Background Images Layer with smooth cross-fade */}
      <div className="absolute inset-0 w-full h-full z-0">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide
          return (
            <div
              key={slide.id}
              className="absolute inset-0"
              style={{
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 10 : 0,
                transition: 'opacity 1200ms ease-in-out',
                pointerEvents: isActive ? 'auto' : 'none'
              }}
            >
              {/* Ken Burns image zoom */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                  style={{
                    transform: isActive ? 'scale(1.08) translate(2px, 2px)' : 'scale(1) translate(0, 0)',
                    transition: 'transform 6000ms ease-out',
                  }}
                />
              </div>
              {/* Soft dark vignette overlay to make text hover legible */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25 md:from-black/80 md:via-black/45 md:to-transparent pointer-events-none z-10" />
            </div>
          )
        })}
      </div>

      {/* Text Content Overlay Layer (Fades/Slides up on index change) */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-12 pointer-events-none">
          <div className="max-w-2xl lg:max-w-3xl grid grid-cols-1 grid-rows-1">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide
              return (
                <div
                  key={slide.id}
                  className={`col-start-1 row-start-1 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
                    isActive 
                      ? 'opacity-100 translate-y-0 scale-100 z-10' 
                      : 'opacity-0 translate-y-8 scale-95 pointer-events-none z-0'
                  } space-y-6 pointer-events-auto flex flex-col items-start`}
                >
                  {/* Category Badge */}
                  <div className="inline-flex">
                    <span className="text-accent font-sans text-xs sm:text-sm font-bold tracking-widest uppercase bg-accent/15 px-4.5 py-1.5 rounded-full border border-accent/25 backdrop-blur-xs">
                      {slide.category}
                    </span>
                  </div>

                  {/* Headline & Subtitle */}
                  <div className="space-y-4">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white leading-[1.1] tracking-tight">
                      {slide.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl font-medium leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Link
                      href={`/contact?plan=${slide.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover-shine bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-full font-bold uppercase text-xs tracking-widest transition-all duration-300 shadow-lg shadow-accent/20 inline-block cursor-pointer hover:-translate-y-0.5"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Manual Side Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/35 hover:bg-accent border border-white/10 flex items-center justify-center text-white opacity-0 hover:scale-105 group-hover:opacity-100 transition-all duration-300 z-30 cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/35 hover:bg-accent border border-white/10 flex items-center justify-center text-white opacity-0 hover:scale-105 group-hover:opacity-100 transition-all duration-300 z-30 cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Bottom Progress Navigation Bars ("Down Bars") */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-5 gap-3 sm:gap-5 max-w-3xl lg:max-w-4xl">
            {slides.map((s, idx) => {
              const isActive = idx === currentSlide
              return (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  className="group text-left space-y-2 focus:outline-none cursor-pointer"
                >
                  {/* Category labels - hidden on small mobile to ensure clean layout */}
                  <div className="hidden sm:block space-y-0.5">
                    <span className={`text-[9px] font-bold tracking-wider uppercase block transition-colors duration-300 ${
                      isActive ? 'text-accent' : 'text-white/40 group-hover:text-white/60'
                    }`}>
                      {`0${idx + 1}`}
                    </span>
                    <span className={`text-[11px] font-bold block line-clamp-1 transition-colors duration-300 ${
                      isActive ? 'text-white font-bold' : 'text-white/45 group-hover:text-white/70'
                    }`}>
                      {s.category}
                    </span>
                  </div>

                  {/* Horizontal Progress Bar */}
                  <div className="w-full h-[3px] bg-white/20 rounded-full overflow-hidden relative group-hover:bg-white/30 transition-all">
                    {isActive ? (
                      <div 
                        className="h-full bg-accent rounded-full"
                        style={{
                          animationName: 'progressFill',
                          animationDuration: '5s',
                          animationTimingFunction: 'linear',
                          animationFillMode: 'forwards',
                          animationPlayState: isPaused ? 'paused' : 'running'
                        }}
                      />
                    ) : (
                      <div className="h-full bg-transparent w-0" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
