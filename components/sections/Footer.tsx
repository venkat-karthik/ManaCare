import { AasaraIcon } from '../AasaraIcon'
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react'
import Link from 'next/link'
import { CONTACT_PHONE, CONTACT_PHONE_RAW, CONTACT_EMAIL, OFFICE_NAME, OFFICE_LANDMARK, OFFICE_CITY_STATE, OFFICE_MAPS_URL } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-navy text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 md:py-20">
        
        {/* Main Grid: Mobile (1 col), Tablet (2 cols), Desktop (12 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/5">
          
          {/* Brand Presentation Column */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <AasaraIcon />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm font-medium">
              Aasara provides a highly dedicated, professional care coordination system for Non-Resident Indian families. We act as your trusted local eyes and ears, securing your parents' wellness and assets back home.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-accent font-serif">Services</h4>
            <ul className="space-y-3 text-xs text-white/70 font-semibold uppercase tracking-wider">
              <li><Link href="/services#parent-care" className="hover:text-accent transition-colors">Parent Care</Link></li>
              <li><Link href="/services#property-management" className="hover:text-accent transition-colors">Property Management</Link></li>
              <li><Link href="/servostay" className="hover:text-accent transition-colors">Servostay Stays</Link></li>
            </ul>
          </div>

          {/* Company Links Column */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-accent font-serif">Organization</h4>
            <ul className="space-y-3 text-xs text-white/70 font-semibold uppercase tracking-wider">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/plans" className="hover:text-accent transition-colors">Care Plans</Link></li>
              <li><Link href="/locations" className="hover:text-accent transition-colors">Active Locations</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Details & Office Column */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-accent font-serif">Headquarters & Contact</h4>
            <div className="space-y-3 text-xs font-semibold tracking-wide">
              <a href={OFFICE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-white/80 hover:text-accent transition-colors group">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="space-y-0.5">
                  <span className="font-bold text-white block">{OFFICE_NAME}</span>
                  <span className="text-white/60 text-[11px] block">{OFFICE_LANDMARK}</span>
                  <span className="text-white/60 text-[11px] block">{OFFICE_CITY_STATE}</span>
                </div>
              </a>
              <div className="pt-2 border-t border-white/10 space-y-2.5">
                <a href={`tel:${CONTACT_PHONE_RAW}`} className="flex items-center gap-2.5 text-white/70 hover:text-accent transition-colors">
                  <Phone size={14} className="text-accent shrink-0" />
                  <span>{CONTACT_PHONE}</span>
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2.5 text-white/70 hover:text-accent transition-colors">
                  <Mail size={14} className="text-accent shrink-0" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
                <a href={`https://wa.me/${CONTACT_PHONE_RAW}`} className="flex items-center gap-2.5 text-white/70 hover:text-accent transition-colors">
                  <MessageCircle size={14} className="text-accent shrink-0" />
                  <span>WhatsApp Coordination</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1.5 text-left">
            <p className="text-white/40 text-xs font-medium">
              © {new Date().getFullYear()} Aasara Support Services. Dedicated care network for NRI families.
            </p>
            <p className="text-white/40 text-[10px] font-medium tracking-wide uppercase">
              Made by <span className="text-accent font-bold hover:text-white transition-colors duration-300">Velfound</span>
            </p>
          </div>
          <div className="flex gap-6 text-xs text-white/40 font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
