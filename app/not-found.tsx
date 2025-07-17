'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const psychologyTips = [
    "Did you know? The brain processes rejection and physical pain in the same regions.",
    "Psychology fact: People are more likely to remember incomplete tasks (Zeigarnik effect).",
    "Sales insight: Reciprocity is one of the most powerful influence principles.",
    "Fun fact: Your brain treats a 404 error like a small social rejection.",
    "Did you know? Scarcity increases desirability by 30% in decision-making."
  ]
  
  const [currentTip, setCurrentTip] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % psychologyTips.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/25 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
      </div>

      {/* Floating brain neurons animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center pt-32 md:pt-40">
        <div className="max-w-3xl mx-auto">
          {/* 404 with brain icon */}
          <div className="relative inline-block mb-8">
            <div className="text-[120px] md:text-[180px] font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-none">
              404
            </div>
            {/* Brain icon overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 opacity-20">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 7.5 7.8 8.4 8.3 9.1C7.5 9.6 7 10.5 7 11.5C7 12.4 7.4 13.2 8 13.7C7.4 14.3 7 15.1 7 16C7 17.7 8.3 19 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C15.7 19 17 17.7 17 16C17 15.1 16.6 14.3 16 13.7C16.6 13.2 17 12.4 17 11.5C17 10.5 16.5 9.6 15.7 9.1C16.2 8.4 16.5 7.5 16.5 6.5C16.5 4 14.5 2 12 2Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="text-blue-600 dark:text-blue-400"/>
              </svg>
            </div>
          </div>

          {/* Main message */}
          <h1 className="heading-xl font-playfair-display text-slate-800 dark:text-slate-100 mb-4">
            Lost in Thought?
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Looks like this page wandered off during a deep psychological analysis.
            <br />
            <span className="text-lg">Don't worry, even the best minds need direction sometimes!</span>
          </p>

          {/* Psychology tip carousel */}
          <div className={`mb-10 transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              <span className="text-2xl">🧠</span>
              <p className="text-sm text-purple-700 dark:text-purple-300 font-medium">
                {psychologyTips[currentTip]}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/" 
              className="btn btn-primary bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Return to Homepage
            </Link>
            <Link 
              href="/services" 
              className="btn btn-secondary border-2 border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-400 px-8 py-3 rounded-full transition-all duration-300"
            >
              Explore Our Training
            </Link>
          </div>

          {/* Quick navigation */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Or find what you're looking for:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="text-blue-600 hover:text-purple-600 dark:text-blue-400 dark:hover:text-purple-400 transition-colors">
                About Us
              </Link>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <Link href="/services" className="text-blue-600 hover:text-purple-600 dark:text-blue-400 dark:hover:text-purple-400 transition-colors">
                Services
              </Link>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <Link href="/contact" className="text-blue-600 hover:text-purple-600 dark:text-blue-400 dark:hover:text-purple-400 transition-colors">
                Contact
              </Link>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <Link href="/blog" className="text-blue-600 hover:text-purple-600 dark:text-blue-400 dark:hover:text-purple-400 transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Error code explanation */}
          <div className="mt-12 text-xs text-slate-400 dark:text-slate-500">
            Error 404: Page not found | But your potential is definitely here
          </div>
        </div>
      </div>
    </section>
  )
}