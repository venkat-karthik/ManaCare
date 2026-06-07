'use client'

import { useState } from 'react'
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', formData)
    // Form submission logic would go here
  }

  const contactChannels = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Monday - Saturday, 9 AM - 6 PM IST',
      value: '+91 XXXX XXXX XX',
      action: 'Call',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: '24/7 - Fastest response',
      value: '+91 XXXX XXXX XX',
      action: 'Message',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'support@manacare.com',
      value: 'Get detailed response',
      action: 'Email',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Hyderabad, Bangalore, Chennai, Pune',
      value: 'Meet our team in person',
      action: 'Locations',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Ready to give your family the care they deserve? Reach out for your free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXX XXXX XX"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">City</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                >
                  <option value="">Select a city</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                  <option value="pune">Pune</option>
                  <option value="delhi">Delhi NCR</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your family needs..."
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white py-3 rounded-lg hover:shadow-lg transition-all font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Choose your preferred way to reach us. Whether it&apos;s a quick call, WhatsApp message, or detailed email inquiry, we&apos;re here to help with your family care needs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {contactChannels.map((channel, index) => {
                const Icon = channel.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-bold text-primary mb-1">{channel.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{channel.description}</p>
                    <p className="text-sm font-medium text-accent">{channel.value}</p>
                  </div>
                )
              })}
            </div>

            {/* Trust Seal */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10">
              <h4 className="font-bold text-primary mb-3">Why Contact Us?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Free consultation with care specialists</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Personalized care plan within 24 hours</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>No commitment until you&apos;re fully informed</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Dedicated account manager assignment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
