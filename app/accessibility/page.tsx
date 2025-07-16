import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Convertify Sales Psychology Training',
  description: 'Our commitment to making Convertify accessible to all users, including those with disabilities.',
  alternates: {
    canonical: 'https://convertify.com/accessibility',
  },
};

export default function AccessibilityPage() {
  return (
    <section className="relative bg-white dark:bg-gray-900 pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <div className="text-center pb-12 md:pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Accessibility Statement
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Our commitment to making Convertify accessible to everyone
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Commitment</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Convertify is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Standards</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards. These guidelines help make web content more accessible to people with disabilities, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-8">
            <li>Visual impairments</li>
            <li>Hearing impairments</li>
            <li>Motor impairments</li>
            <li>Cognitive impairments</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Accessibility Features</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Our website includes the following accessibility features:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-8">
            <li>Alternative text for images</li>
            <li>Keyboard navigation support</li>
            <li>High contrast color schemes</li>
            <li>Readable fonts and proper font sizing</li>
            <li>Descriptive page titles and headings</li>
            <li>Focus indicators for interactive elements</li>
            <li>Screen reader compatibility</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Training Content Accessibility</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Our training materials are designed to be accessible:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-8">
            <li>Video content includes captions and transcripts</li>
            <li>Audio content has text alternatives</li>
            <li>PDF resources are screen reader accessible</li>
            <li>Interactive elements are keyboard accessible</li>
            <li>Content is organized with clear headings and structure</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ongoing Improvements</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            We regularly review and improve the accessibility of our platform. This includes conducting accessibility audits, testing with assistive technologies, and gathering feedback from users with disabilities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Feedback and Support</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We welcome feedback on the accessibility of our website and training platform. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-8">
            <li>Email: accessibility@convertify.com</li>
            <li>Contact form: <a href="/contact" className="text-blue-600 hover:underline">convertify.com/contact</a></li>
            <li>We aim to respond to accessibility feedback within 5 business days</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Alternative Formats</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            If you need our training content in an alternative format (such as large print, braille, or audio), please contact our support team. We'll work with you to provide the content in a format that meets your needs.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Content</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            While we strive to ensure all content on our platform is accessible, some third-party content may not meet the same accessibility standards. We are working with our partners to improve accessibility across all content.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-3">
              Need Accessibility Help?
            </h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">
              If you're having trouble accessing any part of our website or training materials, we're here to help.
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