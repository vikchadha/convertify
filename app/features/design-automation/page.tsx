import Link from 'next/link';

export const metadata = {
  title: 'Design Automation | Features | Convertify',
  description: 'Automate the design of your lead magnets with Convertify. Get professional, on-brand layouts and visuals without needing a designer.',
};

export default function DesignAutomationPage() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-100 to-transparent dark:from-purple-900/30 dark:to-transparent opacity-50 h-1/2" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-900 dark:text-white">
              Effortless Design, Professional Results
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Convertify\'s Design Automation takes your content and instantly applies beautiful, effective layouts. Create stunning lead magnets that reflect your brand, no design skills required.
            </p>
          </div>

          {/* Feature Details Section */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {/* Section 1: What it is */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">Automated Visual Excellence</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  Our Design Automation engine intelligently structures your content, selects appropriate fonts and colors (based on your brand settings), and arranges elements to create visually appealing and highly readable lead magnets. Choose from a library of templates or let the AI create a custom look.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Focus on your message, and let Convertify handle the presentation.
                </p>
              </div>

              {/* Section 2: Key Benefits */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">Design That Drives Engagement</h2>
                <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Professional Look & Feel:</strong> Instantly achieve high-quality design without hiring a graphic designer.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Brand Consistency:</strong> Apply your brand colors, logos, and fonts automatically for a cohesive look.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Mobile-Responsive:</strong> All designs are optimized to look great on any device.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Easy Customization:</strong> While automation is powerful, you still have control to tweak and refine designs as needed.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3: Template Library */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">Extensive Template Library</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Access a growing library of professionally designed templates for various lead magnet types and industries. Find the perfect starting point and customize it to fit your needs, or let our AI suggest the best options for your content.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center pt-16 pb-12 md:pt-20 md:pb-16 border-t border-gray-200 dark:border-gray-700 mt-12 md:mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Create Visually Stunning Lead Magnets in Minutes</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Elevate your brand with beautifully designed lead magnets. Try Convertify\'s Design Automation and see how easy it is.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/signup" className="btn text-white bg-blue-600 hover:bg-blue-700">
                  Automate Your Designs Now
                </Link>
                <Link href="/features" className="btn text-gray-900 bg-white dark:text-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600">
                  See All Features
                </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
