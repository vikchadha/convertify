import Link from 'next/link';
import HowItWorksComponent from '@/components/how-it-works';

export const metadata = {
  title: 'How It Works | Convertify',
  description: 'Discover the simple, powerful process to create compelling lead magnets in minutes with Convertify AI.',
}

export default function HowItWorksPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-900 dark:text-white">
                Effortless Lead Magnets, Powerful Results
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                See how Convertify transforms your content ideas into high-converting lead magnets in just a few simple steps. Say goodbye to complex processes and hello to streamlined success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reused HowItWorks Component from Homepage */}
      <div className="pb-12 md:pb-16">
        <HowItWorksComponent />
      </div>
      
      {/* Unlock Powerful Benefits Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Unlock Powerful Benefits</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our streamlined process isn't just simple – it's designed to deliver significant advantages for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <div className="mb-4">
                {/* Icon Placeholder - e.g., Clock for Time Saving */}
                <svg className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Save Time & Resources</h4>
              <p className="text-gray-600 dark:text-gray-300">Slash lead magnet creation time from days to minutes. Free up your team to focus on strategy and growth, not tedious content tasks.</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <div className="mb-4">
                {/* Icon Placeholder - e.g., Target for Conversions */}
                <svg className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path d="M12 14.5A4.5 4.5 0 007.5 10a4.5 4.5 0 000 9 4.5 4.5 0 004.5-4.5v0zM21 10a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Boost Engagement & Conversions</h4>
              <p className="text-gray-600 dark:text-gray-300">Create professionally designed, AI-optimized content that captivates your audience and drives them to action.</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <div className="mb-4">
                {/* Icon Placeholder - e.g., Palette for Branding */}
                <svg className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Maintain Brand Consistency</h4>
              <p className="text-gray-600 dark:text-gray-300">Easily customize templates and ensure all your lead magnets align perfectly with your brand identity, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 dark:bg-blue-700 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Experience the Simplicity Yourself</h2>
          <p className="text-lg text-blue-100 dark:text-blue-200 mb-8">
            Ready to revolutionize how you create lead magnets? Dive in with our free plan or talk to our team to see Convertify in action.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pricing" className="btn text-blue-600 bg-white hover:bg-gray-100 dark:text-blue-700 dark:hover:bg-gray-200">
              See Pricing & Get Started Free
            </Link>
            <Link href="/request-demo" className="btn text-white border-white border-2 hover:bg-white hover:text-blue-700 dark:hover:bg-blue-600">
              Request a Personalized Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
