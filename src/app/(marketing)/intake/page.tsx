import type { Metadata } from 'next'
import { MarketingHeader, MarketingFooter } from '@/components/marketing/shared'

export const metadata: Metadata = {
  title: 'Book a Free Compliance Review',
  description: 'Tell us about your business. We review your compliance situation and come back to you within 1 business day.',
}

/*
  TALLY FORM SETUP
  ─────────────────────────────────────────────────────────────────────────────
  Build this form at tally.so, then replace TALLY_FORM_ID below.

  FIELD SPEC (use these exact Field Keys when setting up Tally → Airtable):

  Page 1 — Your Business
  ├── businessName     Text        "Business name" [required]
  ├── contactName      Text        "Your name" [required]
  ├── email            Email       "Email address" [required]
  ├── whatsapp         Tel         "WhatsApp number (optional)"
  ├── island           Dropdown    "Island / location"
  │                                Options: New Providence / Andros / Abaco /
  │                                         Grand Bahama / Exuma / Eleuthera /
  │                                         Bimini / Other
  └── industry         Dropdown    "Industry"
                                   Options: Hospitality / Construction /
                                            Food & Beverage / Retail /
                                            Marine & Tours / Nonprofit /
                                            Multi-Entity Group / Other

  Page 2 — Compliance Situation
  ├── staffCount       Dropdown    "How many staff?"
  │                                Options: Just me / 2–5 / 6–15 / 16–30 / 31+
  ├── vatRegistered    Radio       "Are you VAT registered?"
  │                                Options: Yes / No / Not sure
  ├── importActive     Radio       "Do you import goods?"
  │                                Options: Yes / No / Sometimes
  └── govFacing        Radio       "Do you do business with the government?"
                                   Options: Yes (contracts/grants) / No / Sometimes

  Page 3 — Your Situation
  ├── biggestPain      Textarea    "What is your biggest compliance headache right now?" [required]
  ├── currentApproach  Radio       "How do you currently handle compliance admin?"
  │                                Options: I do it myself / My accountant handles it /
  │                                         I have someone in-house / It usually falls through the cracks
  └── interestedTier   Radio       "Which service sounds most relevant?"
                                   Options: Monthly Compliance Care ($250/mo) /
                                            Full Compliance Operations ($700/mo) /
                                            Enterprise Back-Office ($1,500/mo) /
                                            Just want to talk first

  Page 4 — How to reach you
  └── hearAboutUs      Dropdown    "How did you hear about us?"
                                   Options: Word of mouth / Google / LinkedIn /
                                            Facebook / WhatsApp / Accountant referral /
                                            Other

  TALLY SETTINGS:
  - Webhook URL: https://currentbahamas.com/api/intake
  - Redirect on submit: https://currentbahamas.com/intake?success=true
  - Theme: match brand (navy #0B2545 / teal #1A6B72)

  AIRTABLE INTEGRATION (in Tally → Integrations):
  - Connect to CB Operations base → Clients table
  - Map fields using the field keys above
  ─────────────────────────────────────────────────────────────────────────────
*/

const TALLY_FORM_ID = '' // Set this once form is created at tally.so

export default function IntakePage() {
  return (
    <div className="min-h-screen">
      <MarketingHeader />

      <section className="bg-cream py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-4">
            Book a Free Compliance Review
          </h1>
          <p className="text-lg text-gray-600">
            Tell us about your business. We will review your compliance situation and
            come back to you within 1 business day — no obligation.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">

          {TALLY_FORM_ID ? (
            /* Live Tally embed — replace TALLY_FORM_ID above */
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <iframe
                src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1`}
                width="100%"
                height="700"
                frameBorder="0"
                title="Compliance Review Intake Form"
              />
            </div>
          ) : (
            /* Fallback — shown until Tally form is connected */
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-full bg-[#EAF2F5] flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-[#1A6B72]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="font-semibold text-navy text-lg mb-2">Online form coming soon</h2>
                <p className="text-sm text-gray-500 max-w-sm mx-auto">
                  Email us directly at{' '}
                  <a href="mailto:hello@currentbahamas.com" className="text-[#1A6B72] hover:underline">
                    hello@currentbahamas.com
                  </a>{' '}
                  and we will set up a compliance review conversation right away.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-4 text-center">
                  What to include in your email
                </p>
                <ul className="space-y-2 text-sm text-gray-500 max-w-sm mx-auto">
                  {[
                    'Your business name and island',
                    'What industry you are in',
                    'Roughly how many staff you have',
                    'Whether you are VAT registered',
                    'Your biggest compliance headache right now',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#1A6B72] mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-6">
                  <a
                    href="mailto:hello@currentbahamas.com?subject=Compliance Review Request"
                    className="inline-block bg-[#1A6B72] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#155a60] transition-colors text-sm"
                  >
                    Email us now
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              Your information is processed under our{' '}
              <a href="/privacy" className="text-[#1A6B72] hover:underline">Privacy Notice</a>.
              We do not share your data with third parties.
            </p>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
