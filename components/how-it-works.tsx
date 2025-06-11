export default function HowItWorks() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-800 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">Unlock Lead Magnets in 3 Simple Steps</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Transform your content strategy and capture more leads effortlessly with Convertify's AI-powered platform.</p>
        </div>

        {/* Items */}
        <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">

          {/* 1st item */}
          <div className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold text-lg">1</div>
            </div>
            <svg className="w-16 h-16 p-1 -mt-1 mb-2 text-blue-500" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><rect className="fill-current text-blue-600 opacity-20 dark:opacity-30" width="64" height="64" rx="32"/><path className="stroke-current text-blue-500 dark:text-blue-400" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z"/><path className="stroke-current text-blue-500 dark:text-blue-400" strokeWidth="2" strokeLinecap="square" d="M26 28h12M26 32h12M26 36h5"/></g></svg>
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-gray-900 dark:text-white">Input Your Content</h4>
            <p className="text-gray-600 dark:text-gray-400 text-center">Provide a topic, existing blog post, URL, or raw text. Our AI understands your core message.</p>
          </div>

          {/* 2nd item */}
          <div className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold text-lg">2</div>
            </div>
            <svg className="w-16 h-16 p-1 -mt-1 mb-2 text-blue-500" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><rect className="fill-current text-blue-600 opacity-20 dark:opacity-30" width="64" height="64" rx="32"/><g strokeWidth="2"><path className="stroke-current text-blue-500 dark:text-blue-400" d="M32 37.714A5.714 5.714 0 0037.714 32H40v5.714a8 8 0 00-8-8V24"/><path className="stroke-current text-blue-500 dark:text-blue-400" d="M31.429 32h4.571M32 31.429v4.571"/><path className="stroke-current text-blue-500 dark:text-blue-400" d="M32 24.286A5.714 5.714 0 0026.286 30H24v-5.714a8 8 0 008 8V40"/><path className="stroke-current text-blue-500 dark:text-blue-400" d="M34.286 26.286H32v-2.286h2.286V24H32v10.286"/><path className="stroke-current text-blue-500 dark:text-blue-400" d="M29.714 37.714H32v2.286h-2.286V40H32V29.714"/></g></g></svg>
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-gray-900 dark:text-white">AI Generates & Designs</h4>
            <p className="text-gray-600 dark:text-gray-400 text-center">Convertify's AI crafts compelling content and applies professional design, delivering <strong>instant lead magnets</strong> like ebooks, guides, or checklists.</p>
          </div>

          {/* 3rd item */}
          <div className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold text-lg">3</div>
            </div>
            <svg className="w-16 h-16 p-1 -mt-1 mb-2 text-blue-500" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><rect className="fill-current text-blue-600 opacity-20 dark:opacity-30" width="64" height="64" rx="32"/><path className="stroke-current text-blue-500 dark:text-blue-400" strokeWidth="2" strokeLinecap="square" d="M34.516 39.111V24.889c0-.828.672-1.5 1.5-1.5h5.032c.828 0 1.5.672 1.5 1.5v14.222M22.95 39.111V24.889c0-.828.672-1.5 1.5-1.5H29.5c.828 0 1.5.672 1.5 1.5v14.222M18 39.111V24.889c0-.828.672-1.5 1.5-1.5h.032c.828 0 1.5.672 1.5 1.5v14.222"/></g></svg>
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-gray-900 dark:text-white">Launch & Convert</h4>
            <p className="text-gray-600 dark:text-gray-400 text-center">Download your ready-to-use lead magnet. Integrate with your marketing tools and start capturing high-quality leads.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
