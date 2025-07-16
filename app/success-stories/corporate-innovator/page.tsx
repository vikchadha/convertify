export const metadata = {
  title: 'From Ignored Ideas to Chief Innovation Officer | Corporate Success Story',
  description: 'How Rachel Martinez used internal influence psychology to get her ideas funded and promoted from analyst to Chief Innovation Officer in 3 years',
  
  alternates: {
    canonical: 'https://convertify.com/success-stories/corporate-innovator',
  },
}

import React from 'react'
import Link from 'next/link'

export default function CorporateInnovatorPage() {
  return (
    <div>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> WARNING: 92% of corporate innovations die in meetings 
        <Link href="/signup" className="underline ml-2 font-bold hover:text-red-200">Be the 8% →</Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/success-stories" className="text-orange-400 hover:text-orange-300 text-sm font-semibold">
                ← Back to Success Stories
              </Link>
            </div>

            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-orange-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">🎯</span>
                Internal Influence Psychology
              </div>

              <h1 className="h1 font-playfair-display text-white mb-8">
                From <span className="text-red-400">Ignored Analyst</span>
                <br />
                to <span className="text-green-400">Chief Innovation Officer</span>
                <br />
                in 3 Years
              </h1>

              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                How Rachel Martinez used psychology to transform from "that junior with crazy ideas" to the executive championing $50M digital transformation
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$50M</div>
                <div className="text-gray-300">Budget Approved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">17</div>
                <div className="text-gray-300">Ideas Implemented</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">4x</div>
                <div className="text-gray-300">Promotion Speed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">CIO</div>
                <div className="text-gray-300">At Age 29</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Frustration */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="h2 font-playfair-display text-center mb-12 text-gray-900">
            The <span className="text-red-600">Corporate Innovation Graveyard</span>
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                <strong>2021:</strong> Rachel Martinez was a 26-year-old business analyst at a Fortune 500 financial services company. Smart, ambitious, and full of ideas that could save millions.
              </p>

              <p className="text-lg mb-6">
                There was just one problem: nobody listened to the "junior analyst."
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-6">
                <h3 className="text-xl font-bold text-red-800 mb-3">Her Ideas Were Dying:</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Automation proposal: "Too risky"</li>
                  <li>• Customer portal idea: "Not a priority"</li>
                  <li>• Process improvement: "We've always done it this way"</li>
                  <li>• Cost-saving initiative: "Maybe next quarter"</li>
                  <li>• Digital transformation: "You don't understand the complexities"</li>
                </ul>
              </div>

              <p className="text-lg italic text-gray-600">
                "I watched inferior ideas get funded because they came from VPs. I had solutions to real problems, backed by data, but I was just 'that millennial who thinks she knows everything.' I almost quit."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Discovery */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="h2 font-playfair-display text-center mb-12 text-gray-900">
            The <span className="text-orange-600">Psychology Breakthrough</span>
          </h2>

          <div className="bg-orange-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-6">Then Rachel Discovered Internal Influence Psychology</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">The Revelation:</h4>
                <p className="text-gray-700">
                  "I was trying to win with logic and data. But corporate decisions are 20% logic, 80% politics and emotion. I needed to master the psychology of making executives look good."
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">The Strategy:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Made executives the hero of every idea</li>
                  <li>• Built coalitions before meetings</li>
                  <li>• Positioned ideas as risk mitigation</li>
                  <li>• Created inevitability through pilots</li>
                </ul>
              </div>

              <div className="bg-orange-100 p-6 rounded-xl">
                <p className="text-orange-800 font-semibold">
                  "The moment I stopped pitching MY ideas and started planting THEIR ideas, everything changed."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Psychology Tactics */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="h2 font-playfair-display text-center mb-12 text-gray-900">
            The <span className="text-green-600">Influence Psychology</span> She Used
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">1. The Executive Fear Flip</h3>
              <div className="bg-green-50 p-4 rounded-xl mb-4">
                <p className="text-green-800 italic">
                  "I've been thinking about what you said about competitor risk. What if they launch their digital platform while we're still debating? How would we explain that to the board?"
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Result:</strong> Shifted from "risky to try" to "risky to wait." $5M pilot approved.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">2. The Glory Attribution</h3>
              <div className="bg-blue-50 p-4 rounded-xl mb-4">
                <p className="text-blue-800 italic">
                  "Remember when you mentioned wanting to modernize operations? I built on your vision - what if we created an innovation lab based on your principles?"
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Result:</strong> CFO became her biggest champion. "His" idea got $10M funding.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">3. The Coalition Pre-Build</h3>
              <div className="bg-purple-50 p-4 rounded-xl mb-4">
                <p className="text-purple-800 italic">
                  Met with each stakeholder 1-on-1: "I value your perspective on digital transformation. What would need to be true for you to support this?"
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Result:</strong> Walked into meetings with 80% support already secured.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">4. The Pilot Trap</h3>
              <div className="bg-yellow-50 p-4 rounded-xl mb-4">
                <p className="text-yellow-800 italic">
                  "What if we just try it with one team for 30 days? If it doesn't show 20% improvement, we kill it. But when it works..."
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Result:</strong> "Small" pilots became company-wide transformations. 17 ideas implemented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Ascent */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="h2 font-playfair-display text-center mb-12 text-gray-900">
            <span className="text-green-600">The Meteoric Rise</span>
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-green-800 mb-6">From Analyst to Executive in 36 Months:</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border-l-4 border-green-500">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-bold text-gray-900">Year 1: Business Analyst → Senior Analyst</h4>
                  <span className="text-green-600 font-bold">Age 26</span>
                </div>
                <p className="text-gray-700">• Got 3 pilots approved using psychology tactics</p>
                <p className="text-gray-700">• Saved company $2.3M in first year</p>
                <p className="text-gray-700">• Built reputation as "executor who delivers"</p>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-bold text-gray-900">Year 2: Senior Analyst → Innovation Director</h4>
                  <span className="text-blue-600 font-bold">Age 27</span>
                </div>
                <p className="text-gray-700">• Led $10M digital transformation</p>
                <p className="text-gray-700">• CEO asked her to present to board</p>
                <p className="text-gray-700">• Became go-to person for "impossible" projects</p>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4 border-purple-500">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-bold text-gray-900">Year 3: Director → VP Innovation</h4>
                  <span className="text-purple-600 font-bold">Age 28</span>
                </div>
                <p className="text-gray-700">• Owned $25M innovation budget</p>
                <p className="text-gray-700">• Built team of 45 innovators</p>
                <p className="text-gray-700">• Launched 5 new revenue streams</p>
              </div>

              <div className="bg-green-100 p-6 rounded-xl border-4 border-green-500">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-bold text-gray-900">Today: Chief Innovation Officer</h4>
                  <span className="text-green-600 font-bold">Age 29</span>
                </div>
                <p className="text-gray-700 font-semibold">• Youngest C-suite executive in company history</p>
                <p className="text-gray-700 font-semibold">• Managing $50M transformation portfolio</p>
                <p className="text-gray-700 font-semibold">• Board advisor on digital strategy</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Rachel's Advice to Corporate Innovators:</h3>
            <blockquote className="text-xl italic text-gray-300 mb-6">
              "Stop trying to prove you're right. Start making executives feel smart. The best idea in the world dies if you don't understand the psychology of corporate influence. Master this, and you'll go from ignored to irreplaceable."
            </blockquote>
            <p className="text-gray-400">
              - Rachel Martinez, Chief Innovation Officer
            </p>
          </div>
        </div>
      </section>

      {/* The System */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="h2 font-playfair-display mb-8">
            Master the Same Psychology Rachel Used
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Your ideas aren't the problem. Your influence strategy is. Learn the psychology that gets executives to champion your vision and fund your future.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">The Internal Influence System Includes:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>6 laws of corporate influence</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Meeting domination tactics</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Executive psychology mastery</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Coalition building scripts</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Pilot trap methodology</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Career acceleration roadmap</span>
              </div>
            </div>
          </div>

          <Link href="/signup" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-black text-2xl py-6 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
            🎯 Get Everything Approved - Only $47/month
          </Link>
          
          <p className="text-orange-300 mt-6">
            Join 10,000+ corporate innovators driving real change
          </p>
        </div>
      </section>
    </div>
  )
}