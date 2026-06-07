import { CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'Share your family needs with our care specialists via call or WhatsApp.',
  },
  {
    number: '02',
    title: 'Customized Plan',
    description: 'We create a personalized care plan tailored to your family requirements.',
  },
  {
    number: '03',
    title: 'Team Assignment',
    description: 'Dedicated local care team assigned to your family for consistency.',
  },
  {
    number: '04',
    title: 'Daily Care Begins',
    description: 'Regular check-ins, care activities, and documented support starts immediately.',
  },
  {
    number: '05',
    title: 'Weekly Reports',
    description: 'Photo updates, activity logs, and health notes shared with you weekly.',
  },
  {
    number: '06',
    title: 'Ongoing Support',
    description: '24/7 access to your care team with monthly check-ins and service optimization.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">How ManaCare Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Simple, transparent process from consultation to ongoing family care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-24 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
              )}

              <div className="bg-white rounded-xl p-6 border border-border hover:border-accent transition-all h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-accent text-sm">
                  <CheckCircle size={16} />
                  <span>Transparent & Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
