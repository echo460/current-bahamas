import Link from 'next/link'
import { MarketingHeader, MarketingFooter } from '@/components/marketing/shared'
import { brand } from '@/lib/brand'
import { CheckCircle2, AlertTriangle, Clock, FileText, Users, Building2 } from 'lucide-react'

const obligations = [
  { label: 'Business Licence', detail: 'Annual renewal required. Financial statements above $250K.', icon: FileText },
  { label: 'VAT Returns', detail: 'Due within 21 days after each VAT period ends.', icon: Clock },
  { label: 'Tax Clearance (TCC)', detail: 'Required for government contracts and payments.', icon: CheckCircle2 },
  { label: 'NIB Contributions', detail: 'Due by 15th of the following month, every month.', icon: Users },
  { label: 'Agriculture Permits', detail: 'Must be obtained before goods are purchased.', icon: AlertTriangle },
  { label: 'FIDEA / Exemptions', detail: 'Apply before purchase to capture full concession value.', icon: Building2 },
]

const steps = [
  { n: '1', title: 'Compliance Review', body: 'We look at your current setup — deadlines, documents, outstanding items, and risk points.' },
  { n: '2', title: 'Build Your Calendar', body: 'We set up your compliance calendar and document vault — every deadline mapped, every document tracked, nothing left to chance.' },
  { n: '3', title: 'Ongoing Support', body: 'We stay involved month-to-month — reminders, document gathering, status tracking, deadline prep.' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <MarketingHeader />

      {/* Hero */}
      <section className="bg-cream pt-20 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#1A6B72] inline-block"></span>
            Nassau, The Bahamas
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
            Stay current without chasing<br />every filing yourself.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Current Bahamas handles the compliance admin that keeps Bahamian businesses in good standing —
            business licence renewals, VAT calendars, TCC readiness, NIB coordination, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/intake"
              className="bg-[#1A6B72] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#155a60] transition-colors text-base"
            >
              Book a Free Compliance Review
            </Link>
            <Link
              href="/services"
              className="border border-[#0B2545] text-[#0B2545] font-semibold px-8 py-3.5 rounded-xl hover:bg-[#0B2545] hover:text-white transition-colors text-base"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Problem strip */}
      <section className="bg-[#0B2545] py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-8">The obligations that don&apos;t wait</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {obligations.map(({ label, detail, icon: Icon }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-left">
                <Icon className="h-5 w-5 text-[#1A6B72] mb-3" />
                <p className="text-white font-medium text-sm mb-1">{label}</p>
                <p className="text-white/50 text-xs leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-sm mt-8">
            Most businesses discover something is due only when it is already urgent. We fix that.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-3">Three ways we help</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Start with what you need. Add more as you grow.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {brand.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-7 border-2 flex flex-col ${
                  tier.highlight
                    ? 'border-[#1A6B72] bg-[#EAF2F5]'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {tier.highlight && (
                  <span className="text-xs font-semibold text-[#1A6B72] uppercase tracking-wider mb-3">Most Popular</span>
                )}
                <p className="font-bold text-navy text-lg mb-1">{tier.name}</p>
                <p className="text-3xl font-bold text-[#1A6B72] mb-1">
                  ${tier.price.toLocaleString()}
                  <span className="text-base font-normal text-gray-400">/{tier.per}</span>
                </p>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed flex-1">{tier.description}</p>
                <Link
                  href="/intake"
                  className={`mt-6 text-center font-semibold py-2.5 rounded-lg text-sm transition-colors ${
                    tier.highlight
                      ? 'bg-[#1A6B72] text-white hover:bg-[#155a60]'
                      : 'border border-[#1A6B72] text-[#1A6B72] hover:bg-[#1A6B72] hover:text-white'
                  }`}
                >
                  Get started
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">
            Work above the monthly hour budget is billed at $85/hr with your approval.
            No hidden fees, no surprise charges.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-3">How it works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ n, title, body }) => (
              <div key={n} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#1A6B72] text-white font-bold text-lg flex items-center justify-center mx-auto mb-5">
                  {n}
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ICP */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-3">Built for businesses with real moving parts</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              If your business is juggling compliance deadlines, government-facing obligations, or import activity, this is for you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {brand.segments.map(({ name, pain, tiers }) => (
              <div key={name} className="border border-gray-100 rounded-xl p-5 hover:border-[#A8C8D4] transition-colors">
                <p className="font-semibold text-navy text-sm mb-1">{name}</p>
                <p className="text-xs text-gray-400 mb-2">{pain}</p>
                <span className="text-xs font-medium text-[#1A6B72] bg-[#EAF2F5] px-2 py-0.5 rounded">{tiers}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Common questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Do I still need an accountant?',
                a: 'Yes. Current Bahamas is not an accounting firm. We handle the coordination layer — calendars, document organisation, deadline tracking, TCC readiness. Your accountant handles statutory filings and financial statements. We work alongside them, not instead of them.',
              },
              {
                q: 'Can you submit things to the government on my behalf?',
                a: 'We prepare everything so it is ready to submit. For most workflows the default is that you (or your accountant) submit. In some cases we can assist with submission, but only when the portal\'s own rules and your written authorisation are both confirmed. We are not a licensed customs broker or immigration adviser.',
              },
              {
                q: 'What happens if I miss a deadline?',
                a: "That's exactly what we prevent. Our job is to make sure you know what's coming at least two weeks before it's due. If something slips despite that, we help you understand what the exposure is and what to do next.",
              },
              {
                q: 'How is this different from a bookkeeper?',
                a: 'A bookkeeper records transactions. We manage your compliance calendar, keep your documents organised, maintain your TCC readiness, and track every government-facing obligation your business has. Most bookkeepers don\'t do this proactively.',
              },
              {
                q: 'How do I get started?',
                a: 'Book a free compliance review. We look at your current situation, tell you what\'s current, what\'s at risk, and what needs attention first. No commitment required.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl p-6 border border-gray-100">
                <p className="font-semibold text-navy mb-2 text-sm">{q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B2545] text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Stop waiting for the next scramble.</h2>
          <p className="text-white/70 mb-8">
            Start with a free compliance review. We show you what is current, what is at risk, and what needs attention first.
          </p>
          <Link
            href="/intake"
            className="inline-block bg-[#1A6B72] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#155a60] transition-colors"
          >
            Book a Free Compliance Review →
          </Link>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
