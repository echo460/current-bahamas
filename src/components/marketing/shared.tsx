import Link from 'next/link'
import { brand } from '@/lib/brand'

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="10" stroke="#1A6B72" strokeWidth="2"/>
            <path d="M11 6v5l3 3" stroke="#1A6B72" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="font-semibold text-[#0B2545] text-lg tracking-tight">Current Bahamas</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/services" className="hover:text-[#0B2545] transition-colors">Services</Link>
          <Link href="/who" className="hover:text-[#0B2545] transition-colors">Who We Help</Link>
          <Link href="/contact" className="hover:text-[#0B2545] transition-colors">Contact</Link>
        </nav>
        <Link
          href="/intake"
          className="bg-[#1A6B72] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#155a60] transition-colors"
        >
          Book a Review
        </Link>
      </div>
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
              Current Bahamas provides administrative coordination services only. We are not a licensed customs broker, law firm, or regulated accounting firm.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0B2545] transition-colors">Home</Link>
            <Link href="/services" className="hover:text-[#0B2545] transition-colors">Services</Link>
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
