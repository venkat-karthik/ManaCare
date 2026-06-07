'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import Link from 'next/link'
import { MapPin, CheckCircle2, Search } from 'lucide-react'
import { useState } from 'react'

const activeCities = [
  { city: 'Hyderabad', status: 'Active', details: '8 Dedicated Care Teams' },
  { city: 'Vijayawada', status: 'Active', details: '4 Dedicated Care Teams' },
  { city: 'Visakhapatnam', status: 'Active', details: '5 Dedicated Care Teams' },
  { city: 'Tirupati', status: 'Active', details: '3 Dedicated Care Teams' },
  { city: 'Guntur', status: 'Active', details: '3 Dedicated Care Teams' }
]

const upcomingCities = [
  { city: 'Bangalore', status: 'Expanding Soon', timeline: 'Q3 2026' },
  { city: 'Chennai', status: 'Expanding Soon', timeline: 'Q3 2026' },
  { city: 'Pune', status: 'Expanding Soon', timeline: 'Q4 2026' },
  { city: 'Delhi NCR', status: 'Expanding Soon', timeline: 'Q4 2026' },
  { city: 'Mumbai', status: 'Expanding Soon', timeline: 'Q1 2027' }
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

      <main className="flex-grow">
        {/* HEADER */}
        <section className="bg-gradient-to-r from-primary/5 via-primary/3 to-white py-20 md:py-24 px-6 sm:px-10 lg:px-12 border-b border-primary/10 text-center space-y-4">
          <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Service Locations</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-navy tracking-tight">
            Our Coverage Areas <br />
            <span className="text-primary font-normal italic">Across Andhra Pradesh, Telangana & Expanding.</span>
          </h1>
          <p className="text-dark/80 text-base max-w-2xl mx-auto leading-relaxed font-medium">
            ManaCare delivers premium local support. Our care managers speak the local language, understand local medical infrastructure, and coordinate physical visits seamlessly.
          </p>
        </section>

        {/* ACTIVE CITIES */}
        <section className="py-24 px-6 sm:px-10 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-3 mb-12">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Operational Regions</span>
              <h2 className="text-2xl font-bold font-serif text-navy">Active Service Cities</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {activeCities.map((loc, idx) => (
                <div key={idx} className="bg-primary/5 border border-primary/10 rounded-[32px] p-6 flex flex-col justify-between items-start space-y-4 hover:border-primary/20 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-white rounded-[16px] flex items-center justify-center border border-light-gray text-accent">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg font-serif">{loc.city}</h3>
                    <p className="text-xs text-dark/70 mt-1 font-semibold">{loc.details}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[9px] text-primary font-bold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                    <CheckCircle2 size={10} strokeWidth={3} />
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPANSION SECTION & CHECKER */}
        <section className="py-24 bg-primary/5 border-y border-primary/10 px-6 sm:px-10 lg:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
            
            {/* City Checker */}
            <div className="md:col-span-6 space-y-6">
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
            </div>

            {/* Upcoming Cities */}
            <div className="md:col-span-6 space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Upcoming Rollouts</span>
              <h3 className="text-xl font-bold font-serif text-navy">Expanding Coverage Cities</h3>
              <p className="text-dark/80 text-sm font-semibold">
                We are actively recruiting and training certified caregiver teams in major metros for our upcoming rollouts:
              </p>
              
              <div className="space-y-3">
                {upcomingCities.map((loc, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-[20px] border border-light-gray text-sm font-semibold hover:border-primary/10 transition-all">
                    <div className="flex items-center gap-2.5 text-navy">
                      <MapPin size={14} className="text-dark/45" />
                      <span>{loc.city}</span>
                    </div>
                    <span className="text-[10px] text-accent font-bold uppercase tracking-wider">
                      Launching {loc.timeline}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* EXPANSION OUTREACH */}
        <section className="py-24 text-center px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold font-serif text-navy">Represent a Family in Another Area?</h2>
            <p className="text-dark/80 text-sm leading-relaxed font-semibold">
              If your parents live in a nearby suburb or town surrounding our active zones, we can often schedule customized visit routes. Reach out to our care coordinator.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-hover transition-all text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer inline-block">
                Enquire Custom Coverage
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
