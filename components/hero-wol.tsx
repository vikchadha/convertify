import VideoThumb from '@/public/images/wof-hero.jpg'
import ModalVideo02 from '@/components/modal-video-02'

export default function HeroWol() {  
  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
      {/* Decorative SVG wave at the top */}
      <div className="absolute top-0 left-0 w-full" aria-hidden="true">
        <svg className="w-full h-16" fill="none" viewBox="0 0 1440 64">
          <path fill="#e0e7ff" d="M0,32L1440,64L1440,0L0,0Z" />
        </svg>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          <div className="max-w-3xl mx-auto text-center pb-16">
            <h1 className="h1 font-playfair-display text-gray-900 mb-4">Join 70K+ companies and investors</h1>
            <p className="text-xl text-gray-700">We're proud to have played a part in these amazing journeys.</p>
          </div>
          <ModalVideo02
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />
        </div>
      </div>
    </section>
  )
}