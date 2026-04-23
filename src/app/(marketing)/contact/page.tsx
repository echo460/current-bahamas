import type { Metadata } from 'next'
import { MarketingHeader, MarketingFooter } from '@/components/marketing/shared'
import { Mail, Clock } from 'lucide-react'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <MarketingHeader />
      <section className="bg-cream py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-4">Get in touch</h1>
          <p className="text-lg text-gray-600">Questions about your compliance situation or our services? We reply within 1 business day.</p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#EAF2F5] flex items-center justify-center shrink-0">
                <Mail className="h-4 w-4 text-[#1A6B72]" />
              </div>
              <div>
                <p className="font-medium text-navy text-sm">Email</p>
                <a href="mailto:hello@currentbahamas.com" className="text-sm text-[#1A6B72] hover:underline">hello@currentbahamas.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#EAF2F5] flex items-center justify-center shrink-0">
                <Clock className="h-4 w-4 text-[#1A6B72]" />
              </div>
              <div>
                <p className="font-medium text-navy text-sm">Hours</p>
                <p className="text-sm text-gray-500">Mon–Fri 9am–5pm</p>
                <p className="text-sm text-gray-500">Bahamas Standard Time</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 bg-white rounded-2xl border border-gray-200 p-7">
            <h2 className="font-semibold text-navy mb-5">Send us a message</h2>
            {/* Form — action wired to /api/contact */}
            <form action="/api/contact" method="POST" className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Full Name</label>
                  <input name="name" type="text" required className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B72]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Email</label>
                  <input name="email" type="email" required className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B72]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">Subject</label>
                <select name="subject" required className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B72] bg-white">
                  <option value="" disabled selected>Select a topic...</option>
                  <option>Question about my compliance situation</option>
                  <option>TCC Readiness enquiry</option>
                  <option>Monthly service enquiry</option>
                  <option>Exemption / concession packaging</option>
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">Message</label>
                <textarea name="message" required rows={5} placeholder="Tell us how we can help..." className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B72] resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#1A6B72] text-white font-semibold py-2.5 rounded-lg hover:bg-[#155a60] transition-colors text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
