import type { Metadata } from 'next'
import { MarketingHeader, MarketingFooter } from '@/components/marketing/shared'

export const metadata: Metadata = { title: 'Book a Compliance Review' }

export default function IntakePage() {
  return (
    <div className="min-h-screen">
      <MarketingHeader />

      <section className="bg-cream py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-4">Book a Free Compliance Review</h1>
          <p className="text-lg text-gray-600">
            Tell us about your business. We review your compliance situation and come back to you within 1 business day.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 p-8">
          {/*
            TODO: Replace this placeholder with the live Tally embed once the form is built.
            Tally form ID goes in the src attribute:
            <iframe src="https://tally.so/embed/FORM_ID" width="100%" height="600" frameBorder="0" />

            Form fields to collect (from v5 §10 Phase 1):
            - Business name
            - Island / location
            - Industry / segment
            - Number of staff
            - VAT registered? Y/N
            - Import goods? Y/N
            - Government-facing work? Y/N
            - Biggest compliance pain right now
            - Current approach (accountant, in-house, nothing)
            - Preferred contact method
            - Email
            - WhatsApp number
            - How did you hear about us
          */}
          <div className="text-center py-12 text-gray-400">
            <p className="text-sm font-medium text-navy mb-2">Intake form loading…</p>
            <p className="text-xs">
              If this page is blank, the Tally embed is not yet connected.{' '}
              <a href="mailto:hello@currentbahamas.com" className="text-[#1A6B72] hover:underline">
                Email us directly
              </a>{' '}
              in the meantime.
            </p>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
