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

  const presetQuestions = [
    { q: 'What locations do you cover?', a: 'We currently operate fully across Hyderabad, Bengaluru, Visakhapatnam, and Tirupati. We are expanding to other major cities soon.' },
    { q: 'How do you verify caregivers?', a: 'All care managers undergo rigorous background checks including criminal record checks, reference validation, and intensive geriatric care training with certified nurses.' },
    { q: 'What is the Servostay partnership?', a: 'Servostay is our sister business providing premium, fully furnished serviced apartments (1 to 5 BHK configurations) in India. ManaCare subscribers receive a 15% discount on all bookings.' },
    { q: 'What plans do you offer?', a: 'We offer four main care tiers: Essential Care (₹4,999/mo), Family Care (₹7,999/mo), Complete Care (₹11,999/mo), and NRI Prime (₹16,999/mo). Custom quotes are available for specialized needs.' }
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    const newMessages = [...messages, { sender: 'user', text } as Message]
    setMessages(newMessages)
    setInputValue('')

    // Generate automated response
    setTimeout(() => {
      let reply = ''
      const lowerText = text.toLowerCase()

      // Keywords match
      if (lowerText.includes('location') || lowerText.includes('city') || lowerText.includes('hyderabad') || lowerText.includes('bengaluru') || lowerText.includes('tirupati') || lowerText.includes('visakhapatnam')) {
        reply = 'We currently provide operations in Hyderabad, Bengaluru, Visakhapatnam, and Tirupati. We organize local care visits and property management in these areas.'
      } else if (lowerText.includes('caregiver') || lowerText.includes('verify') || lowerText.includes('trust') || lowerText.includes('safe') || lowerText.includes('police')) {
        reply = 'Safety is our absolute priority. Every care manager undergoes reference checks, biometric identity verification, and professional elder aid training.'
      } else if (lowerText.includes('servostay') || lowerText.includes('apartment') || lowerText.includes('stay') || lowerText.includes('rent')) {
        reply = 'Servostay offers premium 1-5 BHK serviced apartments. Subscribing to ManaCare gives you a 15% discount, zero deposit, and pre-arrival grocery setup.'
      } else if (lowerText.includes('plan') || lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('rate') || lowerText.includes('fee')) {
        reply = 'Subscriptions start at ₹4,999/month for Essential Care up to ₹16,999/month for NRI Prime. We also design customized care packages based on specific health requirements.'
      } else {
        reply = 'Please contact our consultant team for further assistance. You can reach us at support@manacare.com or call our coordination office directly.'
      }

      setMessages(prev => [...prev, { sender: 'bot', text: reply }])
    }, 800)
  }

  return (
    <div className="fixed bottom-6 right-6 z-100 font-sans">
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
                  className={`max-w-[80%] px-4 py-2.5 text-xs leading-relaxed font-semibold ${
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
