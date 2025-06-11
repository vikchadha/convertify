import Link from 'next/link';

export const metadata = {
  title: 'Convertify for Marketing Professionals | AI Lead Magnet Automation',
  description: 'Discover how Convertify empowers marketing professionals to scale content creation, generate high-quality leads, and optimize campaigns with AI-driven lead magnets.',
};

export default function MarketersSolutionPage() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-transparent dark:from-indigo-900/30 dark:to-transparent opacity-50 h-1/2" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-900 dark:text-white">
              Amplify Your Marketing Impact with AI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Convertify helps marketing professionals like you to streamline lead magnet creation, generate more qualified leads, and achieve superior campaign results, faster than ever before.
            </p>
          </div>

          {/* Content Section */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {/* Section 1: The Challenge for Marketers */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">The Modern Marketer's Dilemma</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  In today's fast-paced digital landscape, marketers are constantly under pressure to deliver more: more content, more leads, more engagement, and more ROI. Creating high-quality lead magnets consistently can be a major bottleneck, consuming valuable time and resources that could be spent on strategy and campaign optimization.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-400">
                  <li>Struggling to scale content production for diverse campaigns.</li>
                  <li>Difficulty in consistently creating engaging and high-converting lead magnets.</li>
                  <li>Limited bandwidth to personalize offers for different audience segments.</li>
                  <li>High costs associated with outsourcing content and design.</li>
                </ul>
              </div>

              {/* Section 2: Convertify's Solution for Marketers */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">Convertify: Your AI-Powered Marketing Ally</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  Convertify empowers you to overcome these challenges by automating the most time-consuming aspects of lead magnet creation. Our AI-driven platform enables you to:
                </p>
                <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Scale Content Effortlessly:</strong> Generate a variety of lead magnets (ebooks, guides, checklists) from existing content or new ideas in minutes.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Boost Lead Quality:</strong> Create highly relevant and valuable offers that attract and convert your ideal prospects.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Enhance Campaign Performance:</strong> Quickly A/B test different lead magnets and optimize your funnels for maximum conversion.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Free Up Strategic Time:</strong> Reduce manual work and focus on higher-value marketing activities like strategy, analysis, and creative campaigns.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3: Key Features for Marketers */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">Features Built for Marketing Success</h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-400">
                  <li>AI-Powered Content Repurposing & Generation</li>
                  <li>Automated Professional Design & Branding</li>
                  <li>Extensive Template Library for Various Industries</li>
                  <li>Multiple Lead Magnet Format Outputs (PDF, Interactive)</li>
                  <li>Easy Integration with Your Existing Marketing Stack (Coming Soon)</li>
                  <li>Performance Analytics to Track Engagement (Coming Soon)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center pt-16 pb-12 md:pt-20 md:pb-16 border-t border-gray-200 dark:border-gray-700 mt-12 md:mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Supercharge Your Marketing Engine?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              See how Convertify can transform your lead generation strategy. Start a free trial or request a personalized demo for your marketing team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/signup" className="btn text-white bg-blue-600 hover:bg-blue-700">
                  Start Free Trial
                </Link>
                <Link href="/request-demo" className="btn text-gray-900 bg-white dark:text-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600">
                  Request a Demo
                </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
