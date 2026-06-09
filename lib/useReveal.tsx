'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

// ─── useInView ────────────────────────────────────────────────────────────────
// Fires once when the element enters the viewport.

export function useInView(threshold = 0.18) {
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

// ─── Reveal ───────────────────────────────────────────────────────────────────
// Drop-in wrapper: children animate in when scrolled into view.
// from: 'bottom' | 'left' | 'right' | 'scale'

export function Reveal({
  children,
  delay = 0,
  from = 'bottom',
  className = '',
  threshold = 0.18,
}: {
  children: ReactNode
  delay?: number
  from?: 'bottom' | 'left' | 'right' | 'scale'
  className?: string
  threshold?: number
}) {
  const { ref, inView } = useInView(threshold)

  const hidden =
    from === 'bottom'  ? 'translateY(44px)'
    : from === 'left'  ? 'translateX(-56px)'
    : from === 'right' ? 'translateX(56px)'
    : 'scale(0.88)'

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : hidden,
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
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
