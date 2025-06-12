'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7XL1WY86VY"
        onError={(e) => {
          console.error('Error loading Google Analytics:', e);
        }}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7XL1WY86VY', {
              debug_mode: true,
              send_page_view: true
            });

            // Debug logging
            console.log('Google Analytics initialized');
          `,
        }}
      />
    </>
  );
} 