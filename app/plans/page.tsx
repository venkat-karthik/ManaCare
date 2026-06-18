'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import Link from 'next/link'
import { Check, ShieldCheck, ChevronDown, X, Sparkles, CheckCircle2, Phone, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/lib/useReveal'

const plans = [
  {
    name: 'Essential Care',
    price: 4999,
    formattedPrice: '₹4,999',
    period: '/month',
    description: 'Basic parent wellness check-in and communication.',
    features: [
      '1 Wellness check-in visit per month',
      'Basic medication reminders',
      'Monthly photo and activity updates via WhatsApp',
      'Emergency support contact setup',
      'Dedicated care manager coordinator'
    ],
    popular: false,
    ctaText: 'Choose Essential'
  },
  {
    name: 'Family Care',
    price: 7999,
    formattedPrice: '₹7,999',
    period: '/month',
    description: 'Comprehensive regular support for parent lifestyle and health with property oversight.',
    features: [
      '2 Wellness check-in visits per month',
      '1 Property inspection report per month (with photos/videos)',
      'Comprehensive medication management and refills',
      'Daily activity/check-in logging',
      'Bi-weekly video consultation with family',
      'Priority emergency hospital response coordination',
      'Local running errands (bill payments, grocery deliveries)'
    ],
    popular: false,
    ctaText: 'Choose Family Care'
  },
  {
    name: 'Complete Care',
    price: 11999,
    formattedPrice: '₹11,999',
    period: '/month',
    description: 'Bespoke combination of complete parent care and property monitoring.',
    features: [
      '4 Wellness check-in visits per month',
      '1 Property inspection report per month (with photos/videos)',
      'Complete health check coordination (doctor visits, tests)',
      'Utility and maintenance coordinator',
      'Dedicated personal account manager',
      '24/7 Priority Emergency Support'
    ],
    popular: false,
    ctaText: 'Choose Complete'
  },
  {
    name: 'NRI Prime',
    price: 20000,
    formattedPrice: '₹20,000',
    period: '/month',
    description: 'Premium parent care at multiple locations and property supervision for complete oversight.',
    features: [
      '8 Wellness check-in visits per month (2 per week)',
      'Multi-location parent wellness check-ins',
      'Up to 2 Property inspection reports per month',
      'Legal documentation assistance in India',
      'Bi-weekly detailed reports & video calls',
      '24/7 dedicated support team access'
    ],
    popular: true,
    ctaText: 'Choose Prime'
  },
  {
    name: 'Custom Plan',
    price: null,
    formattedPrice: 'Quote',
    period: 'based on needs',
    description: 'Tailored solutions tailored to your unique requirements.',
    features: [
      'Customized visit frequency and locations',
      'Multi-city parent care coordination',
      'Commercial property supervision',
      'Specialized medical assistance coordination',
      'Dedicated coordinator and reporting portal'
    ],
    popular: false,
    ctaText: 'Talk to an Advisor'
  }
]

const pricingFaqs = [
  {
    q: 'Are there any setup fees or hidden charges?',
    a: 'No, we do not charge any setup fees. Pricing is fully transparent, and you are only billed the monthly subscription rate specified for your plan.'
  },
  {
    q: 'Can I upgrade, downgrade, or cancel my plan?',
    a: 'Absolutely. We do not have long-term lock-in contracts. You can upgrade, downgrade, or cancel your subscription at any time with a simple 7-day notice.'
  },
  {
    q: 'How does the billing cycle work?',
    a: 'We bill monthly in advance. Payments can be easily made securely online from abroad using international cards or bank transfers.'
  },
  {
    q: 'What happens in case of additional errand or maintenance costs?',
    a: 'Any third-party costs (e.g., plumber fees, medicine costs, grocery bills) are approved by you in advance. We maintain a clear digital deposit wallet for your account, and all receipts are uploaded to your weekly dashboard.'
  }
]

export default function PlansPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0)

  // Checkout Modal State
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null)
  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; type: 'percent' | 'flat'; value: number } | null>(null)
  const [couponError, setCouponError] = useState('')

  // Subscription Request State
  const [requestSubmitted, setRequestSubmitted] = useState(false)
  const [contactInfo, setContactInfo] = useState({ name: '', phone: '' })

  const handleOpenCheckout = (plan: typeof plans[0]) => {
    if (plan.price === null) return
    setSelectedPlan(plan)
    setCouponCode('')
    setAppliedCoupon(null)
    setCouponError('')
    setRequestSubmitted(false)
    setContactInfo({ name: '', phone: '' })
    setCheckoutOpen(true)
  }

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault()
    setCouponError('')
    const code = couponCode.toUpperCase().trim()

    if (code === 'MANACARE15') {
      setAppliedCoupon({ code: 'MANACARE15', type: 'percent', value: 15 })
    } else if (code === 'WELCOME500') {
      setAppliedCoupon({ code: 'WELCOME500', type: 'flat', value: 500 })
    } else {
      setCouponError('Invalid coupon code. Try MANACARE15 or WELCOME500')
    }
  }

  const calculateTotal = () => {
    if (!selectedPlan || !selectedPlan.price) return 0
    let price = selectedPlan.price
    if (appliedCoupon) {
      if (appliedCoupon.type === 'percent') {
        price = price * (1 - appliedCoupon.value / 100)
      } else {
        price = Math.max(0, price - appliedCoupon.value)
      }
    }
    return Math.round(price)
  }

  const handleRequestSubscription = (e: React.FormEvent) => {
    e.preventDefault()
    setRequestSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans relative">
      <Header />

      <main className="flex-grow pt-24">
        {/* HEADER SECTION */}
        <section className="relative bg-[#0F172A] bg-gradient-to-b from-[#0F172A] via-[#0d1f17] to-[#0F172A] py-20 md:py-24 px-6 sm:px-10 lg:px-12 border-b border-white/5 text-center space-y-4 overflow-hidden select-none">
          {/* Ambient glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 700, height: 700,
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              background: '#1B5E43',
              opacity: 0.08,
              filter: 'blur(140px)',
            }}
          />

          {/* Subtle grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="grid-plans" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <line x1="60" y1="0" x2="60" y2="60" stroke="#1B5E43" strokeWidth="1" />
                <line x1="0" y1="60" x2="60" y2="60" stroke="#1B5E43" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-plans)" />
          </svg>

          <div className="relative z-10 space-y-4">
            <Reveal from="bottom">
              <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase font-serif">Pricing & Plans</span>
            </Reveal>
            <Reveal from="bottom" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
                Flexible Care Plans <br />
                <span className="text-accent font-normal italic mt-2 block">Designed for Every Family.</span>
              </h1>
            </Reveal>
            <Reveal from="bottom" delay={0.2}>
              <p className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed font-medium">
                Select a plan that aligns with your requirements. Adjust your package anytime without penalties or cancel easily with 7 days notice.
              </p>
            </Reveal>
          </div>
        </section>

        {/* PRICING GRID */}
        <section className="py-24 px-6 sm:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
            {plans.map((plan, idx) => (
              <Reveal key={idx} from="bottom" delay={idx * 0.09}>
                <div
                  className={`bg-white rounded-[36px] border flex flex-col justify-between p-8 transition-all relative duration-300 hover:shadow-lg hover:-translate-y-1 h-full ${
                    plan.popular
                      ? 'border-primary ring-2 ring-primary/20 bg-gradient-to-b from-primary/5 via-white to-white shadow-md'
                      : 'border-light-gray hover:border-primary/25'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-bold tracking-wider px-3.5 py-1 rounded-full uppercase font-serif animate-bounce">
                      Most Popular
                    </span>
                  )}

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold font-serif text-navy">{plan.name}</h3>
                      <p className="text-xs text-dark/75 leading-relaxed font-semibold">{plan.description}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-primary font-serif">{plan.formattedPrice}</div>
                      <div className="text-[10px] text-dark/60 font-sans tracking-wide uppercase font-bold">{plan.period}</div>
                    </div>
                    <ul className="space-y-3 pt-6 border-t border-light-gray">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-dark/85 font-semibold leading-relaxed">
                          <Check size={14} className="text-primary shrink-0 mt-0.5" strokeWidth={3} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    {plan.price === null ? (
                      <Link href="/contact?plan=custom"
                        className="w-full block text-center py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all border border-primary text-primary hover:bg-secondary">
                        {plan.ctaText}
                      </Link>
                    ) : (
                      <button onClick={() => handleOpenCheckout(plan)}
                        className={`w-full block text-center py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          plan.popular ? 'bg-primary text-white hover:bg-primary-hover shadow-sm' : 'border border-primary text-primary hover:bg-secondary'
                        }`}>
                        {plan.ctaText}
                      </button>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ & TRUST */}
        <section className="py-24 bg-primary/5 border-y border-primary/10 px-6 sm:px-10 lg:px-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-12 items-start">
            <Reveal from="left" className="md:col-span-5 space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Guaranteed Peace of Mind</span>
              <h2 className="text-3xl font-bold font-serif text-navy leading-tight">Frequently Asked Pricing Questions</h2>
              <p className="text-dark/80 text-sm leading-relaxed font-semibold">
                If you have custom requirements or multiple parent addresses, we will coordinate customized configurations to fit perfectly.
              </p>
              <div className="bg-white p-6 rounded-[28px] border border-light-gray space-y-3 shadow-xs">
                <div className="flex gap-3 items-start text-primary">
                  <ShieldCheck className="shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-xs text-navy uppercase tracking-wider font-serif">Complete Security</h4>
                    <p className="text-[11px] text-dark/75 mt-0.5 font-semibold leading-relaxed">Cancel or switch your subscription plans easily with zero penalties.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="md:col-span-7 space-y-3.5">
              {pricingFaqs.map((faq, idx) => {
                const isOpen = faqOpen === idx
                return (
                  <Reveal key={idx} from="right" delay={idx * 0.08}>
                    <div className="bg-white rounded-[24px] border border-light-gray overflow-hidden transition-all">
                      <button onClick={() => setFaqOpen(isOpen ? null : idx)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/15 transition-all text-left cursor-pointer">
                        <h4 className="font-bold font-serif text-navy text-sm">{faq.q}</h4>
                        <ChevronDown size={16} className={`text-accent transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 pt-1 text-xs text-dark/80 leading-relaxed border-t border-light-gray/50 bg-secondary/5 font-semibold">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      {/* CHECKOUT MODAL OVERLAY */}
      {checkoutOpen && selectedPlan && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-xs animate-in fade-in duration-300">
          <div className="bg-white rounded-[40px] border border-light-gray max-w-md w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200 flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-secondary/50 p-6 border-b border-light-gray flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-navy text-lg">{selectedPlan.name} Subscription</h3>
                <p className="text-xs text-dark/60 mt-0.5 font-semibold">Our advisor will set up your care dashboard</p>
              </div>
              <button
                onClick={() => setCheckoutOpen(false)}
                className="text-dark/50 hover:text-dark p-1 rounded-full hover:bg-light-gray transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            {requestSubmitted ? (
              <div className="p-8 flex flex-col items-center justify-center text-center space-y-5 min-h-[300px]">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-30" />
                  <CheckCircle2 size={32} strokeWidth={2.5} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold font-serif text-navy">Request Received!</h4>
                  <p className="text-sm text-dark/70 font-medium leading-relaxed max-w-xs">
                    Thank you! Our care advisor will call or WhatsApp you within <strong>2 hours</strong> to confirm your <span className="text-primary font-bold">{selectedPlan.name}</span> subscription at <span className="text-primary font-bold">₹{calculateTotal().toLocaleString('en-IN')}/month</span>.
                  </p>
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href="https://wa.me/919123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#1ebe59] transition-colors cursor-pointer"
                  >
                    <MessageCircle size={14} />
                    WhatsApp Us
                  </a>
                  <a
                    href="tel:+919123456789"
                    className="flex items-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-full text-xs font-bold hover:bg-secondary transition-colors cursor-pointer"
                  >
                    <Phone size={14} />
                    Call Now
                  </a>
                </div>
                <button
                  onClick={() => setCheckoutOpen(false)}
                  className="text-dark/40 hover:text-dark text-xs font-medium transition-colors cursor-pointer mt-1"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="p-6 space-y-5 flex-grow overflow-y-auto">
                {/* Price Summary */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-dark/75 font-semibold">Base Subscription</span>
                    <span className="font-serif font-bold text-navy">₹{selectedPlan.price?.toLocaleString('en-IN')}.00</span>
                  </div>
                  
                  {appliedCoupon && (
                    <div className="flex justify-between text-sm text-primary">
                      <span className="font-bold flex items-center gap-1.5">
                        <Sparkles size={14} />
                        Coupon ({appliedCoupon.code}) Applied
                      </span>
                      <span className="font-bold">
                        -₹{appliedCoupon.type === 'percent'
                          ? (selectedPlan.price! * (appliedCoupon.value / 100)).toLocaleString('en-IN')
                          : appliedCoupon.value.toLocaleString('en-IN')
                        }.00
                      </span>
                    </div>
                  )}
                  
                  <div className="border-t border-dashed border-light-gray pt-3 flex justify-between text-base">
                    <span className="font-serif font-bold text-navy">Monthly Total</span>
                    <span className="font-serif font-bold text-primary">₹{calculateTotal().toLocaleString('en-IN')}.00</span>
                  </div>
                </div>

                {/* Coupon Form */}
                <form onSubmit={handleApplyCoupon} className="space-y-2">
                  <label className="text-xs font-bold text-dark/80 uppercase tracking-wider">Apply Coupon Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="e.g. MANACARE15 (15% off)"
                      className="flex-grow px-4 py-2.5 text-xs border border-light-gray rounded-full focus:outline-none focus:border-primary uppercase bg-secondary/10 font-semibold"
                    />
                    <button
                      type="submit"
                      className="bg-primary text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-primary-hover transition-colors shrink-0 uppercase tracking-wider cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {couponError && <p className="text-[10px] text-red-600 font-bold">{couponError}</p>}
                  {appliedCoupon && <p className="text-[10px] text-primary font-bold">Successfully applied {appliedCoupon.code}!</p>}
                </form>

                {/* Contact Details */}
                <form onSubmit={handleRequestSubscription} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-dark/80 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      placeholder="Full name"
                      className="w-full px-4 py-2.5 text-xs border border-light-gray rounded-full focus:outline-none focus:border-primary bg-secondary/10 font-semibold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-dark/80 uppercase tracking-wider">WhatsApp / Phone</label>
                    <input
                      type="tel"
                      required
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      placeholder="+91 or international number"
                      className="w-full px-4 py-2.5 text-xs border border-light-gray rounded-full focus:outline-none focus:border-primary bg-secondary/10 font-semibold"
                    />
                  </div>

                  <div className="bg-primary/5 p-4 rounded-[20px] border border-primary/10 flex items-start gap-2.5">
                    <ShieldCheck size={18} className="text-primary shrink-0 mt-0.5" />
                    <p className="text-[11px] text-dark/80 leading-relaxed font-semibold">
                      Our care advisor will contact you within 2 hours to confirm your subscription and process payment securely.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary-hover shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 size={16} />
                    <span>Request {selectedPlan.name} — ₹{calculateTotal().toLocaleString('en-IN')}/mo</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  )
}
