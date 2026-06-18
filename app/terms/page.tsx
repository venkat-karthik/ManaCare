import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'

export const metadata = {
  title: 'Terms of Service - ManaCare',
  description: 'ManaCare terms of service governing the use of our care coordination platform and services.',
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing or using ManaCare services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.'
  },
  {
    title: '2. Service Description',
    body: 'ManaCare provides care coordination and property management services for Non-Resident Indian families. Our services are carried out by trained, verified local care managers across our active service cities in India.'
  },
  {
    title: '3. Subscription and Billing',
    body: 'Services are billed on a monthly subscription basis. Pricing is as listed on our Plans page. Subscriptions can be cancelled at any time with a 7-day notice. There are no hidden setup fees.'
  },
  {
    title: '4. Client Responsibilities',
    body: 'Clients are responsible for providing accurate family care requirements and maintaining up-to-date contact information. Any third-party costs (e.g., medical bills, repair costs) must be pre-approved through your account wallet.'
  },
  {
    title: '5. Service Standards',
    body: 'ManaCare commits to providing professional, respectful, and transparent care services. All care managers are background-verified and trained. We will provide regular reports as per your chosen plan.'
  },
  {
    title: '6. Limitation of Liability',
    body: 'ManaCare acts as a care coordination service and is not a licensed medical provider. Our liability is limited to the monthly subscription fee paid. Emergency medical decisions remain the responsibility of licensed healthcare professionals.'
  },
  {
    title: '7. Governing Law',
    body: 'These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Guntur, Andhra Pradesh, India.'
  },
  {
    title: '8. Contact',
    body: 'For questions regarding these Terms, contact us at care@manacare.in or +91 91234 56789.'
  }
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow pt-24">
        <section className="relative bg-[#0F172A] bg-gradient-to-b from-[#0F172A] via-[#0d1f17] to-[#0F172A] py-20 md:py-24 px-6 sm:px-10 lg:px-12 border-b border-white/5 text-center space-y-4 overflow-hidden select-none">
          <div
            className="absolute rounded-full pointer-events-none"
            style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#1B5E43', opacity: 0.07, filter: 'blur(130px)' }}
          />
          <div className="relative z-10 space-y-3">
            <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase font-serif">Legal</span>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">Terms of Service</h1>
            <p className="text-white/60 text-sm max-w-xl mx-auto leading-relaxed font-medium">
              Last updated: June 2026. Please read these terms carefully before using ManaCare services.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl mx-auto space-y-10">
            {sections.map((s, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-lg font-bold font-serif text-navy">{s.title}</h2>
                <p className="text-dark/75 text-sm leading-relaxed">{s.body}</p>
                {idx < sections.length - 1 && <hr className="border-light-gray mt-6" />}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
