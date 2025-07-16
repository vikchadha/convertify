import { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ | Convertify Sales Psychology Training',
  description: 'Frequently asked questions about Convertify sales psychology training, pricing, refunds, and how our program works.',
  alternates: {
    canonical: 'https://convertify.com/faq',
  },
};

const faqs = [
  {
    question: "How quickly will I see results?",
    answer: "Most students see measurable improvements within 30 days. Our psychology-based approach works faster than traditional sales training because it addresses the root of why people buy, not just what to say."
  },
  {
    question: "What if I'm not in traditional sales?",
    answer: "Our training works for anyone who needs to persuade others: fundraising, job interviews, recruiting, internal buy-in, negotiations, and more. Every conversation is a sale."
  },
  {
    question: "Is this just theory or practical training?",
    answer: "It's highly practical. You get word-for-word scripts, frameworks, and exercises you can use immediately. Everything is backed by psychology research but designed for real-world application."
  },
  {
    question: "How is this different from other sales training?",
    answer: "Most sales training teaches techniques without explaining why they work. We teach the underlying psychology, so you understand the principles and can adapt to any situation."
  },
  {
    question: "Do I need sales experience to benefit?",
    answer: "No. Our training works for complete beginners and experienced professionals. We start with fundamentals and build to advanced techniques."
  },
  {
    question: "What's included in the $47/month subscription?",
    answer: "Full access to all training modules, scripts, templates, frameworks, weekly Q&A sessions, private community, and monthly updates with new content."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
  },
  {
    question: "What's your refund policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied within 30 days, we'll refund your first month's payment."
  },
  {
    question: "How much time do I need to dedicate?",
    answer: "You can learn at your own pace. Most students spend 2-3 hours per week and see significant results. The training is designed to fit into busy schedules."
  },
  {
    question: "Do you offer corporate training?",
    answer: "Yes, we offer customized corporate training programs. Contact us for pricing and details about group training options."
  }
];

export default function FAQPage() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <div className="text-center pb-12 md:pb-20 pt-20">
          <h1 className="h1 font-playfair-display text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about Convertify sales psychology training
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-200 flex-shrink-0" />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
          <h2 className="h2 font-playfair-display text-gray-900 dark:text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}