'use client'

import { AasaraIcon } from '../AasaraIcon'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Transparent only on homepage before scrolling
  const isTransparent = isHome && !scrolled

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Plans', href: '/plans' },
    { label: 'Locations', href: '/locations' },
    { label: 'Servostay', href: '/servostay' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,border-color,box-shadow] duration-300 h-24 ${
        isTransparent
          ? 'bg-transparent border-b border-b-transparent shadow-none'
          : 'bg-white border-b border-primary/10 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-24 flex items-center justify-between">

        <Link href="/" className="hover:opacity-90 transition-opacity">
          <AasaraIcon transparent={isTransparent} />
        </Link>

        {/* Desktop & Tablet Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-6 xl:gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[10px] sm:text-[11px] lg:text-xs uppercase tracking-wider lg:tracking-widest font-bold py-1 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-bright-green'
                    : isTransparent
                    ? 'text-white/80 hover:text-bright-green'
                    : 'text-dark/70 hover:text-bright-green'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block shrink-0">
          <Link
            href="/contact"
            className={`px-3.5 lg:px-7 py-2.5 lg:py-3 rounded-full hover:-translate-y-0.5 hover:shadow-md transition-all text-[10px] sm:text-[11px] lg:text-xs font-bold uppercase tracking-wider shadow-sm whitespace-nowrap ${
              isTransparent
                ? 'bg-accent text-white hover:shadow-lg'
                : 'bg-primary text-white hover:bg-primary-hover'
            }`}
          >
            Book Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 rounded-xl transition-colors ${
            isTransparent
              ? 'text-white hover:bg-white/10'
              : 'text-dark hover:bg-light-gray'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          className={`absolute top-24 left-0 right-0 shadow-xl md:hidden animate-in fade-in slide-in-from-top-4 duration-200 z-40 backdrop-blur-md max-h-[calc(100vh-6rem)] overflow-y-auto ${
            isTransparent
              ? 'bg-navy/95 border-b border-white/10 text-white'
              : 'bg-white/95 border-b border-light-gray text-navy'
          }`}
        >
          <nav className="flex flex-col p-6 gap-3.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs uppercase tracking-wider font-bold py-2 border-b border-white/5 ${
                    isActive
                      ? 'text-bright-green'
                      : isTransparent ? 'text-white/80 hover:text-bright-green' : 'text-dark/80 hover:text-bright-green'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className={`text-center px-6 py-3.5 rounded-full font-bold uppercase tracking-wider mt-3 shadow-md text-xs transition-all ${
                isTransparent
                  ? 'bg-accent text-white hover:shadow-lg'
                  : 'bg-primary text-white hover:bg-primary-hover'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Book Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
