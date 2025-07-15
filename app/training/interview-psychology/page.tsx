export const metadata = {title: 'Interview Psychology: Make Them Fight to Hire You | Career Training',
  description: 'Master the psychology of interviewing. Turn nervous job interviews into bidding wars for your talent using proven psychological principles.',,
  alternates: {
    canonical: 'https://convertify.com/training/interview-psychology',
  },
}

import React from 'react'
import Link from 'next/link'

export default function InterviewPsychologyPage() {
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
              <div className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">💼</span>
                The Psychology of Getting Hired
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                Stop <span className="text-red-400">Hoping</span> They Pick You
                <br />
                Make Them <span className="text-green-400">Pray</span> You Pick Them
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Master the <strong className="text-white">psychological principles</strong> that turn nerve-wracking interviews into bidding wars for your talent. Learn why qualified candidates get rejected while others with less experience get <strong className="text-green-400">multiple offers 40% above asking</strong>.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 max-w-3xl mx-auto mb-12 text-black">
                <h3 className="text-2xl font-bold mb-4">🎯 What You'll Master:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
                    <div className="text-gray-700">Offer rate from finals</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">42%</div>
                    <div className="text-gray-700">Higher salary offers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">3.2</div>
                    <div className="text-gray-700">Avg competing offers</div>
                  </div>
                </div>
              </div>

              <Link href="/signup" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-black text-2xl py-6 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                💼 Master Interview Psychology - $47/month
              </Link>
              
              <p className="text-blue-300 text-lg mt-6">
                30-day guarantee • Join 15,000+ hired at dream companies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Interview Truth Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-red-600">Shocking Truth</span> About Getting Hired
            </h2>
            
            <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
              <h3 className="text-2xl font-bold text-red-800 mb-6">🎭 Why the Best Candidates Often Don't Get Hired</h3>
              <div className="space-y-6 text-red-700">
                <p className="text-lg">
                  <strong>Companies don't hire the most qualified person.</strong> They hire the person who makes them feel the most confident about their decision.
                </p>
                <p className="text-lg">
                  You could be perfect on paper, but if you don't trigger the right psychological patterns, you'll watch less qualified candidates get YOUR dream job.
                </p>
                <p className="text-lg font-bold">
                  The difference between hired and rejected isn't your resume - it's your interview psychology.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-4">❌ What Rejected Candidates Do</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Answer questions literally</p>
                  <p>• Act grateful for the opportunity</p>
                  <p>• Sell their skills desperately</p>
                  <p>• Accept whatever they're offered</p>
                  <p>• Hope they're good enough</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-700 mb-4">✅ What Hired Candidates Do</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Tell stories that sell outcomes</p>
                  <p>• Interview them back</p>
                  <p>• Position as scarce asset</p>
                  <p>• Create competition</p>
                  <p>• Make them sell the role</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">🧠 The Psychology Secret</h3>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Interviewers make emotional decisions in the first 5 minutes, then spend 55 minutes justifying it. Master the psychology that makes them decide "yes" before you even sit down.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 Psychological Principles Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-blue-600">6 Psychological Principles</span> of Interview Domination
            </h2>

            <div className="space-y-8">
              {/* Principle 1: The Halo Effect */}
              <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">1. ✨ The Halo Effect Opening</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> First impressions create a "halo" that colors everything after.</p>
                    <p className="text-blue-700 italic text-sm"><strong>Script:</strong> "I've been following [company]'s journey since [specific event]. The way you solved [specific challenge] was brilliant. I've actually used that approach in my work at [company]."</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <p className="text-blue-800 font-semibold text-sm">Result: Positions you as insider who "gets it" vs. desperate outsider.</p>
                  </div>
                </div>
              </div>

              {/* Principle 2: Social Proof */}
              <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-800 mb-4">2. 🏆 The Competitive Positioning</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> People want what others want (social proof).</p>
                    <p className="text-green-700 italic text-sm"><strong>Script:</strong> "I'm talking to a few companies about similar roles. I'm being selective because the next move needs to be the right strategic fit. What makes this role different from what I might find elsewhere?"</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-xl">
                    <p className="text-green-800 font-semibold text-sm">Result: Shifts dynamic from "please hire me" to "convince me to choose you."</p>
                  </div>
                </div>
              </div>

              {/* Principle 3: Authority */}
              <div className="bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">3. 🎯 The Expert Reframe</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> Authority triggers automatic deference and respect.</p>
                    <p className="text-purple-700 italic text-sm"><strong>When asked about experience:</strong> "I've solved this exact challenge three times. At [Company A], we faced [problem] and I led the team that [specific outcome with metrics]. Would you like me to walk you through the playbook I'd implement here?"</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-xl">
                    <p className="text-purple-800 font-semibold text-sm">Result: Positions you as consultant solving their problem, not candidate seeking approval.</p>
                  </div>
                </div>
              </div>

              {/* Principle 4: Reciprocity */}
              <div className="bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">4. 🎁 The Value-First Approach</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> Giving value creates obligation to reciprocate.</p>
                    <p className="text-yellow-700 italic text-sm"><strong>Script:</strong> "I noticed in your job posting you mentioned [challenge]. I actually wrote a framework for solving this at my current company. I'd be happy to share it - would that be helpful?"</p>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-xl">
                    <p className="text-yellow-800 font-semibold text-sm">Result: They feel indebted before making an offer. Price goes up.</p>
                  </div>
                </div>
              </div>

              {/* Principle 5: Scarcity */}
              <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-800 mb-4">5. ⏰ The Timeline Control</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> Scarcity and deadlines drive action.</p>
                    <p className="text-red-700 italic text-sm"><strong>End of interview:</strong> "This has been great. I'm making my decision by [date 2 weeks out]. What's your timeline? I want to make sure we're aligned because you're definitely in my top 2 choices."</p>
                  </div>
                  <div className="bg-red-100 p-4 rounded-xl">
                    <p className="text-red-800 font-semibold text-sm">Result: Creates urgency and competition. They move fast to not lose you.</p>
                  </div>
                </div>
              </div>

              {/* Principle 6: Future Pacing */}
              <div className="bg-indigo-50 rounded-2xl p-8 border-l-4 border-indigo-500">
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">6. 🔮 The Future Pacing Close</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 mb-2"><strong>The Psychology:</strong> People buy into visions they can see themselves in.</p>
                    <p className="text-indigo-700 italic text-sm"><strong>Script:</strong> "Based on our conversation, here's what I see: In 6 months, we'll have [specific achievement]. By year one, [bigger goal]. The question is - are you ready for that level of transformation? Because that's what I do."</p>
                  </div>
                  <div className="bg-indigo-100 p-4 rounded-xl">
                    <p className="text-indigo-800 font-semibold text-sm">Result: They visualize success with you. Decision becomes emotional, not logical.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The STAR Method Revolution Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-green-600">S.T.A.R.+</span> Method That Gets 87% Offers
            </h2>

            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-green-800 mb-6">🌟 Beyond Basic STAR: The Psychology Upgrade</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Situation: Set the Stakes</h4>
                  <p className="text-gray-700 mb-2">Don't just describe - make them feel the pressure</p>
                  <p className="text-green-700 italic text-sm">"Company was 45 days from losing our biggest client - 40% of revenue. CEO called an emergency meeting. Everyone was panicking."</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Task: Position as Chosen One</h4>
                  <p className="text-gray-700 mb-2">Show why YOU specifically were selected</p>
                  <p className="text-green-700 italic text-sm">"CEO pulled me aside: 'You're the only one who's solved something like this before. I need you to lead this.'"</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Action: The Hero's Journey</h4>
                  <p className="text-gray-700 mb-2">Tell it like a movie - with conflict and breakthrough</p>
                  <p className="text-green-700 italic text-sm">"First attempt failed. Team wanted to give up. I called an all-nighter, whiteboarded a new approach, convinced the skeptics. We had one shot..."</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Result: Quantify the Transformation</h4>
                  <p className="text-gray-700 mb-2">Numbers + emotional impact</p>
                  <p className="text-green-700 italic text-sm">"Not only saved the client but expanded the contract 50%. CEO promoted me on the spot. But the real win? 47 jobs saved."</p>
                </div>

                <div className="bg-green-200 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">+ Learning: The Humble Brag</h4>
                  <p className="text-gray-700 mb-2">Show growth mindset and wisdom gained</p>
                  <p className="text-green-700 italic text-sm">"This taught me that crisis is when real leaders emerge. Now I actually get excited when things go wrong - it's an opportunity to create legends."</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">💡 The Secret Sauce</h3>
                <p className="text-xl text-gray-300">
                  Every answer should make them think: "We NEED this person. They'll solve problems we don't even know we have yet."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Behavioral Question Mastery Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              <span className="text-purple-600">Psychological Answers</span> to Killer Questions
            </h2>

            <div className="space-y-8">
              <div className="bg-purple-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-purple-800 mb-4">💭 "Tell me about yourself"</h3>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-purple-700 italic mb-3">
                    "I'm someone who turns chaos into systems. Started coding at 12, but realized my superpower isn't writing code - it's making teams 10x more effective. At [current company], I transformed how we ship products, cutting release time by 70%. I'm here because your scale challenges excite me, and frankly, I've outgrown my current role. Want me to dig into any specific area?"
                  </p>
                  <p className="text-gray-600 text-sm"><strong>Psychology:</strong> Positions as solution to their problems, not just another resume.</p>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-blue-800 mb-4">💰 "What are your salary expectations?"</h3>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-blue-700 italic mb-3">
                    "I'm looking at opportunities in the $[X-Y] range, but I'm more interested in the right fit than maximizing salary. I know you pay competitively for top talent. What range did you have budgeted for someone who can deliver the results we've discussed?"
                  </p>
                  <p className="text-gray-600 text-sm"><strong>Psychology:</strong> Anchors high while seeming flexible. Makes them state their range first.</p>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-green-800 mb-4">❓ "Why are you leaving your current job?"</h3>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-green-700 italic mb-3">
                    "I've accomplished everything I set out to do there - took the team from 5 to 50, built three major products, generated $20M in revenue. I'm ready for a bigger challenge, and honestly, your [specific initiative] is exactly the kind of problem I want to solve next. My current company is great, but they can't offer me [specific thing this company can]."
                  </p>
                  <p className="text-gray-600 text-sm"><strong>Psychology:</strong> Shows success and ambition, not desperation or negativity.</p>
                </div>
              </div>

              <div className="bg-red-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-red-800 mb-4">😰 "What's your biggest weakness?"</h3>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-red-700 italic mb-3">
                    "I used to be a perfectionist to a fault - would spend hours on details that didn't matter. I've learned to be strategically perfect: ruthless quality on what matters, 'good enough' on everything else. Now I ask 'what's the real impact?' before diving deep. It's made me far more effective, though I still catch myself sometimes."
                  </p>
                  <p className="text-gray-600 text-sm"><strong>Psychology:</strong> Shows self-awareness and growth. Weakness becomes strength.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Multiple Offer Strategy Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-green-600">Multiple Offer</span> Playbook
            </h2>

            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-green-800 mb-6">🎯 How to Create a Bidding War</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Step 1: Pipeline Management</h4>
                  <p className="text-gray-700 mb-2">Interview with 5-7 companies simultaneously</p>
                  <p className="text-green-700 italic text-sm">
                    "Schedule all first rounds in same week. This creates natural timeline pressure and actual options."
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Step 2: The Transparency Play</h4>
                  <p className="text-gray-700 mb-2">Be open about your process (creates urgency)</p>
                  <p className="text-green-700 italic text-sm">
                    "I want to be transparent - I'm in final rounds with 3 companies. You're my top choice because [specific reason], but I need to make a decision by [date]. What's your timeline?"
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Step 3: The Leverage Loop</h4>
                  <p className="text-gray-700 mb-2">Use each offer to improve others</p>
                  <p className="text-green-700 italic text-sm">
                    "I really want to make this work. Another company offered $[X] plus [benefit]. You're my first choice - can we get creative on the package?"
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">Step 4: The Graceful Close</h4>
                  <p className="text-gray-700 mb-2">End with relationships intact</p>
                  <p className="text-green-700 italic text-sm">
                    "This was the hardest decision I've made. I went with [company] because [specific reason], but I was genuinely torn. I hope we can work together in the future."
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">42%</div>
                <div className="text-gray-700">Higher first offer</div>
                <div className="text-sm text-gray-600">When they know there's competition</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">3.2</div>
                <div className="text-gray-700">Average offers</div>
                <div className="text-sm text-gray-600">Using this system</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">$67K</div>
                <div className="text-gray-700">Average increase</div>
                <div className="text-sm text-gray-600">From bidding wars</div>
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
              What Happens When You Master <span className="text-blue-600">Interview Psychology</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-blue-50 rounded-2xl">
                <div className="text-4xl mb-4">🎯</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
                <div className="text-gray-700">Offer rate</div>
                <div className="text-sm text-gray-600 mt-2">From final rounds</div>
              </div>
              <div className="text-center p-8 bg-green-50 rounded-2xl">
                <div className="text-4xl mb-4">💰</div>
                <div className="text-3xl font-bold text-green-600 mb-2">42%</div>
                <div className="text-gray-700">Higher salary</div>
                <div className="text-sm text-gray-600 mt-2">Than initial range</div>
              </div>
              <div className="text-center p-8 bg-purple-50 rounded-2xl">
                <div className="text-4xl mb-4">🏆</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">14 days</div>
                <div className="text-gray-700">To multiple offers</div>
                <div className="text-sm text-gray-600 mt-2">Average timeline</div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">💼 Interview Psychology Success Stories</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "Was stuck at $120K for years. Used the psychology system and got 4 offers in 2 weeks - took a role at $195K plus equity. The 'expert reframe' technique alone was worth 50K. They stopped interviewing me and started selling me on the role."
                  </p>
                  <div className="text-blue-300 text-sm">
                    <strong>David Park</strong> • Senior Engineer → Staff Engineer
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-yellow-300 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-200 italic mb-3">
                    "The multiple offer playbook is insane. Had Google and Meta bidding against each other. Ended up with $340K total comp - $90K more than I would have accepted. Now I teach my team these techniques."
                  </p>
                  <div className="text-blue-300 text-sm">
                    <strong>Sarah Chen</strong> • Product Manager • FAANG
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
            Your Dream Job is a Psychology Game
          </h2>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            The most qualified candidates often don't get hired. The ones who understand interview psychology do - at 42% higher salaries with multiple offers to choose from.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">💼 Master Interview Psychology:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>6 psychological principles</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>STAR+ storytelling method</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Answer scripts & frameworks</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Multiple offer playbook</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Salary negotiation tactics</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Complete psychology system</span>
              </div>
            </div>
          </div>
          
          <Link href="/signup" className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white">
            💼 Get Your Dream Job - $47/month
          </Link>
          
          <p className="text-blue-200 mt-6 text-lg">
            Join 15,000+ professionals hired at their dream companies
          </p>
        </div>
      </section>
    </div>
  )
}