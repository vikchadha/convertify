import Link from 'next/link';

export const metadata = {
  title: 'Lead Magnet Generation | Features | Convertify',
  description: 'Discover how Convertify\'s powerful lead magnet generation tools help you create compelling ebooks, guides, and checklists effortlessly to capture more leads.',
};

export default function LeadMagnetGenerationPage() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-transparent dark:from-blue-900/30 dark:to-transparent opacity-50 h-1/2" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-900 dark:text-white">
              Automate Your Lead Magnet Creation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Stop spending hours manually creating lead magnets. Convertify empowers you to generate high-quality ebooks, guides, checklists, and more in minutes, not days.
            </p>
          </div>

          {/* Feature Details Section */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {/* Section 1: What it is */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">What is Automated Lead Magnet Generation?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  Convertify\'s lead magnet generation feature uses advanced AI to take your existing content (like blog posts, articles, or even just ideas) and transform it into professionally designed, ready-to-publish lead magnets. This includes formatting, imagery suggestions, and content structuring.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Imagine turning a series of blog posts into a comprehensive ebook, or a product description into a compelling features guide, all with minimal effort.
                </p>
              </div>

              {/* Section 2: Key Benefits */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">Key Benefits</h2>
                <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Save Time & Resources:</strong> Drastically reduce the time and effort spent on creating lead magnets from scratch.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Increase Output:</strong> Produce a higher volume of diverse lead magnets to target different audience segments.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Improve Quality & Consistency:</strong> Ensure all your lead magnets are professionally designed and on-brand.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Boost Conversions:</strong> Attract and convert more visitors with compelling, valuable content offers.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3: How it Works (Simplified) */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">How It Works</h2>
                <ol className="list-decimal list-inside space-y-3 text-lg text-gray-600 dark:text-gray-400">
                  <li><strong>Import Your Content:</strong> Upload existing articles, paste text, or provide a URL.</li>
                  <li><strong>AI Magic:</strong> Our AI analyzes, restructures, and enhances your content.</li>
                  <li><strong>Customize & Publish:</strong> Review, tweak the design if needed, and publish your new lead magnet.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center pt-16 pb-12 md:pt-20 md:pb-16 border-t border-gray-200 dark:border-gray-700 mt-12 md:mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Revolutionize Your Lead Magnet Strategy?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Join thousands of businesses leveraging Convertify to create stunning lead magnets that drive growth. Start your free trial today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/signup" className="btn text-white bg-blue-600 hover:bg-blue-700">
                  Start Free Trial
                </Link>
                <Link href="/pricing" className="btn text-gray-900 bg-white dark:text-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600">
                  View Pricing Plans
                </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
