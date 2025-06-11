import Link from 'next/link';

export const metadata = {
  title: 'Pricing Plans | Convertify - AI Lead Magnet Automation',
  description: 'Explore Convertify’s flexible pricing plans. Find the perfect fit to automate your lead magnet creation, from startups to enterprise. Start free or get a demo!',
}

export default function PricingPage() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-transparent dark:from-blue-900/30 dark:to-transparent opacity-50 h-1/2" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-900 dark:text-white">Find the Perfect Plan to Supercharge Your Lead Generation</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Unlock the power of AI with Convertify. Simple, transparent pricing designed to scale with your success. Get started today and transform your marketing.</p>
          </div>

          {/* Pricing Tiers */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* Tier 1: Starter */}
            <div className="relative flex flex-col h-full p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
              <div className="mb-4">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Starter</div>
                <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-500 my-2">$29<span className="text-gray-500 dark:text-gray-400 text-sm font-medium">/mo</span></div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Ideal for solo entrepreneurs and small teams ready to automate their lead magnet creation and boost initial growth.</div>
              </div>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-3 grow mb-6">
                <li className="flex items-center"><svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg><span>Up to 10 Lead Magnets</span></li>
                <li className="flex items-center"><svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg><span>Basic AI Content Creation</span></li>
                <li className="flex items-center"><svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg><span>Standard Analytics</span></li>
                <li className="flex items-center"><svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg><span>Email Support</span></li>
              </ul>
              <Link href="/signup?plan=starter" className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full text-center">
                  Get Started with Starter
                </Link>
            </div>

            {/* Tier 2: Pro (Popular) */}
            <div className="relative flex flex-col h-full p-6 rounded-lg border-2 border-blue-500 bg-white dark:bg-gray-800 shadow-2xl">
              <div className="absolute top-0 right-0 mr-6 -mt-3">
                <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-blue-500 text-white rounded-full shadow-sm">Most Popular</div>
              </div>
              <div className="mb-4">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Pro</div>
                <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-500 my-2">$79<span className="text-gray-500 dark:text-gray-400 text-sm font-medium">/mo</span></div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Our most popular plan, perfect for growing businesses aiming to scale their lead generation with advanced AI features and support.</div>
              </div>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-3 grow mb-6">
                <li className="flex items-center"><svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg><span>Up to 50 Lead Magnets</span></li>
                <li className="flex items-center"><svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg><span>Advanced AI Content Creation</span></li>
                <li className="flex items-center"><svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg><span>Automated Design & Branding</span></li>
                <li className="flex items-center"><svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg><span>Detailed Analytics & Insights</span></li>
                <li className="flex items-center"><svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg><span>Priority Email & Chat Support</span></li>
              </ul>
              <Link href="/signup?plan=pro" className="btn-sm text-white bg-blue-600 hover:bg-blue-700 w-full text-center">
                  Choose Pro Plan
                </Link>
            </div>

            {/* Tier 3: Enterprise */}
            <div className="relative flex flex-col h-full p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
              <div className="mb-4">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Enterprise</div>
                <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-500 my-2">Custom</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Bespoke solutions for large organizations requiring custom features, dedicated support, and scalable infrastructure.</div>
              </div>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-3 grow mb-6">
                <li className="flex items-center"><svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg><span>Unlimited Lead Magnets</span></li>
                <li className="flex items-center"><svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg><span>Custom AI Model Training</span></li>
                <li className="flex items-center"><svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg><span>Dedicated Account Manager</span></li>
                <li className="flex items-center"><svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg><span>Premium Support & SLA</span></li>
                <li className="flex items-center"><svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg><span>Custom Integrations</span></li>
              </ul>
              <Link href="/contact?subject=Enterprise%20Plan%20Inquiry" className="btn-sm text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 w-full text-center">
                  Contact Sales for Enterprise
                </Link>
            </div>

          </div>

          {/* FAQ Section */}
          <div className="max-w-2xl mx-auto pt-16 pb-12 md:pt-20 md:pb-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white text-center mb-8 md:mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Can I try Convertify before I buy?</h4>
                <p className="text-gray-600 dark:text-gray-400">Yes, we offer a 14-day free trial on our Pro plan. No credit card required to get started. You can explore all features and see if Convertify is the right fit for you.</p>
              </div>
              {/* FAQ Item 2 */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">What if I want to cancel my subscription?</h4>
                <p className="text-gray-600 dark:text-gray-400">You can cancel your subscription at any time from your account settings. If you cancel, you'll retain access to your plan's features until the end of your current billing cycle.</p>
              </div>
              {/* FAQ Item 3 */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Do you offer discounts for non-profits or educational institutions?</h4>
                <p className="text-gray-600 dark:text-gray-400">Yes, we offer special discounts for qualifying non-profit organizations and educational institutions. Please contact our support team for more information and to see if you qualify.</p>
              </div>
               {/* FAQ Item 4 */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Can I upgrade or downgrade my plan?</h4>
                <p className="text-gray-600 dark:text-gray-400">Absolutely! You can easily upgrade or downgrade your plan at any time from your account dashboard. Changes will be prorated accordingly.</p>
              </div>
              {/* FAQ Item 5 */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">What types of lead magnets can I create?</h4>
                <p className="text-gray-600 dark:text-gray-400">Convertify helps you create a variety of lead magnets, including ebooks, checklists, templates, case studies, whitepapers, and more. Our AI is trained to adapt to different content formats to maximize engagement.</p>
              </div>
              {/* FAQ Item 6 */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">How is my data secured?</h4>
                <p className="text-gray-600 dark:text-gray-400">We take data security very seriously. All data is encrypted in transit and at rest. We follow industry best practices to ensure your information is protected. You can learn more in our Privacy Policy.</p>
              </div>
            </div>
          </div>

          {/* Still Unsure? Section */}
          <div className="max-w-3xl mx-auto text-center pt-16 pb-12 md:pt-20 md:pb-16 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Still Have Questions or Need a Custom Solution?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Our expert team is here to help you find the perfect Convertify plan for your business. Whether you need a personalized demo or want to discuss unique enterprise requirements, we're just a message away.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="btn text-white bg-blue-600 hover:bg-blue-700">
                Contact Our Team
                </Link>
                <Link href="/request-demo" className="btn text-gray-900 bg-white dark:text-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600">
                Request a Demo
                </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
