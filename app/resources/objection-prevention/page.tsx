export const metadata = {
  title: 'Objection Prevention Framework | Stop Objections Before They Start',
  description: 'Learn to prevent sales objections before they arise. Master preemptive techniques, inoculation strategies, and proactive objection handling.',
  alternates: {
    canonical: 'https://convertify.com/resources/objection-prevention',
  },
}

import Link from 'next/link';
import { ArrowLeft, Shield, AlertCircle, Zap, Target, TrendingUp, Lock, CheckCircle } from 'lucide-react';

export default function ObjectionPreventionPage() {
  return (
    <section className="relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-purple-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Link href="/resources" className="inline-flex items-center text-purple-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                ADVANCED TECHNIQUE
              </span>
              <span className="bg-purple-500/30 text-white px-4 py-1 rounded-full text-sm">
                Sales Mastery
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Stop Playing Defense: Prevent Objections Before They Kill Your Deal
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Why handle objections when you can prevent them? Master the art of inoculation, preemptive framing, and strategic disclosure to close deals smoothly.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-300" />
                <span>12 prevention techniques</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-purple-300" />
                <span>Objection audit tools</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-300" />
                <span>68% fewer objections</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="/signup" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center gap-2"
              >
                <Shield className="w-5 h-5" />
                Master Objection Prevention - $47/month
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The 4 Pillars of Objection Prevention</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Proactively address concerns before they become deal-killing objections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Preemptive Strike</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Address common concerns before prospects think of them. Control the narrative from the start.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>"Before you ask about price..."</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>"You might be wondering about implementation..."</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inoculation Theory</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Expose prospects to weakened versions of objections, then provide strong counter-arguments.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Acknowledge potential concerns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Provide compelling rebuttals</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Strategic Disclosure</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Proactively share information that builds trust and prevents skepticism.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Share limitations upfront</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Demonstrate transparency</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Commitment Ladders</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Secure small agreements that make major objections psychologically inconsistent.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Build micro-commitments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Create psychological consistency</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Common Objections Section */}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Prevent These 7 Deal Killers</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-1">"It's too expensive"</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Frame value before revealing price</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">"We need to think about it"</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Create urgency throughout the process</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">"We're happy with our current solution"</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Uncover hidden dissatisfaction early</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-1">"I need to check with my boss"</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Qualify decision makers upfront</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">"It's not the right time"</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Link to urgent business priorities</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">"We don't have budget"</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Discover budget early and create it</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Never Hear "I Need to Think About It" Again
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Get the complete objection prevention playbook with scripts, frameworks, and real examples.
              </p>
              <Link 
                href="/signup" 
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors"
              >
                Prevent Objections Now - $47/month
              </Link>
              <p className="mt-4 text-purple-200">
                30-day money-back guarantee • Instant access
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}