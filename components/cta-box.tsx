import Image from 'next/image'
import CtaImage from '@/public/images/cta-image.png'

export default function CtaBox() {  
  return (
    <div data-aos="fade-up">
      <div className="relative bg-slate-900 rounded-xs py-10 px-8 md:p-10 md:mt-24">

        {/* Background illustration */}
        <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
          <Image src={CtaImage} width={451} height={337} alt="Free trial" />
        </div>

        <div className="relative flex flex-col lg:flex-row justify-between items-center">

          {/* CTA content */}
          <div className="text-center lg:text-left lg:max-w-xl">
            <h3 className="h3 font-playfair-display text-slate-100 mb-4">Ready to Turn Your Content Ideas Into <span className="text-emerald-500">Lead Magnets That Convert</span>?</h3>
            <p className="text-lg text-slate-400 mb-8">Stop spending hours on manual lead magnet creation. With Convertify's AI, you can generate high-converting ebooks, guides, and checklists in minutes. Start capturing more leads today!</p>
            <div className="mb-3">
              <a className="btn text-white bg-blue-600 hover:bg-blue-700 group" href="/signup">
                Start Free Trial <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </a>
            </div>
            <div className="text-sm italic text-slate-500">No credit card required. Cancel anytime!</div>
          </div>

        </div>

      </div>
    </div>
  )
}