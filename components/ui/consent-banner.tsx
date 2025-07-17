'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
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

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-50/95 backdrop-blur-sm border-t border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        {!showSettings ? (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex-1">
              <p className="text-sm text-slate-600">
                We use cookies to improve your experience. 
                <Link href="/privacy-policy" className="text-slate-500 hover:text-slate-700 underline ml-1">
                  Privacy Policy
                </Link>
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowSettings(true)}
                className="px-3 py-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
              >
                Manage
              </button>
              <button
                onClick={rejectAll}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-1.5 text-sm font-medium text-white bg-slate-800 hover:bg-slate-900 rounded transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-900">Cookie Preferences</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-slate-400 hover:text-slate-600 text-lg leading-none"
              >
                ×
              </button>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-3 text-xs">
              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="mt-0.5 h-3 w-3 text-slate-600 border-slate-300 rounded"
                />
                <div>
                  <div className="font-medium text-slate-900">Essential</div>
                  <div className="text-slate-500">Required for site functionality</div>
                </div>
              </label>
              
              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                  className="mt-0.5 h-3 w-3 text-slate-600 border-slate-300 rounded focus:ring-slate-500"
                />
                <div>
                  <div className="font-medium text-slate-900">Analytics</div>
                  <div className="text-slate-500">Help us improve our service</div>
                </div>
              </label>
              
              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                  className="mt-0.5 h-3 w-3 text-slate-600 border-slate-300 rounded focus:ring-slate-500"
                />
                <div>
                  <div className="font-medium text-slate-900">Marketing</div>
                  <div className="text-slate-500">Personalized content & ads</div>
                </div>
              </label>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={acceptSelected}
                className="px-4 py-1.5 text-sm font-medium text-white bg-slate-800 hover:bg-slate-900 rounded transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}