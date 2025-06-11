export const metadata = {
  title: 'About Us | Convertify',
  description: 'Learn more about Convertify, our mission, and our team.',
}

import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-900 dark:text-white">
                Empowering Your Growth with AI-Driven Lead Generation
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Tired of the endless cycle of manual content creation for lead magnets? At Convertify, we believe there's a smarter way. We're passionate about leveraging artificial intelligence to help businesses like yours create high-impact lead magnets, effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Our mission is simple: to democratize lead generation. We aim to provide businesses of all sizes with the tools to create professional, engaging lead magnets in minutes, not days. We want to free up your time so you can focus on what you do best – growing your business and serving your customers.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We're committed to innovation, user-centric design, and delivering tangible results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* The Convertify Difference Section */}
      <section className="bg-white dark:bg-gray-900 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">The Convertify Difference</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Speed & Efficiency</h4>
              <p className="text-gray-700 dark:text-gray-300">Generate complete lead magnets in minutes, not weeks. Our AI handles the heavy lifting, from content to design.</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Quality & Professionalism</h4>
              <p className="text-gray-700 dark:text-gray-300">Impress your audience with beautifully designed, well-written content that establishes your authority.</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Focus on Conversion</h4>
              <p className="text-gray-700 dark:text-gray-300">Our tools are built with one goal in mind: to help you convert more visitors into qualified leads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Meet the Innovators Section (Placeholder) */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Meet the Innovators</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Convertify is built by a passionate team of AI experts, marketers, and designers dedicated to solving your lead generation challenges. (More to come here!)
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 dark:bg-blue-700 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Lead Generation?</h2>
          <p className="text-lg text-blue-100 dark:text-blue-200 mb-8">
            Join hundreds of businesses already saving time and boosting conversions with Convertify. Explore our plans or see it in action.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pricing" className="btn text-blue-600 bg-white hover:bg-gray-100 dark:text-blue-700 dark:hover:bg-gray-200">
              View Pricing Plans
            </Link>
            <Link href="/request-demo" className="btn text-white border-white border-2 hover:bg-white hover:text-blue-700 dark:hover:bg-blue-600">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

