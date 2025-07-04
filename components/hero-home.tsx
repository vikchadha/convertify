import Link from 'next/link'
import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo01 from '@/components/modal-video-01'

export default function HeroHome() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
      {/* Decorative SVG wave at the top */}
      <div className="absolute top-0 left-0 w-full" aria-hidden="true">
        <svg className="w-full h-16" fill="none" viewBox="0 0 1440 64">
          <path fill="#e0e7ff" d="M0,32L1440,64L1440,0L0,0Z" />
        </svg>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">
            <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
              <h1 className="h1 font-playfair-display text-gray-900 mb-4">Turn Visitors into Leads Instantly</h1>
              <p className="text-xl text-gray-700 mb-8">Empower your small business with AI-driven lead magnets tailored to captivate your audience and boost conversions.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group" href="/signup">
                    Start Your Free Trial <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </div>
                <div>
                  <Link className="btn text-white bg-slate-700 hover:bg-slate-800 w-full" href="/how-it-works">See How It Works</Link>
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