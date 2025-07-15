export const metadata = {
  title: 'Sales Psychology & Persuasion Triggers | Science-Based Selling',
  description: 'Master the psychology of persuasion with 27 cognitive biases and psychological triggers that ethically influence buying decisions.',
  alternates: {
    canonical: 'https://convertify.com/resources/psychological-triggers',
  },
}

import Link from 'next/link';
import { ArrowLeft, Brain, Sparkles, Users, Target, TrendingUp, Heart, CheckCircle } from 'lucide-react';

export default function PsychologicalTriggersPage() {
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
                PSYCHOLOGY
              </span>
              <span className="bg-purple-500/30 text-white px-4 py-1 rounded-full text-sm">
                Persuasion Science
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              27 Psychological Triggers That Make Prospects Say YES
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Leverage cognitive biases and behavioral psychology to ethically influence decisions. Based on 50+ years of research from Cialdini, Kahneman, and more.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-300" />
                <span>27 proven triggers</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-300" />
                <span>Real-world scripts</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-300" />
                <span>47% higher conversion</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="/signup" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center gap-2"
              >
                <Brain className="w-5 h-5" />
                Master Sales Psychology - $47/month
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The 6 Universal Principles of Influence</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Master Cialdini's proven principles that drive human behavior and decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reciprocity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                People feel obligated to return favors. Give value first to create psychological debt.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Commitment & Consistency</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Once people commit, they align future actions. Start with small yeses.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Social Proof</h3>
              <p className="text-gray-600 dark:text-gray-400">
                People follow the crowd. Show how others like them have succeeded.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Liking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We say yes to people we like. Build rapport through similarity and compliments.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Authority</h3>
              <p className="text-gray-600 dark:text-gray-400">
                People defer to experts. Establish credibility with credentials and social proof.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Scarcity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Limited availability drives action. Create urgency without being pushy.
              </p>
            </div>
          </div>

          {/* Additional Triggers Section */}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-4 text-center">Plus 21 More Advanced Triggers</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-semibold">Loss Aversion</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Fear of missing out drives action</p>
              </div>
              <div>
                <p className="font-semibold">Anchoring Bias</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">First number sets expectations</p>
              </div>
              <div>
                <p className="font-semibold">Contrast Effect</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Make your offer look better</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <Brain className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Become a Master of Influence
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Get all 27 psychological triggers with word-for-word scripts and ethical implementation guides.
              </p>
              <Link 
                href="/signup" 
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors"
              >
                Unlock Sales Psychology - $47/month
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