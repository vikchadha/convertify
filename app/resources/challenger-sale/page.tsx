export const metadata = {
  title: 'The Challenger Sale Framework | Transform Your Sales Approach',
  description: 'Master the Challenger Sale methodology. Learn to teach, tailor, and take control of customer conversations to drive unprecedented results.',
  alternates: {
    canonical: 'https://convertify.com/resources/challenger-sale',
  },
}

import Link from 'next/link';
import { ArrowLeft, BookOpen, Users, Target, TrendingUp, Rocket, Zap, CheckCircle } from 'lucide-react';

export default function ChallengerSalePage() {
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
                METHODOLOGY
              </span>
              <span className="bg-purple-500/30 text-white px-4 py-1 rounded-full text-sm">
                Enterprise Sales
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Challenger Sale: Win Complex Deals by Teaching, Not Pitching
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Transform from order-taker to trusted advisor. Learn the 5 profiles of sales reps and why Challengers win 54% more deals in complex sales.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-300" />
                <span>Commercial Teaching framework</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-300" />
                <span>Stakeholder mapping tools</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-300" />
                <span>54% higher win rate</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="/signup" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Become a Challenger - $47/month
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The 3 T's of Challenger Selling</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Master the art of teaching customers something new about their business, tailoring your message, and taking control of the sale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Teach</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Challenge customers' thinking with unique insights about their business and industry that lead to your solution.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tailor</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Customize your teaching pitch to resonate with different stakeholders and their specific business drivers.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Take Control</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Lead the sales process with confidence, pushing back on pricing and maintaining momentum toward the close.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <Rocket className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Transform Into a Challenger Rep
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Get the complete Challenger Sale training program with templates, scripts, and coaching.
              </p>
              <Link 
                href="/signup" 
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors"
              >
                Start Your Transformation - $47/month
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