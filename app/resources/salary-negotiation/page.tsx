export const metadata = {
  title: 'Get Paid What You\'re Worth: Salary Negotiation Guide | Free Resource',
  description: 'Psychology-based salary negotiation scripts that help sales professionals increase their income by 47% on average. Never leave money on the table again',
  
  alternates: {
    canonical: 'https://convertify.com/resources/salary-negotiation',
  },
}

import React from 'react'
import Link from 'next/link'

export default function SalaryNegotiationPage() {
  return (
    <div>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> Master ALL Sales Skills: 76% OFF - Only $47/month! 
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
              <div className="inline-flex items-center px-6 py-3 bg-green-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">💰</span>
                FREE: Salary Negotiation Mastery
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                Stop Leaving
                <br />
                <span className="text-red-400">$47,000</span> on the Table
                <br />
                <span className="text-green-400">Every Job Change</span>
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Sales professionals who master negotiation psychology earn <strong className="text-white">47% more</strong> over their careers. Learn the exact scripts and tactics that get you paid what you're <strong className="text-green-400">actually worth</strong>.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 max-w-3xl mx-auto mb-12 text-black">
                <h3 className="text-2xl font-bold mb-4">💰 The Psychology Advantage:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">$47K</div>
                    <div className="text-gray-700">Average increase</div>
                    <div className="text-sm text-gray-600">per negotiation</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">93%</div>
                    <div className="text-gray-700">Get some increase</div>
                    <div className="text-sm text-gray-600">when they ask</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">$1.2M</div>
                    <div className="text-gray-700">Lifetime difference</div>
                    <div className="text-sm text-gray-600">from negotiating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Salary Reality Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-red-600">Shocking Truth</span> About Sales Salaries
            </h2>
            
            <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
              <h3 className="text-2xl font-bold text-red-800 mb-6">🚨 Why You're Underpaid Right Now</h3>
              <div className="space-y-4 text-red-700">
                <p className="text-lg">• 89% of sales professionals never negotiate their base salary</p>
                <p className="text-lg">• 76% accept the first commission structure offered</p>
                <p className="text-lg">• 94% don't know their market value</p>
                <p className="text-lg">• Companies budget 15-25% above their first offer</p>
                <p className="text-lg font-bold">• Every year you don't negotiate = $47K lost forever</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">❌ What Most Salespeople Do</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Accept offers with relief and gratitude</p>
                  <p>• Compare only to their last salary</p>
                  <p>• Fear losing the offer if they negotiate</p>
                  <p>• Focus on base salary only</p>
                  <p>• Negotiate once and stop</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-green-700 mb-4">✅ What Top Earners Do</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• View first offer as starting point</p>
                  <p>• Research market rates extensively</p>
                  <p>• Negotiate entire compensation package</p>
                  <p>• Create competition for their talent</p>
                  <p>• Re-negotiate every 18 months</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">💰 The Million Dollar Fact</h3>
                <p className="text-xl text-green-100 leading-relaxed">
                  A sales professional who negotiates just 3 times in their career earns $1.2 million more than one who doesn't. That's retirement 10 years earlier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 5-Phase System Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-green-600">5-Phase Psychology System</span> for 47% Increases
            </h2>

            <div className="space-y-8">
              {/* Phase 1: Intelligence Gathering */}
              <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Phase 1: Intelligence Gathering 🕵️</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">Before You Even Apply:</h4>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>1. Market Research:</strong> Use Glassdoor, Levels.fyi, RepVue, Comparably</p>
                      <p><strong>2. Network Intel:</strong> "I'm exploring opportunities. What's the going rate for [role] these days?"</p>
                      <p><strong>3. Recruiter Data:</strong> "What range are you seeing for similar roles?"</p>
                      <p><strong>4. Create Your Range:</strong> Bottom (walk away) → Target → Stretch</p>
                    </div>
                  </div>
                  <div className="bg-green-100 p-4 rounded-xl">
                    <p className="text-green-700 text-sm"><strong>Key:</strong> Know your worth before they ask. Information is leverage.</p>
                  </div>
                </div>
              </div>

              {/* Phase 2: The Anchor Drop */}
              <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Phase 2: The Anchor Drop ⚓</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">When They Ask About Salary Expectations:</h4>
                    <p className="text-blue-700 italic mb-4">
                      "I'm looking at multiple opportunities right now. For the right role with the right growth potential, I'm targeting total compensation in the $[X] to $[Y] range, depending on the complete package. But I'm more interested in finding the right fit. What range did you have budgeted for this role?"
                    </p>
                    <p className="text-gray-700 mb-2"><strong>Psychology tricks:</strong></p>
                    <ul className="space-y-1 text-sm text-gray-600 ml-4">
                      <li>• "Multiple opportunities" = competition</li>
                      <li>• "Total compensation" = think beyond base</li>
                      <li>• High anchor makes their range seem low</li>
                      <li>• Turning question back maintains control</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3: Value Stacking */}
              <div className="bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Phase 3: Value Stacking 📈</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">Throughout the Interview Process:</h4>
                    <div className="space-y-3 text-purple-700 italic">
                      <p>"At [previous company], I increased revenue by $2.3M in 18 months..."</p>
                      <p>"I noticed your team is struggling with [problem]. I solved this exact issue and can show you how..."</p>
                      <p>"My pipeline generation system could add $5M in opportunities in year one..."</p>
                    </div>
                    <p className="text-gray-700 mt-4"><strong>Goal:</strong> Make them terrified of losing you to a competitor.</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-xl">
                    <p className="text-purple-700 text-sm"><strong>Rule:</strong> Every interview should increase your perceived value by 10%.</p>
                  </div>
                </div>
              </div>

              {/* Phase 4: The Negotiation */}
              <div className="bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">Phase 4: The Psychology Negotiation 🎯</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">When They Make an Offer:</h4>
                    <p className="text-yellow-700 italic mb-4">
                      "I'm really excited about the opportunity and I know I can deliver incredible value. I appreciate the offer of $[X]. Based on my research and the value I'll bring - particularly [specific value] - I was targeting closer to $[Y]. Can we work together to get there?"
                    </p>
                    <div className="mt-4 space-y-3">
                      <p className="text-gray-700"><strong>If they say budget is tight:</strong></p>
                      <p className="text-yellow-700 italic text-sm">
                        "I understand budget constraints. Let's get creative. What if we set performance triggers? When I hit [specific metric], we revisit compensation. Or we could explore signing bonus, extra PTO, or equity..."
                      </p>
                    </div>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-xl">
                    <p className="text-yellow-700 text-sm"><strong>Never:</strong> Accept on the spot. Always say "Let me review and get back to you."</p>
                  </div>
                </div>
              </div>

              {/* Phase 5: Beyond Base */}
              <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Phase 5: The Total Package Play 💼</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">Negotiate EVERYTHING:</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <p className="text-red-700 font-semibold">Immediate Items:</p>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Base salary (+15-25%)</li>
                          <li>• Signing bonus ($10-50K)</li>
                          <li>• Commission structure</li>
                          <li>• Equity/stock options</li>
                          <li>• Start date (time off?)</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <p className="text-red-700 font-semibold">Ongoing Items:</p>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Remote work flexibility</li>
                          <li>• PTO days (+5-10)</li>
                          <li>• Accelerators/SPIFFs</li>
                          <li>• 6-month review clause</li>
                          <li>• Training budget</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-100 p-4 rounded-xl">
                    <p className="text-red-700 text-sm"><strong>Secret:</strong> If they can't move on salary, they often can on other items worth $20K+.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Templates Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              <span className="text-blue-600">Copy-Paste</span> Negotiation Email Templates
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">📧 The Initial Counter</h3>
                <div className="bg-gray-50 p-6 rounded-xl font-mono text-sm">
                  <p className="mb-2">Subject: Re: [Company] AE Offer</p>
                  <p className="mb-4">---</p>
                  <p className="mb-4">Hi [Name],</p>
                  <p className="mb-4">Thank you so much for the offer! I'm genuinely excited about joining [Company] and contributing to the team's success.</p>
                  <p className="mb-4">I've reviewed the offer carefully. While I'm thrilled about the opportunity, I was hoping we could discuss the compensation package. Based on my research of similar roles and the value I'll bring - particularly my track record of [specific achievement] - I was targeting a base salary closer to $[X].</p>
                  <p className="mb-4">I'm confident this investment will pay for itself quickly through [specific value proposition]. Are you available for a quick call to discuss?</p>
                  <p className="mb-4">Looking forward to finding a path forward together.</p>
                  <p>Best,<br />[Your name]</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-green-800 mb-4">📧 The Creative Solutions Email</h3>
                <div className="bg-gray-50 p-6 rounded-xl font-mono text-sm">
                  <p className="mb-2">Subject: Re: Compensation Discussion</p>
                  <p className="mb-4">---</p>
                  <p className="mb-4">Hi [Name],</p>
                  <p className="mb-4">I appreciate you explaining the budget constraints. I'm committed to making this work because I truly believe in what [Company] is building.</p>
                  <p className="mb-4">Here are a few creative alternatives that might work within your budget:</p>
                  <p className="mb-4">1. Performance-based increase: Start at $[X] with automatic increase to $[Y] after hitting [specific metric]<br />
                  2. Signing bonus of $[X] to bridge the gap in year one<br />
                  3. Additional equity/options to align long-term incentives<br />
                  4. Extra PTO days (5-10) which has minimal budget impact<br />
                  5. Guaranteed minimum commission for first 6 months</p>
                  <p className="mb-4">Would any combination of these work? I'm flexible and want to find a win-win solution.</p>
                  <p>Thanks,<br />[Your name]</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-purple-800 mb-4">📧 The Competing Offer Play</h3>
                <div className="bg-gray-50 p-6 rounded-xl font-mono text-sm">
                  <p className="mb-2">Subject: Update on My Decision Timeline</p>
                  <p className="mb-4">---</p>
                  <p className="mb-4">Hi [Name],</p>
                  <p className="mb-4">I wanted to give you a heads up that I've received another offer that I need to respond to by [date]. </p>
                  <p className="mb-4">[Company] is still my first choice because [specific reason], but the compensation gap is significant (they're offering $[X] base + [other benefits]).</p>
                  <p className="mb-4">Is there any flexibility to revisit our discussions? I'd much prefer to join your team if we can get closer on compensation.</p>
                  <p className="mb-4">Happy to jump on a quick call if that's easier.</p>
                  <p>Best,<br />[Your name]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Objections Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              How to Handle <span className="text-red-600">Their Objections</span>
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-red-700 mb-4">🚫 "That's above our budget"</h3>
                <p className="text-gray-700 mb-3"><strong>Your response:</strong></p>
                <p className="text-blue-700 italic">
                  "I understand budgets are real. Here's my question - if I can demonstrate I'll generate 10x my salary in revenue, does the budget become more flexible? Because that's exactly what I did at [previous company]. Let's talk about performance-based increases..."
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-red-700 mb-4">🚫 "That's more than our current AEs make"</h3>
                <p className="text-gray-700 mb-3"><strong>Your response:</strong></p>
                <p className="text-blue-700 italic">
                  "I appreciate the transparency. I'm sure they're great, but I bring [unique value]. Plus, bringing in top talent often means paying market rates. Would it help if I showed you the research I've done on current market compensation?"
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-red-700 mb-4">🚫 "We have a standard package"</h3>
                <p className="text-gray-700 mb-3"><strong>Your response:</strong></p>
                <p className="text-blue-700 italic">
                  "I respect that you have standards in place. I also believe exceptional results deserve exceptional compensation. What would need to happen for us to explore an exception? I'm confident the ROI will justify it."
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-red-700 mb-4">🚫 "Take it or leave it"</h3>
                <p className="text-gray-700 mb-3"><strong>Your response:</strong></p>
                <p className="text-blue-700 italic">
                  "I appreciate your position. This is an important decision for both of us. Would you mind if I take 48 hours to consider everything? I want to make sure I can give you 100% commitment when I accept."
                </p>
                <p className="text-gray-600 text-sm mt-2">Then either accept or use the time to get a competing offer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Negotiation Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              <span className="text-purple-600">Negotiating Raises</span> at Your Current Job
            </h2>

            <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-purple-800 mb-6">🚀 The 90-Day Raise System</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Days 1-30: Document Everything</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>• Track every win, metric, and achievement</p>
                    <p>• Calculate your revenue impact in dollars</p>
                    <p>• Get testimonials from clients/colleagues</p>
                    <p>• Research market rates for your evolved role</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Days 31-60: Plant Seeds</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>• Share wins in team meetings</p>
                    <p>• Take on high-visibility projects</p>
                    <p>• Mention "market research" casually</p>
                    <p>• Build relationship with your boss's boss</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Days 61-90: Make Your Move</h4>
                  <p className="text-purple-700 italic mb-3">
                    "I'd like to discuss my compensation. I've exceeded every goal we set - [specific achievements]. My research shows similar roles are paying $[X]. I'd like to understand the path to getting there. What do you need to see from me?"
                  </p>
                  <p className="text-green-600 text-sm">Key: Make it collaborative, not confrontational</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-green-700 mb-4">✅ Timing It Right</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• After crushing a major goal</p>
                  <p>• During budget planning season</p>
                  <p>• When they're hiring for your team</p>
                  <p>• After a competitor tries to poach you</p>
                  <p>• Every 12-18 months minimum</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">❌ Never Negotiate When</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Company just had layoffs</p>
                  <p>• You just made a major mistake</p>
                  <p>• Your boss is under pressure</p>
                  <p>• Without documented wins</p>
                  <p>• From a place of desperation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              Real Results from <span className="text-green-600">Psychology-Based Negotiation</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-green-50 rounded-2xl">
                <div className="text-4xl mb-4">💰</div>
                <div className="text-3xl font-bold text-green-600 mb-2">$47K</div>
                <div className="text-gray-700">Average increase</div>
                <div className="text-sm text-gray-600 mt-2">Per negotiation</div>
              </div>
              <div className="text-center p-8 bg-blue-50 rounded-2xl">
                <div className="text-4xl mb-4">📈</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">93%</div>
                <div className="text-gray-700">Success rate</div>
                <div className="text-sm text-gray-600 mt-2">Get some increase</div>
              </div>
              <div className="text-center p-8 bg-purple-50 rounded-2xl">
                <div className="text-4xl mb-4">🎯</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">$1.2M</div>
                <div className="text-gray-700">Career difference</div>
                <div className="text-sm text-gray-600 mt-2">From negotiating</div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">🏆 Negotiation Wins</h3>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-gray-200 italic mb-3">
                    "Used the competing offer template and got a $65K increase + $25K signing bonus. They said 'budget was tight' initially. Your scripts showed me how to make them compete for ME instead of the other way around."
                  </p>
                  <div className="text-green-300 text-sm">
                    <strong>Maria Lopez</strong> • Enterprise AE • $125K → $190K
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-gray-200 italic mb-3">
                    "The 90-day raise system is genius. Documented everything, planted seeds, then asked. Got 35% raise + promotion. Boss said he was already planning to promote me 'eventually' - this accelerated it by a year."
                  </p>
                  <div className="text-green-300 text-sm">
                    <strong>James Chen</strong> • SDR → AE • $45K → $85K
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-gray-200 italic mb-3">
                    "Negotiated my first senior role using your framework. Got $40K over their initial offer plus 2x the equity. The key was value stacking during interviews. By offer time, they were terrified of losing me."
                  </p>
                  <div className="text-green-300 text-sm">
                    <strong>Rachel Kim</strong> • Senior AE • Got $275K total comp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Stop Leaving Money on the Table
          </h2>
          <p className="text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Every year you don't negotiate is $47,000 gone forever. Master the psychology that gets you paid what you're worth.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">💰 Complete Negotiation Toolkit:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>5-phase negotiation system</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Email templates (copy/paste)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Objection handling scripts</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Salary research guide</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>90-day raise system</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Negotiation calculator</span>
              </div>
            </div>
          </div>
          
          <Link href="/signup" className="inline-block bg-white text-green-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white mb-6">
            💰 Get Your $47K Raise - FREE
          </Link>
          
          <p className="text-green-200 text-lg">
            Join 25,000+ sales pros earning what they deserve
          </p>

          <div className="mt-12 pt-12 border-t border-green-500">
            <p className="text-xl text-green-100 mb-4">
              Ready to master ALL aspects of sales excellence?
            </p>
            <Link href="/signup" className="inline-block bg-green-800 hover:bg-green-900 text-white font-bold text-lg py-4 px-8 rounded-xl">
              Get Complete Sales Training - $47/month →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}