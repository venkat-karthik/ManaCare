import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'

export const metadata = {
  title: 'Privacy Policy - ManaCare',
  description: 'ManaCare privacy policy detailing how we handle and protect your personal data.',
}

const sections = [
  {
    title: '1. Information We Collect',
    body: 'We collect personal information you voluntarily provide when booking consultations, submitting enquiry forms, or using our services. This includes your name, email address, phone number, and details about your family care requirements.'
  },
  {
    title: '2. How We Use Your Information',
    body: 'Your information is used solely to coordinate care services, respond to your enquiries, and maintain your service account. We do not sell or share your personal data with third parties for marketing purposes.'
  },
  {
    title: '3. Data Security',
    body: 'We implement industry-standard security measures including encrypted communications and restricted staff access to protect your personal data from unauthorised access, disclosure, or misuse.'
  },
  {
    title: '4. Data Retention',
    body: 'We retain your personal information for as long as your service subscription is active and for a reasonable period thereafter to resolve disputes or comply with legal obligations.'
  },
  {
    title: '5. Your Rights',
    body: 'You have the right to access, correct, or request deletion of your personal data at any time. To exercise these rights, please contact us at care@manacare.in.'
  },
  {
    title: '6. Cookies',
    body: 'Our website uses essential cookies to ensure proper functionality. We do not use third-party advertising cookies. You can control cookie settings through your browser preferences.'
  },
  {
    title: '7. Contact',
    body: 'If you have any questions about this Privacy Policy, please contact our team at care@manacare.in or call us at +91 91234 56789.'
  }
]

export default function PrivacyPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">Privacy Policy</h1>
            <p className="text-white/60 text-sm max-w-xl mx-auto leading-relaxed font-medium">
              Last updated: June 2026. This policy outlines how ManaCare collects, uses, and protects your personal information.
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
