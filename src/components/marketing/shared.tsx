'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function MarketingHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="10" stroke="#1A6B72" strokeWidth="2"/>
            <path d="M11 6v5l3 3" stroke="#1A6B72" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="font-semibold text-[#0B2545] text-lg tracking-tight">Current Bahamas</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/services" className="hover:text-[#0B2545] transition-colors">Services & Pricing</Link>
          <Link href="/who" className="hover:text-[#0B2545] transition-colors">Who We Help</Link>
          <Link href="/contact" className="hover:text-[#0B2545] transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/intake"
            className="bg-[#1A6B72] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#155a60] transition-colors"
          >
            Book a Review
          </Link>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {[
              { href: '/services', label: 'Services & Pricing' },
              { href: '/who',      label: 'Who We Help' },
              { href: '/contact',  label: 'Contact' },
              { href: '/intake',   label: 'Book a Free Review' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm font-medium text-gray-700 hover:text-[#1A6B72] transition-colors border-b border-gray-50 last:border-0"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export function MarketingFooter() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="10" stroke="#1A6B72" strokeWidth="2"/>
                <path d="M11 6v5l3 3" stroke="#1A6B72" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="font-semibold text-[#0B2545]">Current Bahamas</span>
            </div>
            <p className="text-sm text-gray-500">Nassau, The Bahamas · Compliance Coordination</p>
            <p className="text-xs text-gray-400 mt-1 max-w-xs">
              Current Bahamas provides administrative coordination services only. We are not a licensed customs broker, law firm, regulated accounting firm, or immigration adviser.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0B2545] transition-colors">Home</Link>
            <Link href="/services" className="hover:text-[#0B2545] transition-colors">Services & Pricing</Link>
            <Link href="/who" className="hover:text-[#0B2545] transition-colors">Who We Help</Link>
            <Link href="/intake" className="hover:text-[#0B2545] transition-colors">Book a Review</Link>
            <Link href="/contact" className="hover:text-[#0B2545] transition-colors">Contact</Link>
            <Link href="/terms" className="hover:text-[#0B2545] transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-[#0B2545] transition-colors">Privacy</Link>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400">
          © {new Date().getFullYear()} Current Bahamas. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
