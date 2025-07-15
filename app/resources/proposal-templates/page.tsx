export const metadata = {
  title: 'Proposal Template Library | Win More Deals',
  description: 'Get winning proposal templates for different industries with built-in psychological triggers that increase acceptance rates by 47%.',
  alternates: {
    canonical: 'https://convertify.com/resources/proposal-templates',
  },
}

import Link from 'next/link';
import { ArrowLeft, FileText, Download, Clock, Users, TrendingUp, Award, Zap, CheckCircle } from 'lucide-react';

export default function ProposalTemplatesPage() {
  return (
    <section className="relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-600 to-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Link href="/resources" className="inline-flex items-center text-green-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                12 TEMPLATES
              </span>
              <span className="bg-green-500/30 text-white px-4 py-1 rounded-full text-sm">
                Industry-Specific
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Proposal Templates That Win 78% of Deals
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Stop losing deals to better-looking proposals. Get professionally designed templates with psychological triggers that make saying yes the obvious choice.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-300" />
                <span>12 industry templates</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-300" />
                <span>78% win rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-green-300" />
                <span>$2.3M in closed deals</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="/signup" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Get All Templates - $47/month
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Templates Available for Every Industry</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Each template includes psychological triggers, pricing tables, and case studies specific to your industry.
            </p>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Stop Losing Deals to Prettier Proposals
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Get instant access to all 12 proposal templates, plus our complete library of sales resources.
              </p>
              <Link 
                href="/signup" 
                className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors"
              >
                Get Template Access - $47/month
              </Link>
              <p className="mt-4 text-green-200">
                30-day money-back guarantee • Instant download
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}