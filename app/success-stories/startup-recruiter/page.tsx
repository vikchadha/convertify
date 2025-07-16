export const metadata = {
  title: 'From Zero Team to Dream Team in 90 Days | Recruiting Success Story',
  description: 'How Alex Thompson used recruiting psychology to build a world-class engineering team from scratch, beating FAANG companies for top talent',
  
  alternates: {
    canonical: 'https://convertify.com/success-stories/startup-recruiter',
  },
}

import React from 'react'
import Link from 'next/link'

export default function StartupRecruiterPage() {
  return (
    <div>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> WARNING: 73% of startups fail due to wrong team 
        <Link href="/signup" className="underline ml-2 font-bold hover:text-red-200">Build Right →</Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/success-stories" className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold">
                ← Back to Success Stories
              </Link>
            </div>

            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-indigo-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">🎯</span>
                Recruiting Psychology Mastery
              </div>

              <h1 className="h1 font-playfair-display text-white mb-8">
                From <span className="text-red-400">Zero Engineers</span>
                <br />
                to <span className="text-green-400">Dream Team</span>
                <br />
                in 90 Days
              </h1>

              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                How a first-time founder used recruiting psychology to convince Google and Meta engineers to join his 3-person startup
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">15</div>
                <div className="text-gray-300">A-Players Hired</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">82%</div>
                <div className="text-gray-300">Response Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
                <div className="text-gray-300">From FAANG</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">$20M</div>
                <div className="text-gray-300">Series A Raised</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="h2 font-playfair-display text-center mb-12 text-gray-900">
            The <span className="text-red-600">Impossible Mission</span>
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                <strong>March 2024:</strong> Alex Thompson had just raised $2M seed funding for his AI startup. The product vision was revolutionary. The market opportunity was massive. There was just one problem...
              </p>

              <p className="text-lg mb-6">
                He needed to build a world-class engineering team from scratch. As a non-technical founder. Competing against companies offering 3x the salary.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-6">
                <h3 className="text-xl font-bold text-red-800 mb-3">The First Month Was a Disaster:</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• 127 cold outreach messages - 3 responses</li>
                  <li>• "Why would I leave Google for a startup?"</li>
                  <li>• Lost every candidate to higher offers</li>
                  <li>• Recruiter wanted $30K per hire</li>
                  <li>• Investors getting nervous about timeline</li>
                </ul>
              </div>

              <p className="text-lg italic text-gray-600">
                "I was offering equity, flexible work, exciting problems - everything startups are supposed to offer. But senior engineers just laughed. One literally said 'good luck with that' and hung up."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Discovery */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="h2 font-playfair-display text-center mb-12 text-gray-900">
            The <span className="text-indigo-600">Psychology Revolution</span>
          </h2>

          <div className="bg-indigo-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-indigo-800 mb-6">Then Alex Discovered Recruiting Psychology</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">The Mindset Shift:</h4>
                <p className="text-gray-700">
                  "I was begging people to join my startup. That's exactly wrong. A-players don't join desperate companies. They join movements that make them feel chosen."
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">The New Strategy:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Stopped selling the job, started selling the mission</li>
                  <li>• Made candidates qualify themselves</li>
                  <li>• Created scarcity and competition</li>
                  <li>• Positioned as career-defining opportunity</li>
                </ul>
              </div>

              <div className="bg-indigo-100 p-6 rounded-xl">
                <p className="text-indigo-800 font-semibold">
                  "When I shifted from 'please join us' to 'let's see if you're good enough,' everything changed."
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
            The <span className="text-green-600">Recruiting Psychology</span> Playbook
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">1. The Chosen One Outreach</h3>
              <div className="bg-green-50 p-4 rounded-xl mb-4">
                <p className="text-green-800 italic">
                  "Hi Sarah - Your Redis optimization reducing latency by 90% at Uber is exactly the thinking we need. We're solving a similar problem at 100x scale. Not sure if you're open to conversations, but I had to reach out. This could be your defining work."
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Result:</strong> 82% response rate vs 2% before. They felt discovered, not pitched.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">2. The Mission Magnetism</h3>
              <div className="bg-purple-50 p-4 rounded-xl mb-4">
                <p className="text-purple-800 italic">
                  "We're not hiring engineers. We're assembling the team that will make AGI safe for humanity. Your distributed systems work shows you understand scale. Want to apply it to the most important problem of our time?"
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Result:</strong> Senior engineers taking 40% pay cuts to join the mission.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">3. The Reverse Interview</h3>
              <div className="bg-blue-50 p-4 rounded-xl mb-4">
                <p className="text-blue-800 italic">
                  "Before we dive into our questions, I'm curious - what would make you leave Google? What kind of impact would make a move worth it? Because if it's just about money, we're probably not a fit."
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Result:</strong> Candidates started selling themselves on why they should be chosen.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">4. The Scarcity Close</h3>
              <div className="bg-yellow-50 p-4 rounded-xl mb-4">
                <p className="text-yellow-800 italic">
                  "We're only bringing on 5 founding engineers. We have 12 exceptional candidates. You're definitely in the mix, but I need to understand - if we extend an offer, are you ready to make history with us?"
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Result:</strong> Created urgency and competition. 71% accept rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="h2 font-playfair-display text-center mb-12 text-gray-900">
            <span className="text-green-600">90 Days Later:</span> Dream Team Assembled
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-green-800 mb-6">The Founding Team That VCs Called "Impossible":</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-4xl mb-3">🏆</div>
                <div className="text-xl font-bold text-gray-900 mb-2">5 Engineers</div>
                <div className="text-gray-600">From FAANG</div>
                <div className="text-sm text-gray-500">Took pay cuts to join</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-4xl mb-3">🚀</div>
                <div className="text-xl font-bold text-gray-900 mb-2">3 Founders</div>
                <div className="text-gray-600">From unicorns</div>
                <div className="text-sm text-gray-500">Left their own startups</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-4xl mb-3">💡</div>
                <div className="text-xl font-bold text-gray-900 mb-2">7 Senior ICs</div>
                <div className="text-gray-600">Industry leaders</div>
                <div className="text-sm text-gray-500">Published researchers</div>
              </div>
            </div>

            <div className="bg-green-100 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-green-900 mb-3">The Ripple Effect:</h4>
              <ul className="space-y-2 text-green-800">
                <li>• Team quality attracted $20M Series A (10x oversubscribed)</li>
                <li>• Engineers recruited their networks - 50+ applications</li>
                <li>• Featured in TechCrunch as "How to Build a Dream Team"</li>
                <li>• 100% retention after 18 months</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Alex's Secret:</h3>
            <blockquote className="text-xl italic text-gray-300 mb-6">
              "Everyone thinks recruiting is about selling your company. It's not. It's about making A-players feel like they're the chosen ones joining an exclusive mission. When you master this psychology, they compete to join you - even at lower salaries."
            </blockquote>
            <p className="text-gray-400">
              - Alex Thompson, Founder & CEO (acquired for $200M in 2024)
            </p>
          </div>
        </div>
      </section>

      {/* The Team Today */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="h2 font-playfair-display text-center mb-12 text-gray-900">
            Where Are They Now?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Engineers Who Said Yes:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Sarah (ex-Google): Now CTO, $5M equity value</li>
                <li>• Marcus (ex-Meta): VP Eng, launched 3 products</li>
                <li>• David (ex-Apple): Founding engineer, 2% equity</li>
                <li>• Jennifer (ex-Uber): Built AI platform from scratch</li>
                <li>• Ryan (ex-Stripe): Scaled to 100M users</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Company Impact:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Product launched 6 months early</li>
                <li>• $200M acquisition in 18 months</li>
                <li>• Every engineer made $1M+</li>
                <li>• Team stayed together post-acquisition</li>
                <li>• Launching new startup together</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The System */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="h2 font-playfair-display mb-8">
            Build Your Dream Team Using Alex's Psychology
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            The best people aren't looking. They're not impressed by perks. But with the right psychology, they'll leave Google to join your garage startup.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">The Recruiting Psychology System:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>7 magnetic principles</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>82% response rate templates</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Reverse interview method</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Mission positioning framework</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>FAANG poaching tactics</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Scarcity closing system</span>
              </div>
            </div>
          </div>

          <Link href="/signup" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-black text-2xl py-6 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
            🎯 Build Your Dream Team - Only $47/month
          </Link>
          
          <p className="text-indigo-300 mt-6">
            Join 3,000+ founders building world-class teams
          </p>
        </div>
      </section>
    </div>
  )
}