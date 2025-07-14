export const metadata = {
  title: 'From 50 Rejections to $10M Series A: Founder Success Story',
  description: 'How Emma Martinez used fundraising psychology to go from begging VCs to having them compete for her startup. Learn the exact system she used.',
}

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function StartupFounderSuccessPage() {
  return (
    <div>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> LIMITED TIME: 76% OFF Psychology Training - Only $47/month! 
        <Link href="/signup" className="underline ml-2 font-bold hover:text-red-200">Start Now →</Link>
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
                <span className="mr-2">🚀</span>
                Startup Founder Success Story
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                From <span className="text-red-400">50 Rejections</span>
                <br />
                to <span className="text-green-400">$10M Series A</span>
                <br />
                in 6 Months
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                How Emma Martinez transformed from a desperate founder begging for meetings to having <strong className="text-white">Sequoia and a16z compete</strong> for her Series A - using the exact same pitch she was rejected for <strong className="text-green-400">50 times</strong>.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 max-w-3xl mx-auto mb-12 text-black">
                <h3 className="text-2xl font-bold mb-4">🏆 Emma's Transformation</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-2">Before</div>
                    <div className="text-gray-700">50 rejections</div>
                    <div className="text-gray-700">0 term sheets</div>
                    <div className="text-gray-700">Running out of runway</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl">→</span>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">After</div>
                    <div className="text-gray-700">7 term sheets</div>
                    <div className="text-gray-700">$10M raised</div>
                    <div className="text-gray-700">$67M valuation</div>
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
              The <span className="text-red-600">Brutal Reality</span> of My First 50 Pitches
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <div className="flex items-start space-x-6">
                <div className="bg-gray-200 rounded-full w-20 h-20 flex items-center justify-center text-3xl">👩‍💼</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Emma Martinez</h3>
                  <p className="text-gray-600">Founder & CEO • TechFlow Analytics</p>
                  <p className="text-green-600 font-semibold">Now: $10M Series A • Building the future of data</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                "I had everything VCs say they want: Stanford CS degree, 5 years at Google, a solution to a real problem I'd experienced firsthand. But I couldn't even get past associate-level meetings."
              </p>

              <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
                <h3 className="text-2xl font-bold text-red-800 mb-6">💔 My Lowest Point</h3>
                <div className="space-y-4 text-red-700">
                  <p>• Pitch #47: VC fell asleep during my demo (literally)</p>
                  <p>• Pitch #32: "This is a feature, not a company"</p>
                  <p>• Pitch #28: "Come back when you have more traction" (I had 50 customers!)</p>
                  <p>• Pitch #19: Partner googled competitors while I was talking</p>
                  <p>• 3 months of runway left, considering shutting down</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700 my-8">
                "The worst part wasn't the rejections - it was the pity. One VC actually said, 'You seem smart. Maybe you should go back to Google.' I went to my car and cried for 20 minutes."
              </blockquote>

              <div className="bg-gray-100 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 The Brutal Numbers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Pitching Stats:</strong></p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 237 cold emails sent</li>
                      <li>• 61 responses (mostly "not a fit")</li>
                      <li>• 50 actual pitch meetings</li>
                      <li>• 0 second meetings</li>
                      <li>• 0 term sheets</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>What I Was Doing:</strong></p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 72-slide pitch deck</li>
                      <li>• Leading with technology</li>
                      <li>• Begging for meetings</li>
                      <li>• Accepting any feedback</li>
                      <li>• Sounding desperate (because I was)</li>
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
              The <span className="text-purple-600">Psychology Shift</span> That Changed Everything
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                "Rejection #50 was different. The partner said something that stuck: 'Your idea is fine. But I don't believe YOU can build a billion-dollar company. You pitch like you're asking for permission to exist.'"
              </p>

              <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">💡 The Revelation</h3>
                <p className="text-purple-700 text-lg leading-relaxed mb-4">
                  "I realized I'd been treating fundraising like a logical exercise - better metrics, clearer slides, more features. But VCs don't invest in spreadsheets. They invest in inevitability."
                </p>
                <p className="text-purple-700 text-lg font-semibold">
                  "I found Convertify's psychology training and discovered the truth: Fundraising isn't about your product. It's about triggering the psychological patterns that make VCs fear missing out."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-red-700 mb-4">❌ My Old Approach</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Begged for meetings</li>
                    <li>• 72 slides of features</li>
                    <li>• Accepted any meeting time</li>
                    <li>• Pitched to anyone who'd listen</li>
                    <li>• Sounded grateful for attention</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-green-700 mb-4">✅ The Psychology Approach</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Created competition for access</li>
                    <li>• 10 slides of transformation</li>
                    <li>• Set my meeting schedule</li>
                    <li>• Qualified investors first</li>
                    <li>• Projected abundance mindset</li>
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
              The <span className="text-green-600">5 Psychology Shifts</span> That Got 7 Term Sheets
            </h2>

            <div className="space-y-8">
              <div className="bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">1. 🎯 The Inevitability Reframe</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">I stopped asking and started declaring:</p>
                  <p className="text-purple-700 italic mb-4">
                    Old: "We hope to capture 1% of a $10B market..."<br />
                    New: "The entire industry is shifting to real-time analytics. We're already the choice of 3 Fortune 500s. The question is whether you'll be part of this transformation."
                  </p>
                  <p className="text-green-600 font-semibold">Result: VCs started asking how they could help us win.</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">2. 🚀 The Scarcity Play</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">Created urgency without lying:</p>
                  <p className="text-blue-700 italic mb-4">
                    Email to VCs: "We're opening a funding round next week. Given your expertise in data infrastructure, I wanted to give you first look. We're only taking 5 meetings. Interested?"
                  </p>
                  <p className="text-green-600 font-semibold">Result: 31 VCs replied within 24 hours wanting meetings.</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-800 mb-4">3. 💰 The Price Anchor</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">Set expectations high from the start:</p>
                  <p className="text-green-700 italic mb-4">
                    "We're raising $8-12M at a $60-80M valuation. I know that's aggressive for Series A, but our metrics justify it. If that's outside your range, no worries - I don't want to waste your time."
                  </p>
                  <p className="text-green-600 font-semibold">Result: Closed at $67M valuation (was hoping for $40M originally).</p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">4. 🎭 The Power Flip</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">Made them sell me:</p>
                  <p className="text-yellow-700 italic mb-4">
                    In meetings: "Before I share our vision, I'd love to understand your thesis for this space. We're being selective about investors - it's not just about money, it's about the right partner. Why should we choose you?"
                  </p>
                  <p className="text-green-600 font-semibold">Result: VCs started pitching ME on their value-add.</p>
                </div>
              </div>

              <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-800 mb-4">5. 🏃 The Fast Close</h3>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">Created momentum through speed:</p>
                  <p className="text-red-700 italic mb-4">
                    "We're making a decision in 10 days. I know that's fast, but the best investors can move quickly. First term sheet is already in. If you need more than 10 days, this probably isn't the right fit."
                  </p>
                  <p className="text-green-600 font-semibold">Result: 7 term sheets in 8 days. Closed in 2 weeks total.</p>
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
              My <span className="text-green-600">14-Day Fundraising</span> Blitz
            </h2>

            <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-8 mb-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold">Day 1</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">The Announcement</h4>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-gray-700 mb-2">• Sent "first look" email to 40 targeted VCs</p>
                      <p className="text-gray-700 mb-2">• 31 responses in 24 hours</p>
                      <p className="text-gray-700 mb-2">• Scheduled only 12 meetings (scarcity)</p>
                      <p className="text-green-600 font-semibold">Set the frame: They were competing for access</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold">Days 2-5</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">The Meetings</h4>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-gray-700 mb-2">• 3 meetings per day, 45 minutes max</p>
                      <p className="text-gray-700 mb-2">• Same 10-slide deck (down from 72!)</p>
                      <p className="text-gray-700 mb-2">• Ended each with: "Moving fast. Let me know by Friday."</p>
                      <p className="text-green-600 font-semibold">9 of 12 wanted second meetings immediately</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold">Day 6</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">The Catalyst</h4>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-gray-700 mb-2">• First term sheet arrived ($8M at $55M valuation)</p>
                      <p className="text-gray-700 mb-2">• Emailed all VCs: "First term sheet in. Moving to final decisions."</p>
                      <p className="text-gray-700 mb-2">• Phone started ringing non-stop</p>
                      <p className="text-green-600 font-semibold">FOMO kicked in hard</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold">Days 7-10</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">The Feeding Frenzy</h4>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-gray-700 mb-2">• 7 term sheets total</p>
                      <p className="text-gray-700 mb-2">• Valuations from $55M to $75M</p>
                      <p className="text-gray-700 mb-2">• Sequoia partner called personally</p>
                      <p className="text-green-600 font-semibold">Had to turn away 3 additional offers</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold">Day 14</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">The Close</h4>
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-gray-700 mb-2">• Chose lead investor (best partner fit, not highest price)</p>
                      <p className="text-gray-700 mb-2">• $10M round at $67M valuation</p>
                      <p className="text-gray-700 mb-2">• Kept 2 VCs as advisors who missed out</p>
                      <p className="text-green-600 font-semibold">Oversubscribed by 3x</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-purple-50 rounded-2xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">50 → 7</div>
                <div className="text-gray-700">Rejections to term sheets</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <div className="text-3xl font-bold text-green-600 mb-2">14 days</div>
                <div className="text-gray-700">To close round</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-2xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">$67M</div>
                <div className="text-gray-700">Valuation achieved</div>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-2xl">
                <div className="text-3xl font-bold text-yellow-600 mb-2">Same pitch</div>
                <div className="text-gray-700">Different psychology</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 text-center">🎯 The Same Pitch That Failed 50 Times</h3>
              <p className="text-xl text-purple-100 text-center leading-relaxed">
                "I didn't change my product, team, or traction. I changed how I presented them. The psychology training taught me that VCs don't invest in companies - they invest in movements they're afraid to miss."
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
              What <span className="text-green-600">$10M</span> Really Means
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <blockquote className="text-2xl text-gray-700 italic text-center leading-relaxed mb-6">
                "The money is amazing, but the real transformation was internal. I went from begging for validation to choosing partners. From apologizing for existing to building the future. That mindset shift is worth more than any check."
              </blockquote>
              <p className="text-center text-gray-600 font-semibold">- Emma Martinez</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">🚀 Company Impact</h3>
                <div className="space-y-3 text-purple-700">
                  <p>✓ Hired 23 world-class engineers</p>
                  <p>✓ Grew from 50 to 500 customers</p>
                  <p>✓ Launched enterprise product</p>
                  <p>✓ Series B conversations starting</p>
                  <p>✓ Featured in TechCrunch, Forbes</p>
                </div>
              </div>
              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-green-800 mb-4">💡 Personal Growth</h3>
                <div className="space-y-3 text-green-700">
                  <p>✓ Speak at major conferences</p>
                  <p>✓ Mentor other founders</p>
                  <p>✓ Board seat at 29 years old</p>
                  <p>✓ Building generational wealth</p>
                  <p>✓ Actually enjoying the journey</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4 text-center">💡 My Message to Struggling Founders</h3>
              <p className="text-yellow-700 text-lg leading-relaxed mb-4">
                "Your idea isn't the problem. Your pitch deck isn't the problem. Your traction isn't the problem. Your psychology is the problem. When you stop begging and start choosing, everything changes."
              </p>
              <p className="text-yellow-700 text-lg leading-relaxed font-semibold text-center">
                "Master the psychology first. The funding follows."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Your Series A Starts With Psychology
          </h2>
          <p className="text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Emma raised $10M with the same pitch that failed 50 times. The only difference? She learned the psychology that makes VCs write checks.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🚀 Master Fundraising Psychology:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Turn rejections into term sheets</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Create VC competition</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>2.4x higher valuations</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Close rounds in weeks</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Exact scripts & templates</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Complete psychology system</span>
              </div>
            </div>
          </div>
          
          <Link href="/signup" className="inline-block bg-white text-purple-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white">
            🚀 Raise Your Round - $47/month
          </Link>
          
          <p className="text-purple-200 mt-6 text-lg">
            Join 5,000+ founders who stopped begging and started choosing
          </p>
        </div>
      </section>
    </div>
  )
}