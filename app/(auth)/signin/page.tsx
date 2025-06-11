export const metadata = {
  title: 'Sign In - Convertify',
  description: 'Sign in to your Convertify account to access your dashboard.',
}

import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/ui/logo'
import PageBG from '@/public/images/sign-in-bg.jpg'

export default function SignIn() {
  return (
    <>
      {/* Content */}
      <div className="w-full md:w-1/2">

        <div className="min-h-screen h-full flex flex-col justify-center">

          <div className="px-5 sm:px-6 py-8">
            <div className="w-full max-w-sm mx-auto">

              {/* Site branding */}
              <div className="mb-6">
                <Logo />
              </div>

              <h1 className="h2 font-playfair-display text-slate-800 mb-6">Sign in to Convertify</h1>

              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                    <input id="email" className="form-input py-2 w-full" type="email" required />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                      <Link className="text-sm font-medium text-blue-600 hover:underline" href="/reset-password">Forgot?</Link>
                    </div>
                    <input id="password" className="form-input py-2 w-full" type="password" autoComplete="on" required />
                  </div>
                </div>
                <div className="mt-6">
                  <button className="btn w-full text-white bg-blue-600 hover:bg-blue-700">Sign In</button>
                </div>
              </form>

              <div className="text-center mt-5">
                <span className="text-sm text-slate-500">Don't have an account? <Link className="font-medium text-blue-600 hover:underline" href="/signup">Sign up</Link></span>
              </div>

              <div className="text-xs text-slate-500 text-center mt-8">
                By signing in, you agree to our <Link className="underline hover:no-underline" href="/terms-of-service">Terms</Link> and <Link className="underline hover:no-underline" href="/privacy-policy">Privacy Policy</Link>.
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Right side */}
      <div className="relative hidden md:block md:w-1/2 bg-slate-900" aria-hidden="true">

        {/* Bg image */}
        <div className="absolute inset-0" data-aos="fade">
          <Image className="opacity-10 w-full h-full object-cover" src={PageBG} width={760} height={900} priority alt="Background" />
        </div>

        {/* Quote */}
        <div className="min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6">
            <div className="w-full max-w-lg mx-auto">
              <div className="text-center">
                <h2 className="h2 font-playfair-display text-slate-100 mb-4">Welcome Back</h2>
                <p className="text-lg text-slate-400">Sign in to unlock powerful lead generation tools and take your marketing to the next level.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
