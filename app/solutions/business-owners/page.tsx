import Link from 'next/link';

export const metadata = {
  title: 'Convertify for Small Business Owners | Grow Your Business with AI',
  description: 'Learn how Convertify helps small business owners save time, attract more customers, and grow their business with automated, high-quality lead magnets.',
};

export default function BusinessOwnersSolutionPage() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-green-100 to-transparent dark:from-green-900/30 dark:to-transparent opacity-50 h-1/2" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-900 dark:text-white">
              Grow Your Business, Not Your Workload
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              As a small business owner, your time is precious. Convertify automates lead magnet creation, helping you attract more customers and build your brand without the heavy lifting.
            </p>
          </div>

          {/* Content Section */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {/* Section 1: The Challenge for Small Business Owners */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">The Small Business Juggle</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  Wearing multiple hats is part of being a small business owner. Marketing, especially creating content like lead magnets, often gets pushed aside due to lack of time, budget, or specialized skills. Yet, attracting new leads is crucial for growth.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-400">
                  <li>Limited time to dedicate to marketing and content creation.</li>
                  <li>Budget constraints for hiring designers or copywriters.</li>
                  <li>Struggling to create professional-looking materials that build trust.</li>
                  <li>Difficulty competing with larger businesses online.</li>
                </ul>
              </div>

              {/* Section 2: Convertify's Solution for Small Business Owners */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">Convertify: Your Smart Marketing Partner</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  Convertify is designed to be the small business owner's best friend. Our AI-powered platform makes it easy and affordable to:
                </p>
                <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Create Professional Lead Magnets in Minutes:</strong> Turn your expertise into beautiful ebooks, guides, and checklists without any design or writing stress.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Save Time and Money:</strong> Automate content creation and design, freeing up your time to focus on running your business and serving customers.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Attract More Customers:</strong> Offer valuable resources that capture leads and position you as an expert in your field.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Build Your Brand:</strong> Consistently produce high-quality, branded materials that enhance your professional image.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3: Key Features for Small Business Owners */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">Simple, Powerful, Affordable</h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-400">
                  <li>User-Friendly Interface: No technical skills needed!</li>
                  <li>AI Content Assistance: Helps you write and refine your message.</li>
                  <li>Branding Customization: Easily add your logo and brand colors.</li>
                  <li>Affordable Pricing Plans: Designed to fit a small business budget.</li>
                  <li>Quick Turnaround: Get lead magnets ready in minutes, not weeks.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center pt-16 pb-12 md:pt-20 md:pb-16 border-t border-gray-200 dark:border-gray-700 mt-12 md:mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Effortlessly Grow Your Leads?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Give Convertify a try and see how easy it is to create lead magnets that work for your business. Start your free trial today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/signup" className="btn text-white bg-blue-600 hover:bg-blue-700">
                  Start My Free Trial
                </Link>
                <Link href="/pricing" className="btn text-gray-900 bg-white dark:text-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600">
                  See Pricing Plans
                </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
