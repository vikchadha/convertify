import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | Convertify Sales Psychology Training',
  description: 'Our 30-day money-back guarantee and refund policy for Convertify sales psychology training subscriptions.',
  alternates: {
    canonical: 'https://convertify.com/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return (
    <section className="relative bg-white dark:bg-gray-900 pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <div className="text-center pb-12 md:pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Refund Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We stand behind our training with a 30-day money-back guarantee
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
              30-Day Money-Back Guarantee
            </h2>
            <p className="text-green-700 dark:text-green-300 text-lg">
              We're confident you'll see results from our sales psychology training. If you're not completely satisfied within 30 days of your subscription, we'll refund your first month's payment.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Refund Eligibility</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            You're eligible for a full refund if you:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-8">
            <li>Request a refund within 30 days of your initial subscription</li>
            <li>Have been charged for your first month's subscription</li>
            <li>Contact our support team through the proper channels</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What's NOT Covered</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-8">
            <li>Refunds for months beyond your first subscription payment</li>
            <li>Refunds requested more than 30 days after initial subscription</li>
            <li>Refunds for accounts that violated our terms of service</li>
            <li>Refunds for duplicate or fraudulent charges (these are handled separately)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Request a Refund</h2>
          <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-400 mb-8">
            <li className="mb-2">
              <strong>Contact Support:</strong> Email us at support@convertify.com with "Refund Request" in the subject line
            </li>
            <li className="mb-2">
              <strong>Include Information:</strong> Provide your account email, subscription date, and brief reason for the refund
            </li>
            <li className="mb-2">
              <strong>Response Time:</strong> We'll respond within 2 business days to process your request
            </li>
            <li className="mb-2">
              <strong>Processing:</strong> Approved refunds are processed within 5-7 business days
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cancellation vs. Refund</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            <strong>Cancellation:</strong> You can cancel your subscription at any time to stop future charges. This doesn't refund previous payments.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            <strong>Refund:</strong> This returns your first month's payment within the 30-day guarantee period.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Refund Method</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Refunds are processed back to your original payment method. If you paid with a credit card, the refund will appear on your statement within 5-7 business days. Bank transfers may take longer depending on your financial institution.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Fair Use Policy</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            This guarantee is designed for genuine customers who want to try our training. We reserve the right to decline refunds for accounts that show patterns of abuse, such as repeatedly subscribing and requesting refunds.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-3">
              Questions About Refunds?
            </h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">
              If you have any questions about our refund policy or need help with your account, please contact our support team.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}