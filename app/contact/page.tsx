export const metadata = {
  title: 'Contact | Get Personal Access to Sales Psychology Expert',
  description: 'Get direct access to the sales psychology expert who helped 25,000+ salespeople earn $127K+ more per year. Limited availability.',
  alternates: {
    canonical: 'https://convertify.com/contact',
  },
}

import React from 'react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="h1 font-playfair-display text-gray-900 dark:text-white mb-4">
                Get in Touch – We're Here to Help!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Whether you have a question about features, pricing, need a demo, require support, or want to discuss partnerships, our team is ready to answer all your questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Quick Action CTA */}
          <div className="text-center mb-16">
            <h2 className="h2 font-playfair-display text-gray-900 mb-8">
              Want to <span className="text-green-600">Skip the Line?</span>
            </h2>
            <p className="text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              The fastest way to get access is to secure your spot in the training program right now.
            </p>
            <Link href="/signup" className="inline-block bg-green-600 hover:bg-green-700 text-white font-black text-2xl py-6 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
              🚀 Secure My Spot - $47/month (76% OFF)
            </Link>
            <p className="text-green-600 mt-4 text-lg">✅ Instant access • 30-day guarantee • Join 25,000+ success stories</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Contact Options */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h3 className="h3 font-playfair-display text-gray-900 mb-4">📧 For General Questions</h3>
                <p className="text-gray-700 mb-4">
                  Have questions about the training, my story, or want to hear more success stories?
                </p>
                <a href="mailto:support@convertify.ai" className="text-green-600 hover:text-green-700 font-semibold text-lg">
                  support@convertify.ai
                </a>
                <div className="mt-4 text-sm text-gray-600">
                  Response time: Within 4 hours (usually much faster)
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
                <h3 className="h3 font-playfair-display text-gray-900 mb-4">🤝 For Corporate Training</h3>
                <p className="text-gray-700 mb-4">
                  Want to train your entire sales team? I offer exclusive group rates for companies with 10+ salespeople.
                </p>
                <a href="mailto:corporate@convertify.ai" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                  corporate@convertify.ai
                </a>
                <div className="mt-4 text-sm text-gray-600">
                  Includes: Custom curriculum, live workshops, ongoing support
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
                <h3 className="h3 font-playfair-display text-gray-900 mb-4">📞 Need to Talk to a Human?</h3>
                <p className="text-gray-700 mb-4">
                  Sometimes you just need to talk it through. I get it. My team offers 15-minute consultation calls for serious prospects.
                </p>
                <Link href="/consultation" className="text-purple-600 hover:text-purple-700 font-semibold text-lg">
                  Book Free 15-Min Call →
                </Link>
                <div className="mt-4 text-sm text-gray-600">
                  Available: Monday-Friday, 9am-5pm PST
                </div>
              </div>
            </div>

            {/* Success Stories Sidebar */}
            <div className="space-y-6">
              <div className="bg-green-600 text-white p-8 rounded-2xl">
                <h3 className="h3 font-playfair-display mb-6">🎯 What Students Are Saying</h3>
                
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                    <p className="text-green-100 italic mb-3">
                      "I was skeptical about another sales course, but this is different. The psychology techniques work instantly."
                    </p>
                    <div className="text-green-200 text-sm">
                      <strong>Marcus Johnson</strong> • Real Estate • +$180K in 6 months
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                    <p className="text-green-100 italic mb-3">
                      "Finally hit President's Club after 3 years of struggling. These techniques are game-changers."
                    </p>
                    <div className="text-green-200 text-sm">
                      <strong>Sarah Mitchell</strong> • SaaS Sales • Top 5% performer
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                    <p className="text-green-100 italic mb-3">
                      "My close rate went from 12% to 47% in just 30 days. ROI was immediate."
                    </p>
                    <div className="text-green-200 text-sm">
                      <strong>David Chen</strong> • Insurance • $240K increase
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8">
                <h3 className="h3 font-playfair-display text-gray-900 mb-4">⚠️ Important Notice</h3>
                <p className="text-gray-700 mb-4">
                  Due to the personal nature of my coaching, I'm limited to <strong>50 new students per month</strong>.
                </p>
                <p className="text-gray-700">
                  Current spots remaining this month: <strong className="text-red-600">7</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="h2 font-playfair-display text-white mb-8">
            Still Have Questions?
          </h2>
          <p className="text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
            Look, I get it. You've probably been burned by "sales training" before. But this isn't just another course. This is the real psychology behind why people buy.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="h3 font-playfair-display mb-4">Here's My Personal Promise:</h3>
            <p className="text-xl text-red-100 leading-relaxed">
              If you don't <strong>double your close rate in 30 days</strong>, I'll personally refund every penny and let you keep all the training materials. That's how confident I am these techniques will work for you.
            </p>
          </div>
          
          <Link href="/signup" className="inline-block bg-white text-red-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white">
            🚀 YES! I Want These Psychology Secrets - $47/month
          </Link>
          
          <p className="text-red-200 mt-6 text-lg">
            Join 25,000+ sales professionals already earning $100K+ more per year
          </p>
        </div>
      </section>
    </div>
  )
}
