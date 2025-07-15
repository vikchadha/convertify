export const metadata = {
  title: 'AI Sales Coach - Convertify',
  description: 'Get personalized sales coaching powered by AI. Practice conversations, get real-time feedback, and master the right framework for every situation.',
}

import Link from 'next/link'
import { ArrowRight, Brain, MessageSquare, Target, Zap, Users, BarChart3, Sparkles } from 'lucide-react'

export default function AICoachPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                <span className="flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  NEW: AI-Powered Coaching
                </span>
              </div>
              <h1 className="h1 font-playfair-display text-slate-800 dark:text-slate-100 mb-4">
                Your Personal AI Sales Coach
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
                Practice real conversations, get instant feedback, and master the perfect approach for every situation. Our AI coach adapts to your industry, role, and specific scenarios.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div>
                  <Link className="btn text-white bg-slate-800 hover:bg-slate-900 w-full sm:w-auto sm:ml-4 group" href="/training/ai-coach/start">
                    Start Coaching Session <ArrowRight className="w-3 h-3 tracking-normal text-slate-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 inline" />
                  </Link>
                </div>
                <div>
                  <Link className="btn text-slate-800 bg-slate-100 hover:bg-slate-200 w-full sm:w-auto sm:ml-4" href="#demo">
                    Watch Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 font-playfair-display text-slate-800 dark:text-slate-100 mb-4">How AI Coaching Works</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Our AI analyzes your conversation context and recommends the perfect psychological approach
              </p>
            </div>

            <div className="max-w-xl mx-auto md:max-w-none">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {/* Step 1 */}
                <div className="relative">
                  <div className="mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="h4 font-playfair-display text-slate-800 dark:text-slate-100 mb-2">1. Describe Your Scenario</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Tell us about your conversation: Who are you talking to? What's the context? What's your goal?
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100">
                      <Brain className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <h3 className="h4 font-playfair-display text-slate-800 dark:text-slate-100 mb-2">2. Get Framework Recommendation</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Our AI analyzes your situation and recommends the best approach: Challenger, Sandler, SPIN, or Consultative.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-100">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="h4 font-playfair-display text-slate-800 dark:text-slate-100 mb-2">3. Practice & Get Feedback</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Role-play the conversation and get real-time coaching on your approach, language, and psychology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 font-playfair-display text-slate-800 dark:text-slate-100 mb-4">Adaptive AI Coaching Features</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Feature 1 */}
              <div className="flex">
                <div className="mr-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="h4 text-slate-800 dark:text-slate-100 mb-2">Context-Aware Framework Selection</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    No more one-size-fits-all. Our AI selects the perfect sales methodology based on your specific situation, industry, and buyer personality.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex">
                <div className="mr-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="h4 text-slate-800 dark:text-slate-100 mb-2">Personality-Based Adaptation</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Learn to read personality types and adapt your approach. Practice with different buyer personas from analytical to expressive.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex">
                <div className="mr-4">
                  <MessageSquare className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="h4 text-slate-800 dark:text-slate-100 mb-2">Real-Time Conversation Analysis</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Get instant feedback on your tone, pacing, question quality, and psychological triggers. Know exactly what to improve.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex">
                <div className="mr-4">
                  <BarChart3 className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="h4 text-slate-800 dark:text-slate-100 mb-2">Progress Tracking & Analytics</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Track your improvement over time. See which frameworks work best for you and where you need more practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="relative bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 font-playfair-display text-slate-800 dark:text-slate-100 mb-4">Practice Any Scenario</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                From cold calls to board presentations, practice the conversations that matter most
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Scenario cards */}
              {[
                { title: "Enterprise Sales", desc: "Complex B2B deals with multiple stakeholders", icon: "🏢" },
                { title: "Fundraising Pitch", desc: "Convince investors to fund your vision", icon: "💰" },
                { title: "Job Interview", desc: "Sell yourself as the perfect candidate", icon: "💼" },
                { title: "Cold Outreach", desc: "Break through and book that meeting", icon: "📞" },
                { title: "Objection Handling", desc: "Turn resistance into enthusiasm", icon: "🛡️" },
                { title: "Negotiation", desc: "Get to win-win outcomes faster", icon: "🤝" },
              ].map((scenario, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{scenario.icon}</div>
                  <h3 className="h5 font-playfair-display text-slate-800 dark:text-slate-100 mb-2">{scenario.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{scenario.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="relative bg-slate-900 rounded-2xl p-8 md:p-12 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/4 -mr-24 -mt-24">
                <svg className="w-96 h-96 fill-current text-blue-600 opacity-10" viewBox="0 0 384 384">
                  <circle cx="192" cy="192" r="192" />
                </svg>
              </div>
              
              <div className="relative">
                <div className="text-center">
                  <h2 className="h2 font-playfair-display text-white mb-4">
                    Ready to Level Up Your Conversations?
                  </h2>
                  <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                    Join thousands who are using AI coaching to close more deals, raise more capital, and win more opportunities.
                  </p>
                  <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div>
                      <Link className="btn text-slate-900 bg-white hover:bg-slate-100 w-full group" href="/training/ai-coach/start">
                        Start Free Session <ArrowRight className="w-3 h-3 tracking-normal text-slate-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 inline" />
                      </Link>
                    </div>
                    <div>
                      <Link className="btn text-white bg-slate-800 hover:bg-slate-700 w-full" href="/pricing">
                        View Pricing
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}