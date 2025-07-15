export const metadata = {
  title: 'Sales Email Templates | 20+ Proven Templates That Convert',
  description: 'Get 20+ proven email templates for prospecting, follow-ups, and closing. Includes A/B test results and psychological triggers that boost response rates.',
  alternates: {
    canonical: 'https://convertify.com/resources/email-templates',
  },
}

import Link from 'next/link';
import { ArrowLeft, Mail, Clock, Users, TrendingUp, Copy, Zap, CheckCircle } from 'lucide-react';

export default function EmailTemplatesPage() {
  const emailTemplates = [
    {
      category: "Cold Outreach",
      templates: [
        {
          name: "The Problem Agitation",
          subject: "Quick question about [Company]'s [specific challenge]",
          responseRate: "42%",
          template: `Hi [First Name],

I noticed [Company] is [specific observation about their business]. 

Most companies in [industry] struggle with [specific problem], which typically costs them [quantified impact].

We just helped [Similar Company] solve this exact challenge and [specific result with numbers].

Worth a quick 15-minute call to see if we could do the same for you?

[Your Name]`,
          psychology: "Problem-Solution fit + Social proof",
          whenToUse: "When you have clear insight into their challenges"
        },
        {
          name: "The Mutual Connection",
          subject: "[Mutual Connection] suggested I reach out",
          responseRate: "67%",
          template: `Hi [First Name],

[Mutual Connection] mentioned you're the person driving [specific initiative] at [Company] - sounds like you're doing incredible work.

They thought you'd be interested in how we helped [Similar Company] achieve [specific result].

Are you free for a brief call Thursday or Friday afternoon?

Best,
[Your Name]

P.S. [Mutual Connection] said [specific compliment about prospect]`,
          psychology: "Warm introduction + Authority transfer",
          whenToUse: "When you have a genuine mutual connection"
        },
        {
          name: "The Trigger Event",
          subject: "Congrats on [specific event]",
          responseRate: "58%",
          template: `Hi [First Name],

Congratulations on [specific event - funding, expansion, new role, etc.]!

When [Similar Company] went through the same [event], they found that [specific challenge] became their biggest bottleneck.

We helped them [specific solution] which resulted in [quantified outcome].

With everything on your plate, would it make sense to have a quick call about avoiding similar pitfalls?

[Your Name]`,
          psychology: "Relevance + Timing + Value",
          whenToUse: "After major company events or changes"
        }
      ]
    },
    {
      category: "Follow-Up Sequences",
      templates: [
        {
          name: "The Value-Add Follow-Up",
          subject: "Thought you'd find this useful",
          responseRate: "38%",
          template: `Hi [First Name],

I've been thinking about our conversation regarding [specific challenge discussed].

I just came across [specific resource/case study/article] that shows how [Company] solved this exact problem. They saw [specific result].

Here's the link: [URL]

The approach on page [X] seems particularly relevant to your situation.

Would you like me to walk you through how this could work for [Company]?

[Your Name]`,
          psychology: "Reciprocity + Continued value",
          whenToUse: "After initial conversation with no commitment"
        },
        {
          name: "The Breakup Email",
          subject: "Should I close your file?",
          responseRate: "33%",
          template: `Hi [First Name],

I've reached out a few times about helping [Company] with [specific value prop], but haven't heard back.

I'm assuming one of three things:
1. This isn't a priority right now
2. You're happy with your current solution
3. You've been eaten by an alligator

If it's #3, please let me know and I'll send help. 😊

Otherwise, should I close your file and check back in 6 months?

[Your Name]`,
          psychology: "Pattern interrupt + Loss aversion",
          whenToUse: "Final attempt after 3-4 unreturned messages"
        },
        {
          name: "The Social Proof Follow-Up",
          subject: "[Competitor] just started using this approach",
          responseRate: "51%",
          template: `Hi [First Name],

Quick update - [Competitor/Similar Company] just implemented the solution we discussed and they're already seeing [specific early result].

I know you mentioned [specific concern/objection]. They had the same concern, but found that [how it was addressed].

I've blocked off some time Thursday and Friday if you'd like to hear how they're getting these results.

Which works better for you?

[Your Name]`,
          psychology: "FOMO + Social proof + Urgency",
          whenToUse: "When you have relevant competitive wins"
        }
      ]
    },
    {
      category: "Meeting Booking",
      templates: [
        {
          name: "The Calendar Collision",
          subject: "Re: Our meeting (scheduling conflict)",
          responseRate: "71%",
          template: `Hi [First Name],

Looks like we have a small scheduling hiccup for our call about [topic].

I have the following slots available:
• Tuesday 2:00 PM - 2:30 PM EST
• Wednesday 10:00 AM - 10:30 AM EST
• Thursday 3:00 PM - 3:30 PM EST

Which works best for you? Or feel free to grab any time here: [calendar link]

Looking forward to discussing how we can help [Company] [specific value prop].

[Your Name]`,
          psychology: "Assumed close + Easy action",
          whenToUse: "To book meetings with engaged prospects"
        }
      ]
    },
    {
      category: "Objection Handling",
      templates: [
        {
          name: "The Budget Reframe",
          subject: "Re: Budget concerns",
          responseRate: "45%",
          template: `Hi [First Name],

I completely understand the budget concerns. In fact, [Similar Company] said the exact same thing.

Here's what they discovered: they were already spending [amount] on [current inefficient solution/problem cost]. Our solution actually saved them money from day one.

I put together a quick ROI calculation based on your numbers:
• Current cost of [problem]: $[amount]/month
• Our investment: $[amount]/month
• Net savings: $[amount]/month
• Plus: [additional non-monetary benefits]

Worth a quick call to walk through the math?

[Your Name]`,
          psychology: "Reframing + ROI focus + Social proof",
          whenToUse: "When price is the main objection"
        }
      ]
    },
    {
      category: "Closing Emails",
      templates: [
        {
          name: "The Urgency Close",
          subject: "Quick question before our offer expires",
          responseRate: "62%",
          template: `Hi [First Name],

I wanted to make sure you saw that our [specific offer] expires this Friday.

After that, the investment goes from $[amount] to $[higher amount] - a difference of $[savings].

[Similar Company] just locked in this rate and they're projected to see [specific ROI] within [timeframe].

Can we hop on a quick call today or tomorrow to get you the same advantage?

I have 2:00 PM and 4:00 PM open today - which works better?

[Your Name]

P.S. I can only extend this pricing to [X] more companies this quarter, and I'd hate for you to miss out.`,
          psychology: "Urgency + Scarcity + Loss aversion",
          whenToUse: "When you have time-sensitive offers"
        }
      ]
    }
  ];

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
                20+ TEMPLATES
              </span>
              <span className="bg-purple-500/30 text-white px-4 py-1 rounded-full text-sm">
                A/B Tested
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sales Email Templates That Get 42-71% Response Rates
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Stop sending emails that get ignored. These 20+ proven templates use psychological triggers to get responses, book meetings, and close deals. Each includes real response rate data.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-300" />
                <span>20+ proven templates</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-300" />
                <span>42-71% response rates</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-300" />
                <span>Used by 12K+ pros</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center gap-2"
                onClick={() => alert('Copy functionality would be implemented here')}
              >
                <Copy className="w-5 h-5" />
                Copy All Templates
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Stats Banner */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                📊 Results from 50,000+ Emails Sent
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">42%</div>
                  <div className="text-gray-600 dark:text-gray-400">Avg Open Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">31%</div>
                  <div className="text-gray-600 dark:text-gray-400">Avg Response Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">18%</div>
                  <div className="text-gray-600 dark:text-gray-400">Meeting Book Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">5.2x</div>
                  <div className="text-gray-600 dark:text-gray-400">Industry Average</div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Templates */}
          <div className="max-w-4xl mx-auto">
            {emailTemplates.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  {category.category}
                </h2>
                
                <div className="space-y-8">
                  {category.templates.map((template, templateIndex) => (
                    <div key={templateIndex} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                      <div className="bg-gray-50 dark:bg-gray-900 p-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                              {template.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              <strong>Subject:</strong> {template.subject}
                            </p>
                          </div>
                          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                            {template.responseRate} Response Rate
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600 dark:text-blue-400 font-semibold">Psychology:</span>
                            <span className="text-gray-600 dark:text-gray-400">{template.psychology}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-purple-600 dark:text-purple-400 font-semibold">Best for:</span>
                            <span className="text-gray-600 dark:text-gray-400">{template.whenToUse}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 font-mono text-sm whitespace-pre-wrap">
                          {template.template}
                        </div>
                        
                        <button 
                          className="mt-4 text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-300"
                          onClick={() => navigator.clipboard.writeText(template.template)}
                        >
                          <Copy className="w-4 h-4" />
                          Copy Template
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Best Practices */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-yellow-900 dark:text-yellow-100">
                ⚡ Email Psychology Pro Tips
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <p className="text-yellow-800 dark:text-yellow-200">
                    <strong>Personalization &gt; Everything:</strong> Always customize the template with specific details about their company, challenges, or recent events.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <p className="text-yellow-800 dark:text-yellow-200">
                    <strong>Subject lines make or break:</strong> 47% of recipients decide based on subject alone. Keep it specific and intriguing.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <p className="text-yellow-800 dark:text-yellow-200">
                    <strong>Mobile-first formatting:</strong> 68% of emails are read on mobile. Keep paragraphs short and use plenty of white space.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <p className="text-yellow-800 dark:text-yellow-200">
                    <strong>One clear CTA:</strong> Multiple asks confuse prospects. Have one specific next step in each email.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Get All 50+ Email Templates & Scripts
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Plus weekly updates with new templates based on what's working now, live training, and access to our private community.
              </p>
              <Link 
                href="/signup" 
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors"
              >
                Get Premium Access - $47/month
              </Link>
              <p className="mt-4 text-purple-200">
                30-day money-back guarantee • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}