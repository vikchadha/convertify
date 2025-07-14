import React from 'react'
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Join 25,000+ Sales Professionals Earning $127K+ More Per Year',
  description: 'Secure your spot in the elite sales training that transforms struggling salespeople into top 1% performers. 76% OFF limited time.',
};

interface SignupPageProps {
  searchParams: Promise<{ plan?: string }>;
}

export default async function SignupPage({ searchParams }: SignupPageProps) {
  const params = await searchParams;
  const selectedPlan = params.plan;
  return (
    <div>
      {/* Urgency header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-2 text-sm font-semibold">
        <span className="animate-pulse">🔥</span> URGENT: Only 7 spots left this month - 76% OFF expires at midnight! 
      </div>
      
      <section className="relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            
            {/* Page header */}
            <div className="max-w-5xl mx-auto text-center pb-12 md:pb-20">
              <div className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-full text-lg font-bold mb-8 shadow-lg animate-pulse">
                <span className="mr-2">⚠️</span>
                FINAL WARNING: 7 Spots Remaining This Month
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
                You're <span className="text-green-600">60 Seconds Away</span>
                <br />
                From <span className="text-yellow-600">10x'ing Your Sales Results</span>
              </h1>
              
              <p className="text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
                Join <strong className="text-green-600">25,000+ sales professionals</strong> who've used these psychology secrets to earn an average of <strong className="text-yellow-600">$127K more per year</strong>. But hurry - I'm limited to 50 new students per month.
              </p>
              
              {/* Social proof counter */}
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🔥 Live Signup Counter</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">43</div>
                    <div className="text-gray-600">Students This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">7</div>
                    <div className="text-gray-600">Spots Remaining</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-600 mb-2">5h 23m</div>
                    <div className="text-gray-600">Until Price Increase</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Left side - Signup form */}
              <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 border-4 border-green-500">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-black text-gray-900 mb-4">
                    🚀 Secure Your Spot - <span className="text-green-600">$47/month</span>
                  </h2>
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl line-through text-red-500">$197</div>
                      <div className="text-xs text-gray-500">Regular Price</div>
                    </div>
                    <div className="text-3xl">→</div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600">$47</div>
                      <div className="text-xs text-gray-700">Limited Time</div>
                    </div>
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                      76% OFF
                    </div>
                  </div>
                </div>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-bold text-gray-900 mb-3">
                      👤 Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg font-bold text-gray-900 mb-3">
                      📧 Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-lg font-bold text-gray-900 mb-3">
                      🔒 Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                      placeholder="Create a secure password"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-lg font-bold text-gray-900 mb-3">
                      🏢 Current Industry
                    </label>
                    <select
                      id="company"
                      name="company"
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                      required
                    >
                      <option value="">Select your industry...</option>
                      <option value="saas">SaaS / Technology</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="insurance">Insurance</option>
                      <option value="automotive">Automotive</option>
                      <option value="financial">Financial Services</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-black text-2xl py-6 px-8 rounded-xl transition duration-200 transform hover:scale-105 shadow-lg border-4 border-green-500"
                  >
                    🚀 YES! Secure My Spot for $47/month
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link href="/signin" className="text-green-600 hover:text-green-700 font-bold underline">
                      Sign in here
                    </Link>
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t-2 border-gray-200">
                  <div className="space-y-3">
                    <p className="flex items-center text-lg font-semibold text-gray-900">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      Instant access to all training modules
                    </p>
                    <p className="flex items-center text-lg font-semibold text-gray-900">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      30-day money-back guarantee
                    </p>
                    <p className="flex items-center text-lg font-semibold text-gray-900">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      Cancel anytime (but you won't want to)
                    </p>
                    <p className="flex items-center text-lg font-semibold text-gray-900">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      Personal access to sales psychology expert
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right side - Value stack */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-8">
                  <h3 className="text-3xl font-bold mb-6 text-center">💎 What You Get Today</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white font-semibold">🎯 Core Psychology Training</span>
                      <span className="text-green-400 font-bold">$497</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white font-semibold">📜 50+ Objection Scripts</span>
                      <span className="text-green-400 font-bold">$97</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white font-semibold">📞 Cold Call Templates</span>
                      <span className="text-green-400 font-bold">$147</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white font-semibold">💰 Negotiation Playbook</span>
                      <span className="text-green-400 font-bold">$197</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white font-semibold">🎤 Weekly Live Coaching</span>
                      <span className="text-green-400 font-bold">$497</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                      <span className="text-white font-semibold">👥 Private Community</span>
                      <span className="text-green-400 font-bold">Priceless</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/20 pt-6">
                    <div className="flex items-center justify-between text-2xl font-bold">
                      <span>Total Value:</span>
                      <span className="text-yellow-400">$1,435/month</span>
                    </div>
                    <div className="text-center mt-4">
                      <div className="text-4xl font-black text-green-400">You Pay: $47/month</div>
                      <div className="text-green-300">That's 97% OFF!</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Fair Warning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This 76% discount ends at midnight tonight. After that, the price goes back to $197/month and there's a waiting list to get in. Don't let this be another "almost" moment in your sales career.
                  </p>
                </div>
                
                <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4">🎯 Success Stories</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600">"</span>
                      <div>
                        <p className="text-green-700 italic">"Went from $45K to $180K in 8 months using these techniques."</p>
                        <p className="text-green-600 font-semibold mt-1">- Sarah M., Real Estate</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600">"</span>
                      <div>
                        <p className="text-green-700 italic">"Finally hit President's Club after 3 years of struggling."</p>
                        <p className="text-green-600 font-semibold mt-1">- Mike C., SaaS Sales</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
} 