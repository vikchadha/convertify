import Link from 'next/link'

export default function Cta() {
  return (
    <section className="bg-gradient-to-br from-red-600 via-red-700 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        {/* Floating money symbols */}
        <div className="absolute top-20 left-20 text-6xl text-white/10 animate-pulse">💰</div>
        <div className="absolute top-40 right-32 text-4xl text-white/10 animate-pulse delay-500">📈</div>
        <div className="absolute bottom-32 left-1/4 text-5xl text-white/10 animate-pulse delay-1000">🎯</div>
        <div className="absolute bottom-20 right-20 text-3xl text-white/10 animate-pulse delay-1500">🔥</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28">
          <div className="relative max-w-5xl mx-auto text-center">
            
            {/* Warning badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-black rounded-full text-sm font-bold mb-8 shadow-lg animate-pulse">
              <span className="mr-2">⚠️</span>
              WARNING: This Offer Expires at Midnight Tonight
            </div>

            <div className="relative">
              <h2 className="h1 font-playfair-display text-white mb-8">
                Stop Being the
                <br />
                <span className="text-red-300">"Almost"</span> Salesperson
              </h2>
              <p className="text-2xl md:text-3xl text-red-100 mb-8 leading-relaxed max-w-4xl mx-auto">
                While you're reading this, your competitors are using these exact techniques to 
                <strong className="text-white"> steal YOUR deals and earn YOUR commission.</strong>
              </p>

              {/* Pain points */}
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-4xl mx-auto border border-red-500/20">
                <h3 className="h3 font-playfair-display text-white mb-6">How Much Longer Will You Accept...</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-red-400 text-xl mt-1">❌</span>
                    <div>
                      <div className="text-white font-semibold">Missing quotas month after month</div>
                      <div className="text-red-200 text-sm">While top performers get promoted</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-400 text-xl mt-1">❌</span>
                    <div>
                      <div className="text-white font-semibold">Losing deals to cheaper competitors</div>
                      <div className="text-red-200 text-sm">Because you can't justify your value</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-400 text-xl mt-1">❌</span>
                    <div>
                      <div className="text-white font-semibold">Getting crushed by objections</div>
                      <div className="text-red-200 text-sm">And watching prospects walk away</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-400 text-xl mt-1">❌</span>
                    <div>
                      <div className="text-white font-semibold">Earning less than you deserve</div>
                      <div className="text-red-200 text-sm">While inferior salespeople make bank</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final offer */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-10 mb-8 text-white shadow-2xl">
                <h3 className="h2 font-playfair-display mb-4">Last Chance: Transform Your Sales Career</h3>
                <div className="flex items-center justify-center space-x-8 mb-6">
                  <div className="text-center">
                    <div className="text-3xl line-through text-red-300 mb-1">$197/month</div>
                    <div className="text-5xl font-bold">$47/month</div>
                    <div className="text-green-200">76% OFF</div>
                  </div>
                  <div className="text-6xl">→</div>
                  <div className="text-center">
                    <div className="text-2xl text-green-200 mb-2">Average Results:</div>
                    <div className="text-4xl font-bold">+$127K/year</div>
                    <div className="text-green-200">In additional income</div>
                  </div>
                </div>
                <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                  That's a <strong>270x return on investment</strong> in your first year alone. Even if you only get a 10% improvement, you'll make back your investment 27 times over.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Link className="btn text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 group shadow-2xl transform hover:scale-105 transition-all duration-200 text-2xl py-6 px-12 min-w-[320px] border-4 border-green-400" href="/signup">
                  <span className="flex items-center">
                    🚀 YES! Transform My Career - $47/month
                    <span className="tracking-normal text-green-200 group-hover:translate-x-1 transition-transform duration-150 ease-in-out ml-2">→</span>
                  </span>
                </Link>
              </div>

              {/* Final urgency */}
              <div className="bg-red-900/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-red-500 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">🔥 This Price Will NEVER Be Available Again</h3>
                <p className="text-red-100 leading-relaxed mb-4">
                  In 24 hours, this offer disappears forever and the price goes back to $197/month. 
                  Don't let this be another "almost" moment in your career.
                </p>
                <div className="text-center">
                  <div className="text-white/80 text-lg mb-2">OFFER EXPIRES IN:</div>
                  <div className="flex justify-center space-x-4 text-white font-bold">
                    <div className="bg-red-700 rounded-xl px-4 py-3 border border-red-500">
                      <div className="text-3xl">07</div>
                      <div className="text-sm">HOURS</div>
                    </div>
                    <div className="bg-red-700 rounded-xl px-4 py-3 border border-red-500">
                      <div className="text-3xl">23</div>
                      <div className="text-sm">MINUTES</div>
                    </div>
                    <div className="bg-red-700 rounded-xl px-4 py-3 border border-red-500">
                      <div className="text-3xl">14</div>
                      <div className="text-sm">SECONDS</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final guarantee */}
              <div className="mt-8 text-center">
                <p className="text-red-200 text-lg mb-2">
                  🛡️ <strong className="text-white">GUARANTEE:</strong> Double your close rate in 30 days or get your money back
                </p>
                <p className="text-red-300 text-sm">
                  Join the thousands who've already transformed their careers • Cancel anytime
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}