export const metadata = {title: 'From $60K to $180K in 8 Months: SaaS Sales Success Story',
  description: 'How Michael Chen used psychology-based sales techniques to triple his income and become the #1 sales rep in his SaaS company.',,
  alternates: {
    canonical: 'https://convertify.com/success-stories/saas',
  },
}

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function SaaSSalesSuccessPage() {
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
              <div className="inline-flex items-center px-6 py-3 bg-green-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">💻</span>
                SaaS Sales Success Story
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                From <span className="text-red-400">$60K</span> to
                <br />
                <span className="text-green-400">$180K</span> in 8 Months
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                How Michael Chen went from missing quota 3 quarters in a row to becoming the <strong className="text-white">#1 sales rep</strong> at his SaaS company using our <strong className="text-green-400">psychology-based sales system</strong>.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 max-w-3xl mx-auto mb-12 text-black">
                <h3 className="text-2xl font-bold mb-4">📊 Michael's Transformation</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-2">Before</div>
                    <div className="text-gray-700">$60K income</div>
                    <div className="text-gray-700">15% close rate</div>
                    <div className="text-gray-700">Bottom 30%</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl">→</span>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">After</div>
                    <div className="text-gray-700">$180K income</div>
                    <div className="text-gray-700">52% close rate</div>
                    <div className="text-gray-700">#1 in company</div>
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
              The <span className="text-red-600">Dark Days</span> of Missing Quota
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <div className="flex items-start space-x-6">
                <div className="bg-gray-200 rounded-full w-20 h-20 flex items-center justify-center text-3xl">👨‍💼</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Michael Chen</h3>
                  <p className="text-gray-600">SaaS Account Executive • San Francisco, CA</p>
                  <p className="text-green-600 font-semibold">Now: $180K+ • Top 1% Performer</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                "I was the guy everyone felt sorry for. Three years in SaaS sales, and I was still struggling to hit 70% of quota. I watched newer reps get promoted while I stayed stuck at the bottom."
              </p>

              <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
                <h3 className="text-2xl font-bold text-red-800 mb-6">🚨 My Breaking Point</h3>
                <div className="space-y-4 text-red-700">
                  <p>• Missed quota 3 quarters in a row (averaged 68%)</p>
                  <p>• Put on a Performance Improvement Plan</p>
                  <p>• Manager told me I had 90 days to turn it around or I'd be let go</p>
                  <p>• Wife was pregnant with our first child - couldn't afford to lose this job</p>
                  <p>• Demos went great, but I couldn't close to save my life</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700 my-8">
                "I knew the product inside and out. I could demo circles around anyone. But when it came time to close, prospects would always say 'Let me think about it' or 'The price is too high.' I was dying inside."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* The Discovery Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-blue-600">Discovery</span> That Changed Everything
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                "I was scrolling LinkedIn at 11 PM, feeling sorry for myself, when I saw a post about sales psychology. The guy was talking about how people don't buy logically - they buy emotionally and justify with logic."
              </p>

              <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">💡 The Lightbulb Moment</h3>
                <p className="text-blue-700 text-lg leading-relaxed">
                  "I realized I'd been doing it all wrong. I was trying to convince people with features and ROI calculations. But nobody gets excited about a spreadsheet. I needed to understand the psychology of why people actually buy."
                </p>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                "I found Convertify's sales psychology training that night. The promise was bold: 'Double your close rate in 30 days or your money back.' I figured I had nothing to lose - I was about to lose my job anyway."
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">🎯 What I Learned in Week 1</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Why my logical approach was killing deals</li>
                    <li>• The 12 psychological triggers that drive buying</li>
                    <li>• How to create urgency without being pushy</li>
                    <li>• The "Objection Aikido" method</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">🚀 What I Implemented</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Started using pattern interrupts in discovery</li>
                    <li>• Focused on pain points, not features</li>
                    <li>• Used social proof from similar companies</li>
                    <li>• Applied the urgency creation framework</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Results Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-green-600">Shocking Results</span>
            </h2>

            <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-green-800 mb-6">📈 My 8-Month Transformation</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-green-700 mb-4">Month 1: First Breakthrough</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-xl">
                      <p className="font-bold text-green-600 mb-2">What Happened:</p>
                      <p className="text-gray-700">Closed 6 deals (previous average: 2)</p>
                      <p className="text-gray-700">Hit 127% of quota for the first time ever</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="font-bold text-green-600 mb-2">Key Change:</p>
                      <p className="text-gray-700">Started using psychological triggers in every call</p>
                      <p className="text-gray-700">Stopped discounting - used value stacking instead</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-green-700 mb-4">Month 3: Momentum Building</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-xl">
                      <p className="font-bold text-green-600 mb-2">What Happened:</p>
                      <p className="text-gray-700">Promoted off PIP - manager shocked</p>
                      <p className="text-gray-700">Close rate increased from 15% to 38%</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="font-bold text-green-600 mb-2">Key Change:</p>
                      <p className="text-gray-700">Mastered the "Objection Aikido" method</p>
                      <p className="text-gray-700">Price objections turned into closing opportunities</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-green-700 mb-4">Month 6: Top Performer</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-xl">
                      <p className="font-bold text-green-600 mb-2">What Happened:</p>
                      <p className="text-gray-700">#3 in company (out of 47 reps)</p>
                      <p className="text-gray-700">Average deal size increased 43%</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="font-bold text-green-600 mb-2">Key Change:</p>
                      <p className="text-gray-700">Implemented urgency creation in every deal</p>
                      <p className="text-gray-700">Prospects started closing themselves</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-green-700 mb-4">Month 8: #1 in Company</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-xl">
                      <p className="font-bold text-green-600 mb-2">What Happened:</p>
                      <p className="text-gray-700">Hit #1 spot - 218% of quota</p>
                      <p className="text-gray-700">Income: $180K+ (was $60K)</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="font-bold text-green-600 mb-2">Recognition:</p>
                      <p className="text-gray-700">President's Club winner</p>
                      <p className="text-gray-700">Asked to train other reps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">💰</div>
                <div className="text-3xl font-bold text-green-600 mb-2">3x</div>
                <div className="text-gray-700">Income increase</div>
                <div className="text-sm text-gray-600 mt-2">$60K → $180K</div>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">📈</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">52%</div>
                <div className="text-gray-700">Close rate</div>
                <div className="text-sm text-gray-600 mt-2">Was 15%</div>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🏆</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">#1</div>
                <div className="text-gray-700">Company ranking</div>
                <div className="text-sm text-gray-600 mt-2">Out of 47 reps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Specific Techniques Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-purple-600">Exact Techniques</span> I Used
            </h2>

            <div className="space-y-8">
              <div className="bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">1. 🎯 The SaaS Pain Amplification Method</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">Instead of talking about features, I started every demo with:</p>
                  <p className="text-purple-700 italic mb-4">"Before I show you anything, help me understand - what's the real cost of not solving this problem? I mean, if you do nothing and this continues for another year, what happens?"</p>
                  <p className="text-green-600 font-semibold">Result: Prospects sold themselves on the urgency before I even showed the product.</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">2. 💰 The Price Anchoring Technique</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">When presenting pricing, I changed from showing our plans to:</p>
                  <p className="text-blue-700 italic mb-4">"Most companies your size invest between $200-300K building this internally, plus ongoing maintenance. Our enterprise solution is $120K/year, but I think our business plan at $60K would actually be perfect for you..."</p>
                  <p className="text-green-600 font-semibold">Result: $60K suddenly seemed like a bargain. Average deal size increased 43%.</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-800 mb-4">3. 🚀 The Competitor Loss Close</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">My secret weapon for creating urgency:</p>
                  <p className="text-green-700 italic mb-4">"I should mention - [Competitor] just started using this last quarter and they're already seeing 40% improvement. Every month you wait is another month they're pulling ahead. When do you want to catch up - this quarter or next?"</p>
                  <p className="text-green-600 font-semibold">Result: Turned "I need to think about it" into "How fast can we get started?"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Life Change Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              How My <span className="text-green-600">Life Changed</span>
            </h2>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white mb-12">
              <h3 className="text-3xl font-bold mb-6 text-center">🎯 Beyond the Numbers</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-green-100">Personal Life</h4>
                  <p>✓ Bought our first home (20% down)</p>
                  <p>✓ Wife able to take extended maternity leave</p>
                  <p>✓ Started college fund for our daughter</p>
                  <p>✓ No more financial stress</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-green-100">Professional Life</h4>
                  <p>✓ Promoted to Senior AE</p>
                  <p>✓ Speaking at company sales kickoff</p>
                  <p>✓ Mentoring 5 junior reps</p>
                  <p>✓ Recruited by 3 competitors (said no)</p>
                </div>
              </div>
            </div>

            <blockquote className="text-2xl text-gray-700 italic text-center leading-relaxed mb-12 max-w-3xl mx-auto">
              "The craziest part? I work LESS now than when I was struggling. When you understand psychology, you don't have to push - people pull themselves toward the sale."
            </blockquote>

            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4 text-center">🎯 My Advice to Struggling Reps</h3>
              <p className="text-yellow-700 text-lg leading-relaxed text-center">
                "Stop trying harder with the same broken approach. I wasted 3 years thinking I just needed to 'hustle more.' The psychology training gave me a completely new operating system for sales. It's not about working harder - it's about understanding how people actually make decisions."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Michael went from the bottom 30% to #1 in 8 months. He's not special - he just learned the psychology that top performers use every day.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">💰 The Same Training Michael Used:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Complete psychology system</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>SaaS-specific techniques</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Price anchoring mastery</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Urgency creation framework</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Weekly coaching calls</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
          
          <Link href="/signup" className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white">
            🚀 Start Your Transformation - $47/month
          </Link>
          
          <p className="text-blue-200 mt-6 text-lg">
            Join 25,000+ sales professionals writing their own success stories
          </p>
        </div>
      </section>
    </div>
  )
}