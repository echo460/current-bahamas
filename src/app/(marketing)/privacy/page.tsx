import type { Metadata } from 'next'
import { MarketingHeader, MarketingFooter } from '@/components/marketing/shared'

export const metadata: Metadata = { title: 'Privacy Notice' }

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <MarketingHeader />

      <section className="bg-cream py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-navy mb-2">Privacy Notice</h1>
          <p className="text-sm text-gray-400">Version 1.0 · April 2026</p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto prose prose-sm prose-gray">

          <h2 className="text-navy font-bold text-lg mt-8 mb-3">Who we are</h2>
          <p className="text-gray-600 leading-relaxed">
            Current Bahamas provides administrative compliance coordination services to businesses operating in The Bahamas.
            We are based in Nassau, The Bahamas. Contact: <a href="mailto:hello@currentbahamas.com" className="text-[#1A6B72]">hello@currentbahamas.com</a>.
          </p>

          <h2 className="text-navy font-bold text-lg mt-8 mb-3">Data we collect</h2>
          <p className="text-gray-600 leading-relaxed">
            Business registration details, financial filing information, payroll and NIB data, contact information,
            and — in Phase 3 services only — immigration-related personal documents (passports, police certificates, medical certificates).
          </p>

          <h2 className="text-navy font-bold text-lg mt-8 mb-3">How we store it</h2>
          <p className="text-gray-600 leading-relaxed">
            Documents are stored in Google Drive with named-user access control. Business records are stored in Airtable.
            Highly sensitive documents (passports, payroll records, bank statements) are never stored in Airtable — Google Drive only,
            with restricted access. We do not sell your data.
          </p>

          <h2 className="text-navy font-bold text-lg mt-8 mb-3">Cross-border transfers</h2>
          <p className="text-gray-600 leading-relaxed">
            Some of our service providers process or store data outside The Bahamas, including Google (USA), Airtable (USA),
            Tally (EU — Belgium), PandaDoc (USA), and Calendly (USA). By engaging Current Bahamas, you acknowledge these
            cross-border transfers for the limited purpose of delivering the service, subject to applicable data-protection
            obligations and the safeguards described in this notice.
          </p>

          <h2 className="text-navy font-bold text-lg mt-8 mb-3">Legal framework</h2>
          <p className="text-gray-600 leading-relaxed">
            We operate under applicable Bahamian data-protection law, including the Data Protection Act 2025 (assented
            December 2025, operative dates appointed by Gazette notice). This notice will be updated as the operative
            transition dates are confirmed.
          </p>

          <h2 className="text-navy font-bold text-lg mt-8 mb-3">Your rights</h2>
          <p className="text-gray-600 leading-relaxed">
            You may request access to or correction of your data at any time. You may request deletion of your data,
            subject to legal, regulatory, contractual, and record-retention obligations that may require us to retain
            certain records for up to seven years. We will explain any retention obligation that limits a deletion request.
          </p>

          <h2 className="text-navy font-bold text-lg mt-8 mb-3">Contact</h2>
          <p className="text-gray-600">
            <a href="mailto:hello@currentbahamas.com" className="text-[#1A6B72] hover:underline">hello@currentbahamas.com</a>
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
