import { MapPin, CheckCircle } from 'lucide-react'

const locations = [
  { city: 'Hyderabad', status: 'Active', teams: '8 teams' },
  { city: 'Bangalore', status: 'Active', teams: '6 teams' },
  { city: 'Chennai', status: 'Active', teams: '5 teams' },
  { city: 'Pune', status: 'Active', teams: '4 teams' },
  { city: 'Delhi NCR', status: 'Active', teams: '7 teams' },
  { city: 'Mumbai', status: 'Active', teams: '6 teams' },
  { city: 'Kochi', status: 'Coming Soon', teams: 'Q3 2024' },
  { city: 'Ahmedabad', status: 'Coming Soon', teams: 'Q4 2024' },
]

export function Locations() {
  return (
    <section id="locations" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">Service Locations Across India</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Growing presence in major Indian cities with experienced local care teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-all">
                  <MapPin className="w-5 h-5 text-accent group-hover:text-white transition-all" />
                </div>
                {location.status === 'Active' && (
                  <div className="flex items-center gap-1 text-accent text-sm font-medium">
                    <CheckCircle size={16} />
                    Active
                  </div>
                )}
              </div>
              <h3 className="text-lg font-bold text-primary mb-1">{location.city}</h3>
              <p className={`text-sm ${location.status === 'Active' ? 'text-muted-foreground' : 'text-yellow-600'}`}>
                {location.teams}
              </p>
            </div>
          ))}
        </div>

        {/* Coverage Map Info */}
        <div className="bg-white rounded-xl p-8 border border-border">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Expanding Across India</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Currently serving major metropolitan areas and tier-1 cities. We&apos;re rapidly expanding to more cities with the same quality standards and dedicated local teams.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary">Experienced Local Teams</h4>
                    <p className="text-sm text-muted-foreground">Know the area, speak the language, understand local culture</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary">City-Specific Services</h4>
                    <p className="text-sm text-muted-foreground">Tailored solutions based on local healthcare and logistics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary">Quality Consistency</h4>
                    <p className="text-sm text-muted-foreground">Same high standards across all service locations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 flex flex-col justify-center">
              <div className="text-center space-y-4">
                <div className="text-5xl font-bold text-accent">15+</div>
                <div className="text-xl font-bold text-primary">Cities Covered</div>
                <p className="text-muted-foreground text-sm">
                  With 40+ dedicated care teams serving thousands of families
                </p>
                <button className="mt-6 bg-primary text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all w-full font-medium">
                  Check Your City
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
