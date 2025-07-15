export const metadata = {
  title: 'Value Selling Framework | Sell Business Value, Not Features',
  description: 'Master value-based selling to connect your solution to business outcomes. Includes ROI calculators, value propositions, and executive messaging.',
  alternates: {
    canonical: 'https://convertify.com/resources/value-selling',
  },
}

import Link from 'next/link';
import { ArrowLeft, DollarSign, Calculator, BarChart3, Target, TrendingUp, Briefcase, CheckCircle } from 'lucide-react';

export default function ValueSellingPage() {
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
                FRAMEWORK
              </span>
              <span className="bg-purple-500/30 text-white px-4 py-1 rounded-full text-sm">
                Strategic Selling
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Stop Selling Features. Start Selling Million-Dollar Business Outcomes
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Learn to quantify and communicate value in the language of executives. Transform from vendor to strategic partner with proven value frameworks.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-purple-300" />
                <span>ROI calculators</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-purple-300" />
                <span>Value quantification tools</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-300" />
                <span>3x larger deal sizes</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="/signup" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center gap-2"
              >
                <DollarSign className="w-5 h-5" />
                Master Value Selling - $47/month
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Value Selling System</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A proven methodology to connect your solution to measurable business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">The 3 Types of Value</h3>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Revenue Value</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        How your solution drives top-line growth through new opportunities or market expansion.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Cost Value</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Quantifiable savings through efficiency gains, automation, or resource optimization.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Risk Value</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Mitigation of business risks, compliance issues, or potential future costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Value Selling Process</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Diagnose Business Issues</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Uncover critical business problems worth solving</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Quantify Current State</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Calculate the cost of status quo in dollars and time</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Design Future State</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Paint a picture of measurable improvements</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold">Calculate Value Gap</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Show ROI and payback period clearly</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-semibold">Connect to Strategic Initiatives</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Align with executive priorities and budgets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <Calculator className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Close Bigger Deals Faster
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Get value calculators, executive templates, and the complete value selling playbook.
              </p>
              <Link 
                href="/signup" 
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors"
              >
                Start Selling Value - $47/month
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