'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`absolute w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg dark:bg-slate-900' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className={`flex grow justify-center flex-wrap items-center font-medium ${!top ? 'text-slate-900 dark:text-slate-100' : 'text-slate-100'}`}>
              <Dropdown title="Features">
                <li>
                  <Link href="/features/lead-magnet-generation" className="font-medium text-sm text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-white flex py-2 px-5 leading-tight">Lead Magnet Generation</Link>
                </li>
                <li>
                  <Link href="/features/ai-content-creation" className="font-medium text-sm text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-white flex py-2 px-5 leading-tight">AI Content Creation</Link>
                </li>
                <li>
                  <Link href="/features/design-automation" className="font-medium text-sm text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-white flex py-2 px-5 leading-tight">Design & Branding Automation</Link>
                </li>
                <li>
                  <Link href="/features/analytics" className="font-medium text-sm text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-white flex py-2 px-5 leading-tight">Analytics & Insights</Link>
                </li>
              </Dropdown>
              <Dropdown title="Solutions">
                <li>
                  <Link href="/solutions/marketers" className="font-medium text-sm text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-white flex py-2 px-5 leading-tight">For Marketers</Link>
                </li>
                <li>
                  <Link href="/solutions/business-owners" className="font-medium text-sm text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-white flex py-2 px-5 leading-tight">For Business Owners</Link>
                </li>
                <li>
                  <Link href="/solutions/content-creators" className="font-medium text-sm text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-white flex py-2 px-5 leading-tight">For Content Creators</Link>
                </li>
              </Dropdown>
              <li>
                <Link href="/pricing" className="hover:text-blue-600 dark:hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Pricing</Link>
              </li>
              <Dropdown title="Resources">
                <li>
                  <Link href="/blog" className="font-medium text-sm text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-white flex py-2 px-5 leading-tight">Blog</Link>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop sign in links */}
            <ul className={`flex grow justify-end flex-wrap items-center font-medium ${!top ? 'text-slate-900 dark:text-slate-100' : 'text-slate-100'}`}>
              <li>
                <Link href="/signin" className="hover:text-blue-600 dark:hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li>
              <li>
                <Link href="/request-demo" className="btn-sm text-white bg-blue-600 hover:bg-blue-700 ml-3">
                  Request a demo
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
