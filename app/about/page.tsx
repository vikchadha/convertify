export const metadata = {
  title: 'About | The Sales Psychology Behind 347% Close Rate Increases',
  description: 'Discover how former struggling salesperson became sales psychology expert, helping 25,000+ sales professionals earn $127K+ more per year.',
}

import React from 'react'
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> LIMITED TIME: 76% OFF Sales Training - Only $47/month! 
        <Link href="/signup" className="underline ml-2 font-bold hover:text-red-200">Claim Now →</Link>
      </div>

      {/* Page header */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-green-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">📈</span>
                From $23K to $350K+ in Sales Revenue
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-8">
                How a <span className="text-red-400">Failed Salesperson</span>
                <br />
                Cracked the <span className="text-green-400">Psychology Code</span>
                <br />
                That <span className="text-yellow-400">10x'd Sales Results</span>
              </h1>
              
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                The shocking true story of how I went from <strong className="text-red-400">missing quota for 3 straight years</strong> to discovering the psychological triggers that force prospects to say yes — and how I've used these secrets to help <strong className="text-green-400">25,000+ salespeople</strong> earn an average of <strong className="text-yellow-400">$127K more per year</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Link href="/signup" className="btn text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl transform hover:scale-105 transition-all duration-200 text-xl py-6 px-12 min-w-[300px] border-4 border-green-400">
                  🚀 Get These Secrets for $47/month
                </Link>
              </div>
              
              <p className="text-green-300 text-lg">
                30-day guarantee • Already helped 25,000+ sales professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Dark Days Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-red-600">Brutal Truth</span> About My Early Sales Career
            </h2>
            
            <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
              <h3 className="text-2xl font-bold text-red-800 mb-4">❌ The Humiliating Stats</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">3 Years</div>
                  <div className="text-red-700">Missing quota consecutively</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">$23K</div>
                  <div className="text-red-700">Total annual income (pathetic)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">2%</div>
                  <div className="text-red-700">Close rate on cold calls</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">89%</div>
                  <div className="text-red-700">Of prospects who said "I need to think about it"</div>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                I was the guy everyone felt sorry for. You know the type — always enthusiastic, always "almost" closing deals, but somehow never quite making it. I'd present to prospects, they'd nod along, seem interested, and then... nothing.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                <strong>"Let me think about it."</strong><br/>
                <strong>"I need to discuss this with my team."</strong><br/>
                <strong>"Can you send me some information?"</strong>
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Sound familiar? I was getting these responses 89% of the time. Meanwhile, I watched other reps — some who seemed less knowledgeable than me — consistently hit quota and get promoted.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-300 rounded-2xl p-8 my-12">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">💡 The Moment Everything Changed</h4>
                <p className="text-lg text-gray-700 italic">
                  "It wasn't until I accidentally discovered what I now call 'The Psychology Shift' that everything changed. One simple reframe in how I presented price turned a $15K deal into a $45K deal... and I realized I had been selling completely wrong."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Breakthrough Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-green-600">Psychological Breakthrough</span> That Changed Everything
            </h2>
            
            <div className="bg-green-50 border-l-8 border-green-500 p-8 rounded-r-2xl mb-12">
              <h3 className="text-2xl font-bold text-green-800 mb-6">✅ The Transformation</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">347%</div>
                    <div className="text-green-700">Increase in close rate (first month)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">$350K+</div>
                    <div className="text-green-700">Annual income within 12 months</div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
                    <div className="text-green-700">Of prospects who now say "How do we get started?"</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">#1</div>
                    <div className="text-green-700">Sales rep in company for 3 years running</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-blue-50 rounded-2xl">
                <div className="text-5xl mb-4">🧠</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Psychology Over Product</h4>
                <p className="text-gray-700">I discovered that people don't buy products — they buy emotions, status, and solutions to their deepest fears.</p>
              </div>
              <div className="text-center p-8 bg-purple-50 rounded-2xl">
                <div className="text-5xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Urgency Science</h4>
                <p className="text-gray-700">I learned the exact psychological triggers that make prospects feel compelled to act NOW instead of "thinking about it."</p>
              </div>
              <div className="text-center p-8 bg-yellow-50 rounded-2xl">
                <div className="text-5xl mb-4">💰</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Value Perception</h4>
                <p className="text-gray-700">I mastered the art of making $50K feel like a bargain while competitors struggled to justify $5K.</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">🎯 The Mission</h3>
                <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                  After transforming my own career, I realized I had a responsibility to share these psychological secrets. That's why I created Convertify — to help struggling salespeople like I was discover the psychology that converts prospects into paying customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-gray-900">
              What Happens When You Apply These <span className="text-green-600">Psychology Secrets</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">25,000+</div>
                <div className="text-gray-600 text-lg mb-4">Sales Professionals Trained</div>
                <div className="text-sm text-gray-500">Across 47 industries worldwide</div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">$127K+</div>
                <div className="text-gray-600 text-lg mb-4">Average Income Increase</div>
                <div className="text-sm text-gray-500">In the first 12 months</div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">347%</div>
                <div className="text-gray-600 text-lg mb-4">Average Close Rate Increase</div>
                <div className="text-sm text-gray-500">Within 30 days of training</div>
              </div>
            </div>
            
            <div className="bg-blue-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">🎯 My Personal Guarantee to You</h3>
              <p className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                I've spent 7 years perfecting these psychological techniques. I've tested them with thousands of salespeople across dozens of industries. I'm so confident they'll work for you that I offer a simple promise:
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <h4 className="text-2xl font-bold text-yellow-300 mb-4">Double Your Close Rate in 30 Days</h4>
                <p className="text-lg text-blue-100">
                  Or get 100% of your money back. No questions asked. No forms to fill out. Just email me personally and I'll refund every penny.
                </p>
              </div>
              <div className="text-center">
                <Link href="/signup" className="inline-block bg-green-600 hover:bg-green-700 text-white font-black text-2xl py-6 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                  🚀 Get These Secrets for Just $47/month
                </Link>
                <div className="mt-4 text-blue-200">
                  <p>30-day guarantee • Cancel anytime • Join 25,000+ success stories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 md:py-24 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 text-6xl animate-pulse">💰</div>
          <div className="absolute top-40 right-32 text-4xl animate-pulse delay-500">📈</div>
          <div className="absolute bottom-32 left-1/4 text-5xl animate-pulse delay-1000">🎯</div>
          <div className="absolute bottom-20 right-20 text-3xl animate-pulse delay-1500">🔥</div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative">
          <div className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black rounded-full text-lg font-black mb-8 shadow-lg animate-pulse">
            <span className="mr-2">⚠️</span>
            FINAL WARNING: 76% OFF Expires Tonight at Midnight
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Don't Spend Another Year
            <br />
            <span className="text-red-300">Struggling in Sales</span>
          </h2>
          
          <p className="text-2xl text-red-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            You've read my story. You've seen the results. You know these psychological techniques work. The only question is: <strong className="text-white">Will you take action or remain stuck?</strong>
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">🔥 What You Get Today for $47/month:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Complete psychology training system</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>50+ proven objection scripts</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Weekly live coaching calls</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Private community access</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Personal access to me</span>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <Link href="/signup" className="inline-block bg-white text-red-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white">
              🚀 YES! I Want to 10x My Sales Results - $47/month
            </Link>
          </div>
          
          <p className="text-red-200 text-lg">
            Join 25,000+ sales professionals already earning $100K+ more per year
          </p>
        </div>
      </section>
    </>
  )
}

