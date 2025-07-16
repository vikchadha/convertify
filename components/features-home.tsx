export default function FeaturesHome() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 border border-red-200 rounded-full text-red-700 text-sm font-semibold mb-6">
            <span className="mr-2">⚠️</span>
            The Sales Skills That Separate Winners from Losers
          </div>
          <h2 className="h2 font-playfair-display text-gray-900 mb-6">
            Master the <span className="text-green-600">Psychology</span> That
            <br />
            Makes Prospects <span className="text-blue-600">Beg to Buy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These aren't feel-good motivational tactics. These are the <strong>scientifically-proven psychological triggers</strong> that make people say "yes" to premium pricing.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Skill 1: Objection Handling */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4">🛡️</div>
              <div>
                <h3 className="h3 font-playfair-display text-gray-900">Objection Aikido</h3>
                <p className="text-red-600 font-semibold">Turn "No" Into "Yes"</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Learn the psychological "redirect technique" that transforms every objection into a buying signal. When prospects say "It's too expensive," you'll know exactly how to make them realize they <strong>can't afford NOT to buy</strong>.
            </p>
            
            {/* Before/After mini */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white/60 p-3 rounded-lg">
                <div className="text-red-600 font-semibold mb-1">❌ Before:</div>
                <div className="text-gray-600">"Let me think about it..."</div>
              </div>
              <div className="bg-white/60 p-3 rounded-lg">
                <div className="text-green-600 font-semibold mb-1">✅ After:</div>
                <div className="text-gray-600">"When can we start?"</div>
              </div>
            </div>
          </div>

          {/* Skill 2: Value Stacking */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4">💎</div>
              <div>
                <h3 className="h3 font-playfair-display text-gray-900">Value Stacking</h3>
                <p className="text-green-600 font-semibold">Justify ANY Price</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              The neurological framework that makes $10,000 feel like $1,000. You'll discover how to <strong>stack value so powerfully</strong> that prospects feel guilty NOT buying from you at premium prices.
            </p>
            
            {/* Success metric */}
            <div className="bg-white/60 p-4 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">+340%</div>
                <div className="text-sm text-gray-600">Average price increase after mastering this</div>
              </div>
            </div>
          </div>

          {/* Skill 3: Urgency Creation */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4">⚡</div>
              <div>
                <h3 className="h3 font-playfair-display text-gray-900">Urgency Creation</h3>
                <p className="text-blue-600 font-semibold">Force Immediate Action</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              The "scarcity psychology" that makes prospects abandon all logic and buy immediately. You'll learn 7 different urgency triggers that work even on the most <strong>analytical decision-makers</strong>.
            </p>
            
            {/* Urgency example */}
            <div className="bg-white/60 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="text-sm text-gray-600 italic">
                "I only have two spots left this quarter, and honestly, the waiting list is already 6 months long..."
              </div>
            </div>
          </div>

          {/* Skill 4: Authority Positioning */}
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4">👑</div>
              <div>
                <h3 className="h3 font-playfair-display text-gray-900">Authority Positioning</h3>
                <p className="text-purple-600 font-semibold">Become The Obvious Choice</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Position yourself as the <strong>undisputed expert</strong> in your field using the "Expert's Halo" technique. Prospects will assume you're more expensive because you're more valuable, then happily pay premium prices.
            </p>
            
            {/* Authority metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/60 p-3 rounded-lg text-center">
                <div className="text-lg font-bold text-purple-600">89%</div>
                <div className="text-xs text-gray-600">Trust You Instantly</div>
              </div>
              <div className="bg-white/60 p-3 rounded-lg text-center">
                <div className="text-lg font-bold text-purple-600">5x</div>
                <div className="text-xs text-gray-600">Higher Close Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gray-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Dominate Your Competition?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Stop letting inferior salespeople steal your deals. Master these psychological triggers and watch your income explode.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-200">
            Access All Training Now - $47/month
          </button>
          <p className="text-xs text-gray-400 mt-3">First 30 days free • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}