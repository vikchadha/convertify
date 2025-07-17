'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)

  return (
    <header ref={headerRef} className="fixed w-full z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition duration-300 ease-in-out">
      {/* Alert bar - more subtle */}
      <div className="bg-slate-800 text-white text-center py-2 text-sm">
        <span className="text-amber-400 mr-2">●</span>Limited time: Psychology training now only $47/month
        <Link href="/signup" className="underline ml-2 hover:text-slate-200">Learn More →</Link>
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
                  <Link href="/training/sales-psychology" className="font-medium text-sm hover:text-slate-700 flex py-2 px-5 leading-tight">Sales Psychology</Link>
                </li>
                <li>
                  <Link href="/training/fundraising-psychology" className="font-medium text-sm hover:text-slate-700 flex py-2 px-5 leading-tight">Fundraising Psychology</Link>
                </li>
                <li>
                  <Link href="/training/interview-psychology" className="font-medium text-sm hover:text-slate-700 flex py-2 px-5 leading-tight">Interview Psychology</Link>
                </li>
                <li>
                  <Link href="/training/recruiting-psychology" className="font-medium text-sm hover:text-slate-700 flex py-2 px-5 leading-tight">Recruiting Psychology</Link>
                </li>
                <li>
                  <Link href="/training/internal-influence" className="font-medium text-sm hover:text-slate-700 flex py-2 px-5 leading-tight">Internal Influence</Link>
                </li>
                <li>
                  <Link href="/training/objection-handling" className="font-medium text-sm hover:text-slate-700 flex py-2 px-5 leading-tight">Objection Handling</Link>
                </li>
                <li>
                  <Link href="/training/closing-techniques" className="font-medium text-sm hover:text-slate-700 flex py-2 px-5 leading-tight">Closing Techniques</Link>
                </li>
                <li>
                  <Link href="/training/negotiation-tactics" className="font-medium text-sm hover:text-slate-700 flex py-2 px-5 leading-tight">Negotiation Tactics</Link>
                </li>
                <li>
                  <Link href="/training/cold-calling" className="font-medium text-sm hover:text-slate-700 flex py-2 px-5 leading-tight">Cold Calling</Link>
                </li>
                <li className="border-t border-gray-100 mt-2 pt-2">
                  <Link href="/training/ai-coach" className="font-medium text-sm hover:text-slate-700 flex py-2 px-5 leading-tight">
                    <span className="flex items-center">
                      ✨ AI Coach <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">NEW</span>
                    </span>
                  </Link>
                </li>
              </Dropdown>
              <li>
                <Link href="/quiz" className="hover:text-slate-700 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out text-gray-800 font-medium">
                  Quiz
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-slate-700 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out text-gray-800 font-medium">Pricing</Link>
              </li>
            </ul>
            <ul className="flex grow justify-end flex-wrap items-center font-semibold">
              <li>
                <Link href="/signin" className="hover:text-slate-700 px-4 py-2 flex items-center transition duration-150 ease-in-out text-gray-600">Sign In</Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-slate-800 hover:bg-slate-900 ml-3 shadow-sm transition-all duration-200">
                  Start Free Trial
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
