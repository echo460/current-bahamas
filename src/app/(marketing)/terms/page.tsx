import type { Metadata } from 'next'
import { MarketingHeader, MarketingFooter } from '@/components/marketing/shared'

export const metadata: Metadata = { title: 'Terms of Service' }

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <MarketingHeader />

      <section className="bg-cream py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-navy mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-400">Version 1.0 · April 2026</p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-sm text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-navy font-bold text-base mb-2">1. What Current Bahamas provides</h2>
            <p>
              Current Bahamas provides administrative coordination, document organisation, deadline management, reminders,
              preparation support, and workflow management. We help clients stay organised and ready for government-facing
              compliance obligations.
            </p>
          </div>

          <div>
            <h2 className="text-navy font-bold text-base mb-2">2. What Current Bahamas does not provide</h2>
            <p>
              Current Bahamas is not a licensed customs broker, law firm, regulated accounting firm, or immigration adviser.
              We do not provide legal advice, customs brokerage services, regulated accounting assurance, or immigration advice.
              We do not submit through government portals on your behalf without written authorisation and confirmed portal
              permissions. Where regulated advice is required, we will refer you to the appropriate licensed professional.
            </p>
          </div>

          <div>
            <h2 className="text-navy font-bold text-base mb-2">3. Scope and engagement</h2>
            <p>
              Services are defined in your engagement letter, which specifies the obligations included, the monthly hour
              budget, overage rates ($85/hr), and any excluded services. Work beyond the agreed scope requires written approval
              before it begins. Nothing in these terms modifies or replaces your engagement letter.
            </p>
          </div>

          <div>
            <h2 className="text-navy font-bold text-base mb-2">4. Client responsibilities</h2>
            <p>
              You are responsible for the accuracy and completeness of all information you provide. Current Bahamas prepares
              based on what you supply. We are not liable for errors, penalties, or missed deadlines arising from information
              withheld, delayed, or incorrectly provided by you.
            </p>
          </div>

          <div>
            <h2 className="text-navy font-bold text-base mb-2">5. Payment</h2>
            <p>
              Monthly retainer fees are due on the first business day of each month. Payment terms are Net 7 from invoice
              date unless otherwise stated in your engagement letter. Overdue accounts may result in suspension of services.
            </p>
          </div>

          <div>
            <h2 className="text-navy font-bold text-base mb-2">6. Termination</h2>
            <p>
              Either party may terminate with 30 days written notice. Fees are payable through the termination date.
              On termination, we will provide you with your documents and records in an accessible format within 10 business days.
            </p>
          </div>

          <div>
            <h2 className="text-navy font-bold text-base mb-2">7. Limitation of liability</h2>
            <p>
              Current Bahamas is not liable for government decisions, regulatory outcomes, penalties arising from information
              withheld by the client, or changes in government requirements not communicated to us. Our aggregate liability
              under any engagement is limited to fees paid in the preceding three months.
            </p>
          </div>

          <div>
            <h2 className="text-navy font-bold text-base mb-2">8. Governing law</h2>
            <p>
              These terms are governed by the laws of The Bahamas. Any disputes shall be resolved in the courts of The Bahamas.
            </p>
          </div>

          <div>
            <h2 className="text-navy font-bold text-base mb-2">9. Contact</h2>
            <p>
              <a href="mailto:hello@currentbahamas.com" className="text-[#1A6B72] hover:underline">hello@currentbahamas.com</a>
            </p>
          </div>

        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
