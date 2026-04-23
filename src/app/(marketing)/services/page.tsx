import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingHeader, MarketingFooter } from '@/components/marketing/shared'
import { brand } from '@/lib/brand'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = { title: 'Services' }

const tier1Features = [
  'Business licence renewal calendar — deadline tracking, pre-renewal checklist',
  'VAT period calendar — filing window reminders, pre-submission checklist',
  'NIB schedule — monthly reminders, employee count reconciliation',
  'Monthly status report — current / at-risk / missing',
  'Document vault — Google Drive per-client folder',
  '2 × 15-min support contacts per month (email)',
]

const tier2Features = [
  'Everything in Monthly Compliance Care',
  'TCC readiness — file maintained year-round, not only when needed',
  'Exemption eligibility monitoring — FIDEA, SERZ, EEZ flags',
  'Quarterly review call — 45 min, written summary',
  'Priority email response — within 4 business hours, Mon–Fri',
  'Annual compliance audit — gap analysis, 12-month calendar',
]

const tier3Features = [
  'Everything in Full Compliance Operations',
  'Multi-entity coordination — consolidated reporting',
  'Audit readiness package — vault audit, filing history, issue log',
  'Monthly reporting pack — fixed template',
  'Concession and exemption application prep — document assembly',
  'Named account manager',
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <MarketingHeader />

      <section className="bg-cream py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-4">Services</h1>
          <p className="text-lg text-gray-600">
            Start with what you need. Add more as your business grows. No lock-in — 30 days notice to exit.
          </p>
        </div>
      </section>

      {/* Tiers detail */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Tier 1 */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-1">Monthly Compliance Care</h2>
                <p className="text-gray-500 text-sm">For very small businesses, 1–5 staff, light filing needs.</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-[#1A6B72]">$250<span className="text-base font-normal text-gray-400">/month</span></p>
              </div>
            </div>
            <ul className="space-y-2.5">
              {tier1Features.map(f => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-[#1A6B72] shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/intake" className="mt-6 inline-block border border-[#1A6B72] text-[#1A6B72] font-semibold px-6 py-2.5 rounded-lg hover:bg-[#1A6B72] hover:text-white transition-colors text-sm">
              Get started
            </Link>
          </div>

          {/* Tier 2 */}
          <div className="border-2 border-[#1A6B72] rounded-2xl p-8 bg-[#EAF2F5]">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-semibold text-[#1A6B72] uppercase tracking-wider">Most Popular</span>
                <h2 className="text-2xl font-bold text-navy mt-1 mb-1">Full Compliance Operations</h2>
                <p className="text-gray-500 text-sm">For growing businesses with VAT + NIB + active coordination needs, 5–30 staff.</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-[#1A6B72]">$700<span className="text-base font-normal text-gray-400">/month</span></p>
              </div>
            </div>
            <ul className="space-y-2.5">
              {tier2Features.map(f => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-[#1A6B72] shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/intake" className="mt-6 inline-block bg-[#1A6B72] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#155a60] transition-colors text-sm">
              Get started
            </Link>
          </div>

          {/* Tier 3 */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-1">Enterprise Compliance Back-Office</h2>
                <p className="text-gray-500 text-sm">For multi-entity groups, resort operators, and high-volume government contractors.</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-[#1A6B72]">$1,500<span className="text-base font-normal text-gray-400">/month</span></p>
              </div>
            </div>
            <ul className="space-y-2.5">
              {tier3Features.map(f => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-[#1A6B72] shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/intake" className="mt-6 inline-block border border-[#1A6B72] text-[#1A6B72] font-semibold px-6 py-2.5 rounded-lg hover:bg-[#1A6B72] hover:text-white transition-colors text-sm">
              Get started
            </Link>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-2">Project add-ons</h2>
          <p className="text-gray-500 text-sm mb-8">One-time projects, scoped and priced before work begins.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {brand.addOns.map(({ name, priceRange, hours, trigger }) => (
              <div key={name} className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-navy text-sm mb-1">{name}</p>
                <p className="text-[#1A6B72] font-bold text-lg mb-1">{priceRange}</p>
                <p className="text-xs text-gray-400 mb-2">{hours} · {trigger}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope disclaimer */}
      <section className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-gray-500">Scope note:</strong> Current Bahamas provides administrative coordination, document organisation, deadline management, and preparation support.
            We are not a licensed customs broker, law firm, regulated accounting firm, or immigration adviser.
            We do not submit through government portals on your behalf without specific workflow authorisation confirmed in writing.
            All estimates are planning tools only — final obligations are determined by the relevant Bahamian government authority.
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
