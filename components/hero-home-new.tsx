'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import ConversionLightning from './icons/ConversionLightning'
import BrainTarget from './icons/BrainTarget'
import InfluenceWaves from './icons/InfluenceWaves'
import PersuasionTarget from './icons/PersuasionTarget'
import TrustHandshake from './icons/TrustHandshake'
import PsychologyDollar from './icons/PsychologyDollar'
import MindBridge from './icons/MindBridge'

export default function HeroHome() {
  const rotatingPhrases = [
    { first: "prospects", second: "customers" },
    { first: "conversations", second: "opportunities" },
    { first: "resistance", second: "agreement" },
    { first: "conflict", second: "collaboration" },
    { first: "objections", second: "enthusiasm" },
    { first: "interviews", second: "offers" },
    { first: "pitches", second: "funding" },
  ]

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const currentPhrase = rotatingPhrases[currentPhraseIndex]
  const fullText = `${currentPhrase.first} into ${currentPhrase.second}`

  useEffect(() => {
    const typeSpeed = 120
    const pauseDuration = 2500

    if (isTyping && displayText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1))
      }, typeSpeed)
      return () => clearTimeout(timer)
    } else if (displayText === fullText) {
      const timer = setTimeout(() => {
        setCurrentPhraseIndex((prev) => 
          prev === rotatingPhrases.length - 1 ? 0 : prev + 1
        )
        setDisplayText('')
        setIsTyping(true)
      }, pauseDuration)
      return () => clearTimeout(timer)
    }
  }, [displayText, fullText, isTyping, currentPhraseIndex])

  return (
    <section className="relative">
      {/* Spacer to account for fixed header */}
      <div className="h-24 md:h-28"></div>
      
      {/* Main hero section */}
      <div className="relative bg-gray-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary-gradient opacity-10"></div>
          
          {/* Subtle floating elements */}
          <div className="absolute top-20 right-[15%] opacity-5">
            <PsychologyDollar className="w-24 h-24 text-white" />
          </div>
          <div className="absolute bottom-20 left-[10%] opacity-5">
            <BrainTarget className="w-24 h-24 text-white" />
          </div>
          
          {/* Subtle gradient accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Top badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 border border-white/20">
              <ConversionLightning className="w-4 h-4 mr-2" />
              Join 25,000+ professionals mastering the psychology of influence
            </div>
            
            {/* Main headline with typewriter effect */}
            <h1 className="heading-xl text-white mb-6">
              <div className="mb-4">
                <span className="text-primary-gradient">Converting</span>
              </div>
              <div className="h-[1.2em] flex items-center justify-center">
                <span className="inline-flex items-baseline whitespace-nowrap text-center">
                  {displayText.split(' ').map((word, index, array) => {
                    if (word === 'into') {
                      return <span key={index} className="mx-3">{word}</span>
                    } else if (index === array.length - 1 && displayText.includes('into')) {
                      return <span key={index} className="text-primary-gradient">{word}</span>
                    } else if (index < array.length - 1) {
                      return <span key={index}>{word}&nbsp;</span>
                    } else {
                      return <span key={index}>{word}</span>
                    }
                  })}
                  <span className="inline-block w-1 h-[1em] bg-yellow-300 animate-pulse ml-1"></span>
                </span>
              </div>
            </h1>
            
            {/* Subheadline */}
            <p className="body-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Master the psychology behind every successful interaction.
              <span className="font-semibold text-white block mt-2">Create win-win outcomes that transform relationships.</span>
            </p>

            {/* Six areas grid */}
            <div className="card-base p-8 mb-12 max-w-4xl mx-auto">
              <h3 className="heading-md mb-8 text-center text-gray-900 dark:text-white">Master the Psychology of Persuasion in Every Arena:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600">
                  <div className="icon-container mb-3 mx-auto w-12 h-12">
                    <PsychologyDollar className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">Close Deals</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">3x your sales conversion</div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600">
                  <div className="icon-container mb-3 mx-auto w-12 h-12">
                    <ConversionLightning className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">Raise Funds</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Get VCs fighting to invest</div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600">
                  <div className="icon-container mb-3 mx-auto w-12 h-12">
                    <BrainTarget className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">Land Jobs</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">42% higher salary offers</div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600">
                  <div className="icon-container mb-3 mx-auto w-12 h-12">
                    <PersuasionTarget className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">Get Buy-In</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">94% approval rate</div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600">
                  <div className="icon-container mb-3 mx-auto w-12 h-12">
                    <TrustHandshake className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">Recruit Talent</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">82% response rate</div>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600">
                  <div className="icon-container mb-3 mx-auto w-12 h-12">
                    <MindBridge className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">Win Partners</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Close strategic deals</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/signup" className="btn-primary text-lg">
                Start Your Transformation
              </Link>
              <Link href="/quiz" className="btn-secondary text-lg">
                Take the Quiz
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">25K+</div>
                <div className="text-sm text-gray-400">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">340%</div>
                <div className="text-sm text-gray-400">Avg. Performance Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">30-Day</div>
                <div className="text-sm text-gray-400">Money-Back Guarantee</div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg font-bold">
              <div className="flex items-center text-green-600 bg-green-100 px-6 py-3 rounded-full">
                <span className="text-2xl mr-2">✅</span>
                30-Day Guarantee
              </div>
              <div className="flex items-center text-blue-600 bg-blue-100 px-6 py-3 rounded-full">
                <span className="text-2xl mr-2">⚡</span>
                Instant Access
              </div>
              <div className="flex items-center text-purple-600 bg-purple-100 px-6 py-3 rounded-full">
                <span className="text-2xl mr-2">🏆</span>
                Expert Support
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}