export default function HeroBlog() {  
  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
      {/* Decorative SVG wave at the top */}
      <div className="absolute top-0 left-0 w-full" aria-hidden="true">
        <svg className="w-full h-16" fill="none" viewBox="0 0 1440 64">
          <path fill="#e0e7ff" d="M0,32L1440,64L1440,0L0,0Z" />
        </svg>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-playfair-display text-gray-900 mb-4">The Convertify Blog: Grow Your Leads, Smarter</h1>
            <p className="text-xl text-gray-700">Expert tips, strategies, and insights on lead generation, content marketing, conversion optimization, and using AI to grow your business.</p>
          </div>
        </div>
      </div>
    </section>
  )
}