import Link from 'next/link'

export default function HeroHome() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Clean professional background */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Floating money/success symbols */}
        <div className="absolute top-20 right-[15%] text-green-500 text-2xl animate-bounce">💰</div>
        <div className="absolute top-32 left-[20%] text-blue-500 text-xl animate-bounce delay-500">📈</div>
        <div className="absolute bottom-40 right-[25%] text-yellow-500 text-2xl animate-bounce delay-1000">⭐</div>
        <div className="absolute bottom-60 left-[15%] text-purple-500 text-xl animate-bounce delay-1500">🎯</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 md:pt-28 md:pb-20">
          
          {/* Hero content */}
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            
            {/* Urgency banner */}
            <div className="inline-flex items-center px-6 py-3 bg-red-100 border border-red-200 rounded-full text-red-700 text-sm font-semibold mb-8">
              <span className="animate-pulse mr-2">🔥</span>
              WARNING: Master psychology now or watch others take what's yours
            </div>
            
            {/* Main headline - broader appeal */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Every Conversation
              <br />
              <span className="gradient-text">Is a Sale</span>
              <br />
              Are You Winning?
            </h1>
            
            {/* Subheadline - broader definition */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Whether you're closing deals, raising funds, landing jobs, getting buy-in, recruiting talent, or building partnerships - 
              <strong className="text-gray-900">psychology determines who wins.</strong>
            </p>

            {/* Six areas of influence */}
            <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 text-white rounded-2xl p-8 mb-12 max-w-4xl mx-auto backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-center">Master the Psychology of Persuasion in Every Arena:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-200">
                  <div className="text-3xl mb-2 icon-glow">💰</div>
                  <div className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Close Deals</div>
                  <div className="text-sm text-gray-300">3x your sales conversion</div>
                </div>
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-200">
                  <div className="text-3xl mb-2 icon-glow">🚀</div>
                  <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Raise Funds</div>
                  <div className="text-sm text-gray-300">Get VCs fighting to invest</div>
                </div>
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-200">
                  <div className="text-3xl mb-2 icon-glow">💼</div>
                  <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Land Jobs</div>
                  <div className="text-sm text-gray-300">42% higher salary offers</div>
                </div>
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-200">
                  <div className="text-3xl mb-2 icon-glow">🎯</div>
                  <div className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Get Buy-In</div>
                  <div className="text-sm text-gray-300">94% approval rate</div>
                </div>
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-200">
                  <div className="text-3xl mb-2 icon-glow">👥</div>
                  <div className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Recruit Talent</div>
                  <div className="text-sm text-gray-300">82% response rate</div>
                </div>
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-200">
                  <div className="text-3xl mb-2 icon-glow">🤝</div>
                  <div className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Win Partners</div>
                  <div className="text-sm text-gray-300">Close strategic deals</div>
                </div>
              </div>
            </div>

            {/* Before/After transformation */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              {/* Before */}
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-red-600 font-bold text-lg mb-4">❌ Without Psychology</div>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Watch others get what you deserve</li>
                  <li>• Struggle to influence decisions</li>
                  <li>• Get rejected despite being qualified</li>
                  <li>• Stuck at the same level</li>
                  <li>• Feel powerless in conversations</li>
                </ul>
              </div>
              
              {/* After */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <div className="text-green-600 font-bold text-lg mb-4">✅ With Psychology Mastery</div>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• Get yes in every important conversation</li>
                  <li>• Control outcomes with influence</li>
                  <li>• Stand out from competition</li>
                  <li>• Accelerate your success 3x</li>
                  <li>• People fight for YOUR time</li>
                </ul>
              </div>
            </div>

            {/* Strong CTA with scarcity */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Master the Psychology of Getting What You Want</h3>
              <p className="text-green-100 mb-6">Join 25,000+ professionals winning in every conversation that matters</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
                <Link className="btn btn-professional text-white font-bold text-lg px-8 py-4 rounded-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto" href="/signup">
                  Get Instant Access - $47/month
                </Link>
                <div className="text-green-200 text-sm">
                  <div className="font-semibold">⏰ Limited Time:</div>
                  <div>Usually $197/month</div>
                </div>
              </div>
              
              <p className="text-xs text-green-200 mt-4">30-day money-back guarantee • Cancel anytime</p>
            </div>

            {/* Risk reversal */}
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">🛡️</span>
                30-Day Guarantee
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">⚡</span>
                Instant Access
              </div>
              <div className="flex items-center">
                <span className="text-purple-500 mr-2">👑</span>
                VIP Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}