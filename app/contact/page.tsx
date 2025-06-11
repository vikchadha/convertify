export const metadata = {
  title: 'Contact Us | Convertify',
  description: 'Reach out to Convertify for questions, support, or partnership opportunities. We are eager to connect and assist you!',
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-900 dark:text-white">
                Get in Touch – We're Here to Help!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Whether you have a question about features, pricing, need a demo, require support, or want to discuss partnerships, our team is ready to answer all your questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">

            {/* Direct Contact Info */}
            <div className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Direct Contact</h2>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Email Us:</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  For general inquiries, support, or feedback:
                  <br />
                  <a href="mailto:support@convertify.ai" className="text-blue-600 hover:underline dark:text-blue-400">support@convertify.ai</a>
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Partnerships:</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Interested in collaborating with Convertify?
                  <br />
                  <a href="mailto:partners@convertify.ai" className="text-blue-600 hover:underline dark:text-blue-400">partners@convertify.ai</a>
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Our Office:</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Convertify Inc.<br />
                  123 AI Lane, Tech City, CA 94000<br />
                  United States
                </p>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Send Us a Message</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Fill out the form below, and we'll get back to you as soon as possible. (Contact form coming soon!)
              </p>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                  <input type="text" name="name" id="name" placeholder="Your Name" disabled className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-600 dark:text-white" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                  <input type="email" name="email" id="email" placeholder="you@example.com" disabled className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-600 dark:text-white" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea name="message" id="message" rows={4} placeholder="Your message..." disabled className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-600 dark:text-white"></textarea>
                </div>
                <button type="submit" disabled className="w-full btn text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50">
                  Send Message (Coming Soon)
                </button>
              </form>
            </div>
          </div>

          {/* What to Expect Section */}
          <div className="max-w-3xl mx-auto text-center mt-12 md:mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">What to Expect</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our dedicated team aims to respond to all inquiries within 24 business hours. For urgent support, please mark your email subject line accordingly. We appreciate your patience and look forward to connecting with you!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
