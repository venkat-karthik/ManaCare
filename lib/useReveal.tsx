'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

// ─── useInView ────────────────────────────────────────────────────────────────
// Fires once when the element enters the viewport.

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

// ─── Reveal ───────────────────────────────────────────────────────────────────
// Drop-in wrapper: children animate in smoothly when scrolled into view.
// from: 'bottom' | 'left' | 'right' | 'scale'

export function Reveal({
  children,
  delay = 0,
  from = 'bottom',
  className = '',
  threshold = 0.1,
}: {
  children: ReactNode
  delay?: number
  from?: 'bottom' | 'left' | 'right' | 'scale'
  className?: string
  threshold?: number
}) {
  const { ref, inView } = useInView(threshold)

  const hidden =
    from === 'bottom'  ? 'translate3d(0, 24px, 0)'
    : from === 'left'  ? 'translate3d(-24px, 0, 0)'
    : from === 'right' ? 'translate3d(24px, 0, 0)'
    : 'scale(0.96)'

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0)' : hidden,
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}

// ─── StaggerReveal ────────────────────────────────────────────────────────────
// Reveal with auto-staggered children delay.

export function StaggerReveal({
  children,
  baseDelay = 0,
  stagger = 0.1,
  from = 'bottom',
  className = '',
}: {
  children: ReactNode[]
  baseDelay?: number
  stagger?: number
  from?: 'bottom' | 'left' | 'right' | 'scale'
  className?: string
}) {
  return (
    <div className={className}>
      {(children as ReactNode[]).map((child, i) => (
        <Reveal key={i} delay={baseDelay + i * stagger} from={from}>
          {child}
        </Reveal>
      ))}
    </div>
  )
}
