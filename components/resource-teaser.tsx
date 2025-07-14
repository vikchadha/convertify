export default function ResourceTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Get <span className="text-green-600">Free Sales Intelligence</span>
            <br />
            Delivered Weekly
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join 47,000+ sales professionals getting the latest psychology tactics, closing techniques, and insider strategies that <strong>actually work</strong>.
          </p>
        </div>

        {/* Free resources grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Resource 1: Objection Scripts */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🛡️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">27 Objection-Crushing Scripts</h3>
            <p className="text-gray-700 mb-6">
              Word-for-word responses to every objection you'll ever hear. Turn "Let me think about it" into "Where do I sign?"
            </p>
            <div className="bg-white/60 p-4 rounded-lg mb-6">
              <div className="text-sm text-red-700 font-semibold mb-2">What's inside:</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• "It's too expensive" → Value revelation script</li>
                <li>• "I need to ask my spouse" → Decision maker technique</li>
                <li>• "Send me a proposal" → Instant close method</li>
                <li>• "We're happy with our current provider" → Disruption formula</li>
              </ul>
            </div>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Download Free ($97 Value)
            </button>
          </div>

          {/* Resource 2: Cold Calling Guide */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cold Calling Mastery Guide</h3>
            <p className="text-gray-700 mb-6">
              The exact system that gets 37% connection rates and 23% meeting bookings from stone-cold prospects.
            </p>
            <div className="bg-white/60 p-4 rounded-lg mb-6">
              <div className="text-sm text-blue-700 font-semibold mb-2">Master these skills:</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Get past any gatekeeper in 30 seconds</li>
                <li>• Open prospects with curiosity, not sales pitch</li>
                <li>• Handle "I'm not interested" gracefully</li>
                <li>• Book meetings with executives who hate salespeople</li>
              </ul>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Get Instant Access ($147 Value)
            </button>
          </div>

          {/* Resource 3: Salary Negotiation */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">💰</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Salary Negotiation Playbook</h3>
            <p className="text-gray-700 mb-6">
              Negotiate your way to a $50K+ salary increase using these psychological leverage tactics that work every time.
            </p>
            <div className="bg-white/60 p-4 rounded-lg mb-6">
              <div className="text-sm text-green-700 font-semibold mb-2">Learn how to:</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Research and anchor your value proposition</li>
                <li>• Time your negotiation for maximum impact</li>
                <li>• Use competitive offers as leverage</li>
                <li>• Get promoted faster than your peers</li>
              </ul>
            </div>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Claim Your Copy ($197 Value)
            </button>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">The Sales Psychology Weekly</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Every Tuesday, get one psychology trigger, one closing technique, and one success story from our community of top performers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto mb-6">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 w-full sm:w-auto"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full sm:w-auto">
              Subscribe Free
            </button>
          </div>
          
          <div className="text-sm text-gray-400">
            Join 47,683 subscribers • Unsubscribe anytime • No spam, ever
          </div>
          
          {/* Social proof */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">⭐⭐⭐⭐⭐</span>
                <span>4.9/5 rating</span>
              </div>
              <div>47K+ subscribers</div>
              <div>95% open rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
