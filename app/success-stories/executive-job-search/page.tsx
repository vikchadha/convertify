export const metadata = {
  title: 'From Laid Off at 52 to $450K VP Role in 6 Weeks | Executive Success Story',
  description: 'How Michael Chen used interview psychology to turn age discrimination into executive advantage and land a VP role with 60% salary increase',
  
  alternates: {
    canonical: 'https://convertify.com/success-stories/executive-job-search',
  },
}

import React from 'react'
import Link from 'next/link'

export default function ExecutiveJobSearchPage() {
  return (
    <div>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> WARNING: Only 14% of executives over 50 find comparable roles 
        <Link href="/signup" className="underline ml-2 font-bold hover:text-red-200">Beat the Odds →</Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/success-stories" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                ← Back to Success Stories
              </Link>
            </div>

            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">💼</span>
                Executive Job Search Psychology
              </div>

              <h1 className="h1 font-playfair-display text-white mb-8">
                From <span className="text-red-400">Laid Off at 52</span>
                <br />
                to <span className="text-green-400">$450K VP Role</span>
                <br />
                in 6 Weeks
              </h1>

              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                How Michael Chen used interview psychology to turn "overqualified" rejections into a bidding war between 3 Fortune 500 companies
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
                <div className="text-gray-300">Salary Increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
                <div className="text-gray-300">Competing Offers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">6 weeks</div>
                <div className="text-gray-300">Total Timeline</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">$450K</div>
                <div className="text-gray-300">Total Comp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Crisis */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="h2 font-playfair-display text-center mb-12 text-gray-900">
            The <span className="text-red-600">Brutal Reality</span> at 52
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                <strong>January 15, 2024:</strong> After 18 years building the technology division at a Fortune 500 company, Michael Chen got the call. "Restructuring." His $280K VP role was eliminated.
              </p>

              <p className="text-lg mb-6">
                At 52, with two kids in college and a mortgage, Michael faced a harsh reality: the executive job market treats experience as a liability, not an asset.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-6">
                <h3 className="text-xl font-bold text-red-800 mb-3">The First Month Was Brutal:</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• 47 applications sent - 2 responses</li>
                  <li>• "Overqualified" for everything</li>
                  <li>• Recruiters suggesting 40% pay cuts</li>
                  <li>• "Maybe try consulting?" they said</li>
                  <li>• Age discrimination disguised as "culture fit"</li>
                </ul>
              </div>

              <p className="text-lg italic text-gray-600">
                "I built teams of 200+, managed $50M budgets, and led digital transformations. But suddenly I was 'too experienced' for roles I could do in my sleep. The message was clear: at 52, I was done."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Discovery */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="h2 font-playfair-display text-center mb-12 text-gray-900">
            The <span className="text-blue-600">Psychology Shift</span>
          </h2>

          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Then Michael Discovered Interview Psychology</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">The Realization:</h4>
                <p className="text-gray-700">
                  "I was positioning myself as a desperate older worker needing a job. No wonder they rejected me. I needed to position as a scarce asset they couldn't afford to miss."
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">The Strategy Shift:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Stopped apologizing for experience</li>
                  <li>• Positioned age as competitive advantage</li>
                  <li>• Created scarcity with strategic positioning</li>
                  <li>• Made them compete for his wisdom</li>
                </ul>
              </div>

              <div className="bg-blue-100 p-6 rounded-xl">
                <p className="text-blue-800 font-semibold">
                  "The moment I stopped asking for opportunities and started evaluating if they deserved my expertise, everything changed."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Psychology Principles */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="h2 font-playfair-display text-center mb-12 text-gray-900">
            The <span className="text-green-600">Executive Psychology</span> Playbook
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">1. The Wisdom Frame</h3>
              <div className="bg-green-50 p-4 rounded-xl mb-4">
                <p className="text-green-800 italic">
                  "You're looking at this challenge wrong. I've seen this movie three times. At [Company A], we tried what you're suggesting - lost $10M. Here's what actually works..."
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Result:</strong> Shifted from "old candidate" to "experienced advisor who prevents disasters"
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">2. The Board-Ready Positioning</h3>
              <div className="bg-blue-50 p-4 rounded-xl mb-4">
                <p className="text-blue-800 italic">
                  "I've presented to boards 40+ times. Your investors will ask about [specific metric]. Here's how I'd position our story to get the funding you need..."
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Result:</strong> They saw him solving CEO-level problems, not just doing a job
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">3. The Reverse Age Discrimination</h3>
              <div className="bg-purple-50 p-4 rounded-xl mb-4">
                <p className="text-purple-800 italic">
                  "You need someone who's been through 2008, 2020, and multiple disruptions. Your 35-year-old candidates haven't seen real crisis. When things go south - and they will - you need battle scars, not MBA theories."
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Result:</strong> Made youth seem like liability, experience like insurance
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">4. The Multiple Offer Creation</h3>
              <div className="bg-yellow-50 p-4 rounded-xl mb-4">
                <p className="text-yellow-800 italic">
                  "I'm evaluating three opportunities. Yours is interesting because [specific reason]. But Company B offers broader scope. Help me understand why this is the better platform for impact?"
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Result:</strong> Created urgency and competition. They started selling him.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="h2 font-playfair-display text-center mb-12 text-gray-900">
            <span className="text-green-600">6 Weeks Later:</span> Bidding War
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-green-800 mb-6">The Offers Started Rolling In:</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-xl font-bold text-gray-900 mb-2">Company A</div>
                <div className="text-3xl font-bold text-green-600 mb-2">$380K</div>
                <div className="text-gray-600">VP Engineering</div>
                <div className="text-sm text-gray-500">+ equity + signing</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-xl font-bold text-gray-900 mb-2">Company B</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">$420K</div>
                <div className="text-gray-600">VP Digital</div>
                <div className="text-sm text-gray-500">+ 30% bonus</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center border-4 border-green-500">
                <div className="text-xl font-bold text-gray-900 mb-2">Company C</div>
                <div className="text-3xl font-bold text-green-600 mb-2">$450K</div>
                <div className="text-gray-600">SVP Technology</div>
                <div className="text-sm text-gray-500">+ equity + benefits</div>
              </div>
            </div>

            <div className="bg-green-100 p-6 rounded-xl">
              <p className="text-green-800 text-lg">
                <strong>Final Result:</strong> Accepted SVP role at $450K - a 60% increase from his previous role. Reporting directly to CEO, leading 300+ person organization.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Michael's Advice to Executives Over 50:</h3>
            <blockquote className="text-xl italic text-gray-300 mb-6">
              "Stop apologizing for your age. Stop accepting that you're 'overqualified.' The moment you position your experience as the solution to their fear, you become priceless. I went from 'unemployable at 52' to having companies fight over me - in 6 weeks."
            </blockquote>
            <p className="text-gray-400">
              - Michael Chen, SVP Technology at Fortune 500
            </p>
          </div>
        </div>
      </section>

      {/* The System */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="h2 font-playfair-display mb-8">
            Master the Same Psychology Michael Used
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Age discrimination is real. But with the right psychology, your experience becomes your greatest asset, not your biggest liability.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">The Executive Psychology System Includes:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Wisdom positioning frameworks</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Board-ready presentation tactics</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Age advantage strategies</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Executive negotiation scripts</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Multiple offer creation system</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>C-suite interview psychology</span>
              </div>
            </div>
          </div>

          <Link href="/signup" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-black text-2xl py-6 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
            💼 Get Your Executive Role - Only $47/month
          </Link>
          
          <p className="text-blue-300 mt-6">
            Join 2,000+ executives who turned "overqualified" into "irreplaceable"
          </p>
        </div>
      </section>
    </div>
  )
}