import Link from 'next/link';

export const metadata = {
  title: 'Performance Analytics | Features | Convertify',
  description: 'Track the performance of your lead magnets with Convertify\'s upcoming analytics. Understand engagement, conversions, and optimize your strategy.',
};

export default function AnalyticsPage() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-100 to-transparent dark:from-teal-900/30 dark:to-transparent opacity-50 h-1/2" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="inline-block bg-teal-500 text-white text-xs font-semibold py-1 px-3 rounded-full mb-4 uppercase">
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-900 dark:text-white">
              Track, Analyze, Optimize: Lead Magnet Analytics
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Gain valuable insights into how your lead magnets are performing. Convertify\'s upcoming Analytics feature will provide the data you need to refine your strategy and maximize conversions.
            </p>
          </div>

          {/* Feature Details Section */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {/* Section 1: What it will be */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">Understand Your Audience Engagement</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  Our upcoming Analytics dashboard will give you a clear view of key metrics for each lead magnet, such as views, downloads, completion rates, and conversion rates. Understand which content resonates most and where potential drop-offs occur.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Make data-driven decisions to improve your lead generation funnel.
                </p>
              </div>

              {/* Section 2: Key Benefits (Anticipated) */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">Anticipated Benefits</h2>
                <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Measure ROI:</strong> Clearly see the return on investment for your lead magnet creation efforts.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Optimize Content:</strong> Identify top-performing lead magnets and understand why they succeed.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Improve Targeting:</strong> Discover which topics and formats attract your ideal customers.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Data-Backed Decisions:</strong> Move beyond guesswork and refine your marketing strategy with concrete data.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3: Stay Tuned */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">We're Building Something Powerful</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Our team is hard at work developing a comprehensive analytics suite that will integrate seamlessly with your Convertify workflow. Stay tuned for updates on its release!
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center pt-16 pb-12 md:pt-20 md:pb-16 border-t border-gray-200 dark:border-gray-700 mt-12 md:mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Be the First to Know!</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Want to be notified when Convertify Analytics launches? Sign up for our newsletter or follow us on social media for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/signup" className="btn text-white bg-blue-600 hover:bg-blue-700">
                  Get Started with Convertify
                </Link>
                {/* Placeholder for a newsletter signup or social link */}
                 <Link href="#" className="btn text-gray-900 bg-white dark:text-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600">
                  Notify Me (Coming Soon)
                </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
