import React from 'react'

export const metadata = {title: 'Privacy Policy - Convertify',
  description: 'Learn how Convertify collects, uses, and protects your data by reading our Privacy Policy.',,
  alternates: {
    canonical: 'https://convertify.com/privacy-policy',
  },
}

export default function PrivacyPolicy() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1">Privacy Policy</h1>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto prose prose-lg prose-slate text-slate-500">
            <p>Last updated: June 11, 2025</p>
            <p>Convertify operates the https://convertify.com website, which provides the SERVICE.</p>

            <h2>1. Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you. Types of Data collected include Personal Data and Usage Data.</p>

            <h2>2. Log Data</h2>
            <p>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>

            <h2>3. Cookies</h2>
            <p>Cookies are files with a small amount of data that is commonly used as an anonymous unique identifier. We use cookies to collect information to improve our services for you. You have the option to either accept or refuse these cookies. For more information, please see our <a href="/cookie-policy">Cookie Policy</a>.</p>

            <h2>4. Security</h2>
            <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

            <h2>5. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at support@convertify.com.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
