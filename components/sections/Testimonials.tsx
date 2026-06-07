import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'USA',
    title: 'Software Engineer',
    content: 'When I moved to the US for my job, I was worried about my parents. ManaCare gave me complete peace of mind. The daily updates and transparency are exceptional.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    location: 'UK',
    title: 'Healthcare Professional',
    content: 'As a nurse, I know what good care looks like. ManaCare exceeds my expectations. My mother is happy and well-looked after. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Vikram Patel',
    location: 'Australia',
    title: 'Business Owner',
    content: 'Managing multiple family members and property from abroad was stressful. ManaCare handles everything seamlessly. Their professionalism is outstanding.',
    rating: 5,
  },
  {
    name: 'Anjali Menon',
    location: 'Canada',
    title: 'Project Manager',
    content: 'The care team is incredibly responsive. My father had an emergency and they handled it perfectly. I felt completely supported despite being so far away.',
    rating: 5,
  },
  {
    name: 'Arjun Desai',
    location: 'Germany',
    title: 'Engineer',
    content: 'What impressed me most is the transparency. Photos, daily logs, weekly reports - I see everything. This transparency builds genuine trust.',
    rating: 5,
  },
  {
    name: 'Deepika Nair',
    location: 'Singapore',
    title: 'Finance Manager',
    content: 'Six months with ManaCare and my mother has adapted so well. The personalized attention and cultural sensitivity make all the difference.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">Trusted by NRI Families Worldwide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Real stories from NRI families who found peace of mind with ManaCare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <h4 className="font-bold text-primary">{testimonial.name}</h4>
                <p className="text-sm text-accent font-medium">{testimonial.title}</p>
                <p className="text-xs text-muted-foreground">Based in {testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metric */}
        <div className="mt-16 text-center space-y-4">
          <div className="bg-accent/10 rounded-xl p-8 inline-block">
            <div className="flex items-center gap-2 justify-center mb-2">
              <Star size={20} className="fill-accent text-accent" />
              <Star size={20} className="fill-accent text-accent" />
              <Star size={20} className="fill-accent text-accent" />
              <Star size={20} className="fill-accent text-accent" />
              <Star size={20} className="fill-accent text-accent" />
            </div>
            <p className="text-primary font-bold text-lg">4.9/5 Rating</p>
            <p className="text-muted-foreground text-sm">Based on 500+ verified reviews</p>
          </div>
        </div>
      </div>
    </section>
  )
}
