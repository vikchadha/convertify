import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'
import CoachingSession from '@/components/ai-coach/CoachingSession'

export const metadata = {
  title: 'AI Coaching Session - Convertify',
  description: 'Practice sales conversations with AI-powered coaching. Get real-time feedback and master the perfect approach for any situation.',
}

export default function AICoachStartPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-4 flex items-center justify-between">
            <Link href="/training/ai-coach" className="flex items-center text-slate-600 hover:text-slate-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to AI Coach
            </Link>
            <div className="flex items-center text-sm">
              <Sparkles className="w-4 h-4 text-amber-500 mr-2" />
              <span className="text-slate-600">AI Coaching Session</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <CoachingSession />
      </div>
    </div>
  )
}