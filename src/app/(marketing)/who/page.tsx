import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingHeader, MarketingFooter } from '@/components/marketing/shared'
import { brand } from '@/lib/brand'

export const metadata: Metadata = { title: 'Who We Help' }

export default function WhoPage() {
  return (
    <div className="min-h-screen">
      <MarketingHeader />

      <section className="bg-cream py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-4">Who We Help</h1>
          <p className="text-lg text-gray-600">
            If you run a Bahamian business with real compliance obligations — staff on payroll, VAT registration, government-facing work, or import activity — you are the right fit.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brand.segments.map(({ name, pain, tiers }) => (
            <div key={name} className="border border-gray-200 rounded-2xl p-6 hover:border-[#1A6B72] hover:shadow-sm transition-all">
              <p className="font-bold text-navy text-base mb-2">{name}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{pain}</p>
              <span className="text-xs font-semibold text-[#1A6B72] bg-[#EAF2F5] px-2.5 py-1 rounded-full">
                {tiers}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy mb-3">Not sure if you&apos;re the right fit?</h2>
          <p className="text-gray-600 mb-8">
            Book a free compliance review. We look at your current setup and tell you honestly whether we can help — and what the most urgent items are.
          </p>
          <Link
            href="/intake"
            className="inline-block bg-[#1A6B72] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#155a60] transition-colors"
          >
            Book a Free Compliance Review
          </Link>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
