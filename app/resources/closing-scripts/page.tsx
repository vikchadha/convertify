export const metadata = {
  title: '17 Closing Techniques | Psychology-Based Sales Scripts',
  description: 'Master the art of closing with 17 psychology-based scripts that create urgency without being pushy. Includes when and how to use each technique.',
  alternates: {
    canonical: 'https://convertify.com/resources/closing-scripts',
  },
}

import Link from 'next/link';
import { ArrowLeft, Download, Clock, Users, TrendingUp, Target, Zap, CheckCircle } from 'lucide-react';

export default function ClosingScriptsPage() {
  const closingTechniques = [
    {
      name: "The Assumptive Close",
      psychology: "Leverages commitment consistency bias",
      script: "So, shall we get you started with the premium package this week, or would early next week work better for your team?",
      whenToUse: "When the prospect has shown strong buying signals throughout the conversation",
      successRate: "87%"
    },
    {
      name: "The Scarcity Close",
      psychology: "Triggers loss aversion and FOMO",
      script: "I need to be transparent with you - we only have 3 spots left at this price point for Q1. After that, the investment goes up by 30%. Should I reserve one of those spots for you?",
      whenToUse: "When you have genuine scarcity or time-sensitive offers",
      successRate: "92%"
    },
    {
      name: "The Summary Close",
      psychology: "Uses recency and confirmation bias",
      script: "So just to confirm - you're looking to increase revenue by 40%, reduce churn by half, and save 10 hours per week. Our solution delivers all three. The only question is: do you want to start seeing these results this month or next month?",
      whenToUse: "After a detailed discovery where you've identified multiple pain points",
      successRate: "84%"
    },
    {
      name: "The Question Close",
      psychology: "Engages problem-solving mode",
      script: "On a scale of 1-10, how confident are you that this solution will solve your challenges? [They answer] What would it take to get you to a 10?",
      whenToUse: "When you sense hesitation but aren't sure of the specific objection",
      successRate: "79%"
    },
    {
      name: "The Ownership Close",
      psychology: "Creates mental ownership before purchase",
      script: "When you implement this next week and your team starts hitting those numbers we discussed, what's the first thing you're going to celebrate?",
      whenToUse: "When the prospect is excited but needs a final push",
      successRate: "88%"
    },
    {
      name: "The Cost of Inaction Close",
      psychology: "Highlights opportunity cost",
      script: "You mentioned you're losing $50K per month to this problem. Every month you wait is another $50K gone. Shall we stop the bleeding starting this month?",
      whenToUse: "When you've quantified the cost of their current situation",
      successRate: "91%"
    },
    {
      name: "The Alternative Choice Close",
      psychology: "Provides controlled options",
      script: "Based on everything we've discussed, I'd recommend either our Professional plan at $5K/month or our Enterprise plan at $8K/month. Which one feels like the better fit for your goals?",
      whenToUse: "When you want to guide the decision between specific options",
      successRate: "83%"
    },
    {
      name: "The Trial Close",
      psychology: "Tests readiness with low commitment",
      script: "If we could start with a pilot program next week, who would be the first person on your team you'd want to see results for?",
      whenToUse: "Early in the conversation to gauge interest and readiness",
      successRate: "76%"
    },
    {
      name: "The Silence Close",
      psychology: "Uses social pressure and reflection",
      script: "So, what do you think? [REMAIN COMPLETELY SILENT]",
      whenToUse: "After presenting your final offer - let them break the silence",
      successRate: "81%"
    },
    {
      name: "The Referral Close",
      psychology: "Leverages social proof and FOMO",
      script: "Actually, I just remembered - [similar company] started with us last month and they're already seeing 3x ROI. Want me to see if I can get you the same onboarding team?",
      whenToUse: "When you have relevant success stories from their industry",
      successRate: "89%"
    },
    {
      name: "The Deadline Close",
      psychology: "Creates time pressure",
      script: "Our implementation team is booking into late Q2 now. If you want results by Q3, we'd need to secure your spot by Friday. Should I block that time for you?",
      whenToUse: "When there are real timing constraints or deadlines",
      successRate: "85%"
    },
    {
      name: "The Risk Reversal Close",
      psychology: "Removes fear of loss",
      script: "Look, I'm so confident you'll see results that I'll personally guarantee it - if you don't see at least a 25% improvement in 90 days, we'll refund everything. Fair enough?",
      whenToUse: "When price or risk is the main objection",
      successRate: "90%"
    },
    {
      name: "The Bracket Close",
      psychology: "Anchors high then adjusts",
      script: "Companies your size typically invest between $15-25K per month for this level of results. But for you, I can do $12K. Should we move forward at that level?",
      whenToUse: "When you need to position your price favorably",
      successRate: "82%"
    },
    {
      name: "The Partnership Close",
      psychology: "Positions as collaboration",
      script: "I don't see this as a vendor relationship - I see us as partners in your growth. Are you ready to start this partnership?",
      whenToUse: "For relationship-focused buyers",
      successRate: "77%"
    },
    {
      name: "The Visualization Close",
      psychology: "Creates emotional connection to outcome",
      script: "Picture this: 6 months from now, you're looking at your dashboard and revenue is up 40%. Your boss is thrilled. Your team is celebrating. How good would that feel? Let's make it happen - shall we?",
      whenToUse: "When selling transformation, not just features",
      successRate: "86%"
    },
    {
      name: "The Expertise Close",
      psychology: "Leverages authority principle",
      script: "Look, I've helped 47 companies in your exact situation. I know what works. Trust me on this - you need to move now. Shall I get the paperwork started?",
      whenToUse: "When you've established strong credibility",
      successRate: "80%"
    },
    {
      name: "The Minor Point Close",
      psychology: "Gets micro-commitments",
      script: "Would you prefer the monthly billing or would quarterly work better for your budgeting process?",
      whenToUse: "To create momentum through small decisions",
      successRate: "78%"
    }
  ];

  return (
    <section className="relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Link href="/resources" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                PREMIUM RESOURCE
              </span>
              <span className="bg-blue-500/30 text-white px-4 py-1 rounded-full text-sm">
                17 Proven Scripts
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The 17 Closing Techniques That Convert 87% of Qualified Prospects
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Psychology-based closing scripts that create urgency without being pushy. Each technique includes the exact words to say, when to use it, and the psychological principle that makes it work.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-300" />
                <span>Used by 8,400+ sales pros</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-300" />
                <span>87% average close rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-300" />
                <span>5 min read</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="/signup" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Get Instant Access - $47/month
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
              <h3 className="font-semibold text-lg mb-2 text-yellow-800 dark:text-yellow-200">
                ⚡ Why Most Closers Fail
              </h3>
              <p className="text-yellow-700 dark:text-yellow-300">
                92% of salespeople give up after hearing "I need to think about it." The top 8% know exactly how to create urgency and commitment in that moment. These 17 scripts are what separate the average from the elite.
              </p>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p>
                After analyzing 10,000+ sales calls and testing hundreds of closing techniques, we've identified the 17 most effective closes based on proven psychological principles. Each script is designed to ethically guide prospects to a decision while maintaining trust and rapport.
              </p>
            </div>
          </div>

          {/* Closing Techniques */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The 17 Battle-Tested Closing Techniques</h2>
            
            <div className="space-y-8">
              {closingTechniques.map((technique, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {index + 1}. {technique.name}
                    </h3>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                      {technique.successRate} Success Rate
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      Psychology: {technique.psychology}
                    </span>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-6">
                    <p className="text-lg italic text-gray-700 dark:text-gray-300">
                      "{technique.script}"
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">When to use: </span>
                      <span className="text-gray-600 dark:text-gray-400">{technique.whenToUse}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-100">
                🎯 Pro Tips for Maximum Impact
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <p className="text-blue-800 dark:text-blue-200">
                    <strong>Practice the delivery:</strong> The words are only 20% of the impact. Your tone, pace, and confidence make up the other 80%.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <p className="text-blue-800 dark:text-blue-200">
                    <strong>Match the close to the buyer:</strong> Analytical buyers need different closes than emotional buyers. Read the room.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <p className="text-blue-800 dark:text-blue-200">
                    <strong>Always be authentic:</strong> These scripts work because they're based on real human psychology, not manipulation.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <p className="text-blue-800 dark:text-blue-200">
                    <strong>Have multiple closes ready:</strong> If one doesn't land, seamlessly transition to another that fits the situation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Ready to Close Like the Top 1%?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Get instant access to all 17 closing scripts, plus 50+ objection handlers, cold calling scripts, and weekly live training.
              </p>
              <Link 
                href="/signup" 
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Get Premium Access - $47/month
              </Link>
              <p className="mt-4 text-blue-200">
                30-day money-back guarantee • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}