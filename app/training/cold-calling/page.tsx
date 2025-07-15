export const metadata = {title: 'Cold Calling Mastery: 37% Connection Rate System | Sales Training',
  description: 'Master the psychology of cold calling. Get past gatekeepers, book qualified meetings, and turn cold prospects into hot leads with proven scripts.',,
  alternates: {
    canonical: 'https://convertify.com/training/cold-calling',
  },
}

import React from 'react'
import Link from 'next/link'

export default function ColdCallingPage() {
  return (
    <div>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> LIMITED TIME: 76% OFF Sales Training - Only $47/month! 
        <Link href="/signup" className="underline ml-2 font-bold hover:text-red-200">Claim Now →</Link>
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
              <div className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">📞</span>
                Cold Calling Revolution
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                Turn <span className="text-red-400">Cold Calls</span> Into
                <br />
                <span className="text-green-400">Hot Leads</span> in 47 Seconds
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Stop dreading cold calls. Master the <strong className="text-white">psychology-based system</strong> that gets you through gatekeepers, past objections, and into <strong className="text-green-400">qualified meetings</strong> with a 37% success rate.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 max-w-3xl mx-auto mb-12 text-black">
                <h3 className="text-2xl font-bold mb-4">📞 What You'll Achieve:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">37%</div>
                    <div className="text-gray-700">Connection rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">4x</div>
                    <div className="text-gray-700">More qualified meetings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">83%</div>
                    <div className="text-gray-700">Gatekeeper bypass rate</div>
                  </div>
                </div>
              </div>

              <Link href="/signup" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-black text-2xl py-6 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                📞 Master Cold Calling - $47/month
              </Link>
              
              <p className="text-blue-300 text-lg mt-6">
                30-day guarantee • Join 25,000+ top performers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              Why Most Salespeople <span className="text-red-600">Hate</span> Cold Calling
            </h2>
            
            <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
              <h3 className="text-2xl font-bold text-red-800 mb-6">❌ The Brutal Reality</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-2">2%</div>
                    <div className="text-red-700">Average connection rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-2">94%</div>
                    <div className="text-red-700">Blocked by gatekeepers</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-2">67%</div>
                    <div className="text-red-700">Hang up within 10 seconds</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-2">0.3%</div>
                    <div className="text-red-700">Actually book a meeting</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                <span className="text-red-600 text-3xl">😱</span>
                <div>
                  <h4 className="font-bold text-red-700 mb-2">They Sound Like Every Other Salesperson</h4>
                  <p className="text-gray-700">"Hi, I'm calling from XYZ Company..." - Instant mental shutdown.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                <span className="text-red-600 text-3xl">🤖</span>
                <div>
                  <h4 className="font-bold text-red-700 mb-2">They Use Generic Scripts</h4>
                  <p className="text-gray-700">"How are you today?" - The fastest way to get hung up on.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                <span className="text-red-600 text-3xl">🙏</span>
                <div>
                  <h4 className="font-bold text-red-700 mb-2">They Beg for Time</h4>
                  <p className="text-gray-700">"I know you're busy, but could I have just 30 seconds?" - Weak positioning.</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">The Psychology Truth</h3>
                <p className="text-xl text-blue-100 leading-relaxed">
                  People don't answer the phone to help you. They answer because they're curious, concerned, or intrigued. Master these psychological triggers, and cold calling becomes your secret weapon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The System Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-blue-600">"47-Second"</span> Cold Call System
            </h2>

            <div className="bg-blue-50 border border-blue-300 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">📞 The Perfect Cold Call Structure</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">0-7s</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">PATTERN INTERRUPT</h4>
                    <p className="text-gray-700 mb-2">"Hey [Name], this is going to sound completely random..."</p>
                    <p className="text-blue-700 italic">Break their mental script. Curiosity beats politeness every time.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">8-20s</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">REASON FOR CALLING</h4>
                    <p className="text-gray-700 mb-2">"I was just talking to [Similar Company] about [Specific Problem], and [Name] mentioned you might be dealing with something similar..."</p>
                    <p className="text-blue-700 italic">Social proof + specific relevance = instant credibility.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">21-35s</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">PERMISSION TO CONTINUE</h4>
                    <p className="text-gray-700 mb-2">"Does that sound like something you're dealing with, or am I completely off base?"</p>
                    <p className="text-blue-700 italic">Get them talking. Engagement beats pitching.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">36-47s</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">THE ASK</h4>
                    <p className="text-gray-700 mb-2">"I'd love to show you exactly how [Similar Company] solved this. Are you free for 15 minutes Thursday at 2pm, or would Friday at 10am work better?"</p>
                    <p className="text-blue-700 italic">Assumptive close with choice of options.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">🎯 Why This Works</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-700 mb-2">✓ Pattern Interrupt</h4>
                  <p className="text-green-600 text-sm">Breaks their mental script and creates curiosity</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 mb-2">✓ Social Proof</h4>
                  <p className="text-green-600 text-sm">References similar companies for instant credibility</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 mb-2">✓ Relevance</h4>
                  <p className="text-green-600 text-sm">Focuses on their specific problems, not your solution</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 mb-2">✓ Permission</h4>
                  <p className="text-green-600 text-sm">Gets them engaged and talking instead of pitching</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gatekeeper Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              <span className="text-purple-600">Gatekeeper Aikido:</span> 83% Bypass Rate
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🛡️ "What's this regarding?"</h3>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <p className="text-purple-700 font-semibold mb-2">Wrong Response:</p>
                  <p className="text-red-600 italic mb-4">"I'm calling about our software solutions..." (Sales call detected - BLOCKED)</p>
                  <p className="text-purple-700 font-semibold mb-2">Aikido Response:</p>
                  <p className="text-gray-700 italic mb-4">"Hi Sarah! I'm returning [CEO's] call about the [Industry] discussion we had. Is he available?"</p>
                  <p className="text-green-600 font-semibold">Result: Sounds like an expected call, not a cold call.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📧 "Can I get your email and I'll have him call you back?"</h3>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-blue-700 font-semibold mb-2">Wrong Response:</p>
                  <p className="text-red-600 italic mb-4">"Sure, it's john@company.com..." (Into the void it goes)</p>
                  <p className="text-blue-700 font-semibold mb-2">Aikido Response:</p>
                  <p className="text-gray-700 italic mb-4">"Actually, I'm only available until 3pm today and then I'm traveling until next week. What's the best number to reach him directly? I just need 90 seconds."</p>
                  <p className="text-green-600 font-semibold">Result: Creates urgency and gets you the direct line.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🚫 "He's in a meeting"</h3>
                <div className="bg-yellow-50 p-4 rounded-xl">
                  <p className="text-yellow-700 font-semibold mb-2">Wrong Response:</p>
                  <p className="text-red-600 italic mb-4">"When would be a good time to call back?" (Generic brush-off)</p>
                  <p className="text-yellow-700 font-semibold mb-2">Aikido Response:</p>
                  <p className="text-gray-700 italic mb-4">"No problem! Quick question - does he usually take calls before 9am or after 5pm? I know some executives prefer early morning or end of day for important calls."</p>
                  <p className="text-green-600 font-semibold">Result: Positions yourself as someone who understands executive preferences.</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">🎯 Master All 15 Gatekeeper Scenarios</h3>
                <p className="text-xl text-purple-100 mb-6">
                  Get scripts for every gatekeeper response, plus the psychology behind why each approach works.
                </p>
                <Link href="/signup" className="inline-block bg-white text-purple-700 hover:bg-gray-100 font-black text-xl py-4 px-8 rounded-xl shadow-lg">
                  📞 Get All Gatekeeper Scripts - $47/month
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Scripts */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              <span className="text-green-600">Industry-Specific</span> Cold Call Scripts
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-300">
                <h3 className="text-xl font-bold text-green-800 mb-4">💻 SaaS/Technology</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 italic text-sm mb-2">"Hey [Name], this is going to sound random, but I was just talking to the CTO at [Similar Company] about how they were losing about $50K a month due to system downtime..."</p>
                    <p className="text-green-600 font-semibold text-xs">Focus: Cost of downtime and efficiency</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-300">
                <h3 className="text-xl font-bold text-blue-800 mb-4">🏠 Real Estate</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 italic text-sm mb-2">"Hi [Name], I know this is out of the blue, but I just helped [Similar Agent] increase their average commission by 34% without working more hours..."</p>
                    <p className="text-blue-600 font-semibold text-xs">Focus: Income increase without time increase</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-8 border-2 border-purple-300">
                <h3 className="text-xl font-bold text-purple-800 mb-4">🛡️ Insurance</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 italic text-sm mb-2">"Hey [Name], completely random call, but I was working with [Similar Agent] who was struggling with policy retention, and we helped them increase renewals by 47%..."</p>
                    <p className="text-purple-600 font-semibold text-xs">Focus: Retention and recurring revenue</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-8 border-2 border-yellow-300">
                <h3 className="text-xl font-bold text-yellow-800 mb-4">🏭 Manufacturing</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 italic text-sm mb-2">"Hi [Name], this might be completely off base, but I was talking to [Similar Company] about how they reduced production costs by 23% without sacrificing quality..."</p>
                    <p className="text-yellow-600 font-semibold text-xs">Focus: Cost reduction and efficiency</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">🎯 12 More Industries Covered</h3>
                <p className="text-xl text-gray-300 mb-6">
                  Healthcare, Financial Services, Retail, Automotive, Legal, and more. Each with industry-specific pain points and language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              What Happens When You Master <span className="text-blue-600">Cold Calling Psychology</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-blue-50 rounded-2xl">
                <div className="text-4xl mb-4">📞</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">37%</div>
                <div className="text-gray-700">Connection rate</div>
                <div className="text-sm text-gray-600 mt-2">vs. 2% industry average</div>
              </div>
              <div className="text-center p-8 bg-green-50 rounded-2xl">
                <div className="text-4xl mb-4">📅</div>
                <div className="text-3xl font-bold text-green-600 mb-2">4x</div>
                <div className="text-gray-700">More qualified meetings per day</div>
                <div className="text-sm text-gray-600 mt-2">Higher quality prospects</div>
              </div>
              <div className="text-center p-8 bg-purple-50 rounded-2xl">
                <div className="text-4xl mb-4">💰</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">$180K+</div>
                <div className="text-gray-700">Average income increase</div>
                <div className="text-sm text-gray-600 mt-2">Within 12 months</div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">📞 Student Success Stories</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "I went from making 80 calls to get 1 meeting to getting 4 meetings from 20 calls. The gatekeeper scripts alone are worth 10x the price. My pipeline has never been stronger."
                  </p>
                  <div className="text-blue-300 text-sm">
                    <strong>David Kim</strong> • SaaS Sales • +$240K pipeline in 6 months
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "I actually look forward to cold calling now. The pattern interrupt technique is genius - prospects are curious instead of annoyed. Increased my connect rate from 3% to 38%."
                  </p>
                  <div className="text-blue-300 text-sm">
                    <strong>Maria Santos</strong> • Insurance • Top performer 8 months running
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Stop Dreading Cold Calls
          </h2>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Turn cold calling into your secret weapon. While your competitors struggle with 2% connection rates, you'll be booking 4x more meetings and building a pipeline they can only dream of.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">📞 Master Cold Calling Today:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>47-Second Call Structure</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>15 Gatekeeper Bypass Scripts</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Industry-Specific Templates</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Voice Tonality Training</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Objection Handling Integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Complete Training System</span>
              </div>
            </div>
          </div>
          
          <Link href="/signup" className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white">
            📞 Master Cold Calling Psychology - $47/month
          </Link>
          
          <p className="text-blue-200 mt-6 text-lg">
            Join 25,000+ sales professionals who love making cold calls
          </p>
        </div>
      </section>
    </div>
  )
}