import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Integrations | Convertify',
  description: 'Connect Convertify with your favorite marketing tools. Automate your workflow and sync leads seamlessly across your entire stack.',
}

export default function Integrations() {
  return (
    <section className="relative bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-playfair-display text-white">Integrations Coming Soon</h1>
            <p className="text-xl text-gray-400 mt-4">We are working hard to bring you seamless integrations with the marketing tools you know and love. Connect Convertify to your CRM, email marketing platform, and more to automate your lead generation workflow.</p>
            <p className="text-xl text-gray-400 mt-8">Sign up for our newsletter to be the first to know when new integrations are available.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
