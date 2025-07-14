export default function FeaturesBlocks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            What You'll <span className="text-green-600">Master</span> in 30 Days
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These aren't theory lessons. These are <strong>battle-tested techniques</strong> that top 1% salespeople use to command premium prices and close impossible deals.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Skill 1: Cold Calling */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Cold Calling Mastery</h3>
            <p className="text-gray-600 mb-4">
              Turn cold calls into hot leads using the "Hook-Story-Close" framework. Get past gatekeepers and book meetings with decision-makers who've never heard of you.
            </p>
            <div className="bg-red-50 p-3 rounded-lg">
              <div className="text-sm text-red-700 font-semibold">Success Rate:</div>
              <div className="text-2xl font-bold text-red-600">37%</div>
              <div className="text-xs text-gray-600">vs industry average of 2%</div>
            </div>
          </div>

          {/* Skill 2: Email Sequences */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">✉️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Persuasion</h3>
            <p className="text-gray-600 mb-4">
              Write emails that get opened, read, and replied to. Master the psychological triggers that make executives respond within minutes.
            </p>
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-sm text-blue-700 font-semibold">Open Rate:</div>
              <div className="text-2xl font-bold text-blue-600">83%</div>
              <div className="text-xs text-gray-600">vs industry average of 21%</div>
            </div>
          </div>

          {/* Skill 3: Negotiations */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation Warfare</h3>
            <p className="text-gray-600 mb-4">
              Win every pricing negotiation using FBI-developed techniques. Learn to anchor high, handle lowball offers, and walk away with premium pricing.
            </p>
            <div className="bg-purple-50 p-3 rounded-lg">
              <div className="text-sm text-purple-700 font-semibold">Price Protection:</div>
              <div className="text-2xl font-bold text-purple-600">94%</div>
              <div className="text-xs text-gray-600">maintain original pricing</div>
            </div>
          </div>

          {/* Skill 4: Closing Techniques */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Closing</h3>
            <p className="text-gray-600 mb-4">
              Master 12 different closing techniques including the "Assumptive Close," "Urgency Close," and the devastating "Take-Away Close."
            </p>
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-sm text-green-700 font-semibold">Close Rate:</div>
              <div className="text-2xl font-bold text-green-600">71%</div>
              <div className="text-xs text-gray-600">on qualified prospects</div>
            </div>
          </div>

          {/* Skill 5: Social Selling */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">📱</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">LinkedIn Domination</h3>
            <p className="text-gray-600 mb-4">
              Turn LinkedIn into your personal ATM. Build authority, attract prospects, and generate inbound leads while you sleep.
            </p>
            <div className="bg-indigo-50 p-3 rounded-lg">
              <div className="text-sm text-indigo-700 font-semibold">Inbound Leads:</div>
              <div className="text-2xl font-bold text-indigo-600">45/week</div>
              <div className="text-xs text-gray-600">average after 90 days</div>
            </div>
          </div>

          {/* Skill 6: Psychology */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🧠</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Buyer Psychology</h3>
            <p className="text-gray-600 mb-4">
              Understand the 6 core psychological drivers that make people buy. Read prospects like a book and position your solution as the obvious choice.
            </p>
            <div className="bg-orange-50 p-3 rounded-lg">
              <div className="text-sm text-orange-700 font-semibold">Accuracy Rate:</div>
              <div className="text-2xl font-bold text-orange-600">92%</div>
              <div className="text-xs text-gray-600">predicting buying decisions</div>
            </div>
          </div>

        </div>

        {/* Bottom testimonial */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              MC
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <h4 className="font-bold text-gray-900 mr-2">Michael Chen</h4>
                <span className="text-sm text-gray-500">• Software Sales Director</span>
              </div>
              <p className="text-gray-700 mb-3 italic">
                "I was skeptical about sales training until I tried Convertify. In 6 weeks, I went from missing quota to being #1 on the team. The psychology modules alone are worth 10x the price."
              </p>
              <div className="flex items-center text-sm text-green-600">
                <span className="mr-4">💰 +$340K revenue increase</span>
                <span>🏆 Top performer 3 quarters running</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}