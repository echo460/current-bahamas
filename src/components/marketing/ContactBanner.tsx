'use client'
import { useSearchParams } from 'next/navigation'

export function ContactBanner() {
  const params = useSearchParams()
  const success = params.get('success') === 'true'
  const error   = params.get('error')

  if (success) return (
    <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-sm text-green-800 flex items-start gap-3 mb-6">
      <svg className="h-5 w-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div>
        <p className="font-medium">Message sent — thank you.</p>
        <p className="text-green-700 mt-0.5">We will get back to you within 1 business day.</p>
      </div>
    </div>
  )

  if (error) return (
    <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-800 flex items-start gap-3 mb-6">
      <svg className="h-5 w-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div>
        <p className="font-medium">
          {error === 'missing' ? 'Please fill in all required fields.' : 'Something went wrong — please try again.'}
        </p>
        <p className="text-red-700 mt-0.5">
          Or email us directly at{' '}
          <a href="mailto:hello@currentbahamas.com" className="underline">hello@currentbahamas.com</a>
        </p>
      </div>
    </div>
  )

  return null
}
