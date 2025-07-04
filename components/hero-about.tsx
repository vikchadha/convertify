import Image from 'next/image'
import HeroImage from '@/public/images/about-hero.jpg'
import IntroImage from '@/public/images/about-intro.jpg'

export default function HeroAbout() {  
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
            <h1 className="h1 font-playfair-display text-gray-900">We're designing a new way to do business</h1>
          </div>
          <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="100">
            <Image className="mx-auto" src={IntroImage} width={1024} height={576} priority alt="About intro" />
          </div>
        </div>
      </div>
    </section>
  )
}