'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`group inline-flex w-8 h-8 text-slate-300 hover:text-white text-center items-center justify-center transition`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-4 h-4 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <rect 
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0"
            y="7" 
            width="16" 
            height="2" 
            rx="1"
          />
          <rect 
            className="origin-center group-aria-expanded:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
            y="7" 
            width="16" 
            height="2" 
            rx="1"
          />
          <rect 
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-aria-expanded:rotate-[135deg] group-aria-expanded:translate-y-0"
            y="7" 
            width="16" 
            height="2" 
            rx="1"
          />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div
        ref={mobileNav}
      >
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white transform transition ease-out duration-200 data-enter:data-closed:-translate-y-2 data-closed:opacity-0"
        >        
          <ul className="px-5 py-2">
            <li className="py-2 my-2 border-b border-gray-200">
              <Link href="/training" className="flex font-medium text-slate-800 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Training Programs</Link>
              <ul className="pl-4">
                <li>
                  <Link href="/training/sales-psychology" className="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Sales Psychology</Link>
                </li>
                <li>
                  <Link href="/training/fundraising-psychology" className="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Fundraising Psychology</Link>
                </li>
                <li>
                  <Link href="/training/interview-psychology" className="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Interview Psychology</Link>
                </li>
                <li>
                  <Link href="/training/ai-coach" className="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>
                    ✨ AI Coach <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">NEW</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/quiz" className="flex font-medium text-slate-800 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>
                Take Quiz
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="flex font-medium text-slate-800 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Pricing</Link>
            </li>
            <li className="py-2 my-2 border-t border-gray-200">
              <Link href="/signin" className="flex font-medium w-full text-slate-800 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Sign in</Link>
            </li>
            <li>
              <Link href="/signup" className="btn-sm text-white bg-slate-800 hover:bg-slate-900 mx-3 shadow-sm transition-all duration-200 text-center">
                Start Free Trial
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  )
}
