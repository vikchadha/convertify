import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lead Magnet Templates | Convertify',
  description: 'Browse our library of professionally designed lead magnet templates. Choose from ebooks, checklists, guides, and more to get started in seconds.',
}

export default function Templates() {
  return (
    <section className="relative bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-playfair-display text-white">Templates Coming Soon</h1>
            <p className="text-xl text-gray-400 mt-4">A rich library of professionally designed templates is on the way. You'll soon be able to create stunning ebooks, checklists, and guides in just a few clicks.</p>
            <p className="text-xl text-gray-400 mt-8">Stay tuned for templates that will help you capture leads effortlessly.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
