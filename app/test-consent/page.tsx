'use client'

import { useEffect, useState } from 'react'

export default function TestConsentPage() {
  const [consentData, setConsentData] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('cookieConsent')
    setConsentData(stored)
  }, [])

  const clearConsent = () => {
    localStorage.removeItem('cookieConsent')
    setConsentData(null)
    window.location.reload()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Consent Banner Test</h1>
      
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Current Consent Status</h2>
        <pre className="bg-white p-4 rounded text-sm overflow-auto">
          {consentData ? JSON.stringify(JSON.parse(consentData), null, 2) : 'No consent data found'}
        </pre>
      </div>

      <button
        onClick={clearConsent}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Clear Consent Data & Reload
      </button>

      <div className="mt-6 text-sm text-gray-600">
        <p>If you don't see the consent banner:</p>
        <ol className="list-decimal ml-6 mt-2">
          <li>Click "Clear Consent Data & Reload" above</li>
          <li>The banner should appear at the bottom of the page</li>
          <li>If it still doesn't appear, check the browser console for errors</li>
        </ol>
      </div>
    </div>
  )
}