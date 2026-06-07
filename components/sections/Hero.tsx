export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-white to-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-primary leading-tight text-balance">
                Peace of Mind for Your Parents, Miles Away
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                Trusted by thousands of NRIs. Professional care, transparent reporting, and round-the-clock support for your family in India.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all text-base font-medium">
                Book Free Consultation
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all text-base font-medium">
                Explore Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-accent">5000+</div>
                <p className="text-sm text-muted-foreground mt-1">Families Served</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">6</div>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">24/7</div>
                <p className="text-sm text-muted-foreground mt-1">Support Available</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 sm:h-full min-h-96 bg-gradient-to-br from-accent to-primary rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative text-center text-white z-10 px-6">
              <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
              <p className="text-xl font-semibold text-balance">
                Your family&apos;s trust matters to us.
              </p>
              <p className="text-sm mt-2 opacity-90">
                Complete peace of mind while you&apos;re abroad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
