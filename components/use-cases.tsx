export default function UseCases() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="h2 font-playfair-display text-gray-900 mb-6">
            Real Success Stories From
            <br />
            <span className="text-green-600">Sales Professionals</span> Like You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Convertify transformed the careers of salespeople across different industries in just <strong>30 days</strong>.
          </p>
        </div>

        {/* Success stories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Story 1: SaaS Sales */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl mr-4">
                💻
              </div>
              <div>
                <h3 className="h4 font-playfair-display text-gray-900">SaaS Sales Rep</h3>
                <p className="text-blue-600 font-semibold">From $60K to $180K/year</p>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-gray-700 italic">
                "I was the worst performer on my team for 8 months straight. After Convertify's training, I closed 3 enterprise deals in my first month and became the #1 rep."
              </p>
              <div className="mt-3 flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">DK</div>
                <div>
                  <div className="font-semibold text-gray-900">David Kim</div>
                  <div className="text-sm text-gray-600">Enterprise SaaS, San Francisco</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">23→87%</div>
                <div className="text-xs text-gray-600">Close Rate</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-green-600">+$120K</div>
                <div className="text-xs text-gray-600">Income Increase</div>
              </div>
            </div>
          </div>

          {/* Story 2: Real Estate */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl mr-4">
                🏠
              </div>
              <div>
                <h3 className="h4 font-playfair-display text-gray-900">Real Estate Agent</h3>
                <p className="text-green-600 font-semibold">From 12 to 47 homes/year</p>
              </div>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
              <p className="text-gray-700 italic">
                "I thought I knew how to sell until I learned the psychology behind buyer decisions. Now luxury clients seek ME out and pay full asking price."
              </p>
              <div className="mt-3 flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">LR</div>
                <div>
                  <div className="font-semibold text-gray-900">Lisa Rodriguez</div>
                  <div className="text-sm text-gray-600">Luxury Real Estate, Miami</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-green-600">392%</div>
                <div className="text-xs text-gray-600">Sales Increase</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-green-600">$2.1M</div>
                <div className="text-xs text-gray-600">Added Revenue</div>
              </div>
            </div>
          </div>

          {/* Story 3: Insurance */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl mr-4">
                🛡️
              </div>
              <div>
                <h3 className="h4 font-playfair-display text-gray-900">Insurance Advisor</h3>
                <p className="text-purple-600 font-semibold">From struggling to top 5%</p>
              </div>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
              <p className="text-gray-700 italic">
                "I was about to quit sales until I found Convertify. The objection handling alone doubled my income. Now I'm in the company's President's Club."
              </p>
              <div className="mt-3 flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">JT</div>
                <div>
                  <div className="font-semibold text-gray-900">James Thompson</div>
                  <div className="text-sm text-gray-600">Life Insurance, Chicago</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">Top 5%</div>
                <div className="text-xs text-gray-600">Nationwide Rank</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">$340K</div>
                <div className="text-xs text-gray-600">Annual Income</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry breakdown */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Proven Results Across <span className="text-green-600">Every Industry</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">B2B Software</h4>
              <div className="text-sm text-gray-600 mb-2">Average Results:</div>
              <div className="text-lg font-bold text-blue-600">+284% Revenue</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Healthcare</h4>
              <div className="text-sm text-gray-600 mb-2">Average Results:</div>
              <div className="text-lg font-bold text-green-600">+192% Close Rate</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Financial Services</h4>
              <div className="text-sm text-gray-600 mb-2">Average Results:</div>
              <div className="text-lg font-bold text-purple-600">+156% Income</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Manufacturing</h4>
              <div className="text-sm text-gray-600 mb-2">Average Results:</div>
              <div className="text-lg font-bold text-orange-600">+228% Deals</div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Ready to join them?</p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-200">
              Start Your Transformation - $47/month
            </button>
            <p className="text-xs text-gray-500 mt-2">30-day money-back guarantee</p>
          </div>
        </div>
      </div>
    </section>
  )
}
