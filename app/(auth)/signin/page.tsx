export const metadata = {
  title: 'Sign In | Access Your Sales Training Dashboard',
  description: 'Sign in to continue your sales transformation journey. Access your training modules, resources, and track your progress.',
}

import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/ui/logo'
import PageBG from '@/public/images/sign-in-bg.jpg'
import { TrendingUp, Award, Users, Star } from 'lucide-react'

export default function SignIn() {
  return (
    <div className="flex min-h-screen pt-24">
      {/* Content */}
      <div className="w-full md:w-1/2">

        <div className="min-h-screen h-full flex flex-col justify-center">

          <div className="px-5 sm:px-6 py-8">
            <div className="w-full max-w-sm mx-auto">

              {/* Welcome message */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                  Welcome Back, Champion
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Ready to continue crushing your sales goals?
                </p>
              </div>

              {/* Success badge */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-4 mb-6 border border-green-200 dark:border-green-700">
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Join 25,000+ sales pros already inside
                  </span>
                </div>
              </div>

              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">
                      Email Address
                    </label>
                    <input 
                      id="email" 
                      className="form-input py-3 w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:ring-blue-500" 
                      type="email" 
                      placeholder="you@company.com"
                      required 
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="password">
                        Password
                      </label>
                      <Link className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" href="/reset-password">
                        Forgot password?
                      </Link>
                    </div>
                    <input 
                      id="password" 
                      className="form-input py-3 w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:ring-blue-500" 
                      type="password" 
                      placeholder="••••••••"
                      autoComplete="on" 
                      required 
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <button className="btn w-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 text-lg font-bold shadow-lg transform hover:scale-[1.02] transition-all duration-200">
                    Sign In & Continue Training
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="relative mt-8 mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-gray-900 text-gray-500">New to Convertify?</span>
                </div>
              </div>

              {/* Sign up CTA */}
              <div className="text-center">
                <Link 
                  className="inline-flex items-center justify-center w-full btn text-gray-700 bg-white dark:text-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 py-3 font-semibold" 
                  href="/signup"
                >
                  Start Your Free Trial →
                </Link>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                  No credit card required • 30-day money-back guarantee
                </p>
              </div>

              <div className="text-xs text-gray-500 dark:text-gray-400 text-center mt-8">
                By signing in, you agree to our <Link className="underline hover:no-underline" href="/terms-of-service">Terms</Link> and <Link className="underline hover:no-underline" href="/privacy-policy">Privacy Policy</Link>.
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Right side */}
      <div className="relative hidden md:block md:w-1/2 bg-gradient-to-br from-blue-900 to-purple-900" aria-hidden="true">

        {/* Bg image */}
        <div className="absolute inset-0" data-aos="fade">
          <Image className="opacity-20 w-full h-full object-cover" src={PageBG} width={760} height={900} priority alt="Background" />
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-blue-900/60 to-transparent"></div>

        {/* Content */}
        <div className="relative min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6">
            <div className="w-full max-w-lg mx-auto">
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white mb-1">340%</div>
                  <div className="text-sm text-blue-200">Avg. Performance Increase</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white mb-1">25K+</div>
                  <div className="text-sm text-blue-200">Active Students</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-white mb-4 italic">
                  "I went from dreading sales calls to loving them. The psychological techniques I learned here transformed my entire approach. My income has tripled in 6 months."
                </p>
                <div>
                  <div className="font-semibold text-white">Sarah Chen</div>
                  <div className="text-sm text-blue-300">Enterprise Sales • TechCorp</div>
                </div>
              </div>

              {/* Bottom message */}
              <div className="text-center mt-12">
                <h2 className="text-2xl font-bold text-white mb-3">
                  Your Competition Is Training Right Now
                </h2>
                <p className="text-blue-200">
                  Every day you wait is another day they're getting ahead.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
