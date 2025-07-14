import Link from 'next/link'
import Logo from '@/components/ui/logo'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Newsletter CTA */}
      <div className="bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Master the Psychology of Getting What You Want
          </h3>
          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            Join 25,000+ professionals winning in every conversation that matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Link href="/signup" className="btn bg-white text-slate-800 hover:bg-slate-100 font-semibold text-lg py-4 px-8 rounded-lg transition-all duration-200 w-full sm:w-auto">
              Start Your Training - $47/month
            </Link>
          </div>
          <p className="text-sm text-slate-400 mt-3">30-day guarantee • Cancel anytime</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-12 md:py-16">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4">
            <div className="mb-4">
              <Logo forceLightMode={true} />
            </div>
            <div className="text-slate-400 mb-6">
              <p className="mb-4">Convertify teaches the psychology of persuasion to professionals who need to influence, convince, and win in any conversation.</p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <span className="text-slate-500 mr-2">✓</span>
                  <span>25,000+ Members</span>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-500 mr-2">✓</span>
                  <span>94% Success Rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd block - Training */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-semibold mb-3">Training Programs</h6>
            <ul className="text-sm text-slate-400">
              <li className="mb-2">
                <Link href="/training/sales-psychology" className="hover:text-slate-200 transition duration-150 ease-in-out">Sales Psychology</Link>
              </li>
              <li className="mb-2">
                <Link href="/training/fundraising-psychology" className="hover:text-slate-200 transition duration-150 ease-in-out">Fundraising Psychology</Link>
              </li>
              <li className="mb-2">
                <Link href="/training/interview-psychology" className="hover:text-slate-200 transition duration-150 ease-in-out">Interview Psychology</Link>
              </li>
              <li className="mb-2">
                <Link href="/training/internal-influence" className="hover:text-slate-200 transition duration-150 ease-in-out">Internal Influence</Link>
              </li>
              <li className="mb-2">
                <Link href="/pricing" className="text-blue-400 hover:text-blue-300 transition duration-150 ease-in-out">View All Programs</Link>
              </li>
            </ul>
          </div>

          {/* 3rd block - Success Stories */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-semibold mb-3">Success Stories</h6>
            <ul className="text-sm text-slate-400">
              <li className="mb-2">
                <Link href="/success-stories/startup-founder" className="hover:text-slate-200 transition duration-150 ease-in-out">Startup Founder</Link>
              </li>
              <li className="mb-2">
                <Link href="/success-stories/executive-job-search" className="hover:text-slate-200 transition duration-150 ease-in-out">Executive Job Search</Link>
              </li>
              <li className="mb-2">
                <Link href="/success-stories/corporate-innovator" className="hover:text-slate-200 transition duration-150 ease-in-out">Corporate Innovator</Link>
              </li>
              <li className="mb-2">
                <Link href="/success-stories" className="text-blue-400 hover:text-blue-300 transition duration-150 ease-in-out">View All Stories</Link>
              </li>
            </ul>
          </div>

          {/* 4th block - Free Resources */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-semibold mb-3">Free Resources</h6>
            <ul className="text-sm text-slate-400">
              <li className="mb-2">
                <Link href="/resources/pitch-deck-psychology" className="hover:text-slate-200 transition duration-150 ease-in-out">Pitch Deck Templates</Link>
              </li>
              <li className="mb-2">
                <Link href="/resources/interview-scripts" className="hover:text-slate-200 transition duration-150 ease-in-out">Interview Scripts</Link>
              </li>
              <li className="mb-2">
                <Link href="/resources/budget-approval-templates" className="hover:text-slate-200 transition duration-150 ease-in-out">Budget Templates</Link>
              </li>
              <li className="mb-2">
                <Link href="/resources" className="text-blue-400 hover:text-blue-300 transition duration-150 ease-in-out">View All Resources</Link>
              </li>
            </ul>
          </div>

          {/* 5th block - Company */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-semibold mb-3">Company</h6>
            <ul className="text-sm text-slate-400">
              <li className="mb-2">
                <Link href="/about" className="hover:text-slate-200 transition duration-150 ease-in-out">About</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-slate-200 transition duration-150 ease-in-out">Contact</Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="hover:text-slate-200 transition duration-150 ease-in-out">Blog</Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy-policy" className="hover:text-slate-200 transition duration-150 ease-in-out">Privacy Policy</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-6 border-t border-slate-700">
          {/* Copyrights note */}
          <div className="text-sm text-slate-400 mb-4 md:mb-0">
            &copy; 2024 Convertify. All rights reserved.
          </div>

          {/* Social links */}
          <ul className="flex">
            <li>
              <Link href="#" className="flex justify-center items-center text-slate-400 hover:text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-full p-2 transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5 1 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-3">
              <Link href="#" className="flex justify-center items-center text-slate-400 hover:text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-full p-2 transition duration-150 ease-in-out" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                </svg>
              </Link>
            </li>
            <li className="ml-3">
              <Link href="#" className="flex justify-center items-center text-slate-400 hover:text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-full p-2 transition duration-150 ease-in-out" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.681 9.6c0 0-.312-2.2-1.269-3.169-.214-.214-.452-.417-.72-.574C27.835 5.05 16 5.05 16 5.05s-11.835 0-13.692.807c-.268.157-.506.36-.72.574C.631 7.4.319 9.6.319 9.6S0 12.25 0 14.9v2.4c0 2.65.319 5.3.319 5.3s.312 2.2 1.269 3.169c.214.214.452.417.72.574C4.165 26.95 16 26.95 16 26.95s11.835 0 13.692-.807c.268-.157.506-.36.72-.574.957-.969 1.269-3.169 1.269-3.169S32 19.95 32 17.3v-2.4c0-2.65-.319-5.3-.319-5.3zM12.8 20.1v-8.4l9.1 4.2-9.1 4.2z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
