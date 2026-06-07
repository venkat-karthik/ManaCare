'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  id: number
  title: string
  subtitle: string
  category: string
  image: string
  icon: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Parent Care & Wellness',
    subtitle: 'Ensuring your parents are healthy, happy, and supported in India',
    category: 'Parents',
    image: 'bg-gradient-to-br from-primary/20 to-primary/5',
    icon: '👨‍👩‍👧'
  },
  {
    id: 2,
    title: 'Household Management',
    subtitle: 'Professional domestic help and household maintenance coordination',
    category: 'Household',
    image: 'bg-gradient-to-br from-accent/20 to-accent/5',
    icon: '🏠'
  },
  {
    id: 3,
    title: 'Property Oversight',
    subtitle: 'Complete inspection, maintenance, and administrative supervision',
    category: 'Property',
    image: 'bg-gradient-to-br from-primary/30 to-primary/10',
    icon: '🏡'
  },
  {
    id: 4,
    title: 'Management & Coordination',
    subtitle: 'Seamless multi-city operations and extended family support',
    category: 'Management',
    image: 'bg-gradient-to-br from-accent/30 to-accent/10',
    icon: '📋'
  }
]

export function PremiumSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
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
            {/* Background Gradient */}
            <div className={`absolute inset-0 ${slide.image}`}></div>

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

                {/* Icon */}
                <div className="text-6xl md:text-8xl lg:text-9xl opacity-80">{slide.icon}</div>

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

            {/* Floating Cards on Right (Desktop) */}
            <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4 pr-8 xl:pr-16">
              {slides.map((s, idx) => (
                <div
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  className={`cursor-pointer transition-all duration-300 rounded-[20px] overflow-hidden backdrop-blur-md border ${
                    idx === currentSlide
                      ? 'w-72 h-24 bg-white/15 border-white/30 shadow-2xl'
                      : 'w-16 h-16 bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  {idx === currentSlide && (
                    <div className="p-3 space-y-1.5 h-full flex flex-col justify-center">
                      <p className="text-white text-xs font-bold uppercase tracking-wider">{s.category}</p>
                      <p className="text-white/80 text-xs leading-tight line-clamp-2">{s.title}</p>
                    </div>
                  )}
                </div>
              ))}
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
