'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    setIsClient(true)
    const consent = localStorage.getItem('cookieConsent')
    console.log('ConsentBanner: checking localStorage', { consent })
    if (!consent) {
      setShowBanner(true)
      console.log('ConsentBanner: showing banner')
    } else {
      console.log('ConsentBanner: consent found, not showing banner')
    }
  }, [])

  const acceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(allPreferences))
    setShowBanner(false)
  }

  const acceptSelected = () => {
    const selectedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(selectedPreferences))
    setShowBanner(false)
  }

  const rejectAll = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(minimalPreferences))
    setShowBanner(false)
  }

  if (!isClient || !showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[99999] bg-white border-t border-gray-200 shadow-lg">
      {/* Debug indicator */}
      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
        CONSENT BANNER VISIBLE
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="md:flex md:items-start md:justify-between">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              We value your privacy
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. You can manage your preferences below.
            </p>
            
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="text-sm">
                  <span className="font-medium text-gray-900">Necessary cookies</span>
                  <span className="text-gray-500 ml-1">(Always enabled)</span>
                </span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                  className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm">
                  <span className="font-medium text-gray-900">Analytics cookies</span>
                  <span className="text-gray-500 ml-1">(Help us improve)</span>
                </span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                  className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm">
                  <span className="font-medium text-gray-900">Marketing cookies</span>
                  <span className="text-gray-500 ml-1">(Personalized ads)</span>
                </span>
              </label>
            </div>
            
            <p className="text-xs text-gray-500 mt-3">
              Learn more in our <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</Link> and <Link href="/cookie-policy" className="text-blue-600 hover:text-blue-700 underline">Cookie Policy</Link>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <button
              onClick={rejectAll}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={acceptSelected}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Accept Selected
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}