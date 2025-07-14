'use client'

import { useState } from 'react'
import BrainTarget from './icons/BrainTarget'
import InfluenceWaves from './icons/InfluenceWaves'
import MindBridge from './icons/MindBridge'
import TrustHandshake from './icons/TrustHandshake'

interface QuizOption {
  text: string
  style: 'logical' | 'emotional' | 'social' | 'authoritative'
}

interface QuizQuestion {
  question: string
  options: QuizOption[]
}

const questions: QuizQuestion[] = [
  {
    question: "When convincing someone, you usually start with:",
    options: [
      { text: "Facts, data, and logical arguments", style: "logical" },
      { text: "A story that connects emotionally", style: "emotional" },
      { text: "What others in their position have done", style: "social" },
      { text: "Your expertise and proven track record", style: "authoritative" }
    ]
  },
  {
    question: "Your ideal client appreciates when you:",
    options: [
      { text: "Show them ROI calculations and metrics", style: "logical" },
      { text: "Understand their personal goals and dreams", style: "emotional" },
      { text: "Share testimonials and peer success stories", style: "social" },
      { text: "Demonstrate deep industry knowledge", style: "authoritative" }
    ]
  },
  {
    question: "In negotiations, you're most comfortable:",
    options: [
      { text: "Breaking down the numbers and benefits", style: "logical" },
      { text: "Building rapport and finding common ground", style: "emotional" },
      { text: "Highlighting what competitors are doing", style: "social" },
      { text: "Leading with confidence and clear direction", style: "authoritative" }
    ]
  },
  {
    question: "Your strongest persuasion tool is:",
    options: [
      { text: "Analytical frameworks and processes", style: "logical" },
      { text: "Genuine empathy and understanding", style: "emotional" },
      { text: "Social proof and community validation", style: "social" },
      { text: "Commanding presence and expertise", style: "authoritative" }
    ]
  }
]

const styleResults = {
  logical: {
    title: "The Analytical Influencer",
    icon: BrainTarget,
    description: "You excel at using data, logic, and systematic thinking to persuade others. Your strength lies in presenting clear, fact-based arguments that appeal to rational decision-making.",
    strengths: ["Data-driven presentations", "ROI calculations", "Process optimization", "Strategic planning"],
    tips: "While logic is powerful, remember to connect emotionally with your audience to maximize impact."
  },
  emotional: {
    title: "The Empathetic Connector",
    icon: TrustHandshake,
    description: "You naturally build deep connections and trust through emotional intelligence. Your ability to understand and relate to others' feelings makes you incredibly persuasive.",
    strengths: ["Building rapport", "Storytelling", "Creating trust", "Understanding motivations"],
    tips: "Balance your emotional approach with concrete data points to appeal to analytical decision-makers."
  },
  social: {
    title: "The Social Catalyst",
    icon: InfluenceWaves,
    description: "You leverage social dynamics and peer influence masterfully. Your understanding of group behavior and social proof makes you highly effective at creating momentum.",
    strengths: ["Social proof", "Community building", "Trend identification", "Network effects"],
    tips: "Complement your social approach with personal authority to stand out as a leader, not just a follower."
  },
  authoritative: {
    title: "The Commanding Expert",
    icon: MindBridge,
    description: "You lead with confidence and expertise, naturally commanding respect and attention. Your authoritative presence makes others look to you for guidance and decisions.",
    strengths: ["Leadership presence", "Expert positioning", "Decisive action", "Clear direction"],
    tips: "Soften your approach occasionally with empathy to ensure you're bringing people along, not just directing them."
  }
}

export default function InfluenceStyleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)

  const handleAnswer = (style: string) => {
    const newAnswers = [...answers, style]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const calculateResult = () => {
    const styleCounts = answers.reduce((acc, style) => {
      acc[style] = (acc[style] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return Object.entries(styleCounts).reduce((a, b) => 
      styleCounts[a[0]] > styleCounts[b[0]] ? a : b
    )[0] as keyof typeof styleResults
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setQuizStarted(false)
  }

  if (!quizStarted) {
    return (
      <div className="card-base p-8 text-center">
          <InfluenceWaves className="w-16 h-16 mx-auto mb-6 text-purple-600" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Discover Your Influence Style
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Take this 2-minute quiz to uncover your natural persuasion strengths and get personalized strategies to maximize your influence.
          </p>
          <button
            onClick={() => setQuizStarted(true)}
            className="btn-primary"
          >
            Start Quiz →
          </button>
      </div>
    )
  }

  if (showResult) {
    const result = calculateResult()
    const { title, icon: Icon, description, strengths, tips } = styleResults[result]

    return (
      <div className="bg-psychology-gradient p-1 rounded-2xl">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8">
          <div className="text-center mb-8">
            <Icon className="w-20 h-20 mx-auto mb-4 text-purple-600" />
            <h3 className="text-3xl font-bold mb-2 text-psychology-gradient">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Your Strengths:</h4>
              <ul className="space-y-2">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="text-green-500 mr-2">✓</span> {strength}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Pro Tip:</h4>
              <p className="text-gray-700 dark:text-gray-300">{tips}</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={resetQuiz}
              className="btn bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 px-6 py-2 mr-4"
            >
              Retake Quiz
            </button>
            <button
              className="btn bg-psychology-gradient text-white hover:opacity-90 px-6 py-2"
            >
              Get Your Full Report →
            </button>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="bg-psychology-gradient p-1 rounded-2xl">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8">
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-psychology-gradient h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.style)}
              className="w-full text-left p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-200 hover:shadow-md psychology-card"
            >
              <span className="text-gray-700 dark:text-gray-300">{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}