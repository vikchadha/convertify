export const metadata = {
  title: 'SPIN Selling Framework | Master Consultative Selling',
  description: 'Master the SPIN selling methodology with our comprehensive guide. Includes question banks, practice scenarios, and implementation framework.',
  alternates: {
    canonical: 'https://convertify.com/resources/spin-selling',
  },
}

import Link from 'next/link';
import { ArrowLeft, Brain, MessageSquare, Target, TrendingUp, Lightbulb, Zap, CheckCircle } from 'lucide-react';

export default function SpinSellingPage() {
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
                Consultative Selling
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The SPIN Selling Framework That Closes Enterprise Deals
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Master consultative selling with the proven SPIN methodology. Learn to ask the right questions that uncover needs and build urgency for your solution.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-300" />
                <span>100+ SPIN questions</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-300" />
                <span>Practice scenarios</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-300" />
                <span>35% higher close rate</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="/signup" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center gap-2"
              >
                <Brain className="w-5 h-5" />
                Master SPIN Selling - $47/month
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The 4 Types of SPIN Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Learn how to guide prospects through a journey of self-discovery that leads to your solution.
            </p>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <Lightbulb className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Master Consultative Selling
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Get the complete SPIN selling framework plus all our sales methodologies and training.
              </p>
              <Link 
                href="/signup" 
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors"
              >
                Get Framework Access - $47/month
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