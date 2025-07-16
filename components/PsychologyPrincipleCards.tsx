'use client'

import { useState } from 'react'
import BrainTarget from './icons/BrainTarget'
import InfluenceWaves from './icons/InfluenceWaves'
import MindBridge from './icons/MindBridge'
import TrustHandshake from './icons/TrustHandshake'
import PersuasionTarget from './icons/PersuasionTarget'
import ConversionFlow from './icons/ConversionFlow'

interface Principle {
  id: string
  title: string
  icon: React.ElementType
  description: string
  example: string
  application: string
  gradient: string
}

const principles: Principle[] = [
  {
    id: 'reciprocity',
    title: 'Reciprocity',
    icon: TrustHandshake,
    description: 'People feel obligated to return favors and kindness.',
    example: 'When you provide value upfront (free consultation, helpful content), prospects feel naturally inclined to reciprocate by considering your offer.',
    application: 'Start every interaction by giving something valuable - insights, tools, or genuine help.',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    id: 'social-proof',
    title: 'Social Proof',
    icon: InfluenceWaves,
    description: 'People look to others\' actions to guide their own decisions.',
    example: '"Join 25,000+ professionals" is more powerful than "Sign up now" because it shows others have already made this choice.',
    application: 'Always showcase numbers, testimonials, and peer success stories in your presentations.',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id: 'authority',
    title: 'Authority',
    icon: BrainTarget,
    description: 'People defer to experts and credible sources.',
    example: 'Mentioning your certifications, years of experience, or notable clients immediately increases your persuasive power.',
    application: 'Lead with credentials, showcase expertise through insights, and demonstrate deep knowledge.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'commitment',
    title: 'Commitment & Consistency',
    icon: PersuasionTarget,
    description: 'People align their actions with their previous commitments.',
    example: 'Getting a small "yes" first (like agreeing to a 15-minute call) makes bigger commitments more likely later.',
    application: 'Start with micro-commitments and build up. Get verbal agreements before asking for decisions.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'liking',
    title: 'Liking',
    icon: MindBridge,
    description: 'People say yes to those they know, like, and trust.',
    example: 'Finding common ground ("I see you went to Stanford, me too!") creates instant connection and openness.',
    application: 'Research prospects beforehand, find similarities, and build genuine rapport before pitching.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'scarcity',
    title: 'Scarcity',
    icon: ConversionFlow,
    description: 'People value things more when they\'re limited or exclusive.',
    example: '"Only 3 spots left this month" creates urgency without being pushy when it\'s genuinely true.',
    application: 'Highlight genuine scarcity - limited time, spots, or exclusive access. Never fabricate urgency.',
    gradient: 'from-red-500 to-orange-500'
  }
]

export default function PsychologyPrincipleCards() {
  const [selectedPrinciple, setSelectedPrinciple] = useState<string | null>(null)
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set())

  const handleCardClick = (principleId: string) => {
    if (selectedPrinciple === principleId) {
      setSelectedPrinciple(null)
    } else {
      setSelectedPrinciple(principleId)
    }
    
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(principleId)) {
        newSet.delete(principleId)
      } else {
        newSet.add(principleId)
      }
      return newSet
    })
  }

  return (
    <div className="py-12">
      <div className="text-center mb-12 max-w-4xl mx-auto px-4">
        <h2 className="h2 font-playfair-display mb-4 text-gray-900 dark:text-white">
          Master the 6 Core <span className="text-primary-gradient">Psychology Principles</span>
        </h2>
        <p className="body-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Click each card to discover how to apply these powerful principles in your interactions
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {principles.map((principle) => {
          const Icon = principle.icon
          const isFlipped = flippedCards.has(principle.id)
          const isSelected = selectedPrinciple === principle.id

          return (
            <div
              key={principle.id}
              className="relative h-64 cursor-pointer perspective-1000"
              onClick={() => handleCardClick(principle.id)}
            >
              <div className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front of card */}
                <div className={`absolute inset-0 backface-hidden rounded-xl shadow-lg overflow-hidden card-base ${isSelected ? 'ring-2 ring-blue-500' : ''}`}>
                  <div className="h-full p-6 flex flex-col items-center justify-center text-center">
                    <div className="icon-container mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{principle.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{principle.description}</p>
                    <div className="mt-4 text-sm font-medium text-primary-gradient">
                      Click to learn more →
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-xl shadow-lg overflow-hidden card-base ${isSelected ? 'ring-2 ring-blue-500' : ''}`}>
                  <div className="h-full p-6 flex flex-col">
                    <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white flex items-center">
                      <Icon className="w-5 h-5 mr-2 text-primary-gradient" />
                      Real Example
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                      {principle.example}
                    </p>
                    <div className="border-t pt-3">
                      <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                        💡 {principle.application}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {selectedPrinciple && (
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-psychology-gradient p-1 rounded-xl">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Ready to Master {principles.find(p => p.id === selectedPrinciple)?.title}?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                This principle alone can transform your results. Our comprehensive training shows you exactly how to apply it in sales, negotiations, interviews, and more.
              </p>
              <button className="btn bg-psychology-gradient text-white hover:opacity-90 px-8 py-3">
                Unlock Full Psychology Training →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}