export const metadata = {
  title: '50+ Battle-Tested Objection Scripts | Free Sales Resource',
  description: 'Master every sales objection with word-for-word scripts that convert skeptics into buyers. Based on psychology, proven by 25,000+ salespeople',
  
  alternates: {
    canonical: 'https://convertify.com/resources/objection-scripts',
  },
}

import React from 'react'
import Link from 'next/link'

export default function ObjectionScriptsPage() {
  return (
    <div>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> Get FULL Psychology Training: 76% OFF - Only $47/month! 
        <Link href="/signup" className="underline ml-2 font-bold hover:text-red-200">Start Now →</Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-red-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">🛡️</span>
                FREE: Objection Handling Scripts
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                <span className="text-red-400">Never Lose</span> to
                <br />
                "I Need to Think About It"
                <br />
                <span className="text-green-400">Ever Again</span>
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                <strong className="text-white">50+ word-for-word scripts</strong> that turn the most common objections into closing opportunities. Based on psychology, battle-tested by <strong className="text-green-400">25,000+ sales professionals</strong>.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 max-w-3xl mx-auto mb-12 text-black">
                <h3 className="text-2xl font-bold mb-4">📊 Why These Scripts Work:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
                    <div className="text-gray-700">Objection overcome rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">2.3x</div>
                    <div className="text-gray-700">Close rate improvement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">47%</div>
                    <div className="text-gray-700">Price objections dissolved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              Why Most Salespeople <span className="text-red-600">Crumble</span> at Objections
            </h2>
            
            <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
              <h3 className="text-2xl font-bold text-red-800 mb-6">❌ The Fatal Mistakes</h3>
              <div className="space-y-4 text-red-700">
                <p className="text-lg">• They get defensive and start justifying</p>
                <p className="text-lg">• They immediately offer discounts</p>
                <p className="text-lg">• They accept objections as truth</p>
                <p className="text-lg">• They don't understand the psychology behind objections</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">🧠 The Psychology Truth</h3>
              <p className="text-xl text-blue-100 leading-relaxed">
                Objections aren't rejections - they're requests for help making a decision. Master the psychology of objection handling, and you'll close 89% of "impossible" deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top 10 Objections Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-green-600">Top 10 Objections</span> + Word-for-Word Scripts
            </h2>

            <div className="space-y-8">
              {/* Objection 1: Too Expensive */}
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-800 mb-4">1. 💰 "It's Too Expensive"</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <p className="text-gray-700 font-semibold mb-3">The Aikido Response:</p>
                    <p className="text-blue-700 italic mb-4">
                      "I appreciate you being upfront about price. When you say it's too expensive, help me understand - are you comparing it to another solution, or is it outside your budget? Because there's a big difference between price and cost..."
                    </p>
                    <p className="text-green-600 font-semibold">Then transition to value:</p>
                    <p className="text-gray-700 italic">
                      "You mentioned [specific problem] is costing you [amount] per month. Our solution eliminates that completely. So really, you're not spending money - you're buying money at a discount. Should we run the numbers together?"
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <p className="text-green-700 text-sm"><strong>Psychology:</strong> Reframes from cost to investment, uses their own numbers against the objection.</p>
                  </div>
                </div>
              </div>

              {/* Objection 2: Need to Think About It */}
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">2. 🤔 "I Need to Think About It"</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <p className="text-gray-700 font-semibold mb-3">The Pattern Interrupt:</p>
                    <p className="text-blue-700 italic mb-4">
                      "Of course! This is an important decision. Just so I can prepare the right information for you - when you say you need to think about it, what specifically are you unsure about? Is it the implementation, the ROI, or something else?"
                    </p>
                    <p className="text-green-600 font-semibold">After they answer:</p>
                    <p className="text-gray-700 italic">
                      "I understand completely. Let's address [specific concern] right now so you have all the information you need. Most clients have the same concern until they understand [solution]. Here's how it works..."
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-blue-700 text-sm"><strong>Psychology:</strong> Forces them to articulate the real objection, then solves it immediately.</p>
                  </div>
                </div>
              </div>

              {/* Objection 3: Need to Talk to Boss/Spouse */}
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">3. 👥 "I Need to Talk to My Boss/Partner"</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <p className="text-gray-700 font-semibold mb-3">The Inclusion Method:</p>
                    <p className="text-purple-700 italic mb-4">
                      "Absolutely! I wouldn't expect you to make this decision alone. What questions do you think they'll have? Let's make sure you have all the answers... Actually, would it make sense to get them on a quick call now? I can explain it better than any brochure."
                    </p>
                    <p className="text-green-600 font-semibold">If they say no:</p>
                    <p className="text-gray-700 italic">
                      "I understand. Let me prepare a one-page summary addressing their likely concerns. Based on my experience, they'll ask about [X, Y, Z]. Here's exactly what to tell them... When can the three of us connect to finalize this?"
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <p className="text-purple-700 text-sm"><strong>Psychology:</strong> Maintains control by staying involved in the decision process.</p>
                  </div>
                </div>
              </div>

              {/* Objection 4: We're Using a Competitor */}
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-800 mb-4">4. 🏢 "We're Already Using [Competitor]"</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <p className="text-gray-700 font-semibold mb-3">The Trojan Horse Response:</p>
                    <p className="text-green-700 italic mb-4">
                      "That's great! [Competitor] is a solid choice for basic needs. Our clients actually used them before switching to us. Quick question - what's the one thing you wish [Competitor] did better?"
                    </p>
                    <p className="text-green-600 font-semibold">After they answer:</p>
                    <p className="text-gray-700 italic">
                      "That's exactly why [similar company] switched to us last month. We specialize in [their pain point]. I'm not saying switch everything - but would you be open to seeing how we solve that specific issue? It integrates perfectly with [Competitor]..."
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <p className="text-green-700 text-sm"><strong>Psychology:</strong> Positions as complement, not replacement. Finds the wedge issue.</p>
                  </div>
                </div>
              </div>

              {/* Objection 5: Bad Timing */}
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">5. ⏰ "It's Not a Good Time"</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <p className="text-gray-700 font-semibold mb-3">The Cost of Delay Framework:</p>
                    <p className="text-yellow-700 italic mb-4">
                      "I totally understand - timing is everything. Just curious though - you mentioned [problem] is costing you [amount] per month. If we wait 6 months to fix it, that's [amount x 6] gone forever. When would be a good time to stop losing that money?"
                    </p>
                    <p className="text-green-600 font-semibold">Follow up with urgency:</p>
                    <p className="text-gray-700 italic">
                      "Look, I get it. But your competitors aren't waiting. [Competitor name] just implemented this and they're already seeing results. Every month you wait is a month they pull further ahead. Can we at least pilot this in one department?"
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl">
                    <p className="text-yellow-700 text-sm"><strong>Psychology:</strong> Makes inaction more painful than action. Creates competitive FOMO.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">🔥 Plus 45 More Objection Scripts Including:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left mb-6">
                  <div className="space-y-2">
                    <p className="text-green-400">✓ "We don't have budget"</p>
                    <p className="text-green-400">✓ "I need to see ROI first"</p>
                    <p className="text-green-400">✓ "We tried something similar"</p>
                    <p className="text-green-400">✓ "I'm not the decision maker"</p>
                    <p className="text-green-400">✓ "Send me information"</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-green-400">✓ "We're too small/big"</p>
                    <p className="text-green-400">✓ "We do it in-house"</p>
                    <p className="text-green-400">✓ "I'm not interested"</p>
                    <p className="text-green-400">✓ "Call me next quarter"</p>
                    <p className="text-green-400">✓ "We're happy with status quo"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Techniques Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              <span className="text-purple-600">Advanced Psychology</span> Techniques
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-4">🥋 The Objection Aikido Method</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>1. Acknowledge:</strong> "I appreciate you sharing that..."</p>
                  <p><strong>2. Align:</strong> "You're right to be concerned about..."</p>
                  <p><strong>3. Redirect:</strong> "That's exactly why we..."</p>
                  <p><strong>4. Close:</strong> "Makes sense to move forward?"</p>
                  <div className="bg-purple-50 p-4 rounded-xl mt-4">
                    <p className="text-purple-700 text-sm italic">Uses their energy against the objection itself</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-4">🎯 The Pre-emptive Strike</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold">Address objections before they arise:</p>
                  <p className="italic">"You're probably wondering about the price. Most people are shocked when they hear it's [high price]... until they realize it replaces [list of things] and pays for itself in [timeframe]."</p>
                  <div className="bg-blue-50 p-4 rounded-xl mt-4">
                    <p className="text-blue-700 text-sm italic">Removes the power of the objection</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-green-700 mb-4">🔄 The Boomerang Technique</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold">Turn objections into reasons to buy:</p>
                  <p className="italic">"It's too expensive? That's exactly why you need it. You can't afford NOT to have this. Let me show you what it's really costing you to wait..."</p>
                  <div className="bg-green-50 p-4 rounded-xl mt-4">
                    <p className="text-green-700 text-sm italic">Makes the objection the reason to move forward</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">🎭 The False Dilemma Close</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold">Create urgency through contrast:</p>
                  <p className="italic">"Look, you have two choices: Keep losing $50K/month to this problem, or invest $5K/month to solve it forever. Which makes more sense for your business?"</p>
                  <div className="bg-red-50 p-4 rounded-xl mt-4">
                    <p className="text-red-700 text-sm italic">Makes inaction seem irrational</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Templates Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              <span className="text-blue-600">Bonus:</span> Follow-Up Email Templates
            </h2>

            <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">📧 The "Think About It" Follow-Up</h3>
              <div className="bg-white p-6 rounded-xl font-mono text-sm">
                <p className="mb-2">Subject: Quick question about our conversation</p>
                <p className="mb-4">---</p>
                <p className="mb-4">Hi [Name],</p>
                <p className="mb-4">You mentioned needing time to think about [solution]. Totally understand.</p>
                <p className="mb-4">Quick question - [Competitor] just announced they're using something similar to gain [specific advantage]. Thought you should know since you compete directly with them.</p>
                <p className="mb-4">Still happy to answer any questions when you're ready. Just don't want you to fall behind.</p>
                <p className="mb-4">When should I check back in?</p>
                <p>[Your name]</p>
              </div>
              <p className="text-blue-700 text-sm mt-4 italic">Psychology: Creates competitive urgency + soft commitment</p>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-6">📧 The "Too Expensive" Follow-Up</h3>
              <div className="bg-white p-6 rounded-xl font-mono text-sm">
                <p className="mb-2">Subject: Found a way to make the numbers work</p>
                <p className="mb-4">---</p>
                <p className="mb-4">Hi [Name],</p>
                <p className="mb-4">Been thinking about your price concern. You're right - [price] is a significant investment.</p>
                <p className="mb-4">But I did some math:</p>
                <p className="mb-4">- You're losing [amount] monthly to [problem]<br />
                - Our solution costs [amount] monthly<br />
                - Net gain: [difference] monthly (that's [annual] per year)</p>
                <p className="mb-4">Plus, we could start with [smaller option] to prove ROI first.</p>
                <p className="mb-4">Worth a 15-minute call to explore?</p>
                <p>[Your name]</p>
              </div>
              <p className="text-green-700 text-sm mt-4 italic">Psychology: Uses their numbers + reduces risk with pilot option</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              Real Results from <span className="text-green-600">These Scripts</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">💰</div>
                <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
                <div className="text-gray-700">Objection overcome rate</div>
                <div className="text-sm text-gray-600 mt-2">vs 34% industry average</div>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">📈</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">2.3x</div>
                <div className="text-gray-700">Close rate improvement</div>
                <div className="text-sm text-gray-600 mt-2">From mastering objections</div>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">47%</div>
                <div className="text-gray-700">Price objections dissolved</div>
                <div className="text-sm text-gray-600 mt-2">Without giving discounts</div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">🏆 What Users Say</h3>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-gray-200 italic mb-3">
                    "The 'too expensive' script alone saved me $230K in discounts last year. I used to panic and drop price. Now I use their objection to justify the investment. Game changer."
                  </p>
                  <div className="text-green-300 text-sm">
                    <strong>Tom Martinez</strong> • SaaS Sales • Using scripts for 8 months
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-gray-200 italic mb-3">
                    "I printed these and practiced until they became natural. Now objections don't scare me - I actually look forward to them because I know exactly how to handle each one."
                  </p>
                  <div className="text-green-300 text-sm">
                    <strong>Jessica Park</strong> • Financial Services • Doubled her close rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Get All 50+ Objection Scripts FREE
          </h2>
          <p className="text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Stop losing deals to preventable objections. Master the psychology that turns "no" into "yes" and skeptics into buyers.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">📋 Instant Access Includes:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>50+ word-for-word scripts</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Psychology explanations</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Email follow-up templates</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Advanced techniques guide</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Industry-specific variations</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Practice worksheets</span>
              </div>
            </div>
          </div>
          
          <Link href="/signup" className="inline-block bg-white text-green-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white mb-6">
            🔓 Get Instant Access - FREE
          </Link>
          
          <p className="text-green-200 text-lg">
            Join 25,000+ sales pros who never lose to objections
          </p>

          <div className="mt-12 pt-12 border-t border-green-500">
            <p className="text-xl text-green-100 mb-4">
              Want the complete psychology system behind these scripts?
            </p>
            <Link href="/signup" className="inline-block bg-green-800 hover:bg-green-900 text-white font-bold text-lg py-4 px-8 rounded-xl">
              Get Full Training - $47/month →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}