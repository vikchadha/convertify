import Link from 'next/link';

export const metadata = {
  title: 'Convertify for Content Creators & Bloggers | Monetize Your Content',
  description: 'Content creators and bloggers: Turn your valuable content into powerful lead magnets with Convertify. Grow your audience and create new revenue streams.',
};

export default function ContentCreatorsSolutionPage() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-transparent dark:from-pink-900/30 dark:to-transparent opacity-50 h-1/2" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-900 dark:text-white">
              Transform Your Content into Assets
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              For content creators and bloggers, your expertise is your gold. Convertify helps you package that gold into valuable lead magnets that grow your audience, engagement, and income.
            </p>
          </div>

          {/* Content Section */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {/* Section 1: The Challenge for Content Creators */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">Maximizing Your Content's Value</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  You create amazing content – blog posts, videos, podcasts. But are you fully leveraging it to build your email list, generate leads for products/services, or create premium content offers? Manually repurposing content into polished lead magnets is time-consuming and can feel like a distraction from creating.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-400">
                  <li>Struggling to convert casual readers/viewers into loyal subscribers.</li>
                  <li>Lack of time to repurpose existing content into new formats.</li>
                  <li>Difficulty designing professional-looking downloadable resources.</li>
                  <li>Missed opportunities to monetize your expertise through premium content.</li>
                </ul>
              </div>

              {/* Section 2: Convertify's Solution for Content Creators */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">Convertify: Your Content Repurposing Powerhouse</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  Convertify makes it incredibly simple to transform your existing content into valuable lead magnets:
                </p>
                <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Effortlessly Repurpose Content:</strong> Turn blog posts into ebooks, video transcripts into guides, or podcast notes into checklists.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Grow Your Email List Faster:</strong> Offer irresistible, high-value downloads that your audience will gladly exchange their email for.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Create Premium Content Offers:</strong> Easily package your best content into paid products or exclusive resources for your community.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 fill-current text-green-500 mr-3 shrink-0 mt-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span><strong>Enhance Your Authority:</strong> Professionally designed lead magnets solidify your expertise and build trust with your audience.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3: Key Features for Content Creators */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">Tools to Amplify Your Voice</h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-400">
                  <li>Flexible Content Import (Text, URL, Uploads)</li>
                  <li>AI-Assisted Content Structuring and Summarization</li>
                  <li>Beautiful Design Templates Suited for Information Products</li>
                  <li>Easy Branding and Customization</li>
                  <li>Multiple Export Formats for Easy Distribution</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center pt-16 pb-12 md:pt-20 md:pb-16 border-t border-gray-200 dark:border-gray-700 mt-12 md:mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Get More From Your Content?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Start turning your hard work into powerful assets that grow your reach and impact. Try Convertify free today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/signup" className="btn text-white bg-blue-600 hover:bg-blue-700">
                  Start Repurposing for Free
                </Link>
                <Link href="/features" className="btn text-gray-900 bg-white dark:text-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600">
                  Explore Features
                </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
