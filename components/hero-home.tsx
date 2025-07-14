import Link from 'next/link'

export default function HeroHome() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Dynamic animated background */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient"></div>
        
        {/* Dynamic floating elements */}
        <div className="absolute top-20 right-[15%] text-6xl animate-float-slow opacity-20">💰</div>
        <div className="absolute top-32 left-[20%] text-5xl animate-float-medium opacity-20">📈</div>
        <div className="absolute bottom-40 right-[25%] text-6xl animate-float-fast opacity-20">⭐</div>
        <div className="absolute bottom-60 left-[15%] text-5xl animate-float-slow opacity-20">🎯</div>
        <div className="absolute top-1/2 right-[10%] text-7xl animate-float-medium opacity-20">🚀</div>
        <div className="absolute top-1/3 left-[10%] text-6xl animate-float-fast opacity-20">💡</div>
        
        {/* Geometric shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 md:pt-28 md:pb-20">
          
          {/* Hero content */}
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            
            {/* Attention-grabbing banner */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full text-gray-900 text-sm font-bold mb-8 shadow-lg animate-pulse">
              <span className="text-red-600 mr-2 text-lg">🔥</span>
              Join 25,000+ professionals mastering the psychology of influence
            </div>
            
            {/* Main headline - bold and dynamic */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
              Every Conversation
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Is a Sale</span>
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl">Are You Winning?</span>
            </h1>
            
            {/* Subheadline - high energy */}
            <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-lg">
              Whether you're closing deals, raising funds, landing jobs, getting buy-in, recruiting talent, or building partnerships - 
              <span className="font-bold text-yellow-300 text-2xl md:text-3xl block mt-2">psychology determines who wins.</span>
            </p>

            {/* Six areas of influence - vibrant cards */}
            <div className="bg-white/95 backdrop-blur-sm border-4 border-white rounded-3xl p-8 mb-12 max-w-4xl mx-auto shadow-2xl">
              <h3 className="text-2xl font-black mb-8 text-center text-gray-900">Master the Psychology of Persuasion in Every Arena:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform shadow-lg">
                  <div className="text-5xl mb-3">💰</div>
                  <div className="text-xl font-bold mb-2">Close Deals</div>
                  <div className="text-lg font-semibold">3x your sales conversion</div>
                </div>
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform shadow-lg">
                  <div className="text-5xl mb-3">🚀</div>
                  <div className="text-xl font-bold mb-2">Raise Funds</div>
                  <div className="text-lg font-semibold">Get VCs fighting to invest</div>
                </div>
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform shadow-lg">
                  <div className="text-5xl mb-3">💼</div>
                  <div className="text-xl font-bold mb-2">Land Jobs</div>
                  <div className="text-lg font-semibold">42% higher salary offers</div>
                </div>
                <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform shadow-lg">
                  <div className="text-5xl mb-3">🎯</div>
                  <div className="text-xl font-bold mb-2">Get Buy-In</div>
                  <div className="text-lg font-semibold">94% approval rate</div>
                </div>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform shadow-lg">
                  <div className="text-5xl mb-3">👥</div>
                  <div className="text-xl font-bold mb-2">Recruit Talent</div>
                  <div className="text-lg font-semibold">82% response rate</div>
                </div>
                <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform shadow-lg">
                  <div className="text-5xl mb-3">🤝</div>
                  <div className="text-xl font-bold mb-2">Win Partners</div>
                  <div className="text-lg font-semibold">Close strategic deals</div>
                </div>
              </div>
            </div>

            {/* Before/After transformation - high contrast */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              {/* Before */}
              <div className="bg-red-600 border-4 border-red-700 rounded-2xl p-8 transform rotate-[-2deg] hover:rotate-0 transition-transform shadow-2xl">
                <div className="text-white font-black text-2xl mb-6 flex items-center">
                  <span className="text-4xl mr-3">❌</span>
                  Without Psychology
                </div>
                <ul className="text-left space-y-3 text-white text-lg font-semibold">
                  <li>😔 Watch others get what you deserve</li>
                  <li>😤 Struggle to influence decisions</li>
                  <li>😭 Get rejected despite being qualified</li>
                  <li>🔒 Stuck at the same level</li>
                  <li>😰 Feel powerless in conversations</li>
                </ul>
              </div>
              
              {/* After */}
              <div className="bg-green-600 border-4 border-green-700 rounded-2xl p-8 transform rotate-[2deg] hover:rotate-0 transition-transform shadow-2xl">
                <div className="text-white font-black text-2xl mb-6 flex items-center">
                  <span className="text-4xl mr-3">✅</span>
                  With Psychology Mastery
                </div>
                <ul className="text-left space-y-3 text-white text-lg font-semibold">
                  <li>🎯 Get yes in every important conversation</li>
                  <li>💪 Control outcomes with influence</li>
                  <li>⭐ Stand out from competition</li>
                  <li>🚀 Accelerate your success 3x</li>
                  <li>👑 People fight for YOUR time</li>
                </ul>
              </div>
            </div>

            {/* High-energy CTA */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-1 mb-8 shadow-2xl animate-gradient-x">
              <div className="bg-black rounded-3xl p-12 text-white text-center">
                <h3 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Master the Psychology of Getting What You Want
                </h3>
                <p className="text-2xl mb-8 font-bold">Join 25,000+ professionals winning in every conversation that matters</p>
                
                <div className="flex flex-col items-center max-w-xl mx-auto">
                  <Link className="btn bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-black font-black text-2xl px-12 py-6 rounded-full transition-all duration-200 transform hover:scale-110 shadow-2xl mb-6 w-full animate-bounce" href="/signup">
                    🔥 Get Instant Access - SAVE 76% 🔥
                  </Link>
                  <div className="text-white text-center">
                    <div className="text-3xl font-black line-through text-red-400 mb-2">$197/month</div>
                    <div className="text-5xl font-black text-yellow-300 mb-4">NOW ONLY $47/month</div>
                    <div className="bg-red-600 text-white px-6 py-2 rounded-full inline-block font-bold animate-pulse">
                      🚨 LIMITED TIME OFFER - 76% OFF! 🚨
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-yellow-300 mt-6 font-bold">✨ 30-day money-back guarantee • Cancel anytime • Instant access ✨</p>
              </div>
            </div>

            {/* Trust indicators - bold and colorful */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg font-bold">
              <div className="flex items-center text-green-600 bg-green-100 px-6 py-3 rounded-full">
                <span className="text-2xl mr-2">✅</span>
                30-Day Guarantee
              </div>
              <div className="flex items-center text-blue-600 bg-blue-100 px-6 py-3 rounded-full">
                <span className="text-2xl mr-2">⚡</span>
                Instant Access
              </div>
              <div className="flex items-center text-purple-600 bg-purple-100 px-6 py-3 rounded-full">
                <span className="text-2xl mr-2">🏆</span>
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}