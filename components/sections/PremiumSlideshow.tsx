'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 2500) // 2.5 sec auto-play

    return () => clearInterval(interval)
  }, [currentSlide])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative w-full bg-[#0F172A] py-20 lg:py-28 overflow-hidden border-b border-white/5">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-center min-h-[380px] text-center lg:text-left items-center lg:items-start relative">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide
              return (
                <div
                  key={slide.id}
                  className={`transition-all duration-700 ${
                    isActive ? 'opacity-100 translate-y-0 scale-100 relative' : 'opacity-0 translate-y-4 scale-95 pointer-events-none absolute'
                  } w-full space-y-6`}
                >
                  {/* Category Badge */}
                  <div className="inline-flex w-fit">
                    <span className="text-accent font-serif text-xs md:text-sm font-bold tracking-widest uppercase bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                      {slide.category}
                    </span>
                  </div>

                  {/* Headline */}
                  <div className="space-y-4">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-sm sm:text-base text-white/70 font-medium max-w-lg leading-relaxed mx-auto lg:mx-0">
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <Link
                      href={`/contact?plan=${slide.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-accent text-white px-8 py-3.5 rounded-full font-bold uppercase text-xs tracking-widest hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-accent/20 inline-block cursor-pointer"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* RIGHT COLUMN: Image Showcase (aspect-ratio preserved) */}
          <div className="lg:col-span-6 relative flex justify-center w-full">
            <div className="relative w-full max-w-lg lg:max-w-none h-64 sm:h-80 md:h-[400px] lg:h-[460px] rounded-[32px] overflow-hidden border-2 border-white/10 shadow-2xl bg-[#1e293b]">
              {slides.map((slide, index) => {
                const isActive = index === currentSlide
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out"
                      style={{
                        transform: isActive ? 'scale(1.05)' : 'scale(1)',
                      }}
                    />
                    {/* Shadow overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                )
              })}
            </div>
            
            {/* Premium Vertical Navigation Dots (Desktop only) */}
            <div className="hidden lg:flex absolute -right-8 xl:-right-12 top-1/2 -translate-y-1/2 flex-col gap-6 z-20">
              {slides.map((s, idx) => {
                const isActive = idx === currentSlide
                return (
                  <button
                    key={s.id}
                    onClick={() => goToSlide(idx)}
                    className="group relative flex items-center justify-end"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {/* Tooltip on Hover */}
                    <div className="opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 absolute right-10 bg-navy/95 border border-white/20 backdrop-blur-md px-4 py-2.5 rounded-xl text-left shadow-2xl w-56">
                      <p className="text-accent text-[9px] font-bold uppercase tracking-widest">{s.category}</p>
                      <p className="text-white text-xs font-serif font-semibold leading-snug mt-0.5 line-clamp-2">{s.title}</p>
                    </div>

                    {/* Dot */}
                    <div className="w-8 h-8 flex items-center justify-center">
                      {isActive ? (
                        <div className="relative flex items-center justify-center">
                          {/* Pulsing outer ring */}
                          <div className="absolute w-6 h-6 border border-accent rounded-full animate-ping opacity-35" />
                          {/* Inner active ring */}
                          <div className="w-5 h-5 border border-accent rounded-full flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-accent rounded-full" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-2 h-2 bg-white/40 group-hover:bg-white/80 rounded-full group-hover:scale-125 transition-all duration-300" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

        </div>

        {/* Mobile Navigation Dots */}
        <div className="lg:hidden flex items-center justify-center gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full border border-white/40 ${
                index === currentSlide
                  ? 'w-10 h-3 bg-accent border-accent'
                  : 'w-3 h-3 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
