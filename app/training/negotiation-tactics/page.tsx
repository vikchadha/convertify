export const metadata = {
  title: 'Master Negotiation Psychology | Win Every Deal',
  description: 'Learn the psychological tactics that top negotiators use to get what they want. From salary negotiations to closing mega-deals, master the art of influence',
  
  alternates: {
    canonical: 'https://convertify.com/training/negotiation-tactics',
  },
}

import React from 'react'
import Link from 'next/link'

export default function NegotiationTacticsPage() {
  return (
    <div>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">⚡</span> LIMITED: 68% OFF Negotiation Mastery - Only $47/month! 
        <Link href="/signup" className="underline ml-2 font-bold hover:text-orange-200">Start Now →</Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-orange-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">🎯</span>
                The Psychology of Getting YES
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                Never Leave <span className="text-orange-400">Money on the Table</span>
                <br />
                <span className="text-green-400">Ever Again</span>
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Master the <strong className="text-white">"Psychological Leverage System"</strong> that world-class negotiators use to get 
                <strong className="text-green-400"> 2-10x better outcomes</strong> in every negotiation.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 max-w-3xl mx-auto mb-12 text-black">
                <h3 className="text-2xl font-bold mb-4">🏆 What You'll Master:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">47%</div>
                    <div className="text-gray-700">Average salary increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">2.8x</div>
                    <div className="text-gray-700">Larger deal sizes</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
                    <div className="text-gray-700">Win rate in negotiations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">$1.2M</div>
                    <div className="text-gray-700">Avg. lifetime value gained</div>
                  </div>
                </div>
              </div>

              <Link href="/signup" className="inline-block bg-green-600 hover:bg-green-700 text-white font-black text-2xl py-6 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                🎯 Master Negotiation Psychology - $47/month
              </Link>
              
              <p className="text-green-300 text-lg mt-6">
                Join 15,000+ master negotiators • 30-day guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              Why Most People <span className="text-red-600">Fail</span> at Negotiation
            </h2>
            
            <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
              <h3 className="text-2xl font-bold text-red-800 mb-6">❌ The Fatal Negotiation Mistakes</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-red-600 text-2xl mt-1">😰</span>
                  <div>
                    <h4 className="font-bold text-red-700 mb-2">They Negotiate From Weakness</h4>
                    <p className="text-red-600">"Well, I was hoping for maybe..." - Instant loss of all leverage and power.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-red-600 text-2xl mt-1">🎯</span>
                  <div>
                    <h4 className="font-bold text-red-700 mb-2">They Accept the First Offer</h4>
                    <p className="text-red-600">85% of people leave 20-50% on the table by not pushing for more.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-red-600 text-2xl mt-1">💔</span>
                  <div>
                    <h4 className="font-bold text-red-700 mb-2">They Fear Rejection</h4>
                    <p className="text-red-600">"What if they say no?" - This fear costs the average person $500K+ over their lifetime.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-red-600 text-2xl mt-1">🤝</span>
                  <div>
                    <h4 className="font-bold text-red-700 mb-2">They Try to Be "Nice"</h4>
                    <p className="text-red-600">Being liked and getting what you want are two different games. Master negotiators know which to play.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">The Hidden Truth About Negotiation</h3>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Negotiation isn't about being tough or aggressive. It's about understanding <strong>human psychology</strong> and using proven influence tactics to create <strong>win-win outcomes</strong> where you get the bigger win.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The System */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-orange-600">"Psychological Leverage"</span> System
            </h2>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-300 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-orange-800 mb-6">🧠 The 7-Step Master Framework</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">ANCHOR HIGH (Set the Frame)</h4>
                    <p className="text-gray-700 mb-2">"My consulting rate is $500/hour..." (even if you'll accept $200)</p>
                    <p className="text-orange-700 italic">Psychology: The anchoring bias makes everything else seem reasonable by comparison.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">CREATE SCARCITY (Time Pressure)</h4>
                    <p className="text-gray-700 mb-2">"I have two other offers I need to respond to by Friday..."</p>
                    <p className="text-orange-700 italic">Psychology: Scarcity triggers fear of loss, the most powerful motivator.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">DEMONSTRATE VALUE (Show Don't Tell)</h4>
                    <p className="text-gray-700 mb-2">"In my last role, I generated $2.3M in new revenue in 6 months..."</p>
                    <p className="text-orange-700 italic">Psychology: Concrete proof triggers the consistency principle - they must match value.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">USE SILENCE (The Power Pause)</h4>
                    <p className="text-gray-700 mb-2">State your number... then shut up. First to speak loses.</p>
                    <p className="text-orange-700 italic">Psychology: Silence creates tension that the other party feels compelled to fill.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">5</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">TRADE CONCESSIONS (Never Give, Always Trade)</h4>
                    <p className="text-gray-700 mb-2">"I could consider that if you can offer [X] in return..."</p>
                    <p className="text-orange-700 italic">Psychology: Reciprocity - they value what costs them something.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">6</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">FRACTIONATE (Break It Down)</h4>
                    <p className="text-gray-700 mb-2">"That's only $13 per day for a 10x return on your investment..."</p>
                    <p className="text-orange-700 italic">Psychology: Small numbers feel more manageable than large ones.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">7</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">WALK AWAY READY (Ultimate Power Move)</h4>
                    <p className="text-gray-700 mb-2">"I appreciate your time, but this isn't going to work for me..."</p>
                    <p className="text-orange-700 italic">Psychology: The willingness to walk away is the ultimate negotiation power.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Negotiation Scenarios */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              <span className="text-blue-600">Master Every</span> Negotiation Scenario
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Salary Negotiation</h3>
                <div className="bg-green-50 p-4 rounded-xl mb-4">
                  <p className="text-gray-700 mb-2"><strong>Average Result:</strong> 47% salary increase</p>
                  <p className="text-gray-600 text-sm">Learn the exact scripts to negotiate $50K-$200K+ increases</p>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>How to research and anchor your worth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Counter-offer psychology tactics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Non-salary negotiation wins</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🤝 Business Deals</h3>
                <div className="bg-blue-50 p-4 rounded-xl mb-4">
                  <p className="text-gray-700 mb-2"><strong>Average Result:</strong> 2.8x deal size</p>
                  <p className="text-gray-600 text-sm">Close bigger deals with better terms every time</p>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Multi-party negotiation dynamics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Contract psychology principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Long-term relationship building</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🏠 Real Estate & Big Purchases</h3>
                <div className="bg-purple-50 p-4 rounded-xl mb-4">
                  <p className="text-gray-700 mb-2"><strong>Average Savings:</strong> $47,000</p>
                  <p className="text-gray-600 text-sm">Never overpay for houses, cars, or major purchases again</p>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>Emotional detachment techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>Multi-offer strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    <span>Inspection negotiation tactics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Everyday Negotiations</h3>
                <div className="bg-orange-50 p-4 rounded-xl mb-4">
                  <p className="text-gray-700 mb-2"><strong>Life Impact:</strong> Save $25K+/year</p>
                  <p className="text-gray-600 text-sm">Win every daily negotiation from bills to services</p>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Service provider negotiations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Conflict resolution mastery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Family negotiation dynamics</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">🎯 Plus 23 Specialized Scenarios</h3>
                <p className="text-xl text-blue-100 mb-6">
                  From venture capital terms to divorce settlements, master every high-stakes negotiation with proven psychological frameworks.
                </p>
                <Link href="/signup" className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-black text-xl py-4 px-8 rounded-xl shadow-lg">
                  🧠 Get All Negotiation Frameworks - $47/month
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              Life-Changing <span className="text-green-600">Results</span> Our Students Get
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-green-50 rounded-2xl">
                <div className="text-4xl mb-4">💰</div>
                <div className="text-3xl font-bold text-green-600 mb-2">$127K</div>
                <div className="text-gray-700">Average additional income in Year 1</div>
                <div className="text-sm text-gray-600 mt-2">From salary & deal negotiations</div>
              </div>
              <div className="text-center p-8 bg-blue-50 rounded-2xl">
                <div className="text-4xl mb-4">📈</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                <div className="text-gray-700">Win rate in negotiations</div>
                <div className="text-sm text-gray-600 mt-2">vs. 23% before training</div>
              </div>
              <div className="text-center p-8 bg-purple-50 rounded-2xl">
                <div className="text-4xl mb-4">🚀</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">15 hrs</div>
                <div className="text-gray-700">To negotiation mastery</div>
                <div className="text-sm text-gray-600 mt-2">Lifetime of better outcomes</div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">🏆 Student Success Stories</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "I used the anchoring technique in my comp negotiation and got a $180K increase plus equity. The hiring manager later told me I was the best negotiator they'd ever dealt with. This training paid for itself 1000x over."
                  </p>
                  <div className="text-green-300 text-sm">
                    <strong>Jennifer Kim</strong> • Tech Executive • +$180K salary
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "As a founder, I was terrible at negotiating with VCs. After this training, I raised our Series A at 2.5x the valuation we expected. The psychological tactics for creating FOMO were game-changing."
                  </p>
                  <div className="text-green-300 text-sm">
                    <strong>David Chen</strong> • Startup Founder • $8M raised at 2.5x valuation
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "I saved $67K on my house using the multi-offer strategy. The seller's agent called me after and asked what negotiation training I'd taken. Now I negotiate everything and save thousands every month."
                  </p>
                  <div className="text-green-300 text-sm">
                    <strong>Maria Rodriguez</strong> • Real Estate Investor • $67K saved on first deal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            🎁 Exclusive Bonuses (Worth $2,400)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">📱 Negotiation App</h3>
              <p className="text-purple-100">
                Real-time negotiation coach in your pocket. Get tactical advice during live negotiations.
              </p>
              <p className="text-yellow-300 font-semibold mt-2">Value: $497</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">🎯 1-on-1 Coaching Call</h3>
              <p className="text-purple-100">
                30-min strategy session with a master negotiator for your specific situation.
              </p>
              <p className="text-yellow-300 font-semibold mt-2">Value: $750</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">📚 Negotiation Library</h3>
              <p className="text-purple-100">
                127 scripts, 43 email templates, and psychological trigger cheat sheets.
              </p>
              <p className="text-yellow-300 font-semibold mt-2">Value: $1,197</p>
            </div>
          </div>

          <p className="text-2xl text-purple-100 mb-8">
            Get all bonuses FREE when you join today!
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Every Day You Wait Costs You Money
          </h2>
          <p className="text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
            The average person loses $1,370 per month in negotiations they don't even realize they're having. 
            Master negotiators capture that value instead.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🎯 Start Winning Today:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Complete negotiation psychology system</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>127 proven scripts & templates</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Scenario-specific frameworks</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Mobile negotiation coach app</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>1-on-1 strategy session</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
          
          <Link href="/signup" className="inline-block bg-white text-orange-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white">
            🎯 Master Negotiation Now - $47/month
          </Link>
          
          <p className="text-orange-200 mt-6 text-lg">
            Join 15,000+ master negotiators winning at life
          </p>

          <div className="mt-8 text-yellow-300 font-bold text-xl">
            ⚠️ Price increases to $97/month in 48 hours
          </div>
        </div>
      </section>
    </div>
  )
}