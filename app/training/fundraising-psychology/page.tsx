export const metadata = {
  title: 'Fundraising Psychology: Make VCs Fight to Invest | Sales Training',
  description: 'Master the psychology of raising capital. Turn cold VCs into eager investors using proven psychological principles that get checks written',
  
  alternates: {
    canonical: 'https://convertify.com/training/fundraising-psychology',
  },
}

import React from 'react'
import Link from 'next/link'

export default function FundraisingPsychologyPage() {
  return (
    <div>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> LIMITED TIME: 76% OFF Psychology Training - Only $47/month! 
        <Link href="/signup" className="underline ml-2 font-bold hover:text-red-200">Start Now →</Link>
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
                <span className="mr-2">💰</span>
                The Psychology of Raising Millions
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                Stop <span className="text-red-400">Begging</span> for Money
                <br />
                Make VCs <span className="text-green-400">Beg</span> to Invest
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Master the <strong className="text-white">psychological principles</strong> that turn skeptical investors into eager partners. Learn why some founders raise millions with mediocre ideas while others with great ideas get <strong className="text-green-400">ghosted after every pitch</strong>.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 max-w-3xl mx-auto mb-12 text-black">
                <h3 className="text-2xl font-bold mb-4">🚀 What You'll Master:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">73%</div>
                    <div className="text-gray-700">Meeting-to-term-sheet rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">2.4x</div>
                    <div className="text-gray-700">Higher valuations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">47%</div>
                    <div className="text-gray-700">Get multiple offers</div>
                  </div>
                </div>
              </div>

              <Link href="/signup" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-black text-2xl py-6 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                💰 Master Fundraising Psychology - $47/month
              </Link>
              
              <p className="text-purple-300 text-lg mt-6">
                30-day guarantee • Join 5,000+ funded founders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Fundraising Truth Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-red-600">Brutal Truth</span> About Fundraising
            </h2>
            
            <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
              <h3 className="text-2xl font-bold text-red-800 mb-6">💸 Why 97% of Pitches Fail</h3>
              <div className="space-y-6 text-red-700">
                <p className="text-lg">
                  <strong>VCs don't invest in ideas.</strong> They invest in people who trigger specific psychological patterns that signal "winner."
                </p>
                <p className="text-lg">
                  You could have the next billion-dollar idea, but if you don't understand investor psychology, you'll watch inferior products get funded while you get polite rejections.
                </p>
                <p className="text-lg font-bold">
                  The difference between funded and rejected isn't the idea - it's the psychology of the pitch.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-4">❌ What Failed Founders Do</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Pitch features and technology</p>
                  <p>• Beg for meetings and chase VCs</p>
                  <p>• Accept first offer terms</p>
                  <p>• Focus on their product</p>
                  <p>• Sound desperate for funding</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-700 mb-4">✅ What Funded Founders Do</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Sell vision and inevitability</p>
                  <p>• Create FOMO and competition</p>
                  <p>• Negotiate from strength</p>
                  <p>• Focus on the opportunity</p>
                  <p>• Project abundance mindset</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">🧠 The Psychology Secret</h3>
                <p className="text-xl text-purple-100 leading-relaxed">
                  VCs make emotional decisions and justify with logic - just like everyone else. Master the psychology that triggers their "fear of missing out" and watch them compete to invest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 7 Psychological Triggers Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-purple-600">7 Psychological Triggers</span> That Get Checks Written
            </h2>

            <div className="space-y-8">
              {/* Trigger 1: Inevitability */}
              <div className="bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">1. 🚀 The Inevitability Frame</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> VCs want to invest in the future, not maybes.</p>
                    <p className="text-purple-700 italic text-sm"><strong>Script:</strong> "The question isn't if this market will shift to [your solution], it's whether you want to be part of the company leading that shift."</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-xl">
                    <p className="text-purple-800 font-semibold text-sm">Result: Positions investment as joining a movement, not funding an experiment.</p>
                  </div>
                </div>
              </div>

              {/* Trigger 2: Social Proof */}
              <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">2. 👥 The Insider Knowledge Play</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> VCs fear being the only one who doesn't see it.</p>
                    <p className="text-blue-700 italic text-sm"><strong>Script:</strong> "We're already in conversations with [respected VC], but I wanted to give you a chance to see this first because of your expertise in [specific area]."</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <p className="text-blue-800 font-semibold text-sm">Result: Creates competitive dynamic and positions them as specially chosen.</p>
                  </div>
                </div>
              </div>

              {/* Trigger 3: Scarcity */}
              <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-800 mb-4">3. ⏰ The Closing Window</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> Scarcity drives action more than opportunity.</p>
                    <p className="text-red-700 italic text-sm"><strong>Script:</strong> "We're closing the round in 2 weeks. We have 70% committed, and honestly, we might be oversubscribed. When can you let me know?"</p>
                  </div>
                  <div className="bg-red-100 p-4 rounded-xl">
                    <p className="text-red-800 font-semibold text-sm">Result: Forces decision timeline and creates urgency without desperation.</p>
                  </div>
                </div>
              </div>

              {/* Trigger 4: Authority */}
              <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-800 mb-4">4. 🏆 The Domain Expert Position</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> VCs bet on founders who know secrets others don't.</p>
                    <p className="text-green-700 italic text-sm"><strong>Script:</strong> "After 10 years in this industry, I discovered something everyone else missed. Let me show you the data that proves why [insight] changes everything."</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-xl">
                    <p className="text-green-800 font-semibold text-sm">Result: Positions you as the expert they need to back.</p>
                  </div>
                </div>
              </div>

              {/* Trigger 5: Vision Expansion */}
              <div className="bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">5. 🌟 The Bigger Vision Reveal</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> VCs want 100x returns, not 10x.</p>
                    <p className="text-yellow-700 italic text-sm"><strong>Script:</strong> "Phase 1 is a $500M opportunity. But that's just our entry point. Once we have the data from phase 1, we unlock a $10B market that no one else can access."</p>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-xl">
                    <p className="text-yellow-800 font-semibold text-sm">Result: Shows massive upside while maintaining credibility with staged approach.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">🎯 Plus 2 Advanced Triggers</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left mb-6 max-w-2xl mx-auto">
                  <div className="space-y-2">
                    <p className="text-green-400">✓ The Pattern Match (Why you = success)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-green-400">✓ The Deal Heat (Everyone wants in)</p>
                  </div>
                </div>
                <Link href="/signup" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-black text-xl py-4 px-8 rounded-xl shadow-lg">
                  🚀 Master All 7 Triggers - $47/month
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Perfect Pitch Structure Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-green-600">10-Slide Psychology</span> System
            </h2>

            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-green-800 mb-6">🎯 The Perfect Pitch Flow</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Slide 1-2: The Hook (0-30 seconds)</h4>
                  <p className="text-gray-700 mb-2">Create immediate emotional engagement</p>
                  <p className="text-green-700 italic text-sm">"Imagine knowing exactly which customer will churn 90 days before they do. We make that possible."</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Slide 3-4: The Problem (30-90 seconds)</h4>
                  <p className="text-gray-700 mb-2">Agitate the pain they already feel</p>
                  <p className="text-green-700 italic text-sm">"Companies lose $75B annually to preventable churn. The worst part? They don't know who's leaving until it's too late."</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Slide 5-6: The Insight (90-150 seconds)</h4>
                  <p className="text-gray-700 mb-2">Share the secret only you know</p>
                  <p className="text-green-700 italic text-sm">"Everyone looks at usage data. We discovered that support ticket sentiment predicts churn 3x better. Here's the proof..."</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Slide 7-8: The Traction (150-210 seconds)</h4>
                  <p className="text-gray-700 mb-2">Prove momentum and inevitability</p>
                  <p className="text-green-700 italic text-sm">"In 6 months: 47 enterprise clients, $2.3M ARR, 147% net revenue retention. Salesforce wants to partner."</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Slide 9-10: The Ask (210-240 seconds)</h4>
                  <p className="text-gray-700 mb-2">Make them compete for allocation</p>
                  <p className="text-green-700 italic text-sm">"We're raising $5M to accelerate what's already working. We have $3M soft-committed. Are you interested in the remaining allocation?"</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">❌ Pitch Killers</h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p>• Starting with your solution</p>
                  <p>• Too much time on technology</p>
                  <p>• Defensive about competition</p>
                  <p>• Asking "what do you think?"</p>
                  <p>• Ending weak without clear ask</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-green-700 mb-4">✅ Pitch Amplifiers</h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p>• Start with transformation</p>
                  <p>• Focus on market dynamics</p>
                  <p>• Welcome competition as validation</p>
                  <p>• Ask "when can you decide?"</p>
                  <p>• End with scarcity and timeline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Psychology Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              <span className="text-blue-600">Meeting Psychology:</span> Control the Room
            </h2>

            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-blue-800 mb-4">🎭 The Power Dynamic Flip</h3>
                <p className="text-gray-700 mb-4">
                  Most founders enter VC meetings as supplicants. Winners flip the dynamic:
                </p>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-blue-700 italic mb-2">
                    "Thanks for making time. I have three meetings today and need to make a decision by Friday. Let's see if there's a fit here. What's your investment thesis for this space?"
                  </p>
                  <p className="text-gray-600 text-sm">Makes them sell you on why they're the right investor.</p>
                </div>
              </div>

              <div className="bg-purple-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-purple-800 mb-4">🎯 The Objection Preempt</h3>
                <p className="text-gray-700 mb-4">
                  Address concerns before they voice them:
                </p>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-purple-700 italic mb-2">
                    "You're probably thinking the market isn't big enough. That's what Airbnb's investors thought about vacation rentals. Let me show you what everyone's missing..."
                  </p>
                  <p className="text-gray-600 text-sm">Removes their ammunition and positions you as thoughtful.</p>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-green-800 mb-4">💡 The Strategic Pause</h3>
                <p className="text-gray-700 mb-4">
                  After making a powerful point, stop talking:
                </p>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-green-700 italic mb-2">
                    "Our CAC is $500 and LTV is $50,000. [PAUSE FOR 3 SECONDS]"
                  </p>
                  <p className="text-gray-600 text-sm">Forces them to react and reveal their thinking. Silence is power.</p>
                </div>
              </div>

              <div className="bg-red-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-red-800 mb-4">🚀 The Close That Gets Term Sheets</h3>
                <p className="text-gray-700 mb-4">
                  End every meeting with clear next steps:
                </p>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-red-700 italic mb-2">
                    "Based on our conversation, it seems like there's strong alignment. What's your process from here? We're making final decisions Tuesday, so if you need additional information, let me know by tomorrow."
                  </p>
                  <p className="text-gray-600 text-sm">Creates urgency and forces them to move fast or lose out.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Negotiation Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              <span className="text-purple-600">Term Sheet Psychology:</span> 2.4x Your Valuation
            </h2>

            <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-purple-800 mb-6">💰 The Multiple Offer Strategy</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Step 1: Create Competition</h4>
                  <p className="text-purple-700 italic">
                    "We've received our first term sheet. We're excited about all our conversations and want to give everyone a chance to participate. If you're interested, please submit terms by Friday."
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Step 2: Price Anchor High</h4>
                  <p className="text-purple-700 italic">
                    "We're seeing valuations between $15M and $25M. The lead is coming in at $20M. Where would you come in to win this deal?"
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Step 3: Negotiate Beyond Valuation</h4>
                  <p className="text-purple-700 italic">
                    "Valuation is just one factor. We're optimizing for the right partner. Your value-add in [specific area] is compelling. What else can you bring to ensure you're our choice?"
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">⚡ The Psychological Edge</h3>
                <p className="text-xl text-gray-300 mb-6">
                  VCs see 1,000 pitches per year and fund 10. Those 10 founders understand one thing: Fundraising is sales, and sales is psychology.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
                  <div>
                    <div className="text-2xl font-bold text-green-400 mb-2">73%</div>
                    <div className="text-gray-400 text-sm">Meeting → term sheet rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400 mb-2">2.4x</div>
                    <div className="text-gray-400 text-sm">Higher valuations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400 mb-2">18 days</div>
                    <div className="text-gray-400 text-sm">Average time to close</div>
                  </div>
                </div>
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
              What Happens When You Master <span className="text-green-600">Fundraising Psychology</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-purple-50 rounded-2xl">
                <div className="text-4xl mb-4">🚀</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">73%</div>
                <div className="text-gray-700">Get term sheets</div>
                <div className="text-sm text-gray-600 mt-2">vs 3% average</div>
              </div>
              <div className="text-center p-8 bg-green-50 rounded-2xl">
                <div className="text-4xl mb-4">💰</div>
                <div className="text-3xl font-bold text-green-600 mb-2">2.4x</div>
                <div className="text-gray-700">Higher valuations</div>
                <div className="text-sm text-gray-600 mt-2">Keep more equity</div>
              </div>
              <div className="text-center p-8 bg-blue-50 rounded-2xl">
                <div className="text-4xl mb-4">⚡</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">18 days</div>
                <div className="text-gray-700">To close round</div>
                <div className="text-sm text-gray-600 mt-2">vs 6 months average</div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">🦄 Funded Founder Success Stories</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "Pitched 47 VCs with my first startup - zero offers. Used this psychology system for my second startup - 5 term sheets in 3 weeks. Closed $3.5M at a $22M valuation. The difference was 100% psychological positioning."
                  </p>
                  <div className="text-purple-300 text-sm">
                    <strong>Jennifer Chen</strong> • B2B SaaS • Closed Series A
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "The 'inevitability frame' changed everything. Instead of begging for money, I had VCs begging for allocation. Raised $8M seed round (was targeting $5M) and had to turn investors away."
                  </p>
                  <div className="text-purple-300 text-sm">
                    <strong>Marcus Thompson</strong> • FinTech • Oversubscribed round
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
            Stop Begging. Start Choosing Your Investors.
          </h2>
          <p className="text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            The difference between funded and failed isn't your idea - it's your ability to trigger the psychological patterns that make VCs write checks.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">💰 Master Fundraising Psychology:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>7 psychological triggers</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Perfect pitch structure</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Meeting control tactics</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Term sheet negotiation</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Email templates & scripts</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Complete psychology system</span>
              </div>
            </div>
          </div>
          
          <Link href="/signup" className="inline-block bg-white text-purple-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white">
            🚀 Get Funded - $47/month
          </Link>
          
          <p className="text-purple-200 mt-6 text-lg">
            Join 5,000+ founders who raised on their terms
          </p>
        </div>
      </section>
    </div>
  )
}