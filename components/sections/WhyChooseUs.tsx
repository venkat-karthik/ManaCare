import { Shield, Users, Clock, Eye, Award, Smartphone } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Fully Verified Team',
    description: 'Every caregiver undergoes background checks, training, and certification.',
  },
  {
    icon: Eye,
    title: 'Complete Transparency',
    description: 'Daily photo updates, activity logs, and detailed reports sent to you.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Always-available support team for emergencies and queries.',
  },
  {
    icon: Users,
    title: 'Local Expertise',
    description: 'Experienced teams in every city with deep local knowledge.',
  },
  {
    icon: Smartphone,
    title: 'Easy Communication',
    description: 'Phone, WhatsApp, video calls - reach your care team anytime.',
  },
  {
    icon: Award,
    title: 'Years of Trust',
    description: 'Serving thousands of NRI families since 2018 with consistent excellence.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">Why Families Choose ManaCare</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Built on trust, transparency, and years of proven excellence in NRI family care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-border hover:shadow-lg hover:border-accent transition-all group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent transition-all">
                  <Icon className="w-7 h-7 text-accent group-hover:text-white transition-all" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>

        {/* Trust Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 bg-gradient-to-r from-primary to-primary/80 rounded-xl p-12 text-white">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">5000+</div>
            <p className="text-white/90">Happy Families</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">15+</div>
            <p className="text-white/90">Cities Covered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">98%</div>
            <p className="text-white/90">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <p className="text-white/90">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
