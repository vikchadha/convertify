export const metadata = {
  title: 'Request Demo - Tidy',
  description: 'Page description',
}

import Link from 'next/link'

export default function RequestDemo() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Get a Personalized Demo of Convertify</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Discover how our AI-powered platform can help you create high-converting lead magnets and automate your content workflow. Schedule a live demo with one of our product experts today.</p>
          </div>

          {/* Form */}
          <div className="max-w-xl mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">First Name <span className="text-red-600">*</span></label>
                  <input id="first-name" type="text" className="form-input w-full" placeholder="Enter your first name" required />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">Last Name <span className="text-red-600">*</span></label>
                  <input id="last-name" type="text" className="form-input w-full" placeholder="Enter your last name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="email">Work Email <span className="text-red-600">*</span></label>
                  <input id="email" type="email" className="form-input w-full" placeholder="Enter your work email" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="company">Company Name <span className="text-red-600">*</span></label>
                  <input id="company" type="text" className="form-input w-full" placeholder="Enter your company name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="message">Your Message <span className="text-gray-500">(Optional)</span></label>
                  <textarea id="message" rows={4} className="form-textarea w-full" placeholder="Tell us about your project or any questions you have."></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Schedule My Demo</button>
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center mt-4">By signing up, you agree to our <Link className="underline" href="/terms-of-service">Terms of Service</Link>.</div>
            </form>



          </div>
        </div>
      </div>
    </section>
  )
}
