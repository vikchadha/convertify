'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Send, User, Bot, Sparkles, RefreshCw } from 'lucide-react'

type ConversationContext = {
  scenario: string
  role: string
  industry: string
  goal: string
  challenges: string
}

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function CoachingSession() {
  const [step, setStep] = useState(1)
  const [context, setContext] = useState<ConversationContext>({
    scenario: '',
    role: '',
    industry: '',
    goal: '',
    challenges: ''
  })
  const [recommendedFramework, setRecommendedFramework] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const analyzeContext = () => {
    setIsAnalyzing(true)
    // Simulate AI analysis
    setTimeout(() => {
      // Logic to recommend framework based on context
      let framework = 'Consultative Selling'
      
      if (context.scenario.includes('challenge') || context.scenario.includes('disrupt')) {
        framework = 'Challenger Sale'
      } else if (context.scenario.includes('qualify') || context.scenario.includes('budget')) {
        framework = 'Sandler Method'
      } else if (context.scenario.includes('needs') || context.scenario.includes('problem')) {
        framework = 'SPIN Selling'
      } else if (context.goal.includes('relationship') || context.goal.includes('trust')) {
        framework = 'Consultative Selling'
      }
      
      setRecommendedFramework(framework)
      setIsAnalyzing(false)
      setStep(2)
      
      // Add initial coaching message
      setMessages([{
        role: 'assistant',
        content: `Based on your scenario, I recommend using the **${framework}** approach. This framework is ideal because ${getFrameworkReason(framework)}. Let's practice your conversation. Start by introducing yourself and your purpose for the call.`
      }])
    }, 2000)
  }

  const getFrameworkReason = (framework: string) => {
    const reasons: Record<string, string> = {
      'Challenger Sale': 'it helps you teach new insights, tailor your message, and take control of the conversation',
      'Sandler Method': 'it focuses on mutual qualification and prevents wasting time on poor-fit prospects',
      'SPIN Selling': 'it uses strategic questions to uncover needs and build value before presenting solutions',
      'Consultative Selling': 'it builds trust through understanding and positions you as a strategic advisor'
    }
    return reasons[framework] || 'it aligns with your goals'
  }

  const sendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessages = [...messages, { role: 'user' as const, content: inputMessage }]
    setMessages(newMessages)
    setInputMessage('')

    // Simulate AI response
    setTimeout(() => {
      const coachingResponse = generateCoachingResponse(inputMessage, recommendedFramework)
      setMessages([...newMessages, { role: 'assistant' as const, content: coachingResponse }])
    }, 1000)
  }

  const generateCoachingResponse = (userMessage: string, framework: string) => {
    // Simple coaching logic - in production this would use actual AI
    const responses = [
      `Good start! In ${framework}, try to focus more on asking open-ended questions. For example, instead of telling, try asking "What challenges are you facing with..."`,
      `I notice you're presenting features. Remember, in ${framework}, we want to uncover pain points first. Try asking about their current situation.`,
      `Excellent use of a probing question! Now follow up with an implication question to help them feel the urgency of solving this problem.`,
      `That's better! You're building rapport well. Next, try to quantify the impact of their challenge. Ask something like "How much is this costing you?"`,
      `Great job handling that objection! In ${framework}, always acknowledge their concern before reframing. You did that perfectly.`
    ]
    
    return responses[Math.floor(Math.random() * responses.length)]
  }

  return (
    <>
      {step === 1 ? (
        // Context Setup
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="h3 font-playfair-display mb-2">Let's Set Up Your Coaching Session</h2>
          <p className="text-slate-600 mb-8">
            Tell me about the conversation you want to practice. I'll recommend the best approach and help you master it.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">What type of conversation?</label>
              <select 
                className="form-select w-full"
                value={context.scenario}
                onChange={(e) => setContext({...context, scenario: e.target.value})}
              >
                <option value="">Select scenario...</option>
                <option value="cold-call">Cold Call</option>
                <option value="discovery">Discovery Call</option>
                <option value="demo">Product Demo</option>
                <option value="negotiation">Price Negotiation</option>
                <option value="objection">Objection Handling</option>
                <option value="closing">Closing Call</option>
                <option value="fundraising">Fundraising Pitch</option>
                <option value="interview">Job Interview</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your role</label>
              <input 
                type="text"
                className="form-input w-full"
                placeholder="e.g., Account Executive, Founder, Job Seeker"
                value={context.role}
                onChange={(e) => setContext({...context, role: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Industry/Context</label>
              <input 
                type="text"
                className="form-input w-full"
                placeholder="e.g., B2B SaaS, Healthcare, Financial Services"
                value={context.industry}
                onChange={(e) => setContext({...context, industry: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your goal for this conversation</label>
              <textarea 
                className="form-textarea w-full"
                rows={3}
                placeholder="e.g., Book a demo, qualify the prospect, negotiate better terms..."
                value={context.goal}
                onChange={(e) => setContext({...context, goal: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Specific challenges or concerns</label>
              <textarea 
                className="form-textarea w-full"
                rows={3}
                placeholder="e.g., They're happy with current solution, limited budget, multiple stakeholders..."
                value={context.challenges}
                onChange={(e) => setContext({...context, challenges: e.target.value})}
              />
            </div>
          </div>

          <div className="mt-8">
            <button 
              className="btn text-white bg-slate-800 hover:bg-slate-900 w-full group disabled:opacity-50"
              onClick={analyzeContext}
              disabled={!context.scenario || !context.role || !context.goal || isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin mr-2 inline" />
                  Analyzing your scenario...
                </>
              ) : (
                <>
                  Get AI Recommendation 
                  <ArrowRight className="w-3 h-3 tracking-normal text-slate-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 inline" />
                </>
              )}
            </button>
          </div>
        </div>
      ) : (
        // Coaching Session
        <div className="bg-white rounded-lg shadow-sm h-[calc(100vh-200px)] flex flex-col">
          {/* Framework Banner */}
          <div className="bg-blue-50 border-b border-blue-100 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-blue-900">Recommended Framework: {recommendedFramework}</h3>
                <p className="text-sm text-blue-700 mt-1">
                  {context.scenario} • {context.role} • Goal: {context.goal}
                </p>
              </div>
              <button 
                onClick={() => setStep(1)}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Change scenario
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-md ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 ${message.role === 'user' ? 'ml-3' : 'mr-3'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === 'user' ? 'bg-slate-800' : 'bg-blue-600'
                    }`}>
                      {message.role === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-slate-800 text-white' 
                      : 'bg-gray-100 text-slate-800'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex space-x-4">
              <input
                type="text"
                className="form-input flex-1"
                placeholder="Type your response..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="btn text-white bg-blue-600 hover:bg-blue-700"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Tip: Practice your actual words. The AI will give you feedback on your approach, tone, and psychology.
            </p>
          </div>
        </div>
      )}
    </>
  )
}