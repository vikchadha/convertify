export const metadata = {
  title: '392% Commission Increase: Real Estate Agent Success Story',
  description: 'How Sarah Rodriguez used sales psychology to go from 6 homes/year to 47 homes/year and earn $420K in commissions',
  
  alternates: {
    canonical: 'https://convertify.com/success-stories/real-estate',
  },
}

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function RealEstateSuccessPage() {
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
              <div className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">🏠</span>
                Real Estate Success Story
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                From <span className="text-red-400">6 Sales</span> to
                <br />
                <span className="text-green-400">47 Sales</span> Per Year
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                How Sarah Rodriguez transformed from a struggling agent barely paying bills to a <strong className="text-white">luxury market specialist</strong> earning <strong className="text-green-400">$420K in commissions</strong> using psychology-based selling.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 max-w-3xl mx-auto mb-12 text-black">
                <h3 className="text-2xl font-bold mb-4">🏆 Sarah's Transformation</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-2">Before</div>
                    <div className="text-gray-700">6 homes/year</div>
                    <div className="text-gray-700">$85K income</div>
                    <div className="text-gray-700">$380K avg price</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl">→</span>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">After</div>
                    <div className="text-gray-700">47 homes/year</div>
                    <div className="text-gray-700">$420K income</div>
                    <div className="text-gray-700">$780K avg price</div>
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
              The <span className="text-red-600">Harsh Reality</span> of Real Estate
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <div className="flex items-start space-x-6">
                <div className="bg-gray-200 rounded-full w-20 h-20 flex items-center justify-center text-3xl">👩‍💼</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah Rodriguez</h3>
                  <p className="text-gray-600">Luxury Real Estate Specialist • Miami, FL</p>
                  <p className="text-green-600 font-semibold">Now: $420K+ • Top 3% in Market</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                "I was three years into real estate and ready to quit. Everyone said it would get easier, but I was working 70-hour weeks and barely closing half a deal per month."
              </p>

              <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
                <h3 className="text-2xl font-bold text-red-800 mb-6">💔 My Rock Bottom</h3>
                <div className="space-y-4 text-red-700">
                  <p>• Spent $15K on Zillow leads that went nowhere</p>
                  <p>• Lost 3 listings to more experienced agents</p>
                  <p>• Working open houses every weekend for free</p>
                  <p>• Made $85K gross (before expenses) in my third year</p>
                  <p>• Husband suggested I get a "real job" with steady income</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700 my-8">
                "The worst part? I'd show 20-30 homes, and buyers would say 'We need to think about it' then ghost me. Or worse - buy with the listing agent to 'save money.' I felt like a free Uber driver for house tours."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* The Breakthrough Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-blue-600">Game-Changing</span> Realization
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                "I was at a broker event when I overheard a top producer say something that stopped me cold: 'I don't sell houses. I sell the dream of what life will be like in that house.' That's when it hit me - I'd been doing real estate completely wrong."
              </p>

              <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">💡 The Psychology Shift</h3>
                <p className="text-blue-700 text-lg leading-relaxed mb-4">
                  "I realized people don't buy houses - they buy emotions. Security. Status. Dreams of their kids playing in the yard. I was showing features when I should have been triggering feelings."
                </p>
                <p className="text-blue-700 text-lg font-semibold">
                  "I found Convertify's sales psychology training and everything clicked. Real estate is 90% psychology, 10% property knowledge."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">❌ What I Was Doing Wrong</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Focusing on square footage and features</li>
                    <li>• Showing every home they wanted to see</li>
                    <li>• Being a "helpful assistant" not an advisor</li>
                    <li>• Competing on commission rates</li>
                    <li>• Hoping they'd eventually decide</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">✅ What Psychology Taught Me</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sell the lifestyle and emotional outcome</li>
                    <li>• Create scarcity and urgency</li>
                    <li>• Position myself as the expert</li>
                    <li>• Use price anchoring to my advantage</li>
                    <li>• Make them fear losing "the one"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Techniques Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-purple-600">Psychology Techniques</span> That 10x'd My Business
            </h2>

            <div className="space-y-8">
              <div className="bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">1. 🏠 The "Future Pacing" Showing Method</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">Instead of listing features, I paint emotional pictures:</p>
                  <p className="text-purple-700 italic mb-4">"Imagine Christmas morning... your kids running down these stairs... the smell of coffee from this kitchen... your parents visiting and staying in this guest suite... This isn't just a house - it's where your next chapter begins."</p>
                  <p className="text-green-600 font-semibold">Result: Buyers make emotional connections and convince themselves.</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">2. 🎯 The "Market Authority" Positioning</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">I stopped being available for every showing and created exclusivity:</p>
                  <p className="text-blue-700 italic mb-4">"I only work with 5 serious buyers at a time to ensure you get my full attention. Before we look at homes, let's make sure we're a good fit. Tell me - what's really driving your move?"</p>
                  <p className="text-green-600 font-semibold">Result: Positioned as exclusive expert, not desperate agent. Clients valued my time.</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-800 mb-4">3. 💰 The "Competing Buyer" Urgency Method</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">Creating urgency without lying:</p>
                  <p className="text-green-700 italic mb-4">"Just so you know, I showed this home Tuesday to another couple. They're getting pre-approved this week. If you love it, we need to move fast. In this market, the perfect home doesn't wait for perfect timing."</p>
                  <p className="text-green-600 font-semibold">Result: Decisions made in days, not months. No more "think about it."</p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">4. 🎨 The "Lifestyle Upgrade" Listing Method</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">For listings, I sell the dream of their next chapter:</p>
                  <p className="text-yellow-700 italic mb-4">"I don't just sell your house - I help you transition to your dream life. Where do you see yourself next? Beach? Mountains? Closer to grandkids? Let's price this strategically to get you there faster."</p>
                  <p className="text-green-600 font-semibold">Result: Won luxury listings at full commission. Sellers saw value beyond just listing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Results Timeline */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              My <span className="text-green-600">12-Month Transformation</span>
            </h2>

            <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-8 mb-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">Q1</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">First Quarter: Foundation</h4>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-gray-700 mb-2">• Implemented psychology-based showing process</p>
                      <p className="text-gray-700 mb-2">• Closed 8 deals (vs 1-2 previous quarters)</p>
                      <p className="text-gray-700 mb-2">• Average sale price increased 20%</p>
                      <p className="text-green-600 font-semibold">Income: $67K (previous full year: $85K)</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">Q2</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">Second Quarter: Momentum</h4>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-gray-700 mb-2">• Started targeting luxury market with authority positioning</p>
                      <p className="text-gray-700 mb-2">• Closed 11 deals including first $1M+ sale</p>
                      <p className="text-gray-700 mb-2">• Referrals started flowing from happy clients</p>
                      <p className="text-green-600 font-semibold">Income: $94K (on track for $300K+ year)</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">Q3</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">Third Quarter: Breakthrough</h4>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-gray-700 mb-2">• Became known as luxury specialist using scarcity</p>
                      <p className="text-gray-700 mb-2">• Closed 13 deals, average price $680K</p>
                      <p className="text-gray-700 mb-2">• Hired assistant to handle paperwork</p>
                      <p className="text-green-600 font-semibold">Income: $118K (exceeding annual goal)</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">Q4</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">Fourth Quarter: Domination</h4>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-gray-700 mb-2">• Closed 15 deals with psychology-based urgency</p>
                      <p className="text-gray-700 mb-2">• Average sale price hit $780K</p>
                      <p className="text-gray-700 mb-2">• Named top 3% agent in market</p>
                      <p className="text-green-600 font-semibold">Income: $141K (Year total: $420K)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-3xl font-bold text-green-600 mb-2">47</div>
                <div className="text-gray-700">Homes sold</div>
                <div className="text-sm text-gray-600">(was 6)</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">$780K</div>
                <div className="text-gray-700">Avg sale price</div>
                <div className="text-sm text-gray-600">(was $380K)</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">$420K</div>
                <div className="text-gray-700">Annual income</div>
                <div className="text-sm text-gray-600">(was $85K)</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-3xl font-bold text-red-600 mb-2">392%</div>
                <div className="text-gray-700">Income increase</div>
                <div className="text-sm text-gray-600">(life-changing)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Life Impact Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              What <span className="text-green-600">Success</span> Really Looks Like
            </h2>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
              <h3 className="text-3xl font-bold mb-6 text-center">🏆 The Real Transformation</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-blue-100">Work/Life Balance</h4>
                  <p>✓ Work 30 hours/week (was 70)</p>
                  <p>✓ No more weekend open houses</p>
                  <p>✓ Take real vacations (just got back from Italy)</p>
                  <p>✓ Choose clients, don't chase them</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-blue-100">Financial Freedom</h4>
                  <p>✓ Paid off all credit card debt</p>
                  <p>✓ Bought investment property</p>
                  <p>✓ Kids' college funds fully funded</p>
                  <p>✓ Building dream home on the water</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <blockquote className="text-2xl text-gray-700 italic text-center leading-relaxed">
                "The psychology training didn't just change my business - it transformed how I see myself. I'm not a salesperson begging for business. I'm a luxury real estate advisor who helps clients achieve their dreams. That mindset shift changed everything."
              </blockquote>
              <p className="text-center text-gray-600 mt-4 font-semibold">- Sarah Rodriguez</p>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4 text-center">💡 My Advice to Struggling Agents</h3>
              <p className="text-yellow-700 text-lg leading-relaxed mb-4">
                "Stop trying to compete on price or be everything to everyone. The moment I understood the psychology of home buying - that it's about emotion, dreams, and identity - everything changed."
              </p>
              <p className="text-yellow-700 text-lg leading-relaxed font-semibold text-center">
                "Learn psychology first. The commission checks will follow."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Your 392% Increase Starts Today
          </h2>
          <p className="text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Sarah went from 6 sales to 47 sales per year. She's not special - she just learned the psychology that top real estate professionals use to dominate their markets.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🏠 Real Estate Psychology Training Includes:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Future pacing showing techniques</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Luxury market positioning</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Urgency creation methods</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Authority building system</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Emotional selling frameworks</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Complete psychology training</span>
              </div>
            </div>
          </div>
          
          <Link href="/signup" className="inline-block bg-white text-green-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white">
            🏠 Transform Your Real Estate Career - $47/month
          </Link>
          
          <p className="text-green-200 mt-6 text-lg">
            Join thousands of agents selling homes with psychology, not desperation
          </p>
        </div>
      </section>
    </div>
  )
}