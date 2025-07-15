import React from 'react'
import Link from 'next/link';

export const metadata = {
  title: 'Pricing | Convertify Sales Training - 76% OFF Limited Time',
  description: 'Transform your sales career for only $47/month (normally $197). Join 25,000+ sales professionals earning $127K+ more per year. 30-day guarantee.',
  alternates: {
    canonical: 'https://convertify.com/pricing',
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-4">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-lg font-bold">
            <span className="animate-pulse">🔥</span> URGENT: This 76% OFF offer expires at midnight tonight! 
            <span className="ml-2 text-red-200">Don't miss out on the biggest discount we've ever offered.</span>
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Stop <span className="text-red-600">Losing Money</span> Every Day
              <br />
              You Don't Have These Skills
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Every month you delay is another <strong>$10,000+ in lost commission</strong>. 
              The choice is simple: invest $47/month in yourself or watch competitors steal your deals.
            </p>
            
            {/* ROI Calculator */}
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-8 max-w-3xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 ROI Calculator: What You're Losing</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-600">-$127K</div>
                  <div className="text-sm text-gray-700">Average annual income loss without training</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">+$127K</div>
                  <div className="text-sm text-gray-700">Average income increase with training</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">270x</div>
                  <div className="text-sm text-gray-700">Return on investment in year 1</div>
                </div>
              </div>
            </div>
          </div>

          {/* Single Pricing Plan - Elite Sales Training */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-12 text-white shadow-2xl border-4 border-green-400">
              
              {/* Popular badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg animate-pulse">
                  🔥 76% OFF - LIMITED TIME
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-4xl font-black text-white mb-4">Elite Sales Mastery Program</h3>
                <p className="text-2xl text-green-100 mb-6">
                  Everything you need to become a <strong>top 1% performer</strong>
                </p>
                
                {/* Pricing display */}
                <div className="flex items-center justify-center space-x-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl line-through text-red-300 mb-1">$197/month</div>
                    <div className="text-6xl font-black text-white">$47</div>
                    <div className="text-xl text-green-200">/month</div>
                  </div>
                  <div className="text-4xl">→</div>
                  <div className="text-center">
                    <div className="text-lg text-green-200 mb-1">Average Results:</div>
                    <div className="text-4xl font-bold text-yellow-300">+$127K</div>
                    <div className="text-lg text-green-200">per year</div>
                  </div>
                </div>
              </div>

              {/* What's included */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-white mb-4">🎯 Core Training Modules</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-green-300 text-xl">✓</span>
                      <span className="text-white"><strong>Objection Aikido</strong> - Turn resistance into urgency</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-300 text-xl">✓</span>
                      <span className="text-white"><strong>Cold Calling Mastery</strong> - 37% connection rate</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-300 text-xl">✓</span>
                      <span className="text-white"><strong>Value Stacking</strong> - Justify premium pricing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-300 text-xl">✓</span>
                      <span className="text-white"><strong>Urgency Creation</strong> - Force immediate decisions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-300 text-xl">✓</span>
                      <span className="text-white"><strong>Authority Positioning</strong> - Become the expert</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-white mb-4">🚀 Premium Resources</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-green-300 text-xl">✓</span>
                      <span className="text-white"><strong>50+ Objection Scripts</strong> ($97 value)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-300 text-xl">✓</span>
                      <span className="text-white"><strong>Cold Email Templates</strong> ($147 value)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-300 text-xl">✓</span>
                      <span className="text-white"><strong>Negotiation Playbook</strong> ($197 value)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-300 text-xl">✓</span>
                      <span className="text-white"><strong>Weekly Live Coaching</strong> ($497 value)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-300 text-xl">✓</span>
                      <span className="text-white"><strong>Private Community</strong> (Priceless)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total value */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-center">
                <h4 className="text-2xl font-bold text-white mb-2">💎 Total Value: $2,364/month</h4>
                <p className="text-green-200 text-lg">
                  You pay only <strong className="text-yellow-300">$47/month</strong> - that's a 95% discount
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Link href="/signup" className="inline-block bg-white text-green-700 hover:bg-gray-100 font-black text-2xl py-6 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-4 border-white">
                  🚀 YES! Transform My Sales Career - $47/month
                </Link>
                <div className="mt-4 text-green-200">
                  <p>30-day money-back guarantee • Cancel anytime • Join 25,000+ top performers</p>
                </div>
              </div>

            </div>
          </div>

          {/* Testimonials Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-16">
              What Our <span className="text-green-600">Top Performers</span> Are Saying
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "I went from missing quota every quarter to becoming the #1 rep in our region. The objection handling alone increased my close rate by 340%."
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-bold text-gray-900">Michael Chen</div>
                    <div className="text-green-600 text-sm">SaaS Sales Rep • $340K increase</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "These cold calling techniques are insane. I'm now booking 4x more qualified meetings and my pipeline has never been stronger."
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-bold text-gray-900">Sarah Rodriguez</div>
                    <div className="text-green-600 text-sm">B2B Sales • 392% pipeline increase</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Finally hit President's Club after 3 years of struggling. The value stacking framework alone is worth 10x the price."
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-bold text-gray-900">David Thompson</div>
                    <div className="text-green-600 text-sm">Insurance Sales • Top 5% nationally</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-2xl mx-auto pt-16 pb-12 md:pt-20 md:pb-20">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">
              <span className="text-red-600">Objections?</span> We've Heard Them All
            </h2>
            <div className="space-y-8">
              {/* FAQ Item 1 */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">"What if I'm already a decent salesperson?"</h4>
                <p className="text-gray-700 leading-relaxed">
                  Perfect! Our training takes <strong>good</strong> salespeople and makes them <strong>elite</strong>. Even a 20% improvement means an extra $50K+ per year. That's over 100x your investment back.
                </p>
              </div>
              {/* FAQ Item 2 */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">"What if this doesn't work for my industry?"</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our techniques work across ALL industries - SaaS, real estate, insurance, manufacturing, you name it. Psychology is universal. Plus, you get a <strong>30-day money-back guarantee</strong>.
                </p>
              </div>
              {/* FAQ Item 3 */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">"I don't have time for more training."</h4>
                <p className="text-gray-700 leading-relaxed">
                  Each module is 15-20 minutes. You can complete the entire program in just <strong>2 hours per week</strong>. Compare that to the 40+ hours you'll save by closing deals faster.
                </p>
              </div>
               {/* FAQ Item 4 */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">"What if I can't afford $47/month right now?"</h4>
                <p className="text-gray-700 leading-relaxed">
                  If $47/month is a stretch, you NEED this training more than anyone. One additional closed deal will pay for an entire year. Can you really afford NOT to invest in yourself?
                </p>
              </div>
              {/* FAQ Item 5 */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">"How is this different from other sales training?"</h4>
                <p className="text-gray-700 leading-relaxed">
                  Most training teaches <em>what</em> to say. We teach the <strong>psychology</strong> of <em>why</em> people buy. You'll understand the mental triggers that force prospects to say yes, even to higher prices.
                </p>
              </div>
              {/* FAQ Item 6 */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">"What's your guarantee?"</h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Double your close rate in 30 days or get 100% of your money back.</strong> No questions asked. We're so confident in our methods that we're willing to put our money where our mouth is.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="max-w-4xl mx-auto text-center pt-16 pb-12 md:pt-20 md:pb-16 border-t-4 border-red-500">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-repeat" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
              </div>
              
              {/* Warning badge */}
              <div className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black rounded-full text-lg font-black mb-6 shadow-lg animate-pulse">
                <span className="mr-2">⚠️</span>
                FINAL WARNING: Offer Expires Tonight at Midnight
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight relative">
                Don't Let Another Month Go By
                <br />
                <span className="text-red-300">Watching Others Succeed</span>
              </h2>
              
              <p className="text-2xl text-red-100 mb-8 leading-relaxed max-w-3xl mx-auto relative">
                While you're "thinking about it," your competitors are implementing these exact strategies and 
                <strong className="text-white">stealing your deals</strong>.
              </p>

              {/* Urgency comparison */}
              <div className="grid md:grid-cols-2 gap-8 mb-10 max-w-4xl mx-auto">
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-red-400/30">
                  <h3 className="text-2xl font-bold text-white mb-4">❌ Keep Doing What You're Doing</h3>
                  <ul className="space-y-3 text-red-200">
                    <li>• Miss quota again this quarter</li>
                    <li>• Watch competitors get promoted</li>
                    <li>• Lose deals to inferior products</li>
                    <li>• Earn the same mediocre income</li>
                    <li>• Stay frustrated and stressed</li>
                  </ul>
                </div>
                <div className="bg-green-600/30 backdrop-blur-sm rounded-2xl p-6 border border-green-400/50">
                  <h3 className="text-2xl font-bold text-white mb-4">✅ Transform Your Career Today</h3>
                  <ul className="space-y-3 text-green-200">
                    <li>• Double your close rate in 30 days</li>
                    <li>• Become the top performer</li>
                    <li>• Command premium prices</li>
                    <li>• Earn $100K+ more per year</li>
                    <li>• Feel confident and unstoppable</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <Link href="/signup" className="inline-block bg-white text-red-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white">
                  🚀 YES! I Want to 10x My Sales Results - $47/month
                </Link>
              </div>
              
              <div className="text-red-200 text-lg">
                <p className="mb-2">🛡️ <strong className="text-white">30-day money-back guarantee</strong> • Cancel anytime</p>
                <p>Join 25,000+ sales professionals already earning $100K+ more per year</p>
              </div>
              
              {/* Countdown timer */}
              <div className="mt-8 bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-red-500">
                <div className="text-white/90 text-lg mb-3">THIS OFFER EXPIRES IN:</div>
                <div className="flex justify-center space-x-4 text-white font-bold">
                  <div className="bg-red-800/80 rounded-xl px-6 py-4 border border-red-500">
                    <div className="text-4xl">07</div>
                    <div className="text-sm">HOURS</div>
                  </div>
                  <div className="bg-red-800/80 rounded-xl px-6 py-4 border border-red-500">
                    <div className="text-4xl">23</div>
                    <div className="text-sm">MINUTES</div>
                  </div>
                  <div className="bg-red-800/80 rounded-xl px-6 py-4 border border-red-500">
                    <div className="text-4xl">14</div>
                    <div className="text-sm">SECONDS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
