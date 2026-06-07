import { Heart, Home, AlertCircle, Users, Shield } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Parent Care',
    description: 'Comprehensive care for elderly parents including daily check-ins, medical coordination, and lifestyle support.',
  },
  {
    icon: Users,
    title: 'Relative Care',
    description: 'Extended family support including babysitting, elder sibling care, and household responsibilities.',
  },
  {
    icon: Home,
    title: 'Property Management',
    description: 'Professional management of your residential and commercial properties in India with transparency reports.',
  },
  {
    icon: Shield,
    title: 'Household Assistance',
    description: 'Domestic help coordination, maintenance services, and household emergency response.',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Support',
    description: 'Rapid response for any urgent family situations with 24/7 dedicated support team.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Complete care solutions designed specifically for NRI families. From daily support to emergency response.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                  <Icon className="w-6 h-6 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
