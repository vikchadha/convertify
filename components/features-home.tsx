'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Transition } from '@headlessui/react'
import FeaturesImage from '@/public/images/features-home-01.jpg'

export default function FeaturesHome() {

  const [tab, setTab] = useState<number>(1)

  return (
    <section id="features" className="relative">

      <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800/50 pointer-events-none mb-64 md:mb-80" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-800 mb-4 dark:text-slate-100">Stop Wasting Time, Start Converting More</h2>
            <p className="text-xl text-slate-700 dark:text-slate-300">Convertify empowers you to reclaim countless hours and skyrocket your lead generation. Discover how our intelligent automation turns your content ideas into high-performing lead magnets in minutes.</p>
          </div>

          {/* Section content */}
          <div className="max-w-3xl mx-auto">

            {/* Tabs buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-12">
              <button
                className={`text-center transition-opacity ${tab !== 1 && 'opacity-50 hover:opacity-75'}`}
                onClick={(e) => { e.preventDefault(); setTab(1); }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#2174EA" d="M20 20h6v16h-6z" />
                      <path fillOpacity=".64" fill="#5091EE" d="M29 20h3v16h-3zM35 20h1v16h-1z" />
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-slate-800 dark:text-slate-200">Effortless Content Generation</div>
                </div>
              </button>
              <button
                className={`text-center transition-opacity ${tab !== 2 && 'opacity-50 hover:opacity-75'}`}
                onClick={(e) => { e.preventDefault(); setTab(2); }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <path fillOpacity=".64" fill="#5091EE" d="M33 23v8h3V20H25v3z" />
                      <path fill="#2174EA" d="M20 25h11v11H20z" />
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-slate-800 dark:text-slate-200">Brand-Aligned Designs</div>
                </div>
              </button>
              <button
                className={`text-center transition-opacity ${tab !== 3 && 'opacity-50 hover:opacity-75'}`}
                onClick={(e) => { e.preventDefault(); setTab(3); }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <path fillOpacity=".64" fill="#5091EE" d="M20 27l7-7h-7z" />
                      <path fill="#2174EA" d="M29 20l7 7v-7z" />
                      <path fillOpacity=".64" fill="#5091EE" d="M36 29l-7 7h7z" />
                      <path fill="#2174EA" d="M27 36l-7-7v7z" />
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-slate-800 dark:text-slate-200">Seamless Lead Capture</div>
                </div>
              </button>
              <button
                className={`text-center transition-opacity ${tab !== 4 && 'opacity-50 hover:opacity-75'}`}
                onClick={(e) => { e.preventDefault(); setTab(4); }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 28h-4v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2v-5z" fillOpacity=".64" fill="#5091EE" />
                      <path d="M35 21h-8c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H33c1.7 0 3-1.3 3-3V22c0-.6-.4-1-1-1z" fill="#2174EA" />
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-slate-800 dark:text-slate-200">Actionable Insights</div>
                </div>
              </button>
            </div>

            {/* Tabs items */}
            <div className="transition-all">
              <div className="relative flex flex-col" data-aos="fade-up">
                {/* Item 1 */}
                <Transition show={tab === 1}>
                  <div className="w-full transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-16 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-16">
                    <Image className="mx-auto shadow-2xl" src={FeaturesImage} width={768} height={474} alt="AI Content Creation" />
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Generate Complete Lead Magnets with AI</h3><p className="text-lg text-slate-600 dark:text-slate-400 mt-4 text-center max-w-2xl mx-auto">Simply provide a topic or existing content, and watch our AI craft engaging ebooks, guides, and checklists. <strong className="text-blue-600 dark:text-blue-500">Save days of writing and research</strong>, and get to market faster.</p>
                    <div className="text-center mt-4">
                      <Link href="/features/ai-content-creation" className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium">
                        Learn more about AI Content Creation
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition show={tab === 2}>
                  <div className="w-full transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-16 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-16">
                    <Image className="mx-auto shadow-2xl" src={FeaturesImage} width={768} height={474} alt="Custom Templates" />
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Professionally Designed & Customizable</h3><p className="text-lg text-slate-600 dark:text-slate-400 mt-4 text-center max-w-2xl mx-auto">Impress your audience with stunning, professionally designed templates. Easily customize every element to <strong className="text-blue-600 dark:text-blue-500">perfectly match your brand identity</strong> without needing a designer.</p>
                    <div className="text-center mt-4">
                      <Link href="/features/design-automation" className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium">
                        Learn more about Design Automation
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition show={tab === 3}>
                  <div className="w-full transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-16 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-16">
                    <Image className="mx-auto shadow-2xl" src={FeaturesImage} width={768} height={474} alt="Automated Delivery" />
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Automate Delivery & Integration</h3><p className="text-lg text-slate-600 dark:text-slate-400 mt-4 text-center max-w-2xl mx-auto">Connect Convertify with your existing marketing stack. <strong className="text-blue-600 dark:text-blue-500">Automatically deliver lead magnets</strong> and sync new subscribers to your email platform, CRM, or other tools.</p>
                    <div className="text-center mt-4">
                      <Link href="/features/lead-magnet-generation" className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium">
                        Learn more about Lead Magnet Generation
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </div>
                </Transition>
                {/* Item 4 */}
                <Transition show={tab === 4}>
                  <div className="w-full transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-16 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-16">
                    <Image className="mx-auto shadow-2xl" src={FeaturesImage} width={768} height={474} alt="Performance Analytics" />
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Track & Optimize Performance</h3><p className="text-lg text-slate-600 dark:text-slate-400 mt-4 text-center max-w-2xl mx-auto">Gain valuable insights into your lead magnet performance. Track downloads, conversion rates, and engagement to <strong className="text-blue-600 dark:text-blue-500">continuously refine your strategy and maximize ROI.</strong></p>
                    <div className="text-center mt-4">
                      <Link href="/features/analytics" className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium">
                        Learn more about Analytics & Insights
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}