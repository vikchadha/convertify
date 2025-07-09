import Link from 'next/link'

export default function Cta() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-24">
          <div className="relative max-w-4xl mx-auto text-center">
            
            {/* Urgency badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg animate-pulse">
              <span className="mr-2">🔥</span>
              LIMITED TIME: 50% OFF First 3 Months
            </div>

            <div className="relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-playfair-display text-white mb-6 leading-tight">
                Your Competition Is Already Converting More Leads
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                While you're manually creating content, they're using AI to generate professional lead magnets in minutes. 
                <strong className="text-white"> Don't get left behind.</strong>
              </p>

              {/* Conversion stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">847%</div>
                  <div className="text-blue-100 text-sm">Average Lead Increase</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">3 Min</div>
                  <div className="text-blue-100 text-sm">To Create Lead Magnet</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">$47K</div>
                  <div className="text-blue-100 text-sm">Avg. Revenue Increase</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link className="btn text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 group shadow-2xl transform hover:scale-105 transition-all duration-200 text-xl py-4 px-8 min-w-[280px]" href="/signup">
                  <span className="flex items-center">
                    💰 Start Converting Now
                    <span className="tracking-normal text-green-200 group-hover:translate-x-1 transition-transform duration-150 ease-in-out ml-2">→</span>
                  </span>
                </Link>
                <Link className="btn text-blue-600 bg-white hover:bg-gray-100 shadow-xl transform hover:scale-105 transition-all duration-200 text-xl py-4 px-8 min-w-[280px]" href="/pricing">
                  <span className="flex items-center">
                    📊 View Pricing
                  </span>
                </Link>
              </div>

              {/* Risk reversal */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-white mb-4">🛡️ 100% Risk-Free Guarantee</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Try Convertify for 14 days completely free. If you don't see more leads within 30 days, 
                  we'll refund every penny. No questions asked.
                </p>
              </div>

              {/* Countdown timer (static for now) */}
              <div className="mt-8 text-center">
                <div className="text-white/80 text-sm mb-2">This offer expires in:</div>
                <div className="flex justify-center space-x-4 text-white font-bold">
                  <div className="bg-white/20 rounded-lg px-3 py-2">
                    <div className="text-2xl">03</div>
                    <div className="text-xs">DAYS</div>
                  </div>
                  <div className="bg-white/20 rounded-lg px-3 py-2">
                    <div className="text-2xl">17</div>
                    <div className="text-xs">HOURS</div>
                  </div>
                  <div className="bg-white/20 rounded-lg px-3 py-2">
                    <div className="text-2xl">42</div>
                    <div className="text-xs">MINS</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}