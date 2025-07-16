export const metadata = {
  title: 'Interview Scripts That Get You Hired at 42% Higher Salaries | Free Download',
  description: 'Get word-for-word psychological scripts that turn interviews into bidding wars. Proven answers, salary negotiation tactics, and multiple offer strategies',
  
  alternates: {
    canonical: 'https://convertify.com/resources/interview-scripts',
  },
}

import React from 'react'
import Link from 'next/link'

export default function InterviewScriptsPage() {
  return (
    <div>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> WARNING: 67% of qualified candidates get rejected for psychological reasons 
        <Link href="/signup" className="underline ml-2 font-bold hover:text-red-200">Don't Be One →</Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">💼</span>
                Interview Psychology Scripts
              </div>

              <h1 className="h1 font-playfair-display text-white mb-8">
                The <span className="text-blue-400">Exact Scripts</span>
                <br />
                That Get You Hired at
                <br />
                <span className="text-green-400">42% Higher Salaries</span>
              </h1>

              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Word-for-word psychological answers that make interviewers fight to hire you - even if you're "underqualified"
              </p>
            </div>

            {/* Download CTA */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Get the Interview Domination Scripts</h3>
              <p className="text-green-100 mb-6">Used by 15,000+ professionals to land dream jobs</p>
              <Link href="/signup" className="inline-block bg-white text-green-700 hover:bg-gray-100 font-black text-xl py-4 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                Download Free Scripts →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Truth */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
            The <span className="text-red-600">Shocking Truth</span> About Getting Hired
          </h2>

          <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
            <h3 className="text-2xl font-bold text-red-800 mb-6">Why Qualified People Don't Get Hired</h3>
            <div className="space-y-4 text-red-700">
              <p className="text-lg">
                <strong>Hiring managers decide in the first 5 minutes.</strong> The next 55 minutes? They're just confirming their gut feeling.
              </p>
              <p className="text-lg">
                You could be perfect on paper, but if you don't trigger the right psychological patterns, someone less qualified will get YOUR offer.
              </p>
              <p className="text-lg font-bold">
                The difference between hired and rejected isn't your experience - it's your interview psychology.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">87%</div>
              <div className="text-gray-700">Decision made</div>
              <div className="text-sm text-gray-600">In first 5 minutes</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-yellow-600 mb-2">73%</div>
              <div className="text-gray-700">Reject qualified</div>
              <div className="text-sm text-gray-600">For "culture fit"</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">42%</div>
              <div className="text-gray-700">Higher offers</div>
              <div className="text-sm text-gray-600">With psychology</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Scripts */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
            <span className="text-blue-600">Word-for-Word Scripts</span> That Get You Hired
          </h2>

          <div className="space-y-8">
            {/* Tell me about yourself */}
            <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">📝 "Tell me about yourself"</h3>
              <div className="bg-white p-4 rounded-xl mb-4">
                <p className="text-blue-700 italic mb-3">
                  "I'm someone who turns complex problems into elegant solutions. Started my career at [Company], where I [specific achievement]. But I realized my superpower isn't just [skill] - it's making entire teams more effective. 
                  <br/><br/>
                  At [Current Company], I [specific transformation with metrics]. I'm here because your challenge with [specific thing from job posting] is exactly the kind of problem I love solving. Want me to walk you through how I'd approach it?"
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Psychology:</strong> Positions you as problem-solver, shows research, shifts to them needing you
              </p>
            </div>

            {/* Why are you leaving */}
            <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-green-800 mb-4">🚪 "Why are you leaving your current job?"</h3>
              <div className="bg-white p-4 rounded-xl mb-4">
                <p className="text-green-700 italic mb-3">
                  "I've accomplished what I set out to do there - [specific achievement]. I'm at the point where I need a bigger challenge to keep growing. 
                  <br/><br/>
                  What excites me about this role is [specific opportunity]. My current company is great, but they can't offer [specific thing this company can]. I'm being selective because the next move needs to be the right strategic fit."
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Psychology:</strong> Shows success and ambition, not desperation or negativity
              </p>
            </div>

            {/* Greatest weakness */}
            <div className="bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">😰 "What's your greatest weakness?"</h3>
              <div className="bg-white p-4 rounded-xl mb-4">
                <p className="text-purple-700 italic mb-3">
                  "I used to be someone who'd take on everything myself - classic overachiever problem. It worked when I was an individual contributor, but didn't scale. 
                  <br/><br/>
                  I've learned to be strategic about where I add value directly versus where I empower others. Now I focus on the 20% that drives 80% of results. Though I still catch myself wanting to jump in when I see inefficiency."
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Psychology:</strong> Real weakness that's actually a strength, shows growth and self-awareness
              </p>
            </div>

            {/* Salary expectations */}
            <div className="bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">💰 "What are your salary expectations?"</h3>
              <div className="bg-white p-4 rounded-xl mb-4">
                <p className="text-yellow-700 italic mb-3">
                  "I'm looking at total compensation in the $[X-Y] range based on similar roles, but I'm more interested in finding the right fit than maximizing salary. 
                  <br/><br/>
                  I know you pay competitively for top talent. What range did you have budgeted for someone who can deliver the results we've discussed?"
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Psychology:</strong> Anchors high, seems flexible, makes them reveal their number
              </p>
            </div>

            {/* Why should we hire you */}
            <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-800 mb-4">🎯 "Why should we hire you?"</h3>
              <div className="bg-white p-4 rounded-xl mb-4">
                <p className="text-red-700 italic mb-3">
                  "Because I've solved this exact challenge before, and I can do it again for you - faster. At [Company], we faced [similar situation]. I led the initiative that [specific result with metrics].
                  <br/><br/>
                  But beyond the experience, I bring urgency. I know you need someone who can hit the ground running. Give me 30 days, and you'll see measurable progress. Give me 90, and we'll have transformed [specific area]."
                </p>
              </div>
              <p className="text-gray-700">
                <strong>Psychology:</strong> Proof + confidence + specific timeline = irresistible
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tactics */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
            <span className="text-green-600">Advanced Psychology</span> Tactics
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🧠 The Halo Effect Opening</h3>
              <p className="text-gray-700 mb-4">
                Start every interview with specific knowledge about their company:
              </p>
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-blue-700 italic text-sm">
                  "I saw your team just shipped [specific feature]. The approach to [specific detail] was brilliant. How are users responding?"
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 The Scarcity Position</h3>
              <p className="text-gray-700 mb-4">
                Create competition without being arrogant:
              </p>
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-green-700 italic text-sm">
                  "I'm talking to a few companies, but this role stands out because [specific reason]. What's your timeline? I want to make sure we're aligned."
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💡 The Vision Close</h3>
              <p className="text-gray-700 mb-4">
                Paint a picture of success with you:
              </p>
              <div className="bg-purple-50 p-4 rounded-xl">
                <p className="text-purple-700 italic text-sm">
                  "Based on our conversation, here's what I see: In 6 months, we'll have [specific achievement]. The question is - are you ready for that level of transformation?"
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🔄 The Interview Flip</h3>
              <p className="text-gray-700 mb-4">
                Make them sell you on the role:
              </p>
              <div className="bg-yellow-50 p-4 rounded-xl">
                <p className="text-yellow-700 italic text-sm">
                  "What would make someone successful in this role? And honestly - what makes people fail here?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
            Everything in Your <span className="text-blue-600">Free Script Pack</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">50+ Answer Scripts</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Behavioral questions (STAR+)</li>
                <li>✓ Technical explanations</li>
                <li>✓ Leadership scenarios</li>
                <li>✓ Failure/conflict stories</li>
                <li>✓ Culture fit responses</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Negotiation Playbook</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Salary anchoring tactics</li>
                <li>✓ Multiple offer leverage</li>
                <li>✓ Benefits negotiation</li>
                <li>✓ Email templates</li>
                <li>✓ Counter-offer scripts</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Psychology Triggers</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 6 influence principles</li>
                <li>✓ Body language guide</li>
                <li>✓ Voice modulation tips</li>
                <li>✓ Zoom optimization</li>
                <li>✓ First impression hacks</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bonus Materials</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Thank you templates</li>
                <li>✓ Reference coaching</li>
                <li>✓ LinkedIn optimization</li>
                <li>✓ Rejection comebacks</li>
                <li>✓ 90-day plan template</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Hired?</h3>
            <p className="text-xl text-blue-100 mb-6">
              Stop hoping they pick you. Use psychology to make them pray you pick them.
            </p>
            <Link href="/signup" className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-black text-xl py-4 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
              Get the Interview Scripts Free →
            </Link>
            <p className="text-blue-200 text-sm mt-4">
              Instant download • No spam ever
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
            People Getting Hired Using These <span className="text-blue-600">Exact Scripts</span>
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">💼</div>
                <div>
                  <p className="text-lg text-gray-700 italic mb-3">
                    "The salary negotiation script got me $45K more than their initial offer. They went from '$120K is our max' to $165K + signing bonus. Insane."
                  </p>
                  <p className="text-gray-600 font-semibold">
                    Kevin Park • Software Engineer • Google
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <p className="text-lg text-gray-700 italic mb-3">
                    "Used the 'tell me about yourself' script word-for-word. Interviewer said it was the best answer she'd ever heard. Got the offer same day."
                  </p>
                  <p className="text-gray-600 font-semibold">
                    Maria Rodriguez • Product Manager • Meta
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <p className="text-lg text-gray-700 italic mb-3">
                    "The psychology triggers are real. Had 4 companies competing for me. Ended up with VP role I wasn't even qualified for on paper."
                  </p>
                  <p className="text-gray-600 font-semibold">
                    James Chen • VP Sales • Series B Startup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="h2 font-playfair-display mb-8">
            Your Dream Job is Waiting
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The most qualified person rarely gets hired. The person who masters interview psychology does - at 42% higher salaries with multiple offers to choose from.
          </p>
          <Link href="/signup" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-black text-2xl py-6 px-12 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
            Download Your Interview Scripts →
          </Link>
          <p className="text-blue-300 mt-6">
            Join 15,000+ professionals hired at dream companies
          </p>
        </div>
      </section>
    </div>
  )
}