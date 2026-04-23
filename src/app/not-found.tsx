import Link from 'next/link'
import { MarketingHeader, MarketingFooter } from '@/components/marketing/shared'

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <MarketingHeader />
      <section className="py-32 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-6xl font-bold text-[#1A6B72] mb-4">404</p>
          <h1 className="text-2xl font-bold text-navy mb-3">Page not found</h1>
          <p className="text-gray-500 mb-8">
            The page you are looking for does not exist or has moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="bg-[#1A6B72] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#155a60] transition-colors text-sm"
            >
              Go home
            </Link>
            <Link
              href="/contact"
              className="border border-[#0B2545] text-[#0B2545] font-semibold px-6 py-2.5 rounded-lg hover:bg-[#0B2545] hover:text-white transition-colors text-sm"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
