import { Camera, FileText, ClipboardList } from 'lucide-react'

export function Transparency() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">Transparency & Accountability</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Know exactly what&apos;s happening with your family. Daily updates, photo proof, and detailed documentation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Daily Photo Updates */}
          <div className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <Camera className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Daily Photo Updates</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Receive daily photos of your parents and family activities. See exactly what&apos;s happening with timestamped proof.
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Morning activity photos
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Meal and nutrition proof
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Evening wellness photos
              </div>
            </div>
          </div>

          {/* Activity Logs */}
          <div className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <ClipboardList className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Detailed Activity Logs</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Complete documentation of daily activities, medications, appointments, and any incidents or health notes.
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Health and medication tracking
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Daily activity schedule
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Behavioral observations
              </div>
            </div>
          </div>

          {/* Weekly Reports */}
          <div className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Comprehensive Reports</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Weekly consolidated reports with health summary, achievements, concerns, and recommendations from your care team.
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Health assessment summary
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Mood and emotional status
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Action items and follow-ups
              </div>
            </div>
          </div>
        </div>

        {/* How Transparency Builds Trust */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10 p-12">
          <h3 className="text-2xl font-bold text-primary mb-6">How Our Transparency Builds Your Confidence</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-accent text-2xl font-bold flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Real-Time Updates</h4>
                  <p className="text-muted-foreground text-sm">No guessing. Get actual proof of care daily.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-accent text-2xl font-bold flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Peace of Mind</h4>
                  <p className="text-muted-foreground text-sm">See your family happy and well-cared for.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-accent text-2xl font-bold flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Verifiable Records</h4>
                  <p className="text-muted-foreground text-sm">Documentation for reference and legal purposes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-accent text-2xl font-bold flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Quality Assurance</h4>
                  <p className="text-muted-foreground text-sm">Track service quality and raise concerns immediately.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
