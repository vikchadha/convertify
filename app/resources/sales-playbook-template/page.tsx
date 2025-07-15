export const metadata = {
  title: 'Sales Playbook Template | Build Your Winning Sales Process',
  description: 'Create a comprehensive sales playbook that gets your entire team selling like your top performers. Includes process maps, scripts, and training guides.',
  alternates: {
    canonical: 'https://convertify.com/resources/sales-playbook-template',
  },
}

import Link from 'next/link';
import { ArrowLeft, Download, Clock, Users, TrendingUp, BookOpen, Zap, CheckCircle, FileText } from 'lucide-react';

export default function SalesPlaybookTemplatePage() {
  const playbookSections = [
    {
      title: "Company & Product Overview",
      description: "Foundation for consistent messaging",
      components: [
        "Company mission, vision, and values",
        "Product/service descriptions and positioning",
        "Unique value propositions",
        "Competitive differentiators",
        "Target market definitions"
      ]
    },
    {
      title: "Ideal Customer Profile (ICP)",
      description: "Who to target and why",
      components: [
        "Demographic and firmographic criteria",
        "Psychographic profiles",
        "Pain points and challenges",
        "Buying triggers and events",
        "Decision-making process maps"
      ]
    },
    {
      title: "Sales Process & Methodology",
      description: "Step-by-step selling framework",
      components: [
        "Stage definitions and exit criteria",
        "Required actions per stage",
        "Qualification frameworks (BANT, MEDDIC, etc.)",
        "Sales cycle timeline expectations",
        "Handoff procedures"
      ]
    },
    {
      title: "Prospecting & Outreach",
      description: "How to find and engage prospects",
      components: [
        "Prospecting strategies",
        "Cold calling scripts and frameworks",
        "Email templates and sequences",
        "Social selling guidelines",
        "Referral request templates"
      ]
    },
    {
      title: "Discovery & Qualification",
      description: "Uncovering needs and fit",
      components: [
        "Discovery question bank",
        "Pain identification techniques",
        "Budget conversation scripts",
        "Authority mapping strategies",
        "Timeline establishment methods"
      ]
    },
    {
      title: "Demo & Presentation",
      description: "Showcasing value effectively",
      components: [
        "Demo flow and best practices",
        "Feature-benefit connections",
        "ROI calculation templates",
        "Storytelling frameworks",
        "Handling interruptions guide"
      ]
    },
    {
      title: "Objection Handling",
      description: "Turning resistance into momentum",
      components: [
        "Common objections library",
        "Response frameworks and scripts",
        "Psychological reframing techniques",
        "Competitor comparison guides",
        "Price justification strategies"
      ]
    },
    {
      title: "Closing & Negotiation",
      description: "Securing commitment",
      components: [
        "Closing technique library",
        "Trial close questions",
        "Negotiation parameters",
        "Contract terms guide",
        "Implementation planning"
      ]
    },
    {
      title: "Tools & Resources",
      description: "Tech stack and assets",
      components: [
        "CRM usage guidelines",
        "Sales enablement tools",
        "Content library index",
        "ROI calculators",
        "Proposal templates"
      ]
    },
    {
      title: "Metrics & KPIs",
      description: "Measuring success",
      components: [
        "Activity metrics targets",
        "Conversion benchmarks",
        "Pipeline velocity standards",
        "Revenue goals breakdown",
        "Performance review criteria"
      ]
    }
  ];

  return (
    <section className="relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-indigo-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Link href="/resources" className="inline-flex items-center text-indigo-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                PREMIUM TEMPLATE
              </span>
              <span className="bg-indigo-500/30 text-white px-4 py-1 rounded-full text-sm">
                Complete System
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Sales Playbook Template That Turns Average Reps Into Top Performers
            </h1>
            
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Build a comprehensive sales playbook that standardizes your winning process. This battle-tested template includes everything you need to onboard new reps in days, not months.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-300" />
                <span>10 core sections</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-300" />
                <span>73% faster ramp time</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-300" />
                <span>Used by 500+ teams</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="/signup" 
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Get Template Access - $47/month
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
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <h3 className="font-semibold text-lg mb-2 text-blue-800 dark:text-blue-200">
                🎯 Why Most Sales Teams Underperform
              </h3>
              <p className="text-blue-700 dark:text-blue-300">
                87% of sales teams lack documented processes. This means every rep sells differently, results are inconsistent, and scaling is nearly impossible. A great playbook changes everything.
              </p>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p>
                After helping 500+ sales teams build winning playbooks, we've created the ultimate template that captures everything your team needs to sell consistently and effectively. This isn't just theory — it's proven frameworks from teams achieving 200%+ of quota.
              </p>
            </div>
          </div>

          {/* Playbook Sections */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">What's Included in Your Sales Playbook Template</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {playbookSections.map((section, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg">
                      <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {index + 1}. {section.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {section.description}
                      </p>
                      <ul className="space-y-2">
                        {section.components.map((component, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{component}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                📅 30-Day Implementation Roadmap
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Week 1: Foundation</h3>
                    <p className="text-gray-600 dark:text-gray-400">Define your ICP, document your sales process, and create core messaging</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Week 2: Scripts & Templates</h3>
                    <p className="text-gray-600 dark:text-gray-400">Build your outreach sequences, discovery questions, and objection responses</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Week 3: Tools & Training</h3>
                    <p className="text-gray-600 dark:text-gray-400">Set up your tech stack, create training modules, and run pilot sessions</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Week 4: Launch & Optimize</h3>
                    <p className="text-gray-600 dark:text-gray-400">Roll out to full team, gather feedback, and iterate based on results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Real Results from Teams Using This Playbook
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">73%</div>
                <div className="text-gray-600 dark:text-gray-400">Faster rep onboarding</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">2.4x</div>
                <div className="text-gray-600 dark:text-gray-400">Increase in quota attainment</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">46%</div>
                <div className="text-gray-600 dark:text-gray-400">Higher win rates</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Stop Letting Reps Figure It Out Themselves
              </h2>
              <p className="text-xl mb-8 text-indigo-100">
                Get instant access to the complete sales playbook template, plus all our scripts, training materials, and weekly coaching.
              </p>
              <Link 
                href="/signup" 
                className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-50 transition-colors"
              >
                Get Playbook Template - $47/month
              </Link>
              <p className="mt-4 text-indigo-200">
                30-day money-back guarantee • Instant download
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}