'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)

  return (
    <header ref={headerRef} className="absolute w-full z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition duration-300 ease-in-out">
      {/* Alert bar */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> LIMITED TIME: 76% OFF Sales Training - Only $47/month! 
        <Link href="/signup" className="underline ml-2 font-bold hover:text-red-200">Claim Now →</Link>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Logo />
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-center flex-wrap items-center font-semibold text-gray-800">
              <Dropdown title="Training">
                <li>
                  <Link href="/training/objection-handling" className="font-medium text-sm hover:text-green-600 flex py-2 px-5 leading-tight">🛡️ Objection Handling</Link>
                </li>
                <li>
                  <Link href="/training/cold-calling" className="font-medium text-sm hover:text-green-600 flex py-2 px-5 leading-tight">📞 Cold Calling Mastery</Link>
                </li>
                <li>
                  <Link href="/training/closing-techniques" className="font-medium text-sm hover:text-green-600 flex py-2 px-5 leading-tight">🎯 Closing Techniques</Link>
                </li>
                <li>
                  <Link href="/training/sales-psychology" className="font-medium text-sm hover:text-green-600 flex py-2 px-5 leading-tight">🧠 Sales Psychology</Link>
                </li>
              </Dropdown>
              <Dropdown title="Success Stories">
                <li>
                  <Link href="/success-stories/saas" className="font-medium text-sm hover:text-green-600 flex py-2 px-5 leading-tight">💻 SaaS Sales</Link>
                </li>
                <li>
                  <Link href="/success-stories/real-estate" className="font-medium text-sm hover:text-green-600 flex py-2 px-5 leading-tight">🏠 Real Estate</Link>
                </li>
                <li>
                  <Link href="/success-stories/insurance" className="font-medium text-sm hover:text-green-600 flex py-2 px-5 leading-tight">🛡️ Insurance</Link>
                </li>
                <li>
                  <Link href="/success-stories/b2b" className="font-medium text-sm hover:text-green-600 flex py-2 px-5 leading-tight">💼 B2B Sales</Link>
                </li>
              </Dropdown>
              <li>
                <Link href="/pricing" className="hover:text-green-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out text-gray-800 font-semibold">Pricing</Link>
              </li>
              <Dropdown title="Free Resources">
                <li>
                  <Link href="/resources/objection-scripts" className="font-medium text-sm hover:text-green-600 flex py-2 px-5 leading-tight">📜 Objection Scripts ($97 Value)</Link>
                </li>
                <li>
                  <Link href="/resources/cold-calling-guide" className="font-medium text-sm hover:text-green-600 flex py-2 px-5 leading-tight">📞 Cold Calling Guide ($147 Value)</Link>
                </li>
                <li>
                  <Link href="/resources/salary-negotiation" className="font-medium text-sm hover:text-green-600 flex py-2 px-5 leading-tight">💰 Salary Negotiation ($197 Value)</Link>
                </li>
                <li>
                  <Link href="/blog" className="font-medium text-sm hover:text-green-600 flex py-2 px-5 leading-tight">📰 Sales Blog</Link>
                </li>
              </Dropdown>
            </ul>
            <ul className="flex grow justify-end flex-wrap items-center font-semibold">
              <li>
                <Link href="/signin" className="hover:text-green-600 px-4 py-2 flex items-center transition duration-150 ease-in-out text-gray-700">Sign In</Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 ml-3 font-bold shadow-lg transform hover:scale-105 transition-all duration-200">
                  🚀 Start Free Trial
                </Link>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
