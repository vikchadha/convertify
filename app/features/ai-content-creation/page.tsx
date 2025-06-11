import Link from 'next/link';

export const metadata = {
  title: 'AI Content Creation | Features | Convertify',
  description: 'Leverage Convertify\'s advanced AI to generate engaging and high-quality content for your lead magnets, saving you time and boosting effectiveness.',
};

export default function AiContentCreationPage() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-green-100 to-transparent dark:from-green-900/30 dark:to-transparent opacity-50 h-1/2" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-900 dark:text-white">
              Power Up Your Content with AI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Convertify\'s AI Content Creation engine helps you craft compelling narratives, summarize complex topics, and generate engaging text for your lead magnets, all in a fraction of the time.
            </p>
          </div>

          {/* Feature Details Section */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {/* Section 1: What it is */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">Intelligent Content Generation</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  Our AI goes beyond simple text spinning. It understands context, tone, and objectives to help you create content that resonates with your audience. Whether you need to expand on an idea, summarize a long document, or generate fresh perspectives, Convertify\'s AI is your creative partner.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  From drafting ebook chapters to writing concise checklist items, our AI adapts to various formats and requirements.
                </p>
              </div>

              {/* Section 2: Key Benefits */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">Unlock Creative Potential</h2>
                <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Overcome Writer's Block:</strong> Generate ideas, outlines, and drafts to kickstart your content creation process.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Ensure Originality:</strong> Create unique content that stands out, avoiding plagiarism concerns.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Maintain Brand Voice:</strong> Guide the AI to match your specific tone and style for consistent messaging.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Optimize for Engagement:</strong> Craft content designed to capture attention and encourage action.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3: Use Cases */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">Versatile Content Applications</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Use AI-generated content for various parts of your lead magnets: introductions, summaries, chapter content, calls to action, and more. It's also perfect for repurposing existing assets into new formats.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center pt-16 pb-12 md:pt-20 md:pb-16 border-t border-gray-200 dark:border-gray-700 mt-12 md:mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Create Content That Converts?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Experience the future of content creation with Convertify\'s AI. Sign up for a free trial and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/signup" className="btn text-white bg-blue-600 hover:bg-blue-700">
                  Try AI Content Creation
                </Link>
                <Link href="/features" className="btn text-gray-900 bg-white dark:text-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600">
                  Explore All Features
                </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
