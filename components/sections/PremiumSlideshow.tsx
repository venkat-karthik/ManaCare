'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
    <section className="relative w-full h-screen md:h-[700px] lg:h-[800px] overflow-hidden bg-navy">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent"></div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center px-6 sm:px-10 lg:px-16 max-w-6xl">
              <div className="space-y-6 md:space-y-8 transform transition-all duration-700">
                {/* Category Badge */}
                <div className="inline-flex w-fit">
                  <span className="text-accent font-serif text-sm md:text-base font-bold tracking-widest uppercase bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                    {slide.category}
                  </span>
                </div>

                {/* Headline */}
                <div className="space-y-3 md:space-y-4">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white leading-tight max-w-2xl">
                    {slide.title}
                  </h2>
                  <p className="text-base md:text-lg text-white/80 font-semibold max-w-lg leading-relaxed">
                    {slide.subtitle}
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-4 md:pt-6">
                  <button className="bg-accent text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold uppercase text-sm md:text-base tracking-widest hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Premium Vertical Dots on Right (Desktop) */}
            <div className="hidden lg:flex absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 flex-col gap-6 z-20">
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
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-all border border-white/20 hover:border-white/40 group"
      >
        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-all border border-white/20 hover:border-white/40 group"
      >
        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
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

      {/* Mobile Slide Counter */}
      <div className="absolute bottom-8 right-8 text-white text-sm font-bold tracking-widest uppercase">
        <span className="text-accent">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="text-white/40"> / </span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </section>
  )
}
