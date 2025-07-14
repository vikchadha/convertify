export const metadata = {
  title: 'The 47-Second Cold Call System | Free Sales Training Guide',
  description: 'Master the psychology of cold calling with scripts that get 37% connection rates. Turn cold calls into hot leads in 47 seconds.',
}

import React from 'react'
import Link from 'next/link'

export default function ColdCallingGuidePage() {
  return (
    <div>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> Get FULL Sales Training: 76% OFF - Only $47/month! 
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
              <div className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-full text-lg font-bold mb-8 shadow-lg">
                <span className="mr-2">📞</span>
                FREE: Cold Calling Mastery Guide
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                The <span className="text-blue-400">47-Second</span>
                <br />
                Cold Call System That Gets
                <br />
                <span className="text-green-400">37% Connection Rates</span>
              </h1>

              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Stop sounding like every other salesperson. Master the <strong className="text-white">psychology-based cold calling system</strong> that turns ice-cold prospects into eager buyers in <strong className="text-green-400">under 47 seconds</strong>.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 max-w-3xl mx-auto mb-12 text-black">
                <h3 className="text-2xl font-bold mb-4">📊 Why This System Works:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">37%</div>
                    <div className="text-gray-700">Connection rate</div>
                    <div className="text-sm text-gray-600">(vs 2% average)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">47 sec</div>
                    <div className="text-gray-700">To hook interest</div>
                    <div className="text-sm text-gray-600">(or they hang up)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">4.2x</div>
                    <div className="text-gray-700">More meetings booked</div>
                    <div className="text-sm text-gray-600">(per 100 calls)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Cold Calling Crisis Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              Why 98% of Cold Calls <span className="text-red-600">Fail Instantly</span>
            </h2>
            
            <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-12">
              <h3 className="text-2xl font-bold text-red-800 mb-6">❌ The Fatal First 10 Seconds</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="text-red-600 text-2xl">📵</span>
                  <div>
                    <p className="text-red-700 font-semibold">They sound like robots reading scripts</p>
                    <p className="text-red-600 italic">"Hi, is this John? Great! My name is..."</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-red-600 text-2xl">😴</span>
                  <div>
                    <p className="text-red-700 font-semibold">They trigger the "salesperson alarm"</p>
                    <p className="text-red-600 italic">"I'm calling from XYZ Company and we help..."</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-red-600 text-2xl">🚫</span>
                  <div>
                    <p className="text-red-700 font-semibold">They ask for time they haven't earned</p>
                    <p className="text-red-600 italic">"Do you have 5 minutes to talk about..."</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">🧠 The Psychology Secret</h3>
              <p className="text-xl text-blue-100 leading-relaxed">
                People don't hang up on conversations - they hang up on pitches. Master the art of pattern interrupts and psychological hooks, and they'll actually want to keep talking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 47-Second System Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              The <span className="text-green-600">47-Second System</span> (With Exact Scripts)
            </h2>

            <div className="space-y-8">
              {/* Second 1-3: Pattern Interrupt */}
              <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">⏱️ Seconds 1-3: The Pattern Interrupt</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <p className="text-gray-700 font-semibold mb-3">The Opening That Stops Them Cold:</p>
                    <p className="text-blue-700 italic mb-4">
                      "Hi John? Hey, I know I'm calling out of the blue here, and you're probably in the middle of something - I'll be super quick. Is it a bad time?"
                    </p>
                    <p className="text-green-600 font-semibold">Why it works:</p>
                    <p className="text-gray-700">
                      • Acknowledges the interruption (builds empathy)<br />
                      • Reverse psychology (they usually say it's fine)<br />
                      • Doesn't sound like a typical sales call
                    </p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <p className="text-blue-700 text-sm"><strong>Psychology:</strong> Pattern interrupt breaks their auto-rejection response.</p>
                  </div>
                </div>
              </div>

              {/* Second 4-10: Permission Hook */}
              <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-800 mb-4">⏱️ Seconds 4-10: The Permission Hook</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <p className="text-gray-700 font-semibold mb-3">Get Micro-Agreement to Continue:</p>
                    <p className="text-green-700 italic mb-4">
                      "Look, you don't know me, I'm with [company], and honestly, I'm not even sure we can help you. Mind if I tell you why I'm calling, and you can tell me if it's worth talking?"
                    </p>
                    <p className="text-green-600 font-semibold">Key elements:</p>
                    <p className="text-gray-700">
                      • Honesty ("you don't know me")<br />
                      • Uncertainty ("not sure we can help")<br />
                      • Their control ("you can tell me")
                    </p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-xl">
                    <p className="text-green-700 text-sm"><strong>Result:</strong> 73% say "sure, go ahead" vs 12% with traditional openers.</p>
                  </div>
                </div>
              </div>

              {/* Second 11-25: Problem Agitation */}
              <div className="bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">⏱️ Seconds 11-25: The Problem Probe</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <p className="text-gray-700 font-semibold mb-3">Hit Their Pain Point Fast:</p>
                    <p className="text-purple-700 italic mb-4">
                      "I'm calling because I just helped [similar company] solve [specific problem], and when I looked at your company, I noticed [observation]. Quick question - is [problem] something you're dealing with too, or am I way off base?"
                    </p>
                    <p className="text-green-600 font-semibold">Critical components:</p>
                    <p className="text-gray-700">
                      • Social proof (similar company)<br />
                      • Specific observation (shows research)<br />
                      • Easy out ("or am I way off base")
                    </p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-xl">
                    <p className="text-purple-700 text-sm"><strong>Psychology:</strong> Makes them curious about their competitor's advantage.</p>
                  </div>
                </div>
              </div>

              {/* Second 26-40: Value Tease */}
              <div className="bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">⏱️ Seconds 26-40: The Value Tease</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <p className="text-gray-700 font-semibold mb-3">Create Curiosity Without Pitching:</p>
                    <p className="text-yellow-700 italic mb-4">
                      "Interesting... So [competitor] was dealing with the exact same thing. We helped them [specific result] in [timeframe]. Not sure if we could do the same for you, but would it make sense to explore this for 15 minutes next week?"
                    </p>
                    <p className="text-green-600 font-semibold">Power moves:</p>
                    <p className="text-gray-700">
                      • Specific results (not vague benefits)<br />
                      • Uncertainty ("not sure if...")<br />
                      • Low commitment ask (15 minutes)
                    </p>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-xl">
                    <p className="text-yellow-700 text-sm"><strong>Key:</strong> They need to feel they're missing out, not being sold to.</p>
                  </div>
                </div>
              </div>

              {/* Second 41-47: The Lock */}
              <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-800 mb-4">⏱️ Seconds 41-47: The Calendar Lock</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl">
                    <p className="text-gray-700 font-semibold mb-3">Assume the Yes:</p>
                    <p className="text-red-700 italic mb-4">
                      "Great! I'm looking at Tuesday at 2 PM or Thursday at 10 AM. Which works better for you? I'll send a calendar invite right now while we're on the phone."
                    </p>
                    <p className="text-green-600 font-semibold">Closing psychology:</p>
                    <p className="text-gray-700">
                      • Alternative choice (not yes/no)<br />
                      • Immediate action (send invite now)<br />
                      • Momentum preservation
                    </p>
                  </div>
                  <div className="bg-red-100 p-4 rounded-xl">
                    <p className="text-red-700 text-sm"><strong>Result:</strong> 82% show rate when calendar invite sent during call.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Scripts Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              <span className="text-blue-600">Industry-Specific</span> Opening Scripts
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-4">💻 SaaS/Technology</h3>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-gray-700 italic text-sm mb-3">
                    "Hi Sarah? I know you weren't expecting my call. I'm with [company] and I just helped [competitor] reduce their development time by 40%. I noticed you guys just raised Series B - is scaling your dev team a challenge right now, or am I talking to the wrong person?"
                  </p>
                  <p className="text-blue-600 text-xs font-semibold">Hook: Competitor advantage + funding event</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-green-700 mb-4">🏢 Real Estate</h3>
                <div className="bg-green-50 p-4 rounded-xl">
                  <p className="text-gray-700 italic text-sm mb-3">
                    "Hi Mike? Quick question - I just helped an agent in your market close 3 deals last month that were sitting stale for 90+ days. I saw you have 12 active listings - are any of them frustrating you right now?"
                  </p>
                  <p className="text-green-600 text-xs font-semibold">Hook: Specific pain (stale listings) + research</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-4">🏥 Healthcare</h3>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <p className="text-gray-700 italic text-sm mb-3">
                    "Dr. Johnson? I know you're busy - I'll be 30 seconds. We just helped City Medical reduce patient no-shows by 34%. I noticed you expanded to a second location - is patient scheduling becoming a nightmare, or do you have that figured out?"
                  </p>
                  <p className="text-purple-600 text-xs font-semibold">Hook: Time respect + expansion trigger</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">💰 Financial Services</h3>
                <div className="bg-red-50 p-4 rounded-xl">
                  <p className="text-gray-700 italic text-sm mb-3">
                    "Hi David? I'm calling because three advisors in your area just started using our client acquisition system and one landed a $2M account last week. With the market volatility, are you finding it harder to attract new high-net-worth clients?"
                  </p>
                  <p className="text-red-600 text-xs font-semibold">Hook: Local competition + market timing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gatekeeper Scripts Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              <span className="text-red-600">Gatekeeper Scripts</span> That Actually Work
            </h2>

            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-red-800 mb-6">🚪 The Assistant Ally Method</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 font-semibold mb-3">Script 1: The Direct Authority</p>
                  <p className="text-red-700 italic mb-3">
                    "Hi, this is [your name]. I need to speak with John Smith. Is he available?"
                  </p>
                  <p className="text-gray-600 text-sm">Say it like you know them. No explanation. 43% success rate.</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 font-semibold mb-3">Script 2: The Confusion Pattern</p>
                  <p className="text-red-700 italic mb-3">
                    "Hi, maybe you can help me? I'm supposed to connect with John about the [vague topic] project, but I'm not sure if he's the right person. Who handles [specific area] there?"
                  </p>
                  <p className="text-gray-600 text-sm">They'll either put you through or give you the right person.</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 font-semibold mb-3">Script 3: The Helpful Assistant</p>
                  <p className="text-red-700 italic mb-3">
                    "Hi, I need your help. I'm calling John back but I lost his direct number. I have his cell but I know he prefers his desk line. Could you transfer me?"
                  </p>
                  <p className="text-gray-600 text-sm">Implies existing relationship without lying.</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 font-semibold mb-3">Script 4: The Time Constraint</p>
                  <p className="text-red-700 italic mb-3">
                    "Hi, John asked me to call him back today before 3 PM about [industry topic]. Could you put me through? I know he's busy but he said it was time-sensitive."
                  </p>
                  <p className="text-gray-600 text-sm">Creates urgency without being pushy.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">🎯 Pro Tip: The Email-First Strategy</h3>
                <p className="text-gray-300 mb-4">
                  Send this email first, then reference it in your call:
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left max-w-2xl mx-auto">
                  <p className="text-green-400 mb-2">Subject: Quick question about [specific challenge]</p>
                  <p className="text-gray-300 text-sm">
                    "John - Calling you Thursday at 2 PM about [specific issue]. If that's bad timing, let me know. Otherwise, I'll keep it under 3 minutes. - [Your name]"
                  </p>
                </div>
                <p className="text-gray-400 text-sm mt-4">Then call: "I'm following up on my email to John about..."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voicemail Scripts Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              <span className="text-purple-600">Voicemails</span> That Get Callbacks
            </h2>

            <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-purple-800 mb-6">📱 The 17-Second Voicemail Formula</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 font-semibold mb-3">The Curiosity Gap Message:</p>
                  <p className="text-purple-700 italic mb-4">
                    "Hi John, [your name] here. I just helped [competitor] with something that increased their [metric] by 40%. Not sure if it's relevant for you, but figured you'd want to know what they're doing. Call me back at [number] and I'll fill you in. Again, [number]."
                  </p>
                  <p className="text-green-600 text-sm">17% callback rate (vs 2% average)</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 font-semibold mb-3">The Mystery Reference:</p>
                  <p className="text-purple-700 italic mb-4">
                    "John, it's [your name]. [Mutual connection] suggested I reach out to you about [vague benefit]. There's a time-sensitive aspect to this. Call me at [number]. Thanks."
                  </p>
                  <p className="text-green-600 text-sm">Creates urgency + social proof</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <p className="text-gray-700 font-semibold mb-3">The Problem Alert:</p>
                  <p className="text-purple-700 italic mb-4">
                    "Hi John, I noticed something on your website that's probably costing you customers. It's a quick fix but important. Call me at [number] and I'll show you. No sales pitch, just thought you should know."
                  </p>
                  <p className="text-green-600 text-sm">Triggers loss aversion psychology</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-yellow-800 mb-4">⚠️ Voicemail Don'ts</h3>
              <div className="grid md:grid-cols-2 gap-4 text-yellow-700">
                <div>
                  <p>❌ Don't mention your company name</p>
                  <p>❌ Don't say what you sell</p>
                  <p>❌ Don't ask for "a few minutes"</p>
                </div>
                <div>
                  <p>❌ Don't sound scripted</p>
                  <p>❌ Don't leave long messages</p>
                  <p>❌ Don't call just once</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Psychology Techniques Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              <span className="text-green-600">Advanced Psychology</span> Techniques
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-4">🧠 The Uncertainty Principle</h3>
                <p className="text-gray-700 mb-4">
                  Never sound 100% sure you can help. Phrases like "I'm not sure if this is relevant" or "This might not be for you" trigger reverse psychology.
                </p>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-green-700 text-sm italic">
                    "People want what they might not be able to have."
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-800 mb-4">⏰ The 90-Second Rule</h3>
                <p className="text-gray-700 mb-4">
                  Get to value within 90 seconds or lose them forever. Every second without value increases hang-up probability by 3%.
                </p>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-blue-700 text-sm italic">
                    "Value buys time. Time doesn't buy value."
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-8 rounded-2xl border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-800 mb-4">🎭 The Mirror Match</h3>
                <p className="text-gray-700 mb-4">
                  Match their energy and pace. High energy? Match it. Skeptical? Acknowledge it. Speaking fast? Speed up.
                </p>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-purple-700 text-sm italic">
                    "People trust those who feel familiar."
                  </p>
                </div>
              </div>

              <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-4">🎯 The Triple Touch System</h3>
                <p className="text-gray-700 mb-4">
                  Email → Call → LinkedIn in 24 hours. Multi-channel approach increases response rate by 287%.
                </p>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-red-700 text-sm italic">
                    "Persistence without annoyance = presence."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Tracking Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              Track These <span className="text-blue-600">5 Metrics</span> or Fail
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 pb-6 border-b">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Connection Rate</h3>
                    <p className="text-gray-700 mb-2">Target: 30%+ (With this system: 37% average)</p>
                    <p className="text-gray-600 text-sm">Calls that reach the intended person ÷ Total dials</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pb-6 border-b">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Conversation Rate</h3>
                    <p className="text-gray-700 mb-2">Target: 70%+ (Those who don't hang up in 10 seconds)</p>
                    <p className="text-gray-600 text-sm">Conversations past opener ÷ Connections</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pb-6 border-b">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Interest Rate</h3>
                    <p className="text-gray-700 mb-2">Target: 40%+ (Express interest in learning more)</p>
                    <p className="text-gray-600 text-sm">Interested prospects ÷ Conversations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pb-6 border-b">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Meeting Book Rate</h3>
                    <p className="text-gray-700 mb-2">Target: 60%+ (Of interested prospects)</p>
                    <p className="text-gray-600 text-sm">Meetings booked ÷ Interested prospects</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Show Rate</h3>
                    <p className="text-gray-700 mb-2">Target: 80%+ (Actually attend the meeting)</p>
                    <p className="text-gray-600 text-sm">Meetings attended ÷ Meetings booked</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">📊 Your Success Formula</h3>
                <p className="text-xl text-green-100">
                  100 Calls × 37% connection × 70% conversation × 40% interest × 60% booking × 80% show = <strong className="text-white">5 qualified meetings</strong>
                </p>
                <p className="text-green-200 mt-4">That's 2.5x the industry average!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Get the Complete Cold Calling System FREE
          </h2>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Stop wasting time on calls that go nowhere. Master the psychology that turns cold prospects into eager buyers in 47 seconds or less.
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">📞 Complete System Includes:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>47-second call framework</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>50+ opening scripts</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Gatekeeper strategies</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Voicemail templates</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Industry-specific scripts</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Tracking spreadsheet</span>
              </div>
            </div>
          </div>
          
          <Link href="/signup" className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-black text-3xl py-8 px-16 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-4 border-white mb-6">
            📞 Get the System - FREE
          </Link>
          
          <p className="text-blue-200 text-lg">
            Join 25,000+ sales pros with 37% connection rates
          </p>

          <div className="mt-12 pt-12 border-t border-blue-500">
            <p className="text-xl text-blue-100 mb-4">
              Want to master ALL aspects of sales psychology?
            </p>
            <Link href="/signup" className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-bold text-lg py-4 px-8 rounded-xl">
              Get Complete Training - $47/month →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}