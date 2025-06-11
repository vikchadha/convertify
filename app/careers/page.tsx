import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | Convertify',
  description: 'Join the Convertify team and help us revolutionize lead generation for businesses worldwide. Explore our open positions and company culture.',
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
              <p className="text-xl text-gray-400 mt-4">We're building the future of lead generation. If you're passionate about AI, marketing, and helping businesses grow, we want to hear from you.</p>
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
              <h4 className="text-xl font-bold mb-2">Customer Obsession</h4>
              <p className="text-lg text-gray-600 dark:text-gray-400">Our customers are at the heart of everything we do. We succeed when they succeed.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold mb-2">Innovation & Simplicity</h4>
              <p className="text-lg text-gray-600 dark:text-gray-400">We tackle complex problems to create elegant, simple solutions that empower our users.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold mb-2">Ownership & Impact</h4>
              <p className="text-lg text-gray-600 dark:text-gray-400">We take initiative, act with urgency, and are accountable for our work and its impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-800 dark:text-slate-100">Open Positions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">We're always looking for talented people to join our team. Don't see a role that fits? Send us your resume anyway!</p>
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
