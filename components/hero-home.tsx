import Link from 'next/link'
import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo01 from '@/components/modal-video-01'

export default function HeroHome() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Floating conversion icons */}
      <div className="absolute top-20 right-20 animate-bounce delay-300">
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">📈</span>
        </div>
      </div>
      <div className="absolute top-40 left-20 animate-bounce delay-700">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold">✨</span>
        </div>
      </div>
      <div className="absolute bottom-40 right-32 animate-bounce delay-500">
        <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xl">🎯</span>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">
            <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
              {/* Attention-grabbing badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg animate-pulse">
                <span className="mr-2">🚀</span>
                Transform Your Business in Minutes, Not Months
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-playfair-display text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 mb-6 leading-tight">
                Stop Losing Money.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  Start Converting.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                <strong className="text-gray-900">97% of your visitors leave without buying.</strong> 
                <br />
                Convertify's AI creates irresistible lead magnets that turn those visitors into eager customers—automatically.
              </p>

              {/* Social proof mini-section */}
              <div className="flex items-center justify-center md:justify-start space-x-6 mb-8">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">JD</div>
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">SM</div>
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">AL</div>
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">+99</div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">Join 2,847+ businesses</div>
                  <div className="text-xs">already converting more leads</div>
                </div>
              </div>

              <div className="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link className="btn text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full group shadow-xl transform hover:scale-105 transition-all duration-200 text-lg py-4 px-8" href="/signup">
                    <span className="flex items-center">
                      🎯 Start Converting Now
                      <span className="tracking-normal text-blue-200 group-hover:translate-x-1 transition-transform duration-150 ease-in-out ml-2">→</span>
                    </span>
                  </Link>
                  <p className="text-xs text-gray-500 mt-2 text-center">Free 14-day trial • No credit card required</p>
                </div>
                <div>
                  <Link className="btn text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 w-full shadow-lg transform hover:scale-105 transition-all duration-200 text-lg py-4 px-8" href="/how-it-works">
                    <span className="flex items-center">
                      📹 Watch 2-Min Demo
                    </span>
                  </Link>
                </div>
              </div>

              {/* Trust signals */}
              <div className="flex items-center justify-center md:justify-start space-x-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="text-green-500 mr-1">✓</span>
                  Setup in 5 minutes
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-1">✓</span>
                  No technical skills needed
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-1">✓</span>
                  Cancel anytime
                </div>
              </div>
            </div>
            <ModalVideo01
              thumb={VideoThumb}
              thumbWidth={540}
              thumbHeight={405}
              thumbAlt="Video thumbnail for Convertify's AI platform"
              video="/videos/video.mp4"
              videoWidth={1920}
              videoHeight={1080} />            
          </div>
        </div>
      </div>
    </section>
  )
}