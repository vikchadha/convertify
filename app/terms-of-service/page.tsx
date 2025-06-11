import React from 'react'

export const metadata = {
  title: 'Terms of Service - Convertify',
  description: 'Read our Terms of Service to understand the rules and guidelines for using our platform.',
}

export default function TermsOfService() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1">Terms of Service</h1>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto prose prose-lg prose-slate text-slate-500">
            <p>Last updated: June 11, 2025</p>
            <p>Please read these terms and conditions carefully before using Our Service.</p>

            <h2>1. Introduction</h2>
            <p>Welcome to Convertify! These Terms of Service govern your use of our website and services. By accessing or using our service, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.</p>

            <h2>2. Accounts</h2>
            <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

            <h2>3. Content</h2>
            <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.</p>

            <h2>4. Changes To Service</h2>
            <p>We reserve the right to withdraw or amend our Service, and any service or material we provide via the Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Service is unavailable at any time or for any period.</p>

            <h2>5. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at support@convertify.com.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
