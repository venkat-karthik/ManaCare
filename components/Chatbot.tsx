'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, ShieldCheck, Sparkles } from 'lucide-react'

interface Message {
  sender: 'user' | 'bot'
  text: string
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Hello. Welcome to ManaCare. I am your automated care assistant. How may I assist you with your family or property needs in India today?'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const chatRef = useRef<HTMLDivElement | null>(null)

  const presetQuestions = [
    { 
      q: 'What locations do you cover?', 
      a: 'We are active in Coastal Andhra Pradesh: Guntur (HQ with Blood Bank), Vijayawada (6 care teams), Bapatla (3 teams), and Ongole (3 teams). We are expanding to Visakhapatnam & Tirupati (Q3 2026), Bangalore & Hyderabad (Q4 2026), and Chennai (Q1 2027).' 
    },
    { 
      q: 'What plans do you offer?', 
      a: 'We offer 4 monthly plans (no setup fees, cancel with 7 days notice):\n• Essential Care (₹4,999/mo)\n• Family Care (₹7,999/mo)\n• Complete Care (₹11,999/mo)\n• NRI Prime (₹20,000/mo)\nCustom quotes are also available. Use code WELCOME500 for ₹500 off or MANACARE15 for 15% off!' 
    },
    { 
      q: 'How do you verify caregivers?', 
      a: '100% of our local Care Managers undergo thorough reference checks, background vetting, and biometric verification. They complete an intensive 4-week geriatric care and emergency response training program. We share daily WhatsApp check-in logs and GPS-verified visits.' 
    },
    { 
      q: 'What is the Servostay discount?', 
      a: 'Servostay is our sister business providing premium 1-5 BHK serviced apartments in Hyderabad, Bengaluru, Visakhapatnam, and Tirupati. ManaCare subscribers receive an exclusive 15% discount, zero security deposit, priority booking, airport pickup, and pre-arrival pantry stocking.' 
    }
  ]

  const chatbotDatabase = [
    {
      keywords: ['location', 'city', 'cities', 'where', 'operate', 'cover', 'guntur', 'vijayawada', 'bapatla', 'ongole', 'visakhapatnam', 'tirupati', 'bangalore', 'bengaluru', 'hyderabad', 'chennai', 'service area', 'coverage'],
      response: "We are fully active across Coastal Andhra Pradesh:\n• Guntur (Main Headquarters & Blood Bank Facility)\n• Vijayawada (6 Dedicated Care Teams)\n• Bapatla (3 Dedicated Care Teams)\n• Ongole (3 Dedicated Care Teams)\n\nWe are expanding soon to:\n• Visakhapatnam & Tirupati (Q3 2026)\n• Bangalore & Hyderabad (Q4 2026)\n• Chennai (Q1 2027)\n\nWe also schedule custom visit routes for outer zones/suburbs surrounding our active areas."
    },
    {
      keywords: ['plan', 'price', 'pricing', 'cost', 'rate', 'fee', 'charge', 'essential', 'family care', 'complete care', 'nri prime', 'custom plan', 'subscription', 'monthly', 'bill', 'billing', 'contract', 'coupon', 'discount', 'promo', 'gateway'],
      response: "We offer 4 flexible subscription plans (billed monthly, no setup fees, cancel anytime with a 7-day notice):\n• Essential Care (₹4,999/mo): 1 check-in visit per month, medication reminders, monthly updates.\n• Family Care (₹7,999/mo): 2 monthly check-ins, 1 monthly property inspection, medication management, errands.\n• Complete Care (₹11,999/mo): 4 monthly check-ins, 1 monthly property inspection, medical coordination, emergency response.\n• NRI Prime (₹20,000/mo): 8 monthly check-ins (2 per week), 2 property inspections, multi-location parent support, legal documentation.\n\nUse coupon WELCOME500 for a flat ₹500 off or MANACARE15 for 15% off! Custom plans are available for unique requirements."
    },
    {
      keywords: ['caregiver', 'staff', 'manager', 'verify', 'trust', 'safe', 'safety', 'police', 'vet', 'background', 'check', 'biometric', 'train', 'geriatric', 'nurse', 'elderly', 'qualification', 'vetting'],
      response: "Safety and professional accountability are our absolute priorities:\n• Deep Background Vetting: Police verification, biometric check, and reference validation for all staff.\n• Certified Training: 4-week geriatric care, soft skills, and medical emergency training program.\n• Transparency: GPS-verified inspections with time-stamped photo/video logs, plus daily updates sent directly via WhatsApp."
    },
    {
      keywords: ['servostay', 'apartment', 'stay', 'rent', 'suite', 'accommodation', 'room', 'living', 'furniture', 'visiting india', 'hotel', 'sister'],
      response: "Servostay is our sister business offering premium, fully furnished 1 to 5 BHK serviced suites in Hyderabad, Bengaluru, Visakhapatnam, and Tirupati. \n\nManaCare subscribers get exclusive perks:\n• 15% discount on all bookings\n• Zero security deposit\n• Priority booking windows during peak seasons\n• Free pre-arrival groceries/pantry stocking\n• Complimentary airport pickup coordination"
    },
    {
      keywords: ['service', 'do you do', 'wellness', 'health', 'property', 'asset', 'estate', 'maintenance', 'repair', 'tenant', 'rent', 'emergency', 'hospital', 'doctor', 'ambulance', 'errand'],
      response: "ManaCare coordinates premium local care services in India:\n• Parental Care: Daily or weekly wellness check-ins, vitals logs, medication coordination, escorted doctor/hospital runs, and companionship.\n• Property Management: Monthly physical site inspections with photos/videos, tenant management, rent monitoring, tax/utility payments, and maintenance coordination."
    },
    {
      keywords: ['contact', 'phone', 'call', 'email', 'support', 'consult', 'consultation', 'inquiry', 'enquiry', 'reach', 'number', 'address', 'office', 'whatsapp', 'mail'],
      response: "You can book a free consultation directly on our homepage. You can also reach our care advisors at:\n• Email: care@manacare.in\n• Phone/WhatsApp: +91 91234 56789\n\nWe respond to all enquiries within 2 hours during business hours."
    }
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    const newMessages = [...messages, { sender: 'user', text } as Message]
    setMessages(newMessages)
    setInputValue('')

    // Generate automated response
    setTimeout(() => {
      let reply = ''
      
      // 1. Check if it matches a preset question exactly (case insensitive)
      const matchedPreset = presetQuestions.find(
        (pq) => pq.q.trim().toLowerCase() === text.trim().toLowerCase()
      )

      if (matchedPreset) {
        reply = matchedPreset.a
      } else {
        // 2. Perform score-based keyword matching
        const lowerText = text.toLowerCase()
        let bestMatch = null
        let maxScore = 0

        chatbotDatabase.forEach((item) => {
          let score = 0
          item.keywords.forEach((kw) => {
            if (lowerText.includes(kw)) {
              // Longer keywords matching get a higher score (e.g. 'servostay' > 'stay')
              score += kw.length
            }
          })

          if (score > maxScore) {
            maxScore = score
            bestMatch = item
          }
        })

        if (bestMatch && maxScore > 0) {
          reply = bestMatch.response
        } else {
          reply = "Please contact our care advisor team for direct assistance. You can email us at care@manacare.in, call/WhatsApp us at +91 91234 56789, or request a free consultation directly on our homepage."
        }
      }

      setMessages(prev => [...prev, { sender: 'bot', text: reply }])
    }, 800)
  }

  return (
    <div ref={chatRef} className="fixed bottom-6 right-6 z-100 font-sans">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white p-4 rounded-full shadow-xl hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center border-2 border-accent/30 cursor-pointer"
        >
          <MessageSquare size={24} className="text-accent" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-[32px] border border-light-gray w-80 md:w-96 h-[480px] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-primary p-4 text-white flex items-center justify-between border-b border-accent/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-accent/20">
                <ShieldCheck size={16} className="text-accent" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider font-serif">ManaCare Support</h4>
                <p className="text-[9px] text-white/60">Verified Care Assistance</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-secondary/15">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-4 py-2.5 text-xs leading-relaxed font-semibold whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white rounded-t-2xl rounded-bl-2xl'
                      : 'bg-white text-navy border border-light-gray rounded-t-2xl rounded-br-2xl shadow-xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Preset Chips */}
          <div className="p-3 bg-white border-t border-light-gray flex flex-wrap gap-1.5 justify-center max-h-24 overflow-y-auto">
            {presetQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q.q)}
                className="text-[10px] bg-secondary/35 text-navy hover:bg-primary hover:text-white border border-light-gray px-2.5 py-1 rounded-full transition-all font-semibold cursor-pointer"
              >
                {q.q}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage(inputValue)
            }}
            className="p-3 bg-white border-t border-light-gray flex gap-2 items-center"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask us a question..."
              className="flex-grow px-3 py-2 text-xs border border-light-gray rounded-full focus:outline-none focus:border-primary bg-secondary/10 font-semibold"
            />
            <button
              type="submit"
              className="bg-primary text-white p-2 rounded-full hover:bg-primary-hover transition-colors shrink-0 cursor-pointer"
            >
              <Send size={12} className="text-accent" />
            </button>
          </form>

        </div>
      )}
    </div>
  )
}
