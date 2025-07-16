import { Metadata } from 'next';
import { ShieldCheck, Lock, EyeOff, Server } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security | Convertify Sales Psychology Training',
  description: 'How we protect your data and ensure the security of our sales psychology training platform.',
  alternates: {
    canonical: 'https://convertify.com/security',
  },
};

const securityFeatures = [
  {
    icon: Lock,
    title: "Data Encryption",
    description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption standards."
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description: "Multi-factor authentication available with secure password policies and session management."
  },
  {
    icon: EyeOff,
    title: "Privacy Protection",
    description: "We follow strict privacy policies and never sell your personal information to third parties."
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Our platform is hosted on enterprise-grade infrastructure with regular security monitoring."
  }
];

export default function SecurityPage() {
  return (
    <section className="relative bg-white dark:bg-gray-900 pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <div className="text-center pb-12 md:pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Security & Trust
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Your data security and privacy are our top priorities. Learn how we protect your information.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Protection</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We implement industry-standard security measures to protect your personal information and training data:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-8">
              <li>End-to-end encryption for all data transmission</li>
              <li>Regular security audits and penetration testing</li>
              <li>Secure data centers with 24/7 monitoring</li>
              <li>Regular automated backups with encryption</li>
              <li>Access controls and user authentication</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Privacy Commitment</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Your privacy is fundamental to our service:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-8">
              <li>We never sell your personal information</li>
              <li>Data is only used to improve your training experience</li>
              <li>You have full control over your data</li>
              <li>Transparent privacy policies with clear language</li>
              <li>GDPR and CCPA compliance</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Account Security</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Protect your account with these security features:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-8">
              <li>Strong password requirements</li>
              <li>Two-factor authentication (2FA) available</li>
              <li>Session timeout for inactive accounts</li>
              <li>Login alerts for new devices</li>
              <li>Secure password reset process</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Payment Security</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Your payment information is protected through:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-8">
              <li>PCI DSS compliant payment processing</li>
              <li>Secure payment gateways (Stripe/PayPal)</li>
              <li>No storage of credit card information on our servers</li>
              <li>Encrypted payment data transmission</li>
              <li>Fraud detection and prevention</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Incident Response</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              In the unlikely event of a security incident:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-8">
              <li>Immediate containment and assessment</li>
              <li>Prompt notification to affected users</li>
              <li>Transparent communication about the incident</li>
              <li>Remediation steps and prevention measures</li>
              <li>Regular security training for our team</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Compliance</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              We maintain compliance with major privacy and security regulations including GDPR, CCPA, and industry best practices for data protection.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-3">
                Security Questions or Concerns?
              </h3>
              <p className="text-green-700 dark:text-green-300 mb-4">
                If you have questions about our security practices or need to report a security concern, please contact our security team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:security@convertify.com"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  security@convertify.com
                </a>
                <a 
                  href="/contact"
                  className="inline-block bg-white hover:bg-gray-50 text-green-600 border border-green-600 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Contact Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}