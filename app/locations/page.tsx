'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import Link from 'next/link'
import { MapPin, CheckCircle2, Search } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/lib/useReveal'
import { IndiaMap } from '@/components/sections/IndiaMap'

const activeCities = [
  { city: 'Guntur', status: 'Active', details: 'Main Headquarters', special: 'Blood Bank Facility' },
  { city: 'Vijayawada', status: 'Active', details: '6 Dedicated Care Teams' },
  { city: 'Bapatla', status: 'Active', details: '3 Dedicated Care Teams' },
  { city: 'Ongole', status: 'Active', details: '3 Dedicated Care Teams' }
]

const upcomingCities = [
  { city: 'Visakhapatnam', status: 'Expanding Soon', timeline: 'Q3 2026' },
  { city: 'Tirupati', status: 'Expanding Soon', timeline: 'Q3 2026' },
  { city: 'Bangalore', status: 'Expanding Soon', timeline: 'Q4 2026' },
  { city: 'Hyderabad', status: 'Expanding Soon', timeline: 'Q4 2026' },
  { city: 'Chennai', status: 'Expanding Soon', timeline: 'Q1 2027' }
]

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [checkerResult, setCheckerResult] = useState<string | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) return

    const term = searchTerm.toLowerCase()
    const activeMatch = activeCities.some(c => c.city.toLowerCase() === term)
    const upcomingMatch = upcomingCities.some(c => c.city.toLowerCase() === term)

    if (activeMatch) {
      setCheckerResult(`Yes! We are fully active in ${searchTerm}. We have local care managers ready to assist your family immediately.`)
    } else if (upcomingMatch) {
      setCheckerResult(`We are launching soon in ${searchTerm}. Feel free to leave a request to be notified when services start.`)
    } else {
      setCheckerResult(`We do not currently cover "${searchTerm}". However, please request a custom query; we frequently coordinate customized operations for outer zones.`)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-24">
        {/* HEADER */}
        <section className="bg-gradient-to-r from-primary/5 via-primary/3 to-white py-20 md:py-24 px-6 sm:px-10 lg:px-12 border-b border-primary/10 text-center space-y-4">
          <Reveal from="bottom">
            <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Service Locations</span>
          </Reveal>
          <Reveal from="bottom" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif text-navy tracking-tight">
              Our Coverage Areas <br />
              <span className="text-primary font-normal italic">Across Coastal Andhra Pradesh.</span>
            </h1>
          </Reveal>
          <Reveal from="bottom" delay={0.2}>
            <p className="text-dark/80 text-base max-w-2xl mx-auto leading-relaxed font-medium">
              ManaCare delivers premium local support across Guntur (Headquarters with Blood Bank Facility), Vijayawada, Bapatla, and Ongole. Our care managers speak the local language and coordinate seamlessly.
            </p>
          </Reveal>
        </section>

        {/* ACTIVE CITIES */}
        <section className="py-24 px-6 sm:px-10 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <Reveal from="bottom" className="text-center space-y-3 mb-12">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Operational Regions</span>
              <h2 className="text-2xl font-bold font-serif text-navy">Active Service Cities</h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeCities.map((loc, idx) => (
                <Reveal key={idx} from="bottom" delay={idx * 0.1}>
                  <div className="group relative bg-gradient-to-br from-primary/6 to-primary/2 p-6 rounded-[28px] border-2 border-primary/15 flex flex-col justify-between items-start space-y-4 overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />
                    </div>
                    <div className="w-10 h-10 bg-white rounded-[16px] flex items-center justify-center border-2 border-primary/15 text-accent group-hover:scale-110 group-hover:border-accent transition-all duration-300 relative z-10">
                      <MapPin size={18} strokeWidth={1.5} />
                    </div>
                    <div className="relative z-10">
                      <h3 className="font-bold text-navy text-lg font-serif group-hover:text-primary transition-colors duration-300">{loc.city}</h3>
                      <p className="text-xs text-dark/70 mt-1 font-light group-hover:text-dark transition-colors duration-300">{loc.details}</p>
                      {loc.special && (
                        <p className="text-xs text-accent font-bold mt-2 uppercase tracking-wider">{loc.special}</p>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[9px] text-primary font-bold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300 relative z-10">
                      <CheckCircle2 size={10} strokeWidth={3} />
                      Active
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EXPANSION SECTION & CHECKER */}
        <section className="py-24 bg-primary/5 border-y border-primary/10 px-6 sm:px-10 lg:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
            {/* City Checker */}
            <Reveal from="left" className="md:col-span-6 space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Availability Check</span>
              <h2 className="text-3xl font-bold font-serif text-navy leading-tight">Check Availability In Your City</h2>
              <p className="text-dark/80 text-sm leading-relaxed font-semibold">
                Wondering if we support your specific town, community, or zip code? Enter your city or municipality below to verify coverage.
              </p>
              
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter city name (e.g. Tirupati, Bangalore)"
                    required
                    className="flex-grow px-4 py-3 text-xs border border-light-gray rounded-full focus:outline-none focus:border-primary bg-white font-semibold"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-white px-5 py-3 rounded-full hover:bg-primary-hover font-bold text-xs uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 cursor-pointer"
                  >
                    <Search size={14} />
                    <span>Check</span>
                  </button>
                </div>

                {checkerResult && (
                  <div className="bg-white p-5 rounded-[24px] border border-primary/10 text-xs text-dark/85 leading-relaxed font-semibold">
                    {checkerResult}
                  </div>
                )}
              </form>
            </Reveal>

            {/* Upcoming Cities / Map Section */}
            <Reveal from="right" delay={0.1} className="md:col-span-6 space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Service Coverage</span>
              <h3 className="text-2xl font-bold font-serif text-navy">Our Service Locations</h3>
              
              {/* Interactive Map of India */}
              <IndiaMap />
            </Reveal>
          </div>
        </section>

        {/* EXPANSION OUTREACH */}
        <Reveal from="bottom" className="py-24 text-center px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold font-serif text-navy">Represent a Family in Another Area?</h2>
            <p className="text-dark/80 text-sm leading-relaxed font-semibold">
              If your parents live in a nearby suburb or town surrounding our active zones, we can often schedule customized visit routes. Reach out to our care coordinator.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-hover transition-all text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer inline-block hover:-translate-y-0.5 hover:shadow-lg">
                Enquire Custom Coverage
              </Link>
            </div>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  )
}
