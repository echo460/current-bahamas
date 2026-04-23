'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MarketingHeader, MarketingFooter } from '@/components/marketing/shared'
import { CheckCircle2, ChevronRight, ChevronLeft, Loader2 } from 'lucide-react'

// ── Types ──────────────────────────────────────────────────────────────────
type FormData = {
  // Page 1
  businessName: string
  contactName: string
  email: string
  whatsapp: string
  island: string
  industry: string
  // Page 2
  staffCount: string
  vatRegistered: string
  importActive: string
  govFacing: string
  // Page 3
  biggestPain: string
  currentApproach: string
  interestedTier: string
  hearAboutUs: string
}

const INITIAL: FormData = {
  businessName: '', contactName: '', email: '', whatsapp: '',
  island: '', industry: '',
  staffCount: '', vatRegistered: '', importActive: '', govFacing: '',
  biggestPain: '', currentApproach: '', interestedTier: '', hearAboutUs: '',
}

// ── Shared field styles ────────────────────────────────────────────────────
const input = 'w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6B72] bg-white'
const label = 'block text-sm font-medium text-[#0B2545] mb-1.5'

// ── Radio group ────────────────────────────────────────────────────────────
function RadioGroup({
  name, value, options, onChange,
}: {
  name: string
  value: string
  options: { label: string; value: string }[]
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer text-sm transition-colors ${
            value === opt.value
              ? 'border-[#1A6B72] bg-[#EAF2F5] text-[#0B2545] font-medium'
              : 'border-gray-200 text-gray-600 hover:border-[#A8C8D4]'
          }`}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="sr-only"
          />
          <span
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
              value === opt.value ? 'border-[#1A6B72]' : 'border-gray-300'
            }`}
          >
            {value === opt.value && (
              <span className="w-2 h-2 rounded-full bg-[#1A6B72]" />
            )}
          </span>
          {opt.label}
        </label>
      ))}
    </div>
  )
}

// ── Progress bar ────────────────────────────────────────────────────────────
function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-gray-100">
          <div
            className="h-full bg-[#1A6B72] rounded-full transition-all duration-300"
            style={{ width: i < step ? '100%' : '0%' }}
          />
        </div>
      ))}
      <span className="text-xs text-gray-400 shrink-0">Step {step} of {total}</span>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────
export default function IntakePage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>(INITIAL)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const setRadio = (field: keyof FormData) => (v: string) =>
    setForm((f) => ({ ...f, [field]: v }))

  // Page validation
  const canNext = () => {
    if (step === 1) return form.businessName.trim() && form.contactName.trim() && form.email.trim() && form.island && form.industry
    if (step === 2) return form.staffCount && form.vatRegistered && form.importActive && form.govFacing
    if (step === 3) return form.biggestPain.trim()
    return true
  }

  const next = () => { if (canNext()) setStep((s) => s + 1) }
  const back = () => setStep((s) => s - 1)

  const submit = async () => {
    setSubmitting(true)
    setError('')
    try {
      // Build Tally-compatible payload so /api/intake field mapping works unchanged
      const fields = Object.entries(form).map(([key, value]) => ({ key, label: key, value }))
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields, source: 'native-form' }),
      })
      if (!res.ok) throw new Error('Server error')
      setDone(true)
    } catch {
      setError('Something went wrong — please try again or email hello@currentbahamas.com')
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div className="min-h-screen">
        <MarketingHeader />
        <section className="py-32 px-6 text-center">
          <div className="max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#EAF2F5] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-8 w-8 text-[#1A6B72]" />
            </div>
            <h1 className="text-3xl font-bold text-[#0B2545] mb-3">
              Thanks — we&apos;ll be in touch within 1 business day.
            </h1>
            <p className="text-gray-500 mb-8">
              We&apos;ve received your details and will review your compliance situation.
              Expect a message from{' '}
              <a href="mailto:hello@currentbahamas.com" className="text-[#1A6B72] hover:underline">
                hello@currentbahamas.com
              </a>
              {' '}or a WhatsApp from our team.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#1A6B72] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#155a60] transition-colors text-sm"
            >
              Back to home
            </Link>
          </div>
        </section>
        <MarketingFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <MarketingHeader />

      <section className="bg-cream py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0B2545] mb-3">
            Book a Free Compliance Review
          </h1>
          <p className="text-gray-600">
            Tell us about your business. We come back to you within 1 business day — no obligation.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 pb-20">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <ProgressBar step={step} total={3} />

            {/* ── Page 1: Your Business ─────────────────────────────────── */}
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="font-semibold text-[#0B2545] text-lg mb-6">Your business</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={label}>Business name <span className="text-red-400">*</span></label>
                    <input className={input} value={form.businessName} onChange={set('businessName')} placeholder="e.g. Blue Horizon Restaurant" autoFocus />
                  </div>
                  <div>
                    <label className={label}>Your name <span className="text-red-400">*</span></label>
                    <input className={input} value={form.contactName} onChange={set('contactName')} placeholder="First and last name" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={label}>Email <span className="text-red-400">*</span></label>
                    <input className={input} type="email" value={form.email} onChange={set('email')} placeholder="you@yourbusiness.com" />
                  </div>
                  <div>
                    <label className={label}>WhatsApp number <span className="text-gray-400 font-normal">(optional)</span></label>
                    <input className={input} type="tel" value={form.whatsapp} onChange={set('whatsapp')} placeholder="+1 242..." />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={label}>Island <span className="text-red-400">*</span></label>
                    <select className={input} value={form.island} onChange={set('island')}>
                      <option value="" disabled>Select island…</option>
                      {['New Providence / Nassau', 'Andros', 'Abaco', 'Grand Bahama', 'Exuma', 'Eleuthera', 'Bimini', 'Other'].map(o => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={label}>Industry <span className="text-red-400">*</span></label>
                    <select className={input} value={form.industry} onChange={set('industry')}>
                      <option value="" disabled>Select industry…</option>
                      {['Hospitality', 'Construction / Contracting', 'Food & Beverage', 'Retail', 'Marine & Tours', 'Nonprofit / Foundation', 'Multi-Entity Group', 'Other'].map(o => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* ── Page 2: Your Compliance Situation ────────────────────── */}
            {step === 2 && (
              <div className="space-y-7">
                <h2 className="font-semibold text-[#0B2545] text-lg mb-6">Your compliance situation</h2>

                <div>
                  <label className={label}>How many staff do you have? <span className="text-red-400">*</span></label>
                  <RadioGroup
                    name="staffCount"
                    value={form.staffCount}
                    onChange={setRadio('staffCount')}
                    options={[
                      { label: 'Just me', value: 'Just me' },
                      { label: '2–5', value: '2–5' },
                      { label: '6–15', value: '6–15' },
                      { label: '16–30', value: '16–30' },
                      { label: '31+', value: '31+' },
                    ]}
                  />
                </div>

                <div>
                  <label className={label}>Are you VAT registered? <span className="text-red-400">*</span></label>
                  <RadioGroup
                    name="vatRegistered"
                    value={form.vatRegistered}
                    onChange={setRadio('vatRegistered')}
                    options={[
                      { label: 'Yes', value: 'Yes' },
                      { label: 'No', value: 'No' },
                      { label: 'Not sure', value: 'Not sure' },
                    ]}
                  />
                </div>

                <div>
                  <label className={label}>Do you import goods into The Bahamas? <span className="text-red-400">*</span></label>
                  <RadioGroup
                    name="importActive"
                    value={form.importActive}
                    onChange={setRadio('importActive')}
                    options={[
                      { label: 'Yes, regularly', value: 'Yes' },
                      { label: 'Yes, occasionally', value: 'Sometimes' },
                      { label: 'No', value: 'No' },
                    ]}
                  />
                </div>

                <div>
                  <label className={label}>Do you do work with the government or apply for grants? <span className="text-red-400">*</span></label>
                  <RadioGroup
                    name="govFacing"
                    value={form.govFacing}
                    onChange={setRadio('govFacing')}
                    options={[
                      { label: 'Yes (contracts or grants)', value: 'Yes' },
                      { label: 'Occasionally', value: 'Sometimes' },
                      { label: 'No', value: 'No' },
                    ]}
                  />
                </div>
              </div>
            )}

            {/* ── Page 3: Your Situation ────────────────────────────────── */}
            {step === 3 && (
              <div className="space-y-7">
                <h2 className="font-semibold text-[#0B2545] text-lg mb-6">Your situation</h2>

                <div>
                  <label className={label}>
                    What&apos;s your biggest compliance headache right now? <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    className={`${input} resize-none`}
                    rows={4}
                    value={form.biggestPain}
                    onChange={set('biggestPain')}
                    placeholder="e.g. I never know when my VAT is due — or — I need a TCC and don't know where to start"
                  />
                </div>

                <div>
                  <label className={label}>How do you currently handle compliance admin?</label>
                  <RadioGroup
                    name="currentApproach"
                    value={form.currentApproach}
                    onChange={setRadio('currentApproach')}
                    options={[
                      { label: 'I handle it myself', value: 'Myself' },
                      { label: 'My accountant handles it', value: 'Accountant' },
                      { label: 'I have someone in-house', value: 'In-house' },
                      { label: 'It usually falls through the cracks', value: 'Falls through' },
                    ]}
                  />
                </div>

                <div>
                  <label className={label}>Which service sounds most relevant?</label>
                  <RadioGroup
                    name="interestedTier"
                    value={form.interestedTier}
                    onChange={setRadio('interestedTier')}
                    options={[
                      { label: 'Monthly Compliance Care ($250/month)', value: 'T1 – Monthly Compliance Care' },
                      { label: 'Full Compliance Operations ($700/month)', value: 'T2 – Full Compliance Operations' },
                      { label: 'Enterprise Back-Office ($1,500/month)', value: 'T3 – Enterprise Back-Office' },
                      { label: "I'm not sure yet — just want a review", value: 'Not sure' },
                    ]}
                  />
                </div>

                <div>
                  <label className={label}>How did you hear about Current Bahamas?</label>
                  <select className={input} value={form.hearAboutUs} onChange={set('hearAboutUs')}>
                    <option value="">Select…</option>
                    {['Word of mouth', 'Google search', 'LinkedIn', 'Facebook', 'WhatsApp', 'Accountant referral', 'Other'].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                {error && (
                  <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                    {error}
                  </div>
                )}
              </div>
            )}

            {/* ── Navigation ─────────────────────────────────────────────── */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              {step > 1 ? (
                <button
                  onClick={back}
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-[#0B2545] transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  onClick={next}
                  disabled={!canNext()}
                  className="flex items-center gap-1.5 bg-[#1A6B72] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#155a60] transition-colors text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={submit}
                  disabled={!canNext() || submitting}
                  className="flex items-center gap-2 bg-[#1A6B72] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#155a60] transition-colors text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>
                  ) : (
                    <>Submit <ChevronRight className="h-4 w-4" /></>
                  )}
                </button>
              )}
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            Your information is processed under our{' '}
            <Link href="/privacy" className="text-[#1A6B72] hover:underline">Privacy Notice</Link>.
            We do not share your data with third parties.
          </p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
