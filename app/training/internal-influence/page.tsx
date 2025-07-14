export const metadata = {
  title: 'Internal Influence: Get Your Ideas Approved & Funded | Leadership Training',
  description: 'Master the psychology of selling ideas up. Get executives to champion your initiatives, approve budgets, and fast-track your career using proven influence principles.',
}

import React from 'react'
import Link from 'next/link'

export default function InternalInfluencePage() {
  return (
    <div>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> LIMITED TIME: 76% OFF Psychology Training - Only $47/month! 
        <Link href="/signup" className="underline ml-2 font-bold hover:text-red-200">Start Now →</Link>
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
              <div className="inline-flex items-center px-6 py-3 bg-orange-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">🎯</span>
                The Psychology of Getting Buy-In
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                Stop Having <span className="text-red-400">Great Ideas</span>
                <br />
                That <span className="text-red-400">Die in Meetings</span>
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Master the <strong className="text-white">psychology of internal influence</strong> that gets executives to champion your ideas, approve your budgets, and fast-track your career. Learn why some people get everything approved while others can't even get <strong className="text-green-400">5 minutes on the agenda</strong>.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 max-w-3xl mx-auto mb-12 text-black">
                <h3 className="text-2xl font-bold mb-4">🚀 What You'll Master:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">94%</div>
                    <div className="text-gray-700">Approval rate</div>
                    <div className="text-sm text-gray-600">for initiatives</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">3.7x</div>
                    <div className="text-gray-700">Faster promotions</div>
                    <div className="text-sm text-gray-600">than peers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">$2.3M</div>
                    <div className="text-gray-700">Avg budget approved</div>
                    <div className="text-sm text-gray-600">per initiative</div>
                  </div>
                </div>
              </div>

              <Link href="/signup" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-black text-2xl py-6 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                🎯 Master Internal Influence - $47/month
              </Link>
              
              <p className="text-orange-300 text-lg mt-6">
                30-day guarantee • Join 10,000+ corporate innovators
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Corporate Truth Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              Why <span className="text-red-600">Great Ideas</span> Get Killed
            </h2>
            
            <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
              <h3 className="text-2xl font-bold text-red-800 mb-6">💀 The Corporate Innovation Graveyard</h3>
              <div className="space-y-6 text-red-700">
                <p className="text-lg">
                  <strong>Executives don't buy ideas.</strong> They buy certainty, safety, and political capital. Your brilliant strategy means nothing if it threatens their comfort.
                </p>
                <p className="text-lg">
                  You could have the next billion-dollar innovation, but if you don't understand executive psychology, you'll watch inferior ideas get funded while yours dies in PowerPoint.
                </p>
                <p className="text-lg font-bold">
                  The difference between approved and rejected isn't the idea - it's how you position it psychologically.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-4">❌ What Gets Ideas Killed</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Leading with logic and data</p>
                  <p>• Threatening the status quo</p>
                  <p>• Making executives look bad</p>
                  <p>• Asking for permission</p>
                  <p>• Ignoring political dynamics</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-700 mb-4">✅ What Gets Ideas Funded</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Aligning with executive fears</p>
                  <p>• Making leaders look visionary</p>
                  <p>• Building coalitions first</p>
                  <p>• Creating inevitability</p>
                  <p>• Managing up and sideways</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">🧠 The Psychology Truth</h3>
                <p className="text-xl text-orange-100 leading-relaxed">
                  Every executive decision is 20% logic and 80% emotion. Master the psychology of making them feel safe, smart, and successful, and they'll fight to fund your ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 Laws Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-orange-600">6 Laws</span> of Corporate Influence
            </h2>

            <div className="space-y-8">
              {/* Law 1: The Executive Fear */}
              <div className="bg-orange-50 rounded-2xl p-8 border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">1. 😰 The Executive Fear Principle</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> Executives fear looking foolish more than missing opportunities.</p>
                    <p className="text-orange-700 italic text-sm"><strong>Script:</strong> "I've been thinking about the risk of NOT doing this. [Competitor] just announced they're investing heavily here. If they succeed while we wait, how do we explain that to the board?"</p>
                  </div>
                  <div className="bg-orange-100 p-4 rounded-xl">
                    <p className="text-orange-800 font-semibold text-sm">Result: Shifts from "risky to try" to "risky to wait."</p>
                  </div>
                </div>
              </div>

              {/* Law 2: The Glory Attribution */}
              <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-800 mb-4">2. 👑 The Glory Attribution Law</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> People support ideas they feel ownership of.</p>
                    <p className="text-green-700 italic text-sm"><strong>Script:</strong> "Remember when you mentioned [their idea]? That got me thinking... What if we [your idea that builds on theirs]? You basically predicted this trend."</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-xl">
                    <p className="text-green-800 font-semibold text-sm">Result: They champion "their" brilliant idea.</p>
                  </div>
                </div>
              </div>

              {/* Law 3: The Coalition */}
              <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">3. 🤝 The Pre-Meeting Coalition</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> Public agreement follows private consensus.</p>
                    <p className="text-blue-700 italic text-sm"><strong>Strategy:</strong> Meet 1-on-1 with each stakeholder before the big meeting. "I value your perspective on [idea]. What would need to be true for you to support this?"</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <p className="text-blue-800 font-semibold text-sm">Result: Walk into meetings with support already secured.</p>
                  </div>
                </div>
              </div>

              {/* Law 4: The Pilot Trap */}
              <div className="bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">4. 🪤 The Pilot Trap Technique</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> Small commitments lead to big ones.</p>
                    <p className="text-purple-700 italic text-sm"><strong>Script:</strong> "What if we just pilot this with one team for 30 days? Low risk, and if it doesn't work, we'll kill it. But if it does what I think it will..."</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-xl">
                    <p className="text-purple-800 font-semibold text-sm">Result: Pilots rarely fail when you control the metrics.</p>
                  </div>
                </div>
              </div>

              {/* Law 5: The Data Story */}
              <div className="bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">5. 📊 The Data Storytelling Law</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> Emotion drives decisions, data justifies them.</p>
                    <p className="text-yellow-700 italic text-sm"><strong>Structure:</strong> Start with story: "Imagine losing our top 3 customers..." Then data: "27% of competitors who ignored this trend lost major accounts." End with vision: "We could own this space."</p>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-xl">
                    <p className="text-yellow-800 font-semibold text-sm">Result: They feel first, think second, approve third.</p>
                  </div>
                </div>
              </div>

              {/* Law 6: The Executive Sponsor */}
              <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-800 mb-4">6. 🛡️ The Executive Air Cover</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> Ideas with sponsors survive. Ideas without die.</p>
                    <p className="text-red-700 italic text-sm"><strong>Approach:</strong> Find the exec who gains most from success. "This could be your legacy project. I'll do all the work, you get the glory. All I need is your guidance and protection."</p>
                  </div>
                  <div className="bg-red-100 p-4 rounded-xl">
                    <p className="text-red-800 font-semibold text-sm">Result: Protected ideas become funded realities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Meeting Domination Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-green-600">Meeting Psychology</span> Playbook
            </h2>

            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-green-800 mb-6">🎯 How to Control Any Meeting</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Pre-Meeting: The Setup</h4>
                  <p className="text-gray-700 mb-2">Control the narrative before anyone enters</p>
                  <p className="text-green-700 italic text-sm">Email: "Looking forward to discussing how we can [exec priority]. I'll share a framework that addresses [their fear]."</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Opening: The Frame</h4>
                  <p className="text-gray-700 mb-2">Set the psychological anchors</p>
                  <p className="text-green-700 italic text-sm">"Before we dive in, let's agree on what success looks like. We all want [shared goal], right? Great. Everything I'll show ladders to that."</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Middle: The Objection Preempt</h4>
                  <p className="text-gray-700 mb-2">Address concerns before they're raised</p>
                  <p className="text-green-700 italic text-sm">"Now, [skeptic's name] is probably thinking about budget. Smart concern. Here's how this pays for itself in 6 months..."</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Close: The Assumptive Next Step</h4>
                  <p className="text-gray-700 mb-2">Make approval feel inevitable</p>
                  <p className="text-green-700 italic text-sm">"So we're aligned on the pilot, right? I'll have the plan to you by Friday. [Sponsor], should I loop in your team directly?"</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">2.3x</div>
                <div className="text-gray-700">More ideas approved</div>
                <div className="text-sm text-gray-600">Using pre-meeting coalition</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">73%</div>
                <div className="text-gray-700">Get funded same day</div>
                <div className="text-sm text-gray-600">With assumptive close</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">91%</div>
                <div className="text-gray-700">Exec sponsor retention</div>
                <div className="text-sm text-gray-600">When they get glory</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Email Influence Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              <span className="text-purple-600">Email Templates</span> That Get Executive Attention
            </h2>

            <div className="space-y-8">
              <div className="bg-purple-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-purple-800 mb-4">📧 The Executive Urgency Email</h3>
                <div className="bg-white p-4 rounded-xl font-mono text-sm">
                  <p className="mb-2">Subject: Quick decision needed - competitor advantage at risk</p>
                  <p className="mb-4">---</p>
                  <p className="mb-4">Hi [Name],</p>
                  <p className="mb-4">[Competitor] just announced [relevant move]. This validates what we discussed, but also means we need to move faster.</p>
                  <p className="mb-4">I have a plan that could have us in market 3 months before them. 15 minutes to discuss?</p>
                  <p className="mb-4">Already ran this by [other exec] who's supportive.</p>
                  <p>[Your name]</p>
                </div>
                <p className="text-purple-600 text-sm mt-2">Creates urgency + social proof + positions you as solution</p>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-blue-800 mb-4">📧 The Budget Approval Email</h3>
                <div className="bg-white p-4 rounded-xl font-mono text-sm">
                  <p className="mb-2">Subject: ROI model for [project] - 3.7x return in Year 1</p>
                  <p className="mb-4">---</p>
                  <p className="mb-4">Team,</p>
                  <p className="mb-4">Attached is the conservative ROI model we discussed. Key highlights:</p>
                  <p className="mb-4">• Investment: $[X]<br />
                  • Conservative return: $[3.7X] in Year 1<br />
                  • Break-even: Month 4<br />
                  • Risk mitigation: Kill switch at 60 days if metrics don't hit</p>
                  <p className="mb-4">[CFO name] already reviewed the model and confirmed the assumptions are solid.</p>
                  <p className="mb-4">Ready to pull the trigger?</p>
                  <p>[Your name]</p>
                </div>
                <p className="text-blue-600 text-sm mt-2">Numbers + safety net + CFO validation = approval</p>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-green-800 mb-4">📧 The Coalition Building Email</h3>
                <div className="bg-white p-4 rounded-xl font-mono text-sm">
                  <p className="mb-2">Subject: Your input needed - [project] direction</p>
                  <p className="mb-4">---</p>
                  <p className="mb-4">Hi [Name],</p>
                  <p className="mb-4">Before Thursday's meeting, I wanted to get your perspective on [project].</p>
                  <p className="mb-4">You always have great insights on [their expertise area], and I want to make sure the proposal addresses any concerns you might have.</p>
                  <p className="mb-4">Coffee tomorrow at 3? My treat.</p>
                  <p>[Your name]</p>
                </div>
                <p className="text-green-600 text-sm mt-2">Flattery + inclusion + face-time = ally secured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Career Acceleration Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              How Influence = <span className="text-orange-600">Career Acceleration</span>
            </h2>

            <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-orange-800 mb-6">🚀 The Compound Effect of Internal Influence</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Year 1: The Foundation</h4>
                  <p className="text-gray-700 mb-2">• Get 2-3 initiatives approved</p>
                  <p className="text-gray-700 mb-2">• Build reputation as "executor"</p>
                  <p className="text-gray-700 mb-2">• Gain executive sponsors</p>
                  <p className="text-orange-600 font-semibold">Result: Promoted to Senior level</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Year 2: The Accelerator</h4>
                  <p className="text-gray-700 mb-2">• Lead major transformation</p>
                  <p className="text-gray-700 mb-2">• Get $1M+ budget approved</p>
                  <p className="text-gray-700 mb-2">• Become go-to for innovation</p>
                  <p className="text-orange-600 font-semibold">Result: Jump to Director level</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Year 3: The Breakthrough</h4>
                  <p className="text-gray-700 mb-2">• Drive company-wide initiative</p>
                  <p className="text-gray-700 mb-2">• Influence without authority</p>
                  <p className="text-gray-700 mb-2">• Executives seek your input</p>
                  <p className="text-orange-600 font-semibold">Result: VP consideration or exit to C-suite</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">⚡ The Power Law of Corporate Success</h3>
                <p className="text-xl text-gray-300 mb-6">
                  10% of employees drive 90% of innovation. They're not smarter - they understand the psychology of getting things done in organizations.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400 mb-2">3.7x</div>
                    <div className="text-gray-400 text-sm">Faster promotions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400 mb-2">94%</div>
                    <div className="text-gray-400 text-sm">Ideas approved</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400 mb-2">$470K</div>
                    <div className="text-gray-400 text-sm">Avg comp by Year 5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              What Happens When You Master <span className="text-orange-600">Internal Influence</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-orange-50 rounded-2xl">
                <div className="text-4xl mb-4">🎯</div>
                <div className="text-3xl font-bold text-orange-600 mb-2">94%</div>
                <div className="text-gray-700">Approval rate</div>
                <div className="text-sm text-gray-600 mt-2">vs 22% average</div>
              </div>
              <div className="text-center p-8 bg-green-50 rounded-2xl">
                <div className="text-4xl mb-4">🚀</div>
                <div className="text-3xl font-bold text-green-600 mb-2">3.7x</div>
                <div className="text-gray-700">Faster promotions</div>
                <div className="text-sm text-gray-600 mt-2">Than peers</div>
              </div>
              <div className="text-center p-8 bg-purple-50 rounded-2xl">
                <div className="text-4xl mb-4">💰</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">$2.3M</div>
                <div className="text-gray-700">Avg budget controlled</div>
                <div className="text-sm text-gray-600 mt-2">Within 3 years</div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">🏆 Internal Influence Success Stories</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "Went from ignored analyst to VP in 3 years using these techniques. Got a $5M innovation budget approved for an idea that was rejected twice before. The executive sponsor technique alone was worth the price."
                  </p>
                  <div className="text-orange-300 text-sm">
                    <strong>Jennifer Wu</strong> • VP Product Innovation • Fortune 500
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "The pre-meeting coalition strategy is genius. Haven't had a single idea killed in committee since learning this. Just got approval for a complete digital transformation - $12M budget. CEO is now my biggest champion."
                  </p>
                  <div className="text-orange-300 text-sm">
                    <strong>Marcus Rodriguez</strong> • Director of Strategy • Tech Company
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "Used to be frustrated that my ideas died in meetings. Now executives come to ME with problems to solve. Leading 3 company-wide initiatives and was recruited for Chief of Staff role. This psychology training changed my career trajectory."
                  </p>
                  <div className="text-orange-300 text-sm">
                    <strong>David Chen</strong> • Senior Manager → Chief of Staff
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Stop Being the Person With Great Ideas
            <br />
            That Never Happen
          </h2>
          <p className="text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Your ideas aren't the problem. Your influence strategy is. Master the psychology that gets executives to champion your initiatives and fund your vision.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🎯 Master Internal Influence:</h3>
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
                <span>Coalition building system</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Email influence templates</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Career acceleration roadmap</span>
              </div>
            </div>
          </div>
          
          <Link href="/signup" className="inline-block bg-white text-orange-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white">
            🎯 Get Everything Approved - $47/month
          </Link>
          
          <p className="text-orange-200 mt-6 text-lg">
            Join 10,000+ corporate innovators driving real change
          </p>
        </div>
      </section>
    </div>
  )
}