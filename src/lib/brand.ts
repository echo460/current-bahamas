// ── Current Bahamas — Brand Tokens ──────────────────────────────────────────
// Navy #0B2545 · Teal #1A6B72 · Cream #F5EFE6 · White
// Shares palette DNA with Landed Cost Co. by design (same founder, same ecosystem)
// Differentiate via teal weight, wordmark prominence, and domain clarity

export const brand = {
  name: 'Current Bahamas',
  tagline: 'Stay current without chasing every filing yourself.',
  description: 'Administrative coordination and compliance readiness for Bahamian SMEs.',
  email: 'hello@currentbahamas.com',
  opsEmail: 'ops@currentbahamas.com',
  domain: 'currentbahamas.com',
  colors: {
    navy: '#0B2545',
    teal: '#1A6B72',
    cream: '#F5EFE6',
    white: '#FFFFFF',
  },
  tiers: [
    {
      name: 'Monthly Compliance Care',
      price: 250,
      per: 'month',
      hourBudget: 4,
      hourCeiling: 5.5,
      description: 'Business licence calendar, VAT reminders, NIB schedule, monthly status report, document vault.',
      highlight: false,
    },
    {
      name: 'Full Compliance Operations',
      price: 700,
      per: 'month',
      hourBudget: 10,
      hourCeiling: 13,
      description: 'Everything in Tier 1 plus TCC readiness, exemption monitoring, quarterly review call, priority email response.',
      highlight: true,
    },
    {
      name: 'Enterprise Compliance Back-Office',
      price: 1500,
      per: 'month',
      hourBudget: 22,
      hourCeiling: 27,
      description: 'Everything in Tier 2 plus multi-entity coordination, audit readiness, monthly reporting pack, named account manager.',
      highlight: false,
    },
  ],
  addOns: [
    { name: 'TCC Rescue', priceRange: '$500–$1,500', hours: '5–15 hrs', trigger: 'Client blocked or imminently needs TCC' },
    { name: 'Document Cleanup Sprint', priceRange: '$750–$2,500', hours: '8–25 hrs', trigger: 'Disorganised records, scattered files' },
    { name: 'VAT Backfile', priceRange: '$1,000–$3,000', hours: '10–30 hrs', trigger: 'Missing or incorrect prior VAT periods' },
    { name: 'Exemption Package', priceRange: '$500–$3,000', hours: '5–20 hrs', trigger: 'FIDEA/SERZ/EEZ qualifying project identified' },
    { name: 'Onboarding Audit', priceRange: '$300–$750', hours: '3–8 hrs', trigger: 'New client baseline compliance snapshot' },
  ],
  segments: [
    { name: 'Boutique Hospitality', pain: 'TCC for grants, NIB for seasonal staff, VAT rhythm', tiers: 'T2–T3' },
    { name: 'Construction & Contractors', pain: 'TCC for government work, exemptions, licence renewal', tiers: 'T2–T3' },
    { name: 'Food & Beverage', pain: 'VAT filing, agriculture permits, licence renewal', tiers: 'T1–T2' },
    { name: 'Retail', pain: 'VAT, licence renewal', tiers: 'T1–T2' },
    { name: 'Marine & Tours', pain: 'Seasonal NIB, compliance calendar', tiers: 'T1–T2' },
    { name: 'Nonprofits & NGOs', pain: 'TCC for grants, NIB, government-facing readiness', tiers: 'T1–T2' },
    { name: 'Multi-Entity Groups', pain: 'Cross-entity coordination, consolidated reporting', tiers: 'T3' },
  ],
  // Regulatory scope — never deviate from this
  regulatoryScope: {
    isNot: [
      'A licensed customs broker',
      'A licensed immigration adviser',
      'A regulated accounting firm',
      'A law firm',
      'An authorized government portal agent (without triple confirmation per §5.3)',
    ],
    is: 'Administrative coordination, document organisation, deadline management, reminders, preparation support, and workflow management.',
  },
} as const
