import type { Metadata } from 'next'
import { MarketingHeader, MarketingFooter } from '@/components/marketing/shared'
import { Mail, Clock, CheckCircle2, AlertCircle } from 'lucide-react'

export const metadata: Metadata = { title: 'Contact' }

// Success/error banners read from URL search params
function Banner({ success, error }: { success: boolean; error: string | null }) {
  if (success) return (
    <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
      <div>
        <p className="font-medium text-green-900 text-sm">Message sent</p>
        <p className="text-green-700 text-xs mt-0.5">We will reply within 1 business day.</p>
      </div>
    </div>
  )
  if (error) return (
    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
      <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
      <div>
        <p className="font-medium text-red-900 text-sm">
          {error === 'missing' ? 'Please fill in all fields' : 'Something went wrong — please try again'}
        </p>
      </div>
    </div>
  )
  return null
}

export default function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string; error?: string }>
}) {
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
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">

          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#EAF2F5] flex items-center justify-center shrink-0">
                <Mail className="h-4 w-4 text-[#1A6B72]" />
              </div>
              <div>
                <p className="font-medium text-navy text-sm">Email</p>
                <a href="mailto:hello@currentbahamas.com" className="text-sm text-[#1A6B72] hover:underline">
                  hello@currentbahamas.com
                </a>
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
            <div className="bg-[#EAF2F5] rounded-xl p-4">
              <p className="text-xs font-medium text-navy mb-1">Ready to start?</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                If you want a full compliance review, use the intake form — it gives us what we need to help you right away.
              </p>
              <a href="/intake" className="inline-block mt-3 text-xs font-semibold text-[#1A6B72] hover:underline">
                Book a review →
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-gray-200 p-7">
            <h2 className="font-semibold text-navy mb-5">Send us a message</h2>

            {/* Banner — resolved on server using searchParams */}
            <ContactBanner />

            <form action="/api/contact" method="POST" className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B72] focus:border-transparent"
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
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B72] focus:border-transparent"
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
                  <option>TCC readiness enquiry</option>
                  <option>Monthly service enquiry</option>
                  <option>Exemption / concession packaging</option>
                  <option>Import document prep</option>
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
                By submitting this form, you agree to our{' '}
                <a href="/privacy" className="hover:underline text-[#1A6B72]">Privacy Notice</a>.
              </p>
            </form>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}

// Server component banner — reads searchParams
async function ContactBanner() {
  // In Next.js 15 App Router, searchParams is a Promise in server components
  // We keep this simple: if ?success=true show green, if ?error=X show red
  // The actual reading happens client-side via the URL
  // For SSR we'd need to pass searchParams prop — placeholder for now
  return null
}
