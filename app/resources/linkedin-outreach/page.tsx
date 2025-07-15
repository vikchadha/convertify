export const metadata = {
  title: 'LinkedIn Outreach Kit | 5x Your Response Rates',
  description: 'Get proven LinkedIn templates and sequences that generate 5x higher response rates. Includes connection requests, InMail templates, and follow-up sequences.',
  alternates: {
    canonical: 'https://convertify.com/resources/linkedin-outreach',
  },
}

import Link from 'next/link';
import { ArrowLeft, Linkedin, Clock, Users, TrendingUp, MessageSquare, Zap, CheckCircle } from 'lucide-react';

export default function LinkedInOutreachPage() {
  const outreachTemplates = [
    {
      category: "Connection Requests",
      templates: [
        {
          name: "The Mutual Connection",
          responseRate: "73%",
          template: `Hi [Name], I noticed we both know [Mutual Connection] and you're doing impressive work in [specific area]. Would love to connect and share insights on [relevant topic]. Looking forward to learning from your experience!`,
          tips: "Always mention the mutual connection by name and reference something specific from their profile"
        },
        {
          name: "The Value-First Approach",
          responseRate: "68%",
          template: `Hi [Name], Just read your post about [topic] - your point about [specific detail] really resonated. I've been working on similar challenges at [Company]. Would love to connect and exchange ideas!`,
          tips: "Comment on their post first, then send this request 1-2 days later"
        },
        {
          name: "The Industry Peer",
          responseRate: "61%",
          template: `Hi [Name], Fellow [industry] professional here. Noticed you're focused on [specific initiative] at [Company] - we're tackling similar challenges. Would value connecting with someone who gets it!`,
          tips: "Works best when you're in the same industry but not direct competitors"
        }
      ]
    },
    {
      category: "First Messages (After Connecting)",
      templates: [
        {
          name: "The Soft Touch",
          responseRate: "52%",
          template: `Thanks for connecting, [Name]! 

I've been following [Company]'s growth - particularly impressed by [specific achievement/initiative]. 

Curious - what's been your biggest win so far this year?

Always great to learn from fellow [industry] leaders.

Best,
[Your Name]`,
          tips: "Ask an open-ended question that's easy and enjoyable to answer"
        },
        {
          name: "The Resource Share",
          responseRate: "47%",
          template: `Hi [Name],

Thanks for accepting my connection request!

Saw you're working on [specific challenge] based on your recent post. We just published a guide on this exact topic that's helped companies like [similar company] achieve [result].

Here's the link: [URL]

The section on [specific section] might be particularly relevant to your situation.

Hope it helps! Let me know if you have any questions.

[Your Name]`,
          tips: "Share genuinely valuable content without any ask"
        }
      ]
    },
    {
      category: "Meeting Request Messages",
      templates: [
        {
          name: "The Direct Approach",
          responseRate: "41%",
          template: `Hi [Name],

I've been impressed by what you're building at [Company], especially [specific initiative].

We've helped [similar companies] achieve [specific result] and I have some ideas that might be valuable for your team.

Would you be open to a brief 15-minute call next week to explore if there's a fit?

I have Tuesday 2pm or Thursday 10am ET available - do either work for you?

Best,
[Your Name]`,
          tips: "Only use after 2-3 valuable exchanges"
        },
        {
          name: "The Referral Request",
          responseRate: "38%",
          template: `Hi [Name],

Quick question - I noticed you work closely with [Department/Team].

We specialize in helping [Department] teams [specific value prop] and have had great success with companies like [Company 1] and [Company 2].

Would you be the right person to explore this with, or could you point me to the best contact?

Happy to share more details if helpful.

Thanks!
[Your Name]`,
          tips: "Great for getting warm introductions to the right person"
        }
      ]
    }
  ];

  const sequenceExample = {
    title: "The 5-Touch Sequence That Converts",
    steps: [
      {
        day: "Day 1",
        action: "View profile + engage with recent post",
        details: "Like and leave thoughtful comment on their most recent post"
      },
      {
        day: "Day 3", 
        action: "Send connection request",
        details: "Use personalized template referencing their post"
      },
      {
        day: "Day 4",
        action: "First message (if accepted)",
        details: "Send value-first message with helpful resource"
      },
      {
        day: "Day 10",
        action: "Second message",
        details: "Share relevant case study or insight"
      },
      {
        day: "Day 17",
        action: "Meeting request",
        details: "Soft ask for brief exploratory call"
      }
    ]
  };

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
              <span className="bg-blue-500/30 text-white px-4 py-1 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LINKEDIN MASTERY
              </span>
              <span className="bg-blue-500/30 text-white px-4 py-1 rounded-full text-sm">
                5x Response Rates
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              LinkedIn Outreach Templates That Actually Get Responses
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Stop sending generic LinkedIn messages that get ignored. Use these psychologically-optimized templates and sequences to get 5x higher response rates than industry average.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-300" />
                <span>15+ proven templates</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-300" />
                <span>38-73% response rates</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-300" />
                <span>10K+ users</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="/signup"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              >
                Download All Templates
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Stats Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                📊 LinkedIn Outreach By The Numbers
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">73%</div>
                  <div className="text-gray-600 dark:text-gray-400">Connection Accept Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">52%</div>
                  <div className="text-gray-600 dark:text-gray-400">Message Response Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">28%</div>
                  <div className="text-gray-600 dark:text-gray-400">Meeting Book Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">5.2x</div>
                  <div className="text-gray-600 dark:text-gray-400">Industry Average</div>
                </div>
              </div>
            </div>
          </div>

          {/* Templates Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Proven LinkedIn Templates</h2>
            
            {outreachTemplates.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.templates.map((template, templateIndex) => (
                    <div key={templateIndex} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {template.name}
                        </h4>
                        <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                          {template.responseRate} Response Rate
                        </span>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4 font-mono text-sm whitespace-pre-wrap">
                        {template.template}
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                        <p className="text-gray-600 dark:text-gray-400">
                          <strong>Pro tip:</strong> {template.tips}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sequence Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                {sequenceExample.title}
              </h2>
              
              <div className="space-y-4">
                {sequenceExample.steps.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-1">
                        <span className="font-bold text-gray-900 dark:text-white">{step.day}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">{step.action}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{step.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-yellow-900 dark:text-yellow-100">
                🚀 LinkedIn Outreach Best Practices
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <p className="text-yellow-800 dark:text-yellow-200">
                    <strong>Optimize your profile first:</strong> Your profile is your landing page. Make sure it clearly shows who you help and how.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <p className="text-yellow-800 dark:text-yellow-200">
                    <strong>Engage before connecting:</strong> Like and comment on their posts 2-3 times before sending a request.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <p className="text-yellow-800 dark:text-yellow-200">
                    <strong>Keep it conversational:</strong> Write like you talk. Avoid corporate jargon and salesy language.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <p className="text-yellow-800 dark:text-yellow-200">
                    <strong>Timing matters:</strong> Tuesday-Thursday, 8-10am and 4-6pm get highest response rates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Master LinkedIn Outreach + All Sales Resources
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Get instant access to all LinkedIn templates, plus 50+ sales scripts, email templates, and weekly live training.
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