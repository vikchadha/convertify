export const metadata = {
  title: 'Sales Psychology: The Science of Persuasion | Master Training',
  description: 'Master the 12 psychological triggers that make prospects buy. Understand decision-making psychology, cognitive biases, and influence principles',
  
  alternates: {
    canonical: 'https://convertify.com/training/sales-psychology',
  },
}

import React from 'react'
import Link from 'next/link'

export default function SalesPsychologyPage() {
  return (
    <div>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> LIMITED TIME: 76% OFF Sales Training - Only $47/month! 
        <Link href="/signup" className="underline ml-2 font-bold hover:text-red-200">Claim Now →</Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-purple-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">🧠</span>
                The Science of Persuasion
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                Master the <span className="text-purple-400">Psychology</span>
                <br />
                That Makes <span className="text-green-400">Prospects Buy</span>
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Discover the <strong className="text-white">12 psychological triggers</strong> that drive every buying decision. Understand the science behind persuasion and influence that separates <strong className="text-green-400">top 1% performers</strong> from everyone else.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 max-w-3xl mx-auto mb-12 text-black">
                <h3 className="text-2xl font-bold mb-4">🧠 What You'll Master:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
                    <div className="text-gray-700">Psychological triggers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
                    <div className="text-gray-700">Influence effectiveness</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">347%</div>
                    <div className="text-gray-700">Sales performance increase</div>
                  </div>
                </div>
              </div>

              <Link href="/signup" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-black text-2xl py-6 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                🧠 Master Sales Psychology - $47/month
              </Link>
              
              <p className="text-purple-300 text-lg mt-6">
                30-day guarantee • Join 25,000+ psychology masters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Truth Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-red-600">Uncomfortable</span> Truth About Sales
            </h2>
            
            <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
              <h3 className="text-2xl font-bold text-red-800 mb-6">🧠 People Don't Buy Logically</h3>
              <div className="space-y-6 text-red-700">
                <p className="text-lg">
                  Harvard Business School research proves that <strong>95% of purchasing decisions are made subconsciously</strong> - driven by emotion and psychology, not logic and features.
                </p>
                <p className="text-lg">
                  Yet most salespeople spend 80% of their time talking about features, benefits, and logical reasons to buy. No wonder they struggle!
                </p>
                <p className="text-lg font-bold">
                  The top 1% understand: People buy with emotion and justify with logic.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-4">❌ What Average Salespeople Do</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Focus on features and specifications</p>
                  <p>• Use logical arguments and ROI calculations</p>
                  <p>• Present facts and figures</p>
                  <p>• Try to "convince" with reason</p>
                  <p>• Wonder why prospects "need to think about it"</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-700 mb-4">✅ What Top 1% Performers Do</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Trigger psychological buying drivers</p>
                  <p>• Create emotional urgency and desire</p>
                  <p>• Use social proof and authority</p>
                  <p>• Leverage cognitive biases</p>
                  <p>• Make prospects feel compelled to act</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">🎯 The Psychology Revolution</h3>
                <p className="text-xl text-purple-100 leading-relaxed">
                  When you understand the 12 psychological triggers that drive buying decisions, you stop trying to convince people and start helping them convince themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 12 Triggers Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-purple-600">12 Psychological Triggers</span> That Control Buying
            </h2>

            <div className="space-y-8">
              {/* Trigger 1: Reciprocity */}
              <div className="bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">1. 🎁 Reciprocity: The Obligation to Return Favors</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Science:</strong> When someone gives us something, we feel psychologically obligated to give something back.</p>
                    <p className="text-purple-700 italic text-sm"><strong>Sales Application:</strong> Provide value first (free consultation, insights, tools) before asking for anything.</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-xl">
                    <p className="text-purple-800 font-semibold text-sm">Example: "Before we talk about pricing, let me show you this $500 industry report that took our team 6 months to create..."</p>
                  </div>
                </div>
              </div>

              {/* Trigger 2: Scarcity */}
              <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-800 mb-4">2. ⚡ Scarcity: The Fear of Missing Out</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Science:</strong> We value things more when they're rare or limited. Loss aversion makes us act to avoid missing out.</p>
                    <p className="text-red-700 italic text-sm"><strong>Sales Application:</strong> Create genuine urgency around timing, availability, or pricing.</p>
                  </div>
                  <div className="bg-red-100 p-4 rounded-xl">
                    <p className="text-red-800 font-semibold text-sm">Example: "We're only taking on 3 new clients this quarter, and you'd be perfect for the last spot..."</p>
                  </div>
                </div>
              </div>

              {/* Trigger 3: Social Proof */}
              <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">3. 👥 Social Proof: Following the Crowd</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Science:</strong> We look to others' behavior to determine what's correct, especially when uncertain.</p>
                    <p className="text-blue-700 italic text-sm"><strong>Sales Application:</strong> Share specific examples of similar customers who got great results.</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <p className="text-blue-800 font-semibold text-sm">Example: "Three companies in your exact industry increased revenue by 40% in the first quarter..."</p>
                  </div>
                </div>
              </div>

              {/* Trigger 4: Authority */}
              <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-800 mb-4">4. 👑 Authority: Trusting Experts</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Science:</strong> We're conditioned to follow authority figures and trust expert opinions.</p>
                    <p className="text-green-700 italic text-sm"><strong>Sales Application:</strong> Establish yourself as the expert through credentials, knowledge, and confidence.</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-xl">
                    <p className="text-green-800 font-semibold text-sm">Example: "In my 15 years helping companies like yours, I've never seen anything work better than..."</p>
                  </div>
                </div>
              </div>

              {/* Trigger 5: Commitment & Consistency */}
              <div className="bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">5. 🎯 Commitment & Consistency: Staying True to Our Word</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Science:</strong> Once we make a commitment, we feel pressure to act consistently with that commitment.</p>
                    <p className="text-yellow-700 italic text-sm"><strong>Sales Application:</strong> Get prospects to make small commitments that lead to bigger ones.</p>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-xl">
                    <p className="text-yellow-800 font-semibold text-sm">Example: "So you agree that solving this problem is your top priority this quarter?"</p>
                  </div>
                </div>
              </div>

              {/* Trigger 6: Liking */}
              <div className="bg-pink-50 rounded-2xl p-8 border-l-4 border-pink-500">
                <h3 className="text-2xl font-bold text-pink-800 mb-4">6. 💖 Liking: We Buy From People We Like</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Science:</strong> We're more likely to be influenced by people we like, trust, and feel connected to.</p>
                    <p className="text-pink-700 italic text-sm"><strong>Sales Application:</strong> Build rapport through similarity, compliments, and shared experiences.</p>
                  </div>
                  <div className="bg-pink-100 p-4 rounded-xl">
                    <p className="text-pink-800 font-semibold text-sm">Example: "I see you went to Michigan too - Go Blue! I was there in '98..."</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">🧠 Plus 6 More Advanced Triggers</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left mb-6">
                  <div className="space-y-2">
                    <p className="text-green-400">✓ Loss Aversion (Fear of Losing)</p>
                    <p className="text-green-400">✓ Anchoring Bias (First Impression)</p>
                    <p className="text-green-400">✓ Contrast Principle (Comparison)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-green-400">✓ Endowment Effect (Ownership)</p>
                    <p className="text-green-400">✓ Bandwagon Effect (Popularity)</p>
                    <p className="text-green-400">✓ Foot-in-the-Door (Small Steps)</p>
                  </div>
                </div>
                <Link href="/signup" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-black text-xl py-4 px-8 rounded-xl shadow-lg">
                  🧠 Master All 12 Triggers - $47/month
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Making Science */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-blue-600">Science</span> of Decision Making
            </h2>

            <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">🧠 How the Brain Actually Makes Buying Decisions</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">EMOTIONAL BRAIN REACTS</h4>
                    <p className="text-gray-700 mb-2">The limbic system (emotional brain) responds first to stimuli like urgency, fear, desire.</p>
                    <p className="text-blue-700 italic">This is where buying decisions are actually made - in milliseconds.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">LOGICAL BRAIN JUSTIFIES</h4>
                    <p className="text-gray-700 mb-2">The neocortex (rational brain) then creates logical reasons to support the emotional decision.</p>
                    <p className="text-blue-700 italic">This is where people say "it makes sense" or "the ROI is clear."</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">ACTION FOLLOWS</h4>
                    <p className="text-gray-700 mb-2">Only when both emotional and logical needs are met do people take action.</p>
                    <p className="text-blue-700 italic">This is why pure logic OR pure emotion alone don't work.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">❌ Why Logical Sales Fail</h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p>• People can't feel excited about spreadsheets</p>
                  <p>• Features don't create urgency</p>
                  <p>• ROI calculations don't trigger action</p>
                  <p>• Logic creates analysis paralysis</p>
                  <p>• No emotional connection = no decision</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-green-700 mb-4">✅ Why Psychology-Based Sales Work</h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p>• Emotions drive immediate action</p>
                  <p>• Psychological triggers create urgency</p>
                  <p>• Stories and social proof build trust</p>
                  <p>• Fear of loss motivates decisions</p>
                  <p>• Emotional + logical = commitment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Framework */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-green-600">P.S.Y.C.H.O.</span> Sales Framework
            </h2>

            <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-green-800 mb-6">🎯 How to Apply Psychology in Every Sales Conversation</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-green-700 mb-2">P - PRIME the Emotional State</h4>
                  <p className="text-gray-700 text-sm">Start with questions that create urgency, fear, or desire. "What happens if you don't solve this problem?"</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-green-700 mb-2">S - SOCIAL Proof Integration</h4>
                  <p className="text-gray-700 text-sm">Share specific stories of similar customers who got results. "Company X just like yours saw 40% growth..."</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-green-700 mb-2">Y - YES Ladder Building</h4>
                  <p className="text-gray-700 text-sm">Get small agreements that lead to bigger commitments. "You'd agree that timing is important, right?"</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-green-700 mb-2">C - CONTRAST and Anchoring</h4>
                  <p className="text-gray-700 text-sm">Present high-value option first, then your actual offer. Make your price seem reasonable by comparison.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-green-700 mb-2">H - HANDLE Objections Psychologically</h4>
                  <p className="text-gray-700 text-sm">Use objections as opportunities to reinforce value and create urgency, not defend features.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-green-700 mb-2">O - OWNERSHIP and Scarcity</h4>
                  <p className="text-gray-700 text-sm">Help them envision owning your solution, then create urgency around limited availability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              What Happens When You Master <span className="text-purple-600">Sales Psychology</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-purple-50 rounded-2xl">
                <div className="text-4xl mb-4">🧠</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">89%</div>
                <div className="text-gray-700">Influence effectiveness</div>
                <div className="text-sm text-gray-600 mt-2">People feel compelled to buy</div>
              </div>
              <div className="text-center p-8 bg-green-50 rounded-2xl">
                <div className="text-4xl mb-4">📈</div>
                <div className="text-3xl font-bold text-green-600 mb-2">347%</div>
                <div className="text-gray-700">Sales performance increase</div>
                <div className="text-sm text-gray-600 mt-2">Results speak for themselves</div>
              </div>
              <div className="text-center p-8 bg-blue-50 rounded-2xl">
                <div className="text-4xl mb-4">💰</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">$127K+</div>
                <div className="text-gray-700">Average income increase</div>
                <div className="text-sm text-gray-600 mt-2">Psychology pays</div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">🧠 Psychology Master Success Stories</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "Understanding the psychology changed everything. I stopped trying to convince people with logic and started triggering the emotions that make them want to buy. My close rate went from 15% to 67%."
                  </p>
                  <div className="text-purple-300 text-sm">
                    <strong>Rachel Kim</strong> • Real Estate • Top 1% performer nationally
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "The 12 psychological triggers are like having a cheat code for sales. I understand exactly which buttons to push and when. Prospects literally thank me for helping them make the decision."
                  </p>
                  <div className="text-purple-300 text-sm">
                    <strong>Mike Torres</strong> • Software Sales • $450K earnings last year
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Stop Guessing What Makes People Buy
          </h2>
          <p className="text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Sales psychology isn't manipulation - it's understanding. When you know how people really make decisions, you can help them make the right one faster and with confidence.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🧠 Master Psychology Today:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>All 12 psychological triggers</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>P.S.Y.C.H.O. framework</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Decision-making science</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Cognitive bias applications</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Influence and persuasion mastery</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Complete training system</span>
              </div>
            </div>
          </div>
          
          <Link href="/signup" className="inline-block bg-white text-purple-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white">
            🧠 Master Sales Psychology - $47/month
          </Link>
          
          <p className="text-purple-200 mt-6 text-lg">
            Join 25,000+ sales professionals who understand the science of persuasion
          </p>
        </div>
      </section>
    </div>
  )
}