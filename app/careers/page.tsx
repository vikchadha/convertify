import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | Convertify',
  description: 'Join the Convertify team and help us revolutionize sales psychology training. We\'re building the future of sales education and performance.',
  alternates: {
    canonical: 'https://convertify.com/careers',
  },
}

export default function Careers() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="h1 font-playfair-display text-white">Join Our Mission</h1>
              <p className="text-xl text-gray-400 mt-4">We're revolutionizing sales training with psychology-based education. If you're passionate about sales, psychology, education, and helping professionals achieve extraordinary results, we want to hear from you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-800 dark:text-slate-100">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-bold mb-2">Student Success First</h4>
              <p className="text-lg text-gray-600 dark:text-gray-400">Every decision we make is driven by one question: Does this help our students achieve better results?</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold mb-2">Science-Based Excellence</h4>
              <p className="text-lg text-gray-600 dark:text-gray-400">We ground everything in psychological research and proven methodologies, not sales gimmicks.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold mb-2">Growth & Impact</h4>
              <p className="text-lg text-gray-600 dark:text-gray-400">We're building something that transforms careers and lives. Every team member has ownership in that mission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-800 dark:text-slate-100">Open Positions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">We're always looking for talented people who share our passion for helping sales professionals excel. Don't see a role that fits? Send us your resume anyway!</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <h3 className="h3 font-playfair-display">No open positions at the moment.</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Check back soon for new opportunities or send your resume to <a href="mailto:careers@convertify.com" className="text-blue-600 hover:underline">careers@convertify.com</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
