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
          <div className="max-w-4xl mx-auto text-center pb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
              <span className="mr-2">⚡</span>
              The Secret Weapon of 7-Figure Businesses
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-playfair-display text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-900 to-purple-900 mb-6 dark:from-slate-100 dark:via-blue-100 dark:to-purple-100">
              Turn Every Website Visitor Into a Paying Customer
            </h2>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed">
              While your competitors struggle with manual content creation, you'll be generating 
              <strong className="text-blue-600"> professional lead magnets in under 3 minutes</strong> 
              that convert visitors into eager buyers.
            </p>
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
                  <div className="md:text-lg leading-tight font-semibold text-slate-800 dark:text-slate-200">🚀 Generate in 3 Minutes</div>
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
                  <div className="md:text-lg leading-tight font-semibold text-slate-800 dark:text-slate-200">🎨 Professional Designs</div>
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
                  <div className="md:text-lg leading-tight font-semibold text-slate-800 dark:text-slate-200">🎯 Automatic Lead Capture</div>
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
                  <div className="md:text-lg leading-tight font-semibold text-slate-800 dark:text-slate-200">📈 Conversion Analytics</div>
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
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">From Idea to Lead Magnet in Under 3 Minutes</h3><p className="text-lg text-slate-600 dark:text-slate-400 mt-4 text-center max-w-2xl mx-auto">Just paste your URL or describe your topic. Our AI instantly creates professional ebooks, guides, and checklists that your audience will <strong className="text-blue-600 dark:text-blue-500">actually want to download</strong>. No more writer's block or endless research.</p>
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
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Designer-Quality Lead Magnets (No Design Skills Required)</h3><p className="text-lg text-slate-600 dark:text-slate-400 mt-4 text-center max-w-2xl mx-auto">Every lead magnet looks like it was crafted by a $5,000/month designer. Our AI automatically matches your brand colors, fonts, and style to create <strong className="text-blue-600 dark:text-blue-500">scroll-stopping visuals</strong> that make your audience hit "download" instantly.</p>
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
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Set It and Forget It Lead Generation</h3><p className="text-lg text-slate-600 dark:text-slate-400 mt-4 text-center max-w-2xl mx-auto">Your lead magnets work 24/7 to capture emails and sync directly to your CRM. <strong className="text-blue-600 dark:text-blue-500">Wake up to more leads</strong> every morning without lifting a finger. It's like having a sales team that never sleeps.</p>
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
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">See Exactly Which Lead Magnets Make You Money</h3><p className="text-lg text-slate-600 dark:text-slate-400 mt-4 text-center max-w-2xl mx-auto">Track every download, conversion, and dollar earned from each lead magnet. Our analytics show you <strong className="text-blue-600 dark:text-blue-500">exactly what's working</strong> so you can double down on winners and ditch the losers.</p>
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