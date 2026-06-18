import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'

export const metadata = {
  title: 'Cookie Policy - ManaCare',
  description: 'ManaCare cookie policy explaining how and why we use cookies on our website.',
}

const sections = [
  {
    title: '1. What Are Cookies?',
    body: 'Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.'
  },
  {
    title: '2. Cookies We Use',
    body: 'ManaCare uses only essential functional cookies required for the website to operate correctly. These include session management cookies and security tokens. We do not use tracking or advertising cookies.'
  },
  {
    title: '3. Essential Cookies',
    body: 'These cookies are strictly necessary for our website to function. Without them, services you have requested (such as form submissions and page navigation) cannot be provided. You cannot opt out of these cookies.'
  },
  {
    title: '4. Third-Party Cookies',
    body: 'We integrate with Vercel Analytics for anonymous, aggregate traffic analysis. This uses privacy-preserving methods and does not track individual users or store personally identifiable information.'
  },
  {
    title: '5. Managing Cookies',
    body: 'You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the website. Refer to your browser\'s help documentation for cookie management instructions.'
  },
  {
    title: '6. Updates to This Policy',
    body: 'We may update this Cookie Policy from time to time. Any changes will be reflected on this page with an updated date. Continued use of the website constitutes acceptance of any revised policy.'
  },
  {
    title: '7. Contact',
    body: 'If you have any questions about our use of cookies, please contact us at care@manacare.in.'
  }
]

export default function CookiesPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">Cookie Policy</h1>
            <p className="text-white/60 text-sm max-w-xl mx-auto leading-relaxed font-medium">
              Last updated: June 2026. This policy explains how ManaCare uses cookies and similar technologies.
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
