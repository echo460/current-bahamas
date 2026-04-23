import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Mail, Clock, MessageSquare } from 'lucide-react'
import { MarketingHeader, MarketingFooter } from '@/components/marketing/shared'
import { ContactBanner } from '@/components/marketing/ContactBanner'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Current Bahamas. Questions about compliance coordination, TCC readiness, or our services.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <MarketingHeader />

      <section className="bg-cream py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-4">Get in touch</h1>
          <p className="text-lg text-gray-600">
            Questions about your compliance situation or our services? We reply within 1 business day.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">

          {/* Left sidebar */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#EAF2F5] flex items-center justify-center shrink-0">
                <Mail className="h-4 w-4 text-[#1A6B72]" />
              </div>
              <div>
                <p className="font-medium text-navy text-sm">Email</p>
                <a
                  href="mailto:hello@currentbahamas.com"
                  className="text-sm text-[#1A6B72] hover:underline"
                >
                  hello@currentbahamas.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#EAF2F5] flex items-center justify-center shrink-0">
                <Clock className="h-4 w-4 text-[#1A6B72]" />
              </div>
              <div>
                <p className="font-medium text-navy text-sm">Response time</p>
                <p className="text-sm text-gray-500">Within 1 business day</p>
                <p className="text-sm text-gray-500">Mon–Fri, 9am–5pm BST</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#EAF2F5] flex items-center justify-center shrink-0">
                <MessageSquare className="h-4 w-4 text-[#1A6B72]" />
              </div>
              <div>
                <p className="font-medium text-navy text-sm">Compliance review</p>
                <p className="text-sm text-gray-500">
                  Want a review of your situation?{' '}
                  <a href="/intake" className="text-[#1A6B72] hover:underline">
                    Use the intake form
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-gray-200 p-7">
            <h2 className="font-semibold text-navy text-lg mb-5">Send us a message</h2>

            {/* Banner reads ?success=true or ?error=X from URL — client component */}
            <Suspense fallback={null}>
              <ContactBanner />
            </Suspense>

            <form action="/api/contact" method="POST" className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Full name <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B72]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B72]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Subject <span className="text-red-400">*</span>
                </label>
                <select
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B72] bg-white"
                >
                  <option value="" disabled>Select a topic…</option>
                  <option>Question about my compliance situation</option>
                  <option>TCC Readiness enquiry</option>
                  <option>Monthly Compliance Care enquiry</option>
                  <option>Full Compliance Operations enquiry</option>
                  <option>Exemption / concession packaging</option>
                  <option>Something else</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help…"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B72] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A6B72] text-white font-semibold py-2.5 rounded-lg hover:bg-[#155a60] transition-colors text-sm"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-400 text-center">
                By submitting this form you agree to our{' '}
                <a href="/privacy" className="hover:underline text-[#1A6B72]">Privacy Notice</a>.
                We do not share your data with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
