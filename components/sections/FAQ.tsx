'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How does ManaCare ensure quality and trust?',
    answer: 'Every caregiver is background-verified, trained, and certified. We provide daily photo updates, activity logs, and weekly detailed reports. Our transparency approach builds genuine trust with NRI families.',
  },
  {
    question: 'Can I change my service plan anytime?',
    answer: 'Yes! You can upgrade, downgrade, or modify your plan without any penalties. We understand family needs change, and we&apos;re flexible to adapt.',
  },
  {
    question: 'What if there&apos;s an emergency?',
    answer: 'Our care team is trained in emergency response. Contact us 24/7 via phone or WhatsApp. We coordinate with local hospitals and services. Your designated family member in India also remains on alert.',
  },
  {
    question: 'How do you verify the care being provided?',
    answer: 'Through daily photos with timestamps, detailed activity logs, health monitoring records, and weekly video consultations. You can also request unexpected check-ins or speak directly with care team members.',
  },
  {
    question: 'What cities do you currently serve?',
    answer: 'We serve Hyderabad, Bangalore, Chennai, Pune, Delhi NCR, Mumbai, and are expanding to Kochi and Ahmedabad. Check our locations page to see if we serve your family&apos;s city.',
  },
  {
    question: 'How do I get started?',
    answer: 'Book a free consultation with our care specialist. We&apos;ll understand your family needs, recommend the best plan, answer all questions, and start service within 3-5 days.',
  },
  {
    question: 'Is there a minimum contract period?',
    answer: 'No long-term lock-in. You can start with a monthly subscription and cancel anytime with 7 days notice. We focus on building trust through service quality, not contracts.',
  },
  {
    question: 'How do you communicate with families?',
    answer: 'Multiple channels: WhatsApp for daily updates, phone calls for discussions, email for documents, and scheduled video calls. You choose your preferred communication method.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Everything you need to know about ManaCare services and how we work.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-lg overflow-hidden transition-all hover:border-accent"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/20 transition-colors"
              >
                <h3 className="font-bold text-primary text-left text-balance">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-accent transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-secondary/10 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button className="bg-accent text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all font-medium">
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
