export const metadata = {
  title: 'Enterprise Deal Master: B2B Sales Success Story | Convertify',
  description: 'How Marcus Johnson went from struggling with complex B2B sales to closing $4.2M in enterprise deals using advanced sales psychology',
  
  alternates: {
    canonical: 'https://convertify.com/success-stories/b2b',
  },
}

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function B2BSuccessPage() {
  return (
    <div>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> LIMITED TIME: 76% OFF Sales Training - Only $47/month! 
        <Link href="/signup" className="underline ml-2 font-bold hover:text-red-200">Claim Now →</Link>
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
              <div className="inline-flex items-center px-6 py-3 bg-indigo-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">🏢</span>
                Enterprise B2B Success Story
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                From <span className="text-red-400">$200K Deals</span> to
                <br />
                <span className="text-green-400">$1.2M Deals</span>
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                How Marcus Johnson mastered the psychology of enterprise B2B sales to close <strong className="text-white">$4.2M in 6 months</strong>, including the biggest deal in company history, using <strong className="text-green-400">committee selling psychology</strong>.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 max-w-3xl mx-auto mb-12 text-black">
                <h3 className="text-2xl font-bold mb-4">🏆 Marcus's Transformation</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-2">Before</div>
                    <div className="text-gray-700">$200K avg deal</div>
                    <div className="text-gray-700">9-month cycles</div>
                    <div className="text-gray-700">22% close rate</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl">→</span>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">After</div>
                    <div className="text-gray-700">$700K avg deal</div>
                    <div className="text-gray-700">3-month cycles</div>
                    <div className="text-gray-700">64% close rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Struggle Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              Why <span className="text-red-600">Enterprise Sales</span> Almost Broke Me
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <div className="flex items-start space-x-6">
                <div className="bg-gray-200 rounded-full w-20 h-20 flex items-center justify-center text-3xl">👨‍💼</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Marcus Johnson</h3>
                  <p className="text-gray-600">Enterprise Account Executive • Chicago, IL</p>
                  <p className="text-green-600 font-semibold">Now: $4.2M closed in 6 months • Company MVP</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                "Seven years in B2B sales, and I thought I knew the game. But enterprise sales was a different beast. Deals would drag on for months, then die in committee. I'd get ghosted after 'great' meetings. It was soul-crushing."
              </p>

              <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
                <h3 className="text-2xl font-bold text-red-800 mb-6">😔 The Enterprise Reality</h3>
                <div className="space-y-4 text-red-700">
                  <p>• 9+ month sales cycles that often ended in "no decision"</p>
                  <p>• Lost $800K deal after 6 months to "budget reallocation"</p>
                  <p>• Average deal size stuck at $200K (company average: $450K)</p>
                  <p>• Couldn't navigate complex stakeholder dynamics</p>
                  <p>• Watched competitors win deals I thought were mine</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700 my-8">
                "The worst was losing a $1.2M deal I'd worked on for 8 months. The champion loved us, the CFO was on board, but somehow it fell apart in the final committee meeting. I found out later they went with our competitor because 'the team felt more comfortable' with them."
              </blockquote>

              <div className="bg-gray-100 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 My Painful Numbers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Deal Statistics:</strong></p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 22% close rate on qualified opportunities</li>
                      <li>• $200K average deal size</li>
                      <li>• 9-month average sales cycle</li>
                      <li>• 4 deals lost in final stages ($3.2M)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Where I Failed:</strong></p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Single-threaded deals (champion only)</li>
                      <li>• No executive alignment</li>
                      <li>• Couldn't create urgency</li>
                      <li>• Lost control of the evaluation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Psychology Discovery Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-indigo-600">Enterprise Psychology</span> Breakthrough
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                "At our SKO, they brought in a Fortune 500 sales VP who said something that changed my life: 'In enterprise sales, you're not selling to people - you're selling to a political system. Master the psychology of group dynamics, or you'll always lose to someone who has.'"
              </p>

              <div className="bg-indigo-50 border-2 border-indigo-300 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">🧠 The Committee Psychology Secret</h3>
                <p className="text-indigo-700 text-lg leading-relaxed mb-4">
                  "Enterprise deals aren't won in boardrooms - they're won in the minds of each stakeholder before the meeting starts. Each person has different fears, motivations, and political considerations."
                </p>
                <p className="text-indigo-700 text-lg font-semibold">
                  "I found Convertify's training and finally understood why I was losing deals - I was selling features when I should have been managing psychology and politics."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-red-700 mb-4">❌ My Old B2B Approach</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Focused on the champion only</li>
                    <li>• Presented features and ROI</li>
                    <li>• Hoped the champion would sell internally</li>
                    <li>• Waited for committee decisions</li>
                    <li>• Lost deals to "no decision"</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-green-700 mb-4">✅ The Psychology Approach</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Map all stakeholder motivations</li>
                    <li>• Create individual win scenarios</li>
                    <li>• Build consensus before meetings</li>
                    <li>• Control the evaluation process</li>
                    <li>• Make "no decision" impossible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Transformation Techniques Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-green-600">Enterprise Psychology</span> Techniques
            </h2>

            <div className="space-y-8">
              <div className="bg-indigo-50 rounded-2xl p-8 border-l-4 border-indigo-500">
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">1. 🎯 The "Power Map" Stakeholder Analysis</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">I map every stakeholder's personal win:</p>
                  <p className="text-indigo-700 italic mb-4">"CFO Sarah, you mentioned cost reduction is your #1 priority this year. Let me show you how Deutsche Bank's CFO presented $2.3M in savings to their board using our ROI framework. I can give you the exact slides they used..."</p>
                  <p className="text-green-600 font-semibold">Result: Each stakeholder becomes a champion for their own reasons.</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-800 mb-4">2. 🏆 The "Executive Alignment" Strategy</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">Skip middle management, align with power:</p>
                  <p className="text-green-700 italic mb-4">"I've scheduled 20 minutes with your CEO next Tuesday. I'll be sharing how three of your competitors are using this to gain market share. Should I include you in that meeting, or would you prefer I brief you separately afterward?"</p>
                  <p className="text-green-600 font-semibold">Result: Creates top-down pressure and urgency. Deal velocity increased 3x.</p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">3. 🚨 The "Cost of Inaction" Framework</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">Make "no decision" the riskiest choice:</p>
                  <p className="text-purple-700 italic mb-4">"Your competitor launched this 6 months ago and just announced 23% market share gain. Every month you wait costs approximately $400K in lost opportunity. The board is asking about this in earnings calls - what's your response plan?"</p>
                  <p className="text-green-600 font-semibold">Result: 73% reduction in "no decision" outcomes.</p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">4. 🎪 The "Committee Pre-Sell" System</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">Win the deal before the meeting:</p>
                  <p className="text-yellow-700 italic mb-4">"I'll meet with each committee member individually next week to address their specific concerns. By the time we get to the group meeting, everyone will already have their questions answered. The meeting becomes a formality, not a debate."</p>
                  <p className="text-green-600 font-semibold">Result: 64% close rate (was 22%). Deals never die in committee.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Results Timeline Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              My <span className="text-green-600">6-Month</span> Enterprise Domination
            </h2>

            <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-8 mb-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold">Month 1</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">First Enterprise Win</h4>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-gray-700 mb-2">• Applied stakeholder mapping to existing deal</p>
                      <p className="text-gray-700 mb-2">• Closed $450K deal in 6 weeks (was stuck 4 months)</p>
                      <p className="text-gray-700 mb-2">• CFO became my internal champion</p>
                      <p className="text-green-600 font-semibold">Confidence through the roof</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold">Month 3</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">Momentum Building</h4>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-gray-700 mb-2">• Closed 3 deals totaling $1.8M</p>
                      <p className="text-gray-700 mb-2">• Average deal size hit $600K</p>
                      <p className="text-gray-700 mb-2">• Sales cycle down to 3 months</p>
                      <p className="text-green-600 font-semibold">#2 in company rankings</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold">Month 6</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">The $1.2M Victory</h4>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-gray-700 mb-2">• Closed largest deal in company history</p>
                      <p className="text-gray-700 mb-2">• Total: $4.2M in 6 months</p>
                      <p className="text-gray-700 mb-2">• 64% close rate achieved</p>
                      <p className="text-green-600 font-semibold">Named company MVP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-indigo-50 rounded-2xl">
                <div className="text-3xl font-bold text-indigo-600 mb-2">$700K</div>
                <div className="text-gray-700">Avg deal size</div>
                <div className="text-sm text-gray-600">(was $200K)</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <div className="text-3xl font-bold text-green-600 mb-2">64%</div>
                <div className="text-gray-700">Close rate</div>
                <div className="text-sm text-gray-600">(was 22%)</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-2xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">3 months</div>
                <div className="text-gray-700">Sales cycle</div>
                <div className="text-sm text-gray-600">(was 9 months)</div>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-2xl">
                <div className="text-3xl font-bold text-yellow-600 mb-2">$4.2M</div>
                <div className="text-gray-700">6-month total</div>
                <div className="text-sm text-gray-600">(2x annual quota)</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 text-center">🏆 The $1.2M Deal Breakdown</h3>
              <p className="text-xl text-indigo-100 text-center leading-relaxed">
                "7 stakeholders, 3 departments, 2 competing vendors. Used the Committee Pre-Sell system to get 6 out of 7 saying yes before the final meeting. The 7th (IT Director) flipped when the CTO advocated for us. Deal closed in 11 weeks."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Life Impact Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              What <span className="text-green-600">Enterprise Mastery</span> Really Means
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <blockquote className="text-2xl text-gray-700 italic text-center leading-relaxed mb-6">
                "I don't chase deals anymore - I orchestrate them. Every stakeholder thinks the decision was their idea. Every deal has momentum. Every committee meeting is just confirming what's already been decided."
              </blockquote>
              <p className="text-center text-gray-600 font-semibold">- Marcus Johnson</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">💼 Professional Impact</h3>
                <div className="space-y-3 text-indigo-700">
                  <p>✓ Promoted to Strategic Accounts Director</p>
                  <p>✓ Leading team of 8 enterprise reps</p>
                  <p>✓ Speaking at industry conferences</p>
                  <p>✓ Recruited by Google, Microsoft, Salesforce</p>
                  <p>✓ Stock options worth $400K+</p>
                </div>
              </div>
              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-green-800 mb-4">🎯 Personal Freedom</h3>
                <div className="space-y-3 text-green-700">
                  <p>✓ $480K total comp (was $180K)</p>
                  <p>✓ Work from anywhere flexibility</p>
                  <p>✓ Bought dream house in Denver</p>
                  <p>✓ Taking family to Europe for a month</p>
                  <p>✓ Actually enjoy Sunday nights now</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4 text-center">💡 My Advice to B2B Sellers</h3>
              <p className="text-yellow-700 text-lg leading-relaxed mb-4">
                "Stop selling to companies - start orchestrating decisions. Enterprise sales is 20% product knowledge and 80% stakeholder psychology. Master the politics and group dynamics, or someone else will eat your lunch."
              </p>
              <p className="text-yellow-700 text-lg leading-relaxed font-semibold text-center">
                "The psychology training was the missing piece that transformed everything."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Your Enterprise Breakthrough Starts Today
          </h2>
          <p className="text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Marcus went from losing million-dollar deals to closing the biggest deal in company history. He didn't get better at presenting - he mastered the psychology of enterprise decision-making.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🏢 Enterprise B2B Training Includes:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Stakeholder psychology mapping</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Committee pre-sell system</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Executive alignment tactics</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Political navigation mastery</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Cost of inaction framework</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Complete psychology training</span>
              </div>
            </div>
          </div>
          
          <Link href="/signup" className="inline-block bg-white text-indigo-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white">
            🏢 Master Enterprise Sales - $47/month
          </Link>
          
          <p className="text-indigo-200 mt-6 text-lg">
            Join thousands of B2B professionals closing bigger deals faster
          </p>
        </div>
      </section>
    </div>
  )
}