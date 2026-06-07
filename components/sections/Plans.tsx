import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Essential',
    price: '₹4,999',
    period: '/month',
    description: 'Basic parent care support',
    features: [
      'Daily wellness check-in',
      'Weekly photos & updates',
      'Emergency contact support',
      'Basic medication reminders',
    ],
    popular: false,
  },
  {
    name: 'Family Care',
    price: '₹7,999',
    period: '/month',
    description: 'Comprehensive family support',
    features: [
      'Daily wellness check-in',
      'Daily activity reports',
      'Health coordination',
      'Household assistance',
      'Weekly video call support',
      'Priority emergency response',
    ],
    popular: true,
  },
  {
    name: 'Complete',
    price: '₹11,999',
    period: '/month',
    description: 'All-in-one family solution',
    features: [
      'All Family Care features',
      'Property management (1 property)',
      'Medical appointment coordination',
      'Financial transaction support',
      'Monthly detailed report',
      'Dedicated care manager',
    ],
    popular: false,
  },
  {
    name: 'NRI Prime',
    price: '₹16,999',
    period: '/month',
    description: 'Premium multi-family service',
    features: [
      'All Complete features',
      'Multiple family members',
      'Multiple property management (3)',
      'Legal document assistance',
      'Bi-weekly video consultations',
      '24/7 dedicated support',
    ],
    popular: false,
  },
  {
    name: 'Custom',
    price: 'Quote',
    period: 'based on needs',
    description: 'Tailored solutions',
    features: [
      'Fully customizable services',
      'Flexible scheduling',
      'Multiple property management',
      'Business coordination support',
      'Dedicated account manager',
      'Negotiated pricing',
    ],
    popular: false,
  },
]

export function Plans() {
  return (
    <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">Flexible Plans for Every Family</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Choose a plan that matches your family&apos;s needs. Adjust anytime without penalties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl border-2 transition-all ${
                plan.popular
                  ? 'border-accent bg-gradient-to-b from-accent/5 to-white shadow-xl scale-105 lg:scale-100'
                  : 'border-border bg-white hover:border-accent'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <p className="text-xs text-muted-foreground">{plan.period}</p>
                </div>

                <button
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all text-sm ${
                    plan.popular
                      ? 'bg-accent text-white hover:shadow-lg'
                      : 'border border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Choose Plan
                </button>

                <div className="space-y-3 pt-6 border-t border-border">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2">
                      <Check size={16} className="text-accent flex-shrink-0 mt-1" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Not sure which plan? </p>
          <button className="text-accent hover:underline font-medium">
            Book a free consultation with our specialists
          </button>
        </div>
      </div>
    </section>
  )
}
