import React from 'react'

export const metadata = {
  title: 'Cookie Policy - Convertify',
  description: 'Understand how Convertify uses cookies to improve your browsing experience.',
}

export default function CookiePolicy() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1">Cookie Policy</h1>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto prose prose-lg prose-slate text-slate-500">
            <p>Last updated: June 11, 2025</p>
            <p>This Cookie Policy explains what cookies are and how we use them. You should read this policy to understand what cookies are, how we use them, the types of cookies we use, the information we collect using cookies and how that information is used.</p>

            <h2>What are cookies?</h2>
            <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to recognize your device and remember if you've been to the website before.</p>

            <h2>How do we use cookies?</h2>
            <p>We use cookies to enhance your browsing experience by:</p>
            <ul>
              <li>Understanding how you use our site, which helps us to improve its design and functionality.</li>
              <li>Remembering your preferences and settings.</li>
              <li>Delivering relevant advertising to you.</li>
            </ul>

            <h2>Types of Cookies We Use</h2>
            <p>We use both session and persistent cookies on our website. Session cookies are deleted when you close your browser, while persistent cookies remain on your device until they expire or you delete them.</p>

            <h2>Your Choices Regarding Cookies</h2>
            <p>You can choose to disable cookies through your browser settings. However, please note that if you do this you may not be able to use the full functionality of this website.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us at support@convertify.com.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
