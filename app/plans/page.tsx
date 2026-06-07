'use client'

import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import Link from 'next/link'
import { Check, Info, ShieldCheck, HelpCircle, ChevronDown, X, CreditCard, Sparkles, Loader2, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const plans = [
  {
    name: 'Essential Care',
    price: 4999,
    formattedPrice: '₹4,999',
    period: '/month',
    description: 'Basic parent wellness check-in and communication.',
    features: [
      '1 Wellness check-in visit per week',
      'Basic medication reminders',
      'Weekly photo and activity updates via WhatsApp',
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
    description: 'Comprehensive regular support for parent lifestyle and health.',
    features: [
      '2 Wellness check-in visits per week',
      'Comprehensive medication management and refills',
      'Daily activity/check-in logging',
      'Weekly video consultation with family',
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
      '3 Wellness check-in visits per week',
      'Complete health check coordination (doctor visits, tests)',
      '1 Property inspection report per month (with photos/videos)',
      'Utility and maintenance coordinator',
      'Dedicated personal account manager',
      '24/7 Priority Emergency Support'
    ],
    popular: false,
    ctaText: 'Choose Complete'
  },
  {
    name: 'NRI Prime',
    price: 16999,
    formattedPrice: '₹16,999',
    period: '/month',
    description: 'Premium multi-family and property supervision for complete oversight.',
    features: [
      'Daily check-ins or customized schedule visits',
      'Multiple family members support included',
      'Up to 3 Property inspection reports per month',
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
      'Multi-city support for extended family',
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

  // Razorpay Gateway State
  const [razorpayOpen, setRazorpayOpen] = useState(false)
  const [paymentStep, setPaymentStep] = useState<'form' | 'processing' | 'verifying' | 'success'>('form')
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '', name: '' })

  const handleOpenCheckout = (plan: typeof plans[0]) => {
    if (plan.price === null) return 
    setSelectedPlan(plan)
    setCouponCode('')
    setAppliedCoupon(null)
    setCouponError('')
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

  const handleStartPayment = () => {
    setRazorpayOpen(true)
    setPaymentStep('form')
    setCardDetails({ number: '', expiry: '', cvv: '', name: '' })
  }

  const handleExecutePayment = (e: React.FormEvent) => {
    e.preventDefault()
    setPaymentStep('processing')
    
    setTimeout(() => {
      setPaymentStep('verifying')
      setTimeout(() => {
        setPaymentStep('success')
        setTimeout(() => {
          setRazorpayOpen(false)
          setCheckoutOpen(false)
          alert(`Payment of ₹${calculateTotal().toLocaleString('en-IN')} successful! Thank you for subscribing to ${selectedPlan?.name}. An advisor will coordinate setup within 2 hours.`)
        }, 2500)
      }, 2000)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans relative">
      <Header />

      <main className="flex-grow">
        {/* HEADER SECTION */}
        <section className="bg-gradient-to-r from-primary/5 via-primary/3 to-white py-20 md:py-24 px-6 sm:px-10 lg:px-12 border-b border-primary/10 text-center space-y-4">
          <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-serif">Pricing & Plans</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-navy tracking-tight">
            Flexible Care Plans <br />
            <span className="text-primary font-normal italic">Designed for Every Family.</span>
          </h1>
          <p className="text-dark/80 text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Select a plan that aligns with your requirements. Adjust your package anytime without penalties or cancel easily with 7 days notice.
          </p>
        </section>

        {/* PRICING GRID */}
        <section className="py-24 px-6 sm:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-[36px] border flex flex-col justify-between p-8 transition-all relative duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  plan.popular
                    ? 'border-primary ring-2 ring-primary/20 bg-gradient-to-b from-primary/5 via-white to-white shadow-md scale-105 lg:scale-100'
                    : 'border-light-gray hover:border-primary/25'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-bold tracking-wider px-3.5 py-1 rounded-full uppercase font-serif animate-bounce">
                    Most Popular
                  </span>
                )}

                <div className="space-y-6">
                  {/* Card Title */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-serif text-navy">{plan.name}</h3>
                    <p className="text-xs text-dark/75 leading-relaxed font-semibold">{plan.description}</p>
                  </div>

                  {/* Pricing Display */}
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary font-serif">
                      {plan.formattedPrice}
                    </div>
                    <div className="text-[10px] text-dark/60 font-sans tracking-wide uppercase font-bold">
                      {plan.period}
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-3 pt-6 border-t border-light-gray">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-dark/85 font-semibold leading-relaxed">
                        <Check size={14} className="text-primary shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="pt-6">
                  {plan.price === null ? (
                    <Link
                      href="/contact?plan=custom"
                      className="w-full block text-center py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all border border-primary text-primary hover:bg-secondary"
                    >
                      {plan.ctaText}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleOpenCheckout(plan)}
                      className={`w-full block text-center py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        plan.popular
                          ? 'bg-primary text-white hover:bg-primary-hover shadow-sm'
                          : 'border border-primary text-primary hover:bg-secondary'
                      }`}
                    >
                      {plan.ctaText}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST SEAL / ACCORDION QUESTIONS */}
        <section className="py-24 bg-primary/5 border-y border-primary/10 px-6 sm:px-10 lg:px-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-12 items-start">
            {/* Left info column */}
            <div className="md:col-span-5 space-y-6">
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
            </div>

            {/* Right Accordion FAQ */}
            <div className="md:col-span-7 space-y-3.5">
              {pricingFaqs.map((faq, idx) => {
                const isOpen = faqOpen === idx
                return (
                  <div key={idx} className="bg-white rounded-[24px] border border-light-gray overflow-hidden transition-all">
                    <button
                      onClick={() => setFaqOpen(isOpen ? null : idx)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/15 transition-all text-left cursor-pointer"
                    >
                      <h4 className="font-bold font-serif text-navy text-sm">{faq.q}</h4>
                      <ChevronDown size={16} className={`text-accent transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs text-dark/80 leading-relaxed border-t border-light-gray/50 bg-secondary/5 font-semibold">
                        {faq.a}
                      </div>
                    )}
                  </div>
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
                <p className="text-xs text-dark/60 mt-0.5 font-semibold">Setup care dashboard immediately</p>
              </div>
              <button
                onClick={() => setCheckoutOpen(false)}
                className="text-dark/50 hover:text-dark p-1 rounded-full hover:bg-light-gray transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 flex-grow overflow-y-auto">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-dark/75 font-semibold">Base Subscription</span>
                  <span className="font-serif font-bold text-navy">₹{selectedPlan.price?.toLocaleString('en-IN')}.00</span>
                </div>
                
                {appliedCoupon && (
                  <div className="flex justify-between text-sm text-primary">
                    <span className="font-bold flex items-center gap-1.5">
                      <Sparkles size={14} />
                      Coupon Code ({appliedCoupon.code}) Applied
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
                  <span className="font-serif font-bold text-navy">Total Amount</span>
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

              {/* Secure payment message */}
              <div className="bg-primary/5 p-4 rounded-[20px] border border-primary/10 flex items-start gap-2.5">
                <ShieldCheck size={18} className="text-primary shrink-0 mt-0.5" />
                <p className="text-[11px] text-dark/80 leading-relaxed font-semibold">
                  Payments are secure and processed directly via **Razorpay**. You can cancel your monthly subscription at any time with a 7-day notice.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-light-gray">
              <button
                onClick={handleStartPayment}
                className="w-full bg-primary text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary-hover shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <CreditCard size={16} />
                <span>Pay ₹{calculateTotal().toLocaleString('en-IN')} via Razorpay</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RAZORPAY MOCK POPUP */}
      {razorpayOpen && selectedPlan && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/70 animate-in fade-in duration-300">
          <div className="bg-[#1C273C] text-white rounded-[32px] w-full max-w-sm overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200 border border-white/10 flex flex-col font-sans">
            
            {/* Razorpay Top Banner */}
            <div className="p-5 border-b border-white/5 flex items-center justify-between bg-[#0F172A]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center font-bold text-xs text-white">
                  MC
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">ManaCare Care Services</h4>
                  <p className="text-[9px] text-white/50">support@manacare.com</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-white/50 uppercase font-bold">Amount to Pay</p>
                <h5 className="font-serif font-bold text-accent text-sm">₹{calculateTotal().toLocaleString('en-IN')}.00</h5>
              </div>
            </div>

            {/* Razorpay Body based on Steps */}
            <div className="p-6 flex-grow flex flex-col justify-center min-h-[300px]">
              
              {/* Form Step */}
              {paymentStep === 'form' && (
                <form onSubmit={handleExecutePayment} className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-[24px] border border-white/5 space-y-3.5">
                    <div className="flex justify-between items-center text-xs pb-2 border-b border-white/5">
                      <span className="text-white/70 font-bold uppercase tracking-wider text-[9px]">Razorpay Secure</span>
                      <img src="https://razorpay.com/favicon.png" alt="Razorpay" className="w-4 h-4 object-contain opacity-85" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] text-white/60 font-bold uppercase tracking-wider">Card Number</label>
                      <input
                        type="text"
                        required
                        maxLength={19}
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim() })}
                        placeholder="4111 2222 3333 4444"
                        className="w-full bg-[#0F172A] border border-white/10 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-accent font-semibold"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[9px] text-white/60 font-bold uppercase tracking-wider">Expiry Date</label>
                        <input
                          type="text"
                          required
                          maxLength={5}
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                          placeholder="MM/YY"
                          className="w-full bg-[#0F172A] border border-white/10 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-accent text-center font-semibold"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] text-white/60 font-bold uppercase tracking-wider">CVV</label>
                        <input
                          type="password"
                          required
                          maxLength={3}
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                          placeholder="•••"
                          className="w-full bg-[#0F172A] border border-white/10 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-accent text-center font-semibold"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] text-white/60 font-bold uppercase tracking-wider">Cardholder Name</label>
                      <input
                        type="text"
                        required
                        value={cardDetails.name}
                        onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#0F172A] border border-white/10 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-accent font-semibold"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0E82FD] text-white py-3 rounded-full text-xs font-bold hover:bg-[#0c72de] transition-colors flex items-center justify-center gap-1.5 uppercase tracking-wider cursor-pointer"
                  >
                    <span>Pay ₹{calculateTotal().toLocaleString('en-IN')}</span>
                  </button>
                </form>
              )}

              {/* Processing Step */}
              {paymentStep === 'processing' && (
                <div className="text-center space-y-4 py-8">
                  <Loader2 className="animate-spin text-accent mx-auto" size={40} />
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm">Processing Payment</h5>
                    <p className="text-[9px] text-white/50">Contacting issuer bank securely...</p>
                  </div>
                </div>
              )}

              {/* Verifying Step */}
              {paymentStep === 'verifying' && (
                <div className="text-center space-y-4 py-8 animate-pulse">
                  <Loader2 className="animate-spin text-[#0E82FD] mx-auto" size={40} />
                  <div className="space-y-1">
                    <h5 className="font-bold text-sm text-white">Verifying OTP Authentication</h5>
                    <p className="text-[9px] text-white/50">Checking secure 3D-Secure credentials...</p>
                  </div>
                </div>
              )}

              {/* Success Step */}
              {paymentStep === 'success' && (
                <div className="text-center space-y-4 py-8 animate-in zoom-in-95 duration-300">
                  <CheckCircle2 className="text-[#10B981] mx-auto" size={56} strokeWidth={2.5} />
                  <div className="space-y-1">
                    <h5 className="font-bold text-base text-[#10B981]">Payment Successful!</h5>
                    <p className="text-xs text-white/60">Subscription setup complete.</p>
                  </div>
                </div>
              )}

            </div>

            {/* Cancel Footer */}
            {paymentStep === 'form' && (
              <div className="p-4 border-t border-white/5 text-center bg-[#0F172A]">
                <button
                  onClick={() => setRazorpayOpen(false)}
                  className="text-white/40 hover:text-white text-[9px] uppercase font-bold tracking-wider cursor-pointer"
                >
                  Cancel and go back
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  )
}
