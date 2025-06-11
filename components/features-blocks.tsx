export default function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800 dark:text-slate-100">Experience the Convertify Advantage</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-white" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.46l3.09 6.29L42 29.754l-5 4.874 1.18 6.886z" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
              </svg>
              <h4 className="h4 mb-2 text-center text-slate-800 dark:text-slate-100">Increase Lead Quality</h4>
              <p className="text-lg text-slate-500 dark:text-slate-400 text-center">Attract high-intent prospects with valuable, AI-generated content that solves their problems and builds trust.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-white" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-white" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2 text-center text-slate-800 dark:text-slate-100">Save Time & Resources</h4>
              <p className="text-lg text-slate-500 dark:text-slate-400 text-center">Eliminate manual content creation. Our AI generates high-quality lead magnets in minutes, not weeks.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-white" d="M32 35l-4-4 1.4-1.4 2.6 2.6 5.6-5.6L40 28z" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
              </svg>
              <h4 className="h4 mb-2 text-center text-slate-800 dark:text-slate-100">Boost Conversion Rates</h4>
              <p className="text-lg text-slate-500 dark:text-slate-400 text-center">Capture more leads with professionally designed ebooks and guides that your audience will love.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-white" d="M21 33l2.4-2.4 3.6 3.6 7.2-7.2L36.6 24 24.6 36z" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
              </svg>
              <h4 className="h4 mb-2 text-center text-slate-800 dark:text-slate-100">Establish Authority</h4>
              <p className="text-lg text-slate-500 dark:text-slate-400 text-center">Position your brand as an industry leader with insightful content that educates and engages your audience.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-white" d="M32 22v20M22 32h20" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
              </svg>
              <h4 className="h4 mb-2 text-center text-slate-800 dark:text-slate-100">Scale Your Marketing</h4>
              <p className="text-lg text-slate-500 dark:text-slate-400 text-center">Automate a key part of your funnel, allowing you to focus on strategy and growth, not content creation.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-white" d="M24 32h16M24 37h16M24 42h16" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-white" d="M22 24h20v-4H22z" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2 text-center text-slate-800 dark:text-slate-100">Data-Driven Insights</h4>
              <p className="text-lg text-slate-500 dark:text-slate-400 text-center">Track performance and gather insights on what content resonates most with your audience.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}