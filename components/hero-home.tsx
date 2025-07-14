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
            
            {/* Professional banner */}
            <div className="inline-flex items-center px-6 py-3 bg-slate-100 border border-slate-200 rounded-full text-slate-700 text-sm font-medium mb-8">
              <span className="text-amber-500 mr-2">●</span>
              Join 25,000+ professionals mastering the psychology of influence
            </div>
            
            {/* Main headline - broader appeal */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Every Conversation
              <br />
              <span className="text-slate-700">Is a Sale</span>
              <br />
              Are You Winning?
            </h1>
            
            {/* Subheadline - broader definition */}
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Whether you're closing deals, raising funds, landing jobs, getting buy-in, recruiting talent, or building partnerships - 
              <span className="font-medium text-slate-800">psychology determines who wins.</span>
            </p>

            {/* Six areas of influence */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold mb-6 text-center text-slate-800">Master the Psychology of Persuasion in Every Arena:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl mb-2 text-slate-600">💰</div>
                  <div className="text-base font-semibold text-slate-800">Close Deals</div>
                  <div className="text-sm text-slate-600">3x your sales conversion</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2 text-slate-600">🚀</div>
                  <div className="text-base font-semibold text-slate-800">Raise Funds</div>
                  <div className="text-sm text-slate-600">Get VCs fighting to invest</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2 text-slate-600">💼</div>
                  <div className="text-base font-semibold text-slate-800">Land Jobs</div>
                  <div className="text-sm text-slate-600">42% higher salary offers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2 text-slate-600">🎯</div>
                  <div className="text-base font-semibold text-slate-800">Get Buy-In</div>
                  <div className="text-sm text-slate-600">94% approval rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2 text-slate-600">👥</div>
                  <div className="text-base font-semibold text-slate-800">Recruit Talent</div>
                  <div className="text-sm text-slate-600">82% response rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2 text-slate-600">🤝</div>
                  <div className="text-base font-semibold text-slate-800">Win Partners</div>
                  <div className="text-sm text-slate-600">Close strategic deals</div>
                </div>
              </div>
            </div>

            {/* Before/After transformation */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              {/* Before */}
              <div className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                <div className="text-slate-700 font-semibold text-lg mb-4">Without Psychology</div>
                <ul className="text-left space-y-2 text-slate-600">
                  <li>• Watch others get what you deserve</li>
                  <li>• Struggle to influence decisions</li>
                  <li>• Get rejected despite being qualified</li>
                  <li>• Stuck at the same level</li>
                  <li>• Feel powerless in conversations</li>
                </ul>
              </div>
              
              {/* After */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="text-blue-700 font-semibold text-lg mb-4">With Psychology Mastery</div>
                <ul className="text-left space-y-2 text-slate-700">
                  <li>• Get yes in every important conversation</li>
                  <li>• Control outcomes with influence</li>
                  <li>• Stand out from competition</li>
                  <li>• Accelerate your success 3x</li>
                  <li>• People fight for YOUR time</li>
                </ul>
              </div>
            </div>

            {/* Professional CTA */}
            <div className="bg-slate-800 rounded-2xl p-8 text-white text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Master the Psychology of Getting What You Want</h3>
              <p className="text-slate-300 mb-6">Join 25,000+ professionals winning in every conversation that matters</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
                <Link className="btn bg-white text-slate-800 hover:bg-slate-100 font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200 w-full sm:w-auto" href="/signup">
                  Get Instant Access - $47/month
                </Link>
                <div className="text-slate-400 text-sm">
                  <div className="font-medium">Limited Time:</div>
                  <div>Usually $197/month</div>
                </div>
              </div>
              
              <p className="text-xs text-slate-400 mt-4">30-day money-back guarantee • Cancel anytime</p>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-8 text-sm text-slate-600">
              <div className="flex items-center">
                <span className="text-slate-400 mr-2">✓</span>
                30-Day Guarantee
              </div>
              <div className="flex items-center">
                <span className="text-slate-400 mr-2">✓</span>
                Instant Access
              </div>
              <div className="flex items-center">
                <span className="text-slate-400 mr-2">✓</span>
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}