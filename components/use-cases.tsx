import Link from 'next/link'

export default function UseCases() {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">Who is Convertify For?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Whether you're a marketer, content creator, or business owner, Convertify helps you create lead magnets that convert.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Item 1: Marketers */}
          <Link href="/solutions/marketers" className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="mb-4">
              <svg className="w-12 h-12 text-blue-600 dark:text-blue-500 group-hover:text-blue-700 transition-colors" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">Marketing Teams</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Scale your content marketing efforts, generate targeted lead magnets for different campaigns, and fill your sales funnel with qualified leads faster than ever before.
            </p>
          </Link>

          {/* Item 2: Content Creators */}
          <Link href="/solutions/content-creators" className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="mb-4">
              <svg className="w-12 h-12 text-blue-600 dark:text-blue-500 group-hover:text-blue-700 transition-colors" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">Content Creators & Bloggers</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Repurpose your existing content into valuable ebooks and guides. Grow your email list and audience by offering premium resources without the extra work.
            </p>
          </Link>

          {/* Item 3: Small Business Owners */}
          <Link href="/solutions/business-owners" className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="mb-4">
              <svg className="w-12 h-12 text-blue-600 dark:text-blue-500 group-hover:text-blue-700 transition-colors" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">Entrepreneurs & SMBs</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Establish authority and attract your ideal customers even with limited resources. Convertify makes professional lead magnet creation accessible to everyone.
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}
