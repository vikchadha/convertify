import Link from 'next/link'
import Logo from '@/components/ui/logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200 dark:border-gray-700">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p className="mb-4">Convertify is an AI-powered platform that automates lead magnet creation, helping you capture more leads with less effort.</p>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 dark:text-gray-100 font-medium mb-2">Product</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out">How It Works</Link>
              </li>
              <li className="mb-2">
                <Link href="/#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out">Features</Link>
              </li>
              <li className="mb-2">
                <Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link href="/integrations" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out">Integrations</Link>
              </li>
              <li className="mb-2">
                <Link href="/request-demo" className="text-blue-600 hover:text-blue-700 font-medium transition duration-150 ease-in-out">Request a Demo</Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 dark:text-gray-100 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/careers" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out">Careers</Link>
              </li>

              <li className="mb-2">
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 dark:text-gray-100 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out">Blog</Link>
              </li>

              <li className="mb-2">
                <Link href="/templates" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out">Templates</Link>
              </li>

            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 dark:text-gray-100 font-medium mb-2">Legal</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/terms-of-service" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out">Terms of Service</Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy-policy" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link href="/cookie-policy" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out">Cookie Policy</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200 dark:border-gray-700">

          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link href="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 dark:text-gray-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5 1 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 dark:text-gray-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-4h3v-2.7c0-3.2 1.9-5 4.8-5 1.4 0 2.6.1 3 .2v3.4h-2c-1.5 0-1.8.7-1.8 1.8V13h3.9l-.5 4h-3.4v7z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 dark:text-gray-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full shadow transition duration-150 ease-in-out" aria-label="LinkedIn">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-700 dark:text-gray-400 mr-4">&copy; 2024 Convertify. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
