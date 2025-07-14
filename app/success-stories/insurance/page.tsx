export const metadata = {
  title: 'Top 5% Nationally: Insurance Agent Success Story | Convertify',
  description: 'How David Thompson went from struggling insurance agent to top 5% nationally, increasing retention to 94% using sales psychology.',
}

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function InsuranceSuccessPage() {
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
              <div className="inline-flex items-center px-6 py-3 bg-purple-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">🛡️</span>
                Insurance Success Story
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                From <span className="text-red-400">Bottom 50%</span> to
                <br />
                <span className="text-green-400">Top 5% Nationally</span>
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                How David Thompson transformed from considering quitting insurance to becoming a <strong className="text-white">Million Dollar Round Table qualifier</strong> with <strong className="text-green-400">94% client retention</strong> using psychology-based selling.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 max-w-3xl mx-auto mb-12 text-black">
                <h3 className="text-2xl font-bold mb-4">🏆 David's Transformation</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-2">Before</div>
                    <div className="text-gray-700">67% retention</div>
                    <div className="text-gray-700">$92K income</div>
                    <div className="text-gray-700">Bottom 50%</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl">→</span>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">After</div>
                    <div className="text-gray-700">94% retention</div>
                    <div className="text-gray-700">$385K income</div>
                    <div className="text-gray-700">Top 5% nationally</div>
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
              Why I <span className="text-red-600">Almost Quit</span> Insurance
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <div className="flex items-start space-x-6">
                <div className="bg-gray-200 rounded-full w-20 h-20 flex items-center justify-center text-3xl">👨‍💼</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">David Thompson</h3>
                  <p className="text-gray-600">Life & Health Insurance • Dallas, TX</p>
                  <p className="text-green-600 font-semibold">Now: MDRT Qualifier • Top 5% Producer</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                "Five years in insurance, and I was burned out. The constant rejection, the 'I need to think about it,' the canceled policies after one payment. I was working 60-hour weeks just to stay afloat."
              </p>

              <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
                <h3 className="text-2xl font-bold text-red-800 mb-6">😞 My Insurance Reality Check</h3>
                <div className="space-y-4 text-red-700">
                  <p>• 67% retention rate (lost 1/3 of clients yearly)</p>
                  <p>• Spent 80% of time chasing new business</p>
                  <p>• Average policy size: $87/month</p>
                  <p>• Competed on price, lost on value</p>
                  <p>• Wife asked: "Is this really worth it?"</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700 my-8">
                "The worst part was the guilt. I knew insurance was important, but I felt like a pushy salesman. People would literally cross the street to avoid me at community events. I was the 'insurance guy' everyone avoided."
              </blockquote>

              <div className="bg-gray-100 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 The Numbers Don't Lie</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Year 5 Results:</strong></p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 312 total clients (after 5 years!)</li>
                      <li>• Lost 148 clients that year alone</li>
                      <li>• $92K gross income</li>
                      <li>• Bottom 50% in company</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Daily Reality:</strong></p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 100+ cold calls for 1 appointment</li>
                      <li>• 5 appointments for 1 sale</li>
                      <li>• Constant price objections</li>
                      <li>• Zero referrals</li>
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
              The <span className="text-purple-600">Psychology Secret</span> of Top Insurance Producers
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                "At a conference, I met an MDRT producer who changed my life with one sentence: 'David, you're selling insurance. I'm selling peace of mind, love for family, and financial dignity. That's why you're struggling.'"
              </p>

              <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">🧠 The Psychology Paradigm Shift</h3>
                <p className="text-purple-700 text-lg leading-relaxed mb-4">
                  "Insurance isn't about death or disability - it's about love. It's the most selfless purchase anyone makes. When I learned to sell the emotion behind insurance, not the product, everything changed."
                </p>
                <p className="text-purple-700 text-lg font-semibold">
                  "I found Convertify's psychology training and finally understood why people REALLY buy insurance - and more importantly, why they don't."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-red-700 mb-4">❌ My Old Approach</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Led with death and disability stats</li>
                    <li>• Focused on premium comparisons</li>
                    <li>• Sold coverage amounts</li>
                    <li>• Made it about them dying</li>
                    <li>• Created fear without hope</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-green-700 mb-4">✅ The Psychology Approach</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Lead with love and legacy</li>
                    <li>• Focus on family protection</li>
                    <li>• Sell peace of mind</li>
                    <li>• Make it about living fully</li>
                    <li>• Create urgency through care</li>
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
              The <span className="text-green-600">Psychology Techniques</span> That Changed Everything
            </h2>

            <div className="space-y-8">
              <div className="bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">1. 💕 The "Love Letter" Approach</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">Instead of talking about death, I reframe it:</p>
                  <p className="text-purple-700 italic mb-4">"This isn't life insurance - it's a love letter to your family that says 'I made sure you'll be okay.' It's the last gift you'll ever give them, delivered exactly when they need it most. What message do you want to leave?"</p>
                  <p className="text-green-600 font-semibold">Result: 73% close rate on life insurance (was 18%).</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">2. 🏆 The "Dignity Preservation" Method</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">For disability and health coverage:</p>
                  <p className="text-blue-700 italic mb-4">"This isn't about getting sick - it's about maintaining your dignity if you do. It's the difference between your family visiting you in a private room versus... well, let's make sure you never have to find out. Your family deserves you at your best, even at your worst."</p>
                  <p className="text-green-600 font-semibold">Result: Average policy size increased 127%.</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-800 mb-4">3. 🎯 The "Already Insured" Retention System</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">Annual reviews that increase coverage:</p>
                  <p className="text-green-700 italic mb-4">"Great news - your life is worth more now than when we first met. New home, promotion, second child... your family depends on more income now. Let's make sure your coverage has kept up with your success. The good news is you already qualify..."</p>
                  <p className="text-green-600 font-semibold">Result: 94% retention + 67% get additional coverage annually.</p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">4. 🚨 The "Permission to Protect" Close</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">My most powerful closing technique:</p>
                  <p className="text-yellow-700 italic mb-4">"Look, I can't make you protect your family - only you can make that choice. But let me ask you this: If something happened tomorrow, would your spouse thank you for saving $100 a month, or curse you for leaving them unprotected? Give me permission to protect your family. They deserve it, don't they?"</p>
                  <p className="text-green-600 font-semibold">Result: Overcomes 89% of price objections.</p>
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
              My <span className="text-green-600">18-Month Journey</span> to the Top 5%
            </h2>

            <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-8 mb-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold">0-6mo</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">Foundation Phase</h4>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-gray-700 mb-2">• Implemented emotion-based selling</p>
                      <p className="text-gray-700 mb-2">• Retention jumped to 81%</p>
                      <p className="text-gray-700 mb-2">• Referrals started coming in</p>
                      <p className="text-green-600 font-semibold">Income: $147K (60% increase)</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold">6-12mo</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">Acceleration Phase</h4>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-gray-700 mb-2">• Mastered "Love Letter" approach</p>
                      <p className="text-gray-700 mb-2">• Average policy size doubled</p>
                      <p className="text-gray-700 mb-2">• 89% retention rate achieved</p>
                      <p className="text-green-600 font-semibold">Income: $234K (on track for MDRT)</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold">12-18mo</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">Domination Phase</h4>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-gray-700 mb-2">• Hit 94% retention rate</p>
                      <p className="text-gray-700 mb-2">• 78% of business from referrals</p>
                      <p className="text-gray-700 mb-2">• MDRT qualifier status achieved</p>
                      <p className="text-green-600 font-semibold">Income: $385K (top 5% nationally)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-purple-50 rounded-2xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">94%</div>
                <div className="text-gray-700">Client retention</div>
                <div className="text-sm text-gray-600">(was 67%)</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-2xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">$287</div>
                <div className="text-gray-700">Avg monthly premium</div>
                <div className="text-sm text-gray-600">(was $87)</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <div className="text-3xl font-bold text-green-600 mb-2">78%</div>
                <div className="text-gray-700">Referral business</div>
                <div className="text-sm text-gray-600">(was 0%)</div>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-2xl">
                <div className="text-3xl font-bold text-yellow-600 mb-2">Top 5%</div>
                <div className="text-gray-700">National ranking</div>
                <div className="text-sm text-gray-600">(was bottom 50%)</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 text-center">🏆 MDRT Court of the Table</h3>
              <p className="text-xl text-purple-100 text-center leading-relaxed">
                "Just got word - I qualified for Court of the Table (top 3% of MDRT). From almost quitting to the top 3% globally in 18 months. Psychology changed everything."
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
              The <span className="text-green-600">Real Victory</span>
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <blockquote className="text-2xl text-gray-700 italic text-center leading-relaxed mb-6">
                "I'm no longer the 'insurance guy' people avoid. I'm the trusted advisor families turn to for protecting what matters most. My clients thank me at claim time instead of resenting premiums."
              </blockquote>
              <p className="text-center text-gray-600 font-semibold">- David Thompson</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">💼 Professional Recognition</h3>
                <div className="space-y-3 text-blue-700">
                  <p>✓ MDRT Court of the Table qualifier</p>
                  <p>✓ Company Hall of Fame inductee</p>
                  <p>✓ Speaking at industry conferences</p>
                  <p>✓ Mentoring new agents</p>
                  <p>✓ Featured in industry publications</p>
                </div>
              </div>
              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-green-800 mb-4">👨‍👩‍👧‍👦 Personal Freedom</h3>
                <div className="space-y-3 text-green-700">
                  <p>✓ Work 35 hours/week (was 60)</p>
                  <p>✓ 6 weeks vacation per year</p>
                  <p>✓ Kids' college funds maxed</p>
                  <p>✓ Beachfront vacation home</p>
                  <p>✓ Giving back to community</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4 text-center">💡 My Message to Struggling Agents</h3>
              <p className="text-yellow-700 text-lg leading-relaxed mb-4">
                "Stop selling insurance. Start selling love, protection, and dignity. When you understand the psychology of why people really buy insurance - to protect the ones they love - everything changes."
              </p>
              <p className="text-yellow-700 text-lg leading-relaxed font-semibold text-center">
                "The product knowledge was never the problem. The psychology was."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Your Journey to the Top 5% Starts Now
          </h2>
          <p className="text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            David went from bottom 50% to top 5% nationally in 18 months. He didn't get smarter about insurance - he got smarter about people.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🛡️ Insurance Psychology Training Includes:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Love Letter selling method</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Dignity preservation framework</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>94% retention system</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Permission close technique</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Referral generation psychology</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Complete psychology training</span>
              </div>
            </div>
          </div>
          
          <Link href="/signup" className="inline-block bg-white text-purple-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white">
            🛡️ Transform Your Insurance Career - $47/month
          </Link>
          
          <p className="text-purple-200 mt-6 text-lg">
            Join thousands of agents selling protection with purpose, not pressure
          </p>
        </div>
      </section>
    </div>
  )
}