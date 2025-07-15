export const metadata = {
  title: 'MEDDIC Sales Methodology | Qualify & Win Enterprise Deals',
  description: 'Master MEDDIC qualification framework. Learn to identify Metrics, Economic buyer, Decision criteria, Decision process, Identify pain, and Champion.',
  alternates: {
    canonical: 'https://convertify.com/resources/meddic',
  },
}

import Link from 'next/link';
import { ArrowLeft, Shield, Calculator, Users, Target, TrendingUp, Award, CheckCircle } from 'lucide-react';

export default function MeddicPage() {
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
                QUALIFICATION
              </span>
              <span className="bg-purple-500/30 text-white px-4 py-1 rounded-full text-sm">
                Enterprise Sales
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MEDDIC: The Elite Qualification Framework for Enterprise Sales
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Stop wasting time on deals that won't close. Master the MEDDIC methodology to qualify opportunities like a top 1% enterprise seller.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-300" />
                <span>Complete qualification checklist</span>
              </div>
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-purple-300" />
                <span>ROI calculators</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-300" />
                <span>2.5x forecast accuracy</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="/signup" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center gap-2"
              >
                <Award className="w-5 h-5" />
                Master MEDDIC - $47/month
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The 6 Elements of MEDDIC</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Each element must be thoroughly qualified to ensure deal success and accurate forecasting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Metrics</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quantify the economic impact of your solution. What specific KPIs will improve?
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Economic Buyer</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Identify who has the budget authority and final say on the purchase decision.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Decision Criteria</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Understand the specific requirements and evaluation criteria for vendor selection.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Decision Process</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Map out the steps, timeline, and stakeholders involved in the buying process.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Identify Pain</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Uncover the compelling business pain that creates urgency to change.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Champion</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Develop an internal advocate who has power, influence, and vested interest in your success.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Never Lose Another Enterprise Deal
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Get the complete MEDDIC playbook with templates, scorecards, and real-world examples.
              </p>
              <Link 
                href="/signup" 
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors"
              >
                Get MEDDIC Mastery - $47/month
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