export const metadata = {
  title: 'Recruiting Psychology: Make Top Talent Choose You | Hiring Training',
  description: 'Master the psychology of recruiting A-players. Learn how to make top talent leave FAANG companies to join your team using proven psychological principles',
  
  alternates: {
    canonical: 'https://convertify.com/training/recruiting-psychology',
  },
}

import React from 'react'
import Link from 'next/link'

export default function RecruitingPsychologyPage() {
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
              <div className="inline-flex items-center px-6 py-3 bg-indigo-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">🎯</span>
                The Psychology of Recruiting A-Players
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                Stop <span className="text-red-400">Chasing</span> Talent
                <br />
                Make Them <span className="text-green-400">Chase</span> You
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Master the <strong className="text-white">psychological principles</strong> that make top performers leave Google, Meta, and Apple to join YOUR team. Learn why some startups recruit A-players while others can't even get <strong className="text-green-400">callbacks from B-players</strong>.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 max-w-3xl mx-auto mb-12 text-black">
                <h3 className="text-2xl font-bold mb-4">🚀 What You'll Master:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">82%</div>
                    <div className="text-gray-700">Response rate</div>
                    <div className="text-sm text-gray-600">(vs 3% average)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">67%</div>
                    <div className="text-gray-700">Accept rate</div>
                    <div className="text-sm text-gray-600">(from FAANG)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">91%</div>
                    <div className="text-gray-700">2-year retention</div>
                    <div className="text-sm text-gray-600">(vs 45% average)</div>
                  </div>
                </div>
              </div>

              <Link href="/signup" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-black text-2xl py-6 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                🎯 Master Recruiting Psychology - $47/month
              </Link>
              
              <p className="text-indigo-300 text-lg mt-6">
                30-day guarantee • Join 3,000+ companies building dream teams
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Recruiting Truth Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              Why <span className="text-red-600">Great Companies</span> Can't Hire Great People
            </h2>
            
            <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
              <h3 className="text-2xl font-bold text-red-800 mb-6">💔 The Brutal Reality of Modern Recruiting</h3>
              <div className="space-y-6 text-red-700">
                <p className="text-lg">
                  <strong>Top talent isn't looking for jobs.</strong> They're getting 20+ recruiter messages per week. Your "exciting opportunity" is just noise in their inbox.
                </p>
                <p className="text-lg">
                  The best people have unlimited options. They can work anywhere. If you're recruiting like it's 2010, you're losing to companies that understand the psychology of attraction.
                </p>
                <p className="text-lg font-bold">
                  The difference between teams that win and teams that struggle isn't the job - it's the psychology of how you sell it.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-4">❌ What Desperate Companies Do</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Spam generic "opportunities"</p>
                  <p>• List requirements and responsibilities</p>
                  <p>• Beg for interviews</p>
                  <p>• Sell features (perks, ping pong)</p>
                  <p>• Compete on salary alone</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-700 mb-4">✅ What Talent Magnets Do</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Create personalized invitations</p>
                  <p>• Sell transformation and impact</p>
                  <p>• Make candidates qualify</p>
                  <p>• Trigger purpose and growth</p>
                  <p>• Build movements, not teams</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">🧠 The Psychology Revolution</h3>
                <p className="text-xl text-indigo-100 leading-relaxed">
                  A-players don't take jobs - they join missions. Master the psychology that makes top talent see YOUR role as their destiny, not just their next paycheck.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 7 Principles Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-indigo-600">7 Psychological Principles</span> of Magnetic Recruiting
            </h2>

            <div className="space-y-8">
              {/* Principle 1: The Chosen One */}
              <div className="bg-indigo-50 rounded-2xl p-8 border-l-4 border-indigo-500">
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">1. 🎯 The Chosen One Effect</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> People value what's exclusive and personalized.</p>
                    <p className="text-indigo-700 italic text-sm"><strong>Outreach Script:</strong> "Hi Sarah - I've been following your work on [specific project]. Your approach to [specific technique] is exactly what we need for [specific challenge]. Not sure if you're open to conversations, but I had to reach out."</p>
                  </div>
                  <div className="bg-indigo-100 p-4 rounded-xl">
                    <p className="text-indigo-800 font-semibold text-sm">Result: 82% response rate vs 3% for generic messages.</p>
                  </div>
                </div>
              </div>

              {/* Principle 2: Mission Over Money */}
              <div className="bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">2. 🚀 The Mission Magnetism</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> Purpose drives A-players more than perks.</p>
                    <p className="text-purple-700 italic text-sm"><strong>Script:</strong> "We're not hiring an engineer. We're looking for someone to help 100 million people [specific impact]. Your work at [company] shows you care about this too. Want to do it at 10x the scale?"</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-xl">
                    <p className="text-purple-800 font-semibold text-sm">Result: Top performers leave higher-paying jobs for meaningful work.</p>
                  </div>
                </div>
              </div>

              {/* Principle 3: The Challenge Frame */}
              <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-800 mb-4">3. 💪 The Challenge Frame</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> A-players are motivated by hard problems, not easy jobs.</p>
                    <p className="text-green-700 italic text-sm"><strong>Script:</strong> "Fair warning - this role isn't for everyone. We're attempting something that [competitor] said was impossible. You'd be responsible for [huge challenge]. Still interested?"</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-xl">
                    <p className="text-green-800 font-semibold text-sm">Result: Filters out B-players, attracts problem-solvers.</p>
                  </div>
                </div>
              </div>

              {/* Principle 4: Social Proof */}
              <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">4. 👥 The Talent Density Play</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> A-players want to work with other A-players.</p>
                    <p className="text-blue-700 italic text-sm"><strong>Script:</strong> "You'd be working directly with [impressive person] who built [impressive thing]. Half our team is ex-[FAANG]. The bar is extremely high - we only hire people who make everyone else better."</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <p className="text-blue-800 font-semibold text-sm">Result: Creates FOMO about missing elite team opportunity.</p>
                  </div>
                </div>
              </div>

              {/* Principle 5: Future Projection */}
              <div className="bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">5. 🔮 The Career Trajectory Sell</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> Ambitious people optimize for growth, not comfort.</p>
                    <p className="text-yellow-700 italic text-sm"><strong>Script:</strong> "In 2 years, you'll either be our [senior role] or running your own startup with the skills you gained here. Our last 3 [role] went on to [impressive outcomes]. This is a career accelerator disguised as a job."</p>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-xl">
                    <p className="text-yellow-800 font-semibold text-sm">Result: Attracts growth-minded performers who think long-term.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">🎯 Plus 2 Advanced Principles</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left mb-6 max-w-2xl mx-auto">
                  <div className="space-y-2">
                    <p className="text-green-400">✓ The Reverse Interview (They sell you)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-green-400">✓ The Scarcity Close (Limited spots)</p>
                  </div>
                </div>
                <Link href="/signup" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xl py-4 px-8 rounded-xl shadow-lg">
                  🎯 Master All 7 Principles - $47/month
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Outreach System Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-green-600">82% Response Rate</span> Outreach System
            </h2>

            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-green-800 mb-6">📧 The Perfect Recruiting Message Formula</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Line 1: The Specific Hook</h4>
                  <p className="text-gray-700 mb-2">Reference their actual work, not profile</p>
                  <p className="text-green-700 italic text-sm">"Your Redis optimization that cut latency by 90% caught my attention..."</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Line 2: The Problem Connection</h4>
                  <p className="text-gray-700 mb-2">Connect their expertise to your challenge</p>
                  <p className="text-green-700 italic text-sm">"We're facing a similar challenge at scale (100M requests/sec) and need someone who thinks like you do."</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Line 3: The Intrigue Drop</h4>
                  <p className="text-gray-700 mb-2">Hint at something bigger without overselling</p>
                  <p className="text-green-700 italic text-sm">"Can't share all the details here, but we're building something that makes [current company]'s infrastructure look simple."</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Line 4: The Soft Close</h4>
                  <p className="text-gray-700 mb-2">Low commitment, high intrigue ask</p>
                  <p className="text-green-700 italic text-sm">"Worth a 20-minute call to explore? No pressure if you're happy where you are - I know [current company] treats people well."</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">❌ Messages That Get Ignored</h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p>• "Exciting opportunity at growing startup"</p>
                  <p>• "Your profile is impressive"</p>
                  <p>• "Competitive salary and benefits"</p>
                  <p>• "We're like Uber but for..."</p>
                  <p>• Copy-paste job descriptions</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-green-700 mb-4">✅ Messages That Get Responses</h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p>• Specific work references</p>
                  <p>• Intriguing problems</p>
                  <p>• Peer validation</p>
                  <p>• Clear but mysterious</p>
                  <p>• Respectful of current role</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Interview Experience Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-purple-600">Reverse Interview</span> Method
            </h2>

            <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-purple-800 mb-6">🔄 Make Them Sell You on Themselves</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Opening Flip:</h4>
                  <p className="text-purple-700 italic">
                    "Thanks for making time. Before we dive into our questions, I'm curious - what got you interested in this conversation? What would make a move worth it for you right now?"
                  </p>
                  <p className="text-gray-600 text-sm mt-2">Makes them articulate why they want the role</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Challenge Presentation:</h4>
                  <p className="text-purple-700 italic">
                    "Let me share the real challenge here - it's not for everyone. [Describe hardest part]. How would you approach this? Have you solved anything similar?"
                  </p>
                  <p className="text-gray-600 text-sm mt-2">They prove they can handle it vs you convincing them</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Vision Alignment:</h4>
                  <p className="text-purple-700 italic">
                    "Where do you see your career in 3 years? Because this role will either be a stepping stone to [amazing outcome] or frustrate someone who wants [different path]. Which resonates more?"
                  </p>
                  <p className="text-gray-600 text-sm mt-2">Self-selection for culture fit</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">The Pull-Back Close:</h4>
                  <p className="text-purple-700 italic">
                    "I want to be transparent - we have a few exceptional candidates. You're definitely in the mix, but I need to understand: why you over them? What's your superpower?"
                  </p>
                  <p className="text-gray-600 text-sm mt-2">Creates competition and makes them fight for it</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">🎯 The Result</h3>
                <p className="text-xl text-gray-300">
                  By the end, they're convincing YOU to hire them, not the other way around. This creates psychological ownership before they even start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Closing System Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-green-600">Inevitable Yes</span> Closing System
            </h2>

            <div className="space-y-8">
              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-green-800 mb-4">📞 The Post-Interview Momentum Call</h3>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-green-700 italic mb-3">
                    "Hey [Name], quick call because the team is excited. You crushed the technical portion, but more importantly, everyone felt you'd raise our bar. I need to know - are you as excited as we are? Because if so, I want to move fast before someone else grabs you."
                  </p>
                  <p className="text-gray-600 text-sm">Creates urgency and makes them feel valued</p>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-blue-800 mb-4">💰 The Preemptive Offer Strategy</h3>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-blue-700 italic mb-3">
                    "Before we get to numbers - what would it take for you to say yes today? Not just salary, but the whole package. I want to make sure our offer reflects how badly we want you on the team."
                  </p>
                  <p className="text-gray-600 text-sm">Gets their anchor point and shows serious intent</p>
                </div>
              </div>

              <div className="bg-purple-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-purple-800 mb-4">🚀 The Future Leader Close</h3>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-purple-700 italic mb-3">
                    "I'll be straight with you - we're not just hiring for this role. We're hiring future leaders. The last 3 people in this position are now [impressive outcomes]. I see the same trajectory for you. Ready to commit to that journey?"
                  </p>
                  <p className="text-gray-600 text-sm">Sells the career, not just the job</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 text-center">💪 The Psychology Power Move</h3>
                <p className="text-xl text-green-100 text-center mb-6">
                  "We're prepared to make an offer that reflects your value. But first, I need your commitment that if we meet your requirements, you'll accept. Are you ready to make that commitment?"
                </p>
                <p className="text-green-200 text-center">This flips the dynamic - they commit before seeing the offer.</p>
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
              What Happens When You Master <span className="text-indigo-600">Recruiting Psychology</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-indigo-50 rounded-2xl">
                <div className="text-4xl mb-4">📧</div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">82%</div>
                <div className="text-gray-700">Response rate</div>
                <div className="text-sm text-gray-600 mt-2">vs 3% industry average</div>
              </div>
              <div className="text-center p-8 bg-green-50 rounded-2xl">
                <div className="text-4xl mb-4">🎯</div>
                <div className="text-3xl font-bold text-green-600 mb-2">67%</div>
                <div className="text-gray-700">Close rate</div>
                <div className="text-sm text-gray-600 mt-2">From FAANG companies</div>
              </div>
              <div className="text-center p-8 bg-purple-50 rounded-2xl">
                <div className="text-4xl mb-4">🏆</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">91%</div>
                <div className="text-gray-700">2-year retention</div>
                <div className="text-sm text-gray-600 mt-2">They stay and thrive</div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">🚀 Recruiting Psychology Success Stories</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "We were a 10-person startup competing with Google for ML engineers. Used these psychology principles and hired 3 Staff Engineers from FAANG in 2 months. They took pay cuts to join us because we sold the mission, not the perks."
                  </p>
                  <div className="text-indigo-300 text-sm">
                    <strong>Alex Kim</strong> • CTO • Series A Startup
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "The reverse interview method is magic. Had a principal engineer from Meta literally trying to convince ME why we should hire him. He's now our VP Eng and recruited 5 more A-players from his network."
                  </p>
                  <div className="text-indigo-300 text-sm">
                    <strong>Sarah Chen</strong> • Founder • 200-person startup
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "82% response rate is real. Went from begging for interviews to having Senior Engineers at Apple reaching out to ME asking about roles. Built a world-class team in 6 months using these techniques."
                  </p>
                  <div className="text-indigo-300 text-sm">
                    <strong>Marcus Johnson</strong> • VP People • Growth Stage
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Stop Settling for B-Players
          </h2>
          <p className="text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            The best people have unlimited options. Master the psychology that makes them choose YOU over Google, Meta, and seven-figure packages.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🎯 Master Recruiting Psychology:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>7 magnetic principles</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>82% response rate system</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Reverse interview method</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Inevitable yes closing</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>FAANG poaching tactics</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Complete psychology system</span>
              </div>
            </div>
          </div>
          
          <Link href="/signup" className="inline-block bg-white text-indigo-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white">
            🎯 Build Your Dream Team - $47/month
          </Link>
          
          <p className="text-indigo-200 mt-6 text-lg">
            Join 3,000+ companies building world-class teams
          </p>
        </div>
      </section>
    </div>
  )
}